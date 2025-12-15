---
id: integracion-izzi-openid
title: Integración IZZI – OpenID Connect + Registro de Cliente
sidebar_label: IZZI – OpenID Connect
description: Integración con IZZI mediante OpenID Connect (Authorization Code Flow) y proceso de registro de clientes.
tags:
  - integraciones
  - openid
  - izzi
  - operadores
---

# Integración IZZI – OpenID Connect + Registro de Cliente

**Versión:** 1.0  
**Fecha:** 01/12/2025

---

# Integración IZZI – OpenID Connect (OpenID SSO Global)

Esta integración permite que los usuarios de IZZI accedan a Edye mediante **OpenID Connect** utilizando flujo Authorization Code, autenticación centralizada y validación de tokens JWT.

---

## 1. Información General

| Campo                        | Valor                                                                |
| ---------------------------- | -------------------------------------------------------------------- |
| **Partner**                  | IZZI                                                                 |
| **Nombre de la integración** | OpenID SSO Global                                                    |
| **Versión actual**           | v2.1                                                                 |
| **Tipo de integración**      | OpenID Connect – Authorization Code Flow                             |
| **Servicios involucrados**   | Identity Provider (Keycloak), API Gateway, Front-end Web, Backoffice |

---

## 2. Arquitectura y Flujo General

La autenticación se basa en el flujo estándar **Authorization Code**, donde:

1. El usuario es redirigido al IdP de IZZI.
2. Inicia sesión en el portal del operador.
3. El IdP devuelve un **authorization code** hacia Edye.
4. Edye intercambia ese código por:
   - **access_token** (JWT)
   - **refresh_token**
5. El usuario queda autenticado y autorizado para continuar el proceso (suscripción, acceso, registro, etc.).

### **Diagrama del flujo OIDC (Authorization Code)**

```bash
sequenceDiagram
    participant User
    participant Edye
    participant IZZI as IZZI IdP (OpenID)
    participant API

    User->>Edye: Accede a Login
    Edye->>IZZI: Redirect a /auth (Authorization Request)
    IZZI->>User: Pantalla de Login
    User->>IZZI: Credenciales válidas
    IZZI->>Edye: Redirect con Authorization Code
    Edye->>IZZI: Token Request (code + secret)
    IZZI->>Edye: access_token + refresh_token (JWT)
    Edye->>API: Validación del token (iss, aud, exp, nonce)
    API->>Edye: OK
    Edye->>User: Acceso concedido
```

---

## 3. Configuración Técnica

Información tomada del documento oficial de especificaciones.

---

### **Endpoints**

| Elemento         | URL / Valor                      |
| ---------------- | -------------------------------- |
| URL autorización | https://auth.miempresa.com/auth  |
| URL token        | https://auth.miempresa.com/token |
| Client ID        | streaming-client                 |
| Scopes           | openid profile email             |
| Redirect URI     | https://plataforma.com/callback  |
| Audiencia (aud)  | streaming-api                    |

---

### **Seguridad**

| Configuración           | Detalle                   |
| ----------------------- | ------------------------- |
| Tipo token              | JWT                       |
| Duración token          | 3600s                     |
| Renovación              | Refresh Token             |
| Validaciones requeridas | iss, exp, aud, sub, nonce |

---

## 4. Flujo de Registro de Cliente (Customer Register)

Basado en el diagrama de secuencia proporcionado.

---

### **Diagrama (versión Mermaid)**

```bash
sequenceDiagram
    participant Client
    participant Partner
    participant API
    participant Browser
    participant Subs as Subscriptions

    Client->>Partner: Create Account
    Partner->>API: Login
    API-->>Partner: Response(token)

    Partner->>API: Register Customer (token, client_id, ...)
    alt Authenticated
        API->>Partner: Generate URL
        Partner-->>Client: return URL
    else Non Authenticated / Expired / Not Allowed
        API-->>Partner: Error Message
    end

    Client->>Browser: Access return URL
    Browser->>API: Complete register process
    API->>Subs: generate subscriptions
    Subs-->>API: confirm
    API-->>Partner: Confirm subscription with customer_id
```

### Descripción del flujo

- El cliente crea cuenta desde **IZZI**.
- **IZZI** se autentica frente al API **Edye** y obtiene un **token**.
- **IZZI** envía la solicitud de **registro del cliente**.
- Si el token es **válido**, Edye genera una **URL de registro**.
- Si el token es **inválido o expirado**, se retorna un **mensaje de error**.
- El cliente accede a la **URL de registro** y completa el proceso.
- Edye genera las **suscripciones** necesarias y confirma con IZZI mediante el `customer_id`.

---

## 5. Casos de Uso y Validaciones

### **Principales**

- Inicio de sesión con operador **IZZI** vía **OpenID Connect**.
- Registro de cliente para habilitar servicios **Edye**.
- Validación de suscripción activa.

---

### **Errores comunes**

| Error                 | Descripción                                    |
| --------------------- | ---------------------------------------------- |
| Token expirado        | El IdP emitió un token inválido o vencido      |
| redirect URI inválida | La URL no coincide con la registrada en el IdP |
| audience incorrecto   | El JWT no corresponde a la API de Edye         |
| nonce no válido       | Prevención contra _replay attacks_             |

---

## 6. Ambientes y Pruebas

### **Entornos**

| Entorno    | Estado     |
| ---------- | ---------- |
| Dev        | Disponible |
| QA         | Disponible |
| Producción | Disponible |

---

### **Credenciales de prueba**

**Client ID:** `test-client`  
**User:** `usuario_test@example.com`  
**Password:** `Test123`  
_(Según documento oficial)_

---

### **Eventos logueados**

- Login success
- Login failure
- Manejo de tokens

---

### **Logs disponibles en**

```bash
Splunk > Auth Logs
```

---

## 7. Onboarding IZZI – Señal IPTV / EdyeTV

Información tomada del archivo **ONBOARDING EDYETV IPTV.docx**.

---

### **Especificaciones de Streaming (IPTV)**

| Parámetro  | Valor               |
| ---------- | ------------------- |
| Protocolo  | SRT (Caller Mode)   |
| Resolución | 1080p (Full HD)     |
| Video      | H264 – CBR 6 Mbps+  |
| Audio      | AAC – CBR 256 Kbps+ |
| Frame rate | 29.97 fps           |

---

### **DEMO signal**

Puede que no esté disponible para todos los territorios.

---

### **Formulario de Onboarding**

```bash
https://airtable.com/appERDvMkoeZUbpL2/shrycB5orGA4TZY12
```

---

## 8. Checklist de Integración

### **OpenID**

- Registrar Redirect URIs en IdP
- Configurar `client_id` y `client_secret`
- Implementar validación completa del JWT
- Renovación de token vía `refresh_token`
- Manejo de errores del IdP

---

### **Registro de Cliente**

- Validación de token del partner
- Generación segura de URL de registro
- Confirmación de suscripciones
- Logs auditables en Splunk

---

### **IPTV (opcional)**

- Validar especificaciones SRT
- Confirmación de señal DEMO
- Formularios de onboarding completados
