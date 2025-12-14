import React from "react";
import { supabase } from "../lib/supabaseClient";

export default function Root({ children }) {
  const [sessionEmail, setSessionEmail] = React.useState(null);
  const [loading, setLoading] = React.useState(true);
  const [email, setEmail] = React.useState("");
  const [password, setPassword] = React.useState("");
  const [error, setError] = React.useState("");
  const logoutButtonRef = React.useRef(null);

  React.useEffect(() => {
    const storedEmail = window.localStorage.getItem("docsSessionEmail");
    if (storedEmail) {
      setSessionEmail(storedEmail);
    }
    setLoading(false);
  }, []);

  const signInWithTable = async (e) => {
    e.preventDefault();
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
      setError("Credenciales no válidas");
      return;
    }

    setSessionEmail(data.email);
    window.localStorage.setItem("docsSessionEmail", data.email);
  };

  const signOut = () => {
    window.localStorage.removeItem("docsSessionEmail");
    setSessionEmail(null);
    setEmail("");
    setPassword("");
  };

  // Place logout button inside the navbar (right section) when logged in
  React.useEffect(() => {
    if (!sessionEmail) {
      if (logoutButtonRef.current) {
        logoutButtonRef.current.remove();
        logoutButtonRef.current = null;
      }
      return;
    }

    const navbarRight = document.querySelector(".navbar__items--right");
    if (!navbarRight) return;

    if (!logoutButtonRef.current) {
      const btn = document.createElement("button");
      btn.type = "button";
      btn.textContent = "Cerrar sesión";
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
    }

    return () => {
      if (logoutButtonRef.current) {
        logoutButtonRef.current.remove();
        logoutButtonRef.current = null;
      }
    };
  }, [sessionEmail]);

  if (loading) return <div style={{ padding: 32 }}>Cargando...</div>;

  if (!sessionEmail) {
    return (
      <div
        style={{
          minHeight: "100vh",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          background: "#0f172a",
          color: "#e2e8f0",
          fontFamily: "Inter, sans-serif",
        }}
      >
        <div
          style={{
            background: "#111827",
            padding: "32px",
            borderRadius: "12px",
            width: "360px",
            boxShadow: "0 20px 60px rgba(0,0,0,0.35)",
          }}
        >
          <h2 style={{ margin: 0, marginBottom: 16, fontSize: 22 }}>Acceso</h2>
          <p style={{ marginTop: 0, marginBottom: 16, color: "#94a3b8" }}>
            Usa tu email y contraseña registrados.
          </p>

          <form onSubmit={signInWithTable} style={{ display: "grid", gap: 12 }}>
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
                Contraseña
              </label>
              <input
                type="password"
                required
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                placeholder="••••••••"
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
    );
  }

  return <>{children}</>;
}
