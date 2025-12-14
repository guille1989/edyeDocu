import React from "react";
import { supabase } from "../lib/supabaseClient";

const isBrowser = typeof window !== "undefined";

export default function Root({ children }) {
  const [sessionEmail, setSessionEmail] = React.useState(null);
  const [loading, setLoading] = React.useState(isBrowser);
  const [email, setEmail] = React.useState("");
  const [password, setPassword] = React.useState("");
  const [error, setError] = React.useState("");
  const logoutButtonRef = React.useRef(null);

  React.useEffect(() => {
    if (!isBrowser) return;
    const storedEmail = window.localStorage.getItem("docsSessionEmail");
    if (storedEmail) {
      setSessionEmail(storedEmail);
    }
    setLoading(false);
  }, []);

  const signInWithTable = async (e) => {
    e.preventDefault();
    if (!isBrowser) return;
    setError("");
    setLoading(true);

    const { data, error: queryError } = await supabase
      .from("users_edyes_docus")
      .select("email")
      .eq("email", email)
      .eq("password", password)
      .single();

    setLoading(false);

    if (queryError || !data) {
      setError("Credenciales no validas");
      return;
    }

    setSessionEmail(data.email);
    window.localStorage.setItem("docsSessionEmail", data.email);
  };

  const signOut = () => {
    if (!isBrowser) return;
    window.localStorage.removeItem("docsSessionEmail");
    setSessionEmail(null);
    setEmail("");
    setPassword("");
  };

  React.useEffect(() => {
    if (!isBrowser) return;

    const removeBtn = () => {
      if (logoutButtonRef.current) {
        logoutButtonRef.current.remove();
        logoutButtonRef.current = null;
      }
    };

    if (!sessionEmail) {
      removeBtn();
      return;
    }

    const ensureButton = () => {
      const navbarRight = document.querySelector(".navbar__items--right");
      if (!navbarRight) return;
      if (!logoutButtonRef.current) {
        const btn = document.createElement("button");
        btn.type = "button";
        btn.textContent = "Cerrar sesion";
        btn.style.padding = "8px 12px";
        btn.style.borderRadius = "8px";
        btn.style.border = "1px solid #e5e7eb";
        btn.style.background = "#fff";
        btn.style.cursor = "pointer";
        btn.style.fontWeight = "600";
        btn.style.marginLeft = "8px";
        btn.onclick = signOut;
        navbarRight.appendChild(btn);
        logoutButtonRef.current = btn;
      } else if (!logoutButtonRef.current.isConnected) {
        navbarRight.appendChild(logoutButtonRef.current);
      }
    };

    ensureButton();

    const navBar = document.querySelector("nav.navbar");
    const observer = navBar
      ? new MutationObserver(() => ensureButton())
      : null;
    if (observer && navBar) {
      observer.observe(navBar, { childList: true, subtree: true });
    }

    return () => {
      if (observer) observer.disconnect();
      removeBtn();
    };
  }, [sessionEmail]);

  const showOverlay = isBrowser && (loading || !sessionEmail);

  return (
    <>
      {children}
      {showOverlay ? (
        <div
          style={{
            position: "fixed",
            inset: 0,
            background: "#0f172a",
            color: "#e2e8f0",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            zIndex: 9999,
          }}
        >
          <div
            style={{
              background: "#111827",
              padding: "32px",
              borderRadius: "12px",
              width: "360px",
              boxShadow: "0 20px 60px rgba(0,0,0,0.35)",
              border: "1px solid #1f2937",
            }}
          >
            <h2 style={{ margin: 0, marginBottom: 16, fontSize: 22 }}>
              Acceso
            </h2>
            <p style={{ marginTop: 0, marginBottom: 16, color: "#94a3b8" }}>
              Usa tu email y contrasena registrados.
            </p>

            <form
              onSubmit={signInWithTable}
              style={{ display: "grid", gap: 12 }}
            >
              <div style={{ display: "grid", gap: 6 }}>
                <label style={{ fontSize: 13, color: "#cbd5e1" }}>Email</label>
                <input
                  type="email"
                  required
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="tu@correo.com"
                  style={{
                    padding: "12px 14px",
                    borderRadius: 8,
                    border: "1px solid #1f2937",
                    background: "#0b1220",
                    color: "#e2e8f0",
                  }}
                />
              </div>

              <div style={{ display: "grid", gap: 6 }}>
                <label style={{ fontSize: 13, color: "#cbd5e1" }}>
                  Contrasena
                </label>
                <input
                  type="password"
                  required
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  placeholder="********"
                  style={{
                    padding: "12px 14px",
                    borderRadius: 8,
                    border: "1px solid #1f2937",
                    background: "#0b1220",
                    color: "#e2e8f0",
                  }}
                />
              </div>

              <button
                type="submit"
                style={{
                  padding: "12px 16px",
                  borderRadius: 8,
                  border: "1px solid #2563eb",
                  background: "#2563eb",
                  color: "#e2e8f0",
                  cursor: "pointer",
                  fontWeight: 600,
                }}
              >
                Entrar
              </button>
            </form>

            {error ? (
              <div
                style={{
                  marginTop: 12,
                  padding: "10px 12px",
                  borderRadius: 8,
                  background: "#7f1d1d",
                  color: "#fecaca",
                  fontSize: 13,
                }}
              >
                {error}
              </div>
            ) : null}
          </div>
        </div>
      ) : null}
    </>
  );
}
