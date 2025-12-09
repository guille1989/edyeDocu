---
id: integracion-bango-verizon
title: Integración Verizon – Direct Carrier Billing
sidebar_label: Integración Verizon – Direct Carrier Billing
description: Documentación técnica para la integración Edye ↔ Verizon mediante modelo Direct Carrier Billing y App Integration.
tags:
  - integraciones
---

# Integración Verizon – Direct Carrier Billing

**Versión:** 1.0  
**Fecha:** 01/12/2025

---

# Integración Verizon – Direct Carrier Billing (DCB)

Basado en _Edye Content Workflow 2023_ y documentación interna del ecosistema Edye.  
Fuente: Edye Content Workflow 2023 PDF. :contentReference[oaicite:1]{index=1}

---

## 1. Introducción

La integración con **Verizon** se basa en el modelo **Direct Carrier Billing (DCB)**, en el cual:

- El usuario **se registra o compra la suscripción desde Verizon**.
- Verizon confirma la activación del usuario.
- Edye **habilita el acceso al contenido** a través de:
  - Edye Connect (autenticación)
  - Edye Billing (validación de estado)
  - Edye Play (entrega de contenido)

Este modelo no requiere entrega manual de catálogos ni archivos de video.  
La experiencia del usuario se realiza **solo desde la App de Edye** (iOS, Android, OTT).

---

## 2. Arquitectura General

La arquitectura de comunicación se compone de tres bloques:

### **2.1. Verizon Billing System**

- Gestiona las suscripciones.
- Notifica a Edye los estados de las cuentas.
- Expone endpoints de validación (si aplica).

### **2.2. Edye Backend**

- `EDYE-CONNECT`: Autenticación de usuarios.
- `EDYE-BILLING`: Estado de suscripción y validaciones.
- `EDYE-API-STANDALONE`: Permisos, perfiles, contenido.
- `EDYE-PLAY`: Frontend de consumo.

### **2.3. Edye Apps (Play)**

- Usa el token generado por Edye.
- Muestra el catálogo autorizado.

Diagrama (descripción según PDF y actas):

[Usuario Verizon]  
 ↓ _(Activación / Compra)_  
[Verizon Billing System]  
 ↓ _(Callback / API Call)_  
[Edye Billing] → [Edye Connect] → [Generate Session Token]  
 ↓  
[Edye Play Apps]

---

## 3. Flujos Principales

### 3.1 Flujo de Alta (Activation Flow)

1. Usuario adquiere la suscripción desde la plataforma Verizon.
2. Verizon procesa el pago y activa el servicio.
3. Verizon envía a Edye un **callback** o un **token de activación**:

```json
{
  "transaction_id": "xxxx",
  "user_id": "verizon-12345",
  "email": "user@example.com",
  "status": "active",
  "plan": "premium",
  "expires_at": "2025-01-01T00:00:00Z"
}
```

4. Edye Billing valida:

- user_id
- estado del plan
- expiración

5. Si el usuario no existe, Edye crea la cuenta automáticamente.

6. Edye Connect genera el session_token.

7. Usuario accede al contenido desde la app Edye.

---

### 3.2 Flujo de Login

1. El usuario abre la app Edye.
2. Introduce su correo o user_id asociado a Verizon.
3. La app envía a Edye Connect:

```json
{
  "provider": "verizon",
  "user_id": "verizon-12345"
}
```

4. Edye consulta Billing → estado de suscripción.
5. Si es válida, se genera nuevo session_token.
6. Acceso concedido.

---

### 3.3 Flujo de Renovación

1. Verizon renueva automáticamente la suscripción.
2. Envía notificación a Edye:

```json
{
  "user_id": "verizon-12345",
  "status": "renewed",
  "expires_at": "2025-02-01T00:00:00Z"
}
```

3. Edye Billing actualiza la cuenta.
4. El usuario continúa con acceso sin interrupciones.

---

### 3.4 Flujo de Cancelación

1. Usuario cancela desde Verizon.
2. Verizon envía notificación:

```json
{
  "user_id": "verizon-12345",
  "status": "cancelled"
}
```

3. Edye marca expiración en fecha correspondiente.
4. Al intentar ingresar, Edye Connect muestra mensaje de suscripción inactiva.

---

## 4. Endpoints involucrados (High Level)

**Nota:** Los endpoints exactos dependen de **EDYE-CONNECT** y **EDYE-BILLING**.  
A continuación se presenta un resumen conceptual basado en la estructura interna.

---

### **POST `/billing/verizon/callback`**

Recibe las notificaciones de suscripción enviadas por Verizon.

#### **Body**

```json
{
  "user_id": "verizon-12345",
  "status": "active | renewed | cancelled",
  "plan": "premium",
  "expires_at": "2025-01-01T00:00:00Z"
}
```

### **POST `/connect/login-verizon`**

Valida la cuenta en Billing y genera la sesión de Edye.

#### **Body**

```json
{
  "user_id": "verizon-12345",
  "email": "user@example.com"
}
```

#### **Respuesta**

```json
{
  "session_token": "xxxxx",
  "user": {
    "name": "John",
    "profiles": [...]
  }
}
```

---

## 5. Reglas de Negocio

### **Autocreación de Usuarios**

- Si el usuario no existe, Edye crea una cuenta interna.
- El **user_id de Verizon** se almacena como `external_id`.

### **Control de expiración**

- Edye confía en el valor `expires_at` enviado por Verizon.
- Si Verizon deja de enviar renovaciones, el acceso se desactiva automáticamente.

### **Unificación de cuenta por email**

- Un mismo email solo puede estar asociado a un proveedor a la vez.

### **Sincronización**

- El flujo es completamente basado en API.
- No existe entrega manual de archivos ni manejo de metadata fuera del sistema.

---

## 6. Seguridad

- **Comunicación HTTPS obligatoria.**
- **Tokenización en callbacks** (si Verizon lo provee).
- **Whitelist de IPs de Verizon.**
- **Validación estricta de parámetros:**
  - `user_id`
  - `transaction_id`
  - `status`
- **Auditorías** visibles en _Billing Log_ / _API Log_.

---

## 7. Requisitos de Verizon

### **Verizon debe proporcionar:**

- URL de callbacks.
- Formato y firma del mensaje.
- Esquema de reintentos.
- Ambiente de pruebas (sandbox).
- Listado de planes y políticas.

### **Edye debe proporcionar:**

- Endpoints de callback.
- Documentación de validación.
- Ambiente _staging_ funcional.
- Logs para depuración.

---

## 8. Testing

### Casos a validar

| Caso                     | Resultado esperado             |
| ------------------------ | ------------------------------ |
| Activación válida        | acceso permitido               |
| Renovación               | extensión automática           |
| Cancelación              | bloqueo futuro del acceso      |
| Login con plan activo    | session_token generado         |
| Login con plan cancelado | error: `subscription_inactive` |
| Resend callback          | idempotencia garantizada       |

---

## 9. Checklist de Integración

### **Verizon**

- Proveer documentación de callbacks.
- Enviar listado de planes.
- Definir contrato de renovación/cancelación.
- Confirmar headers de autenticación.
- Entrego de Sandbox.

### **Edye**

- Habilitar endpoint `/billing/verizon/callback`.
- Activar validación en Connect.
- Mapear `user_id` ↔ `external_id`.
- Validar reintentos y duplicados.
- QA completo en Staging.
