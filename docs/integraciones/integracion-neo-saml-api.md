---
id: integracion-neo-saml-api
title: Integración NEO – Autenticación SAML 2.0 + API Authorization
sidebar_label: NEO – SAML + API AuthZ
description: Integración con operadores NEO mediante SAML 2.0 para autenticación y API REST para autorización de acceso a contenido.
tags:
  - integraciones
  - saml
  - neo
  - operadores
---

# Integración NEO – Autenticación SAML 2.0 + API Authorization

**Versión:** 1.0  
**Fecha:** 01/12/2025

---

# Integración NEO – Autenticación SAML 2.0 + API Authorization

Esta integración proporciona el mecanismo para que usuarios de operadores NEO accedan a Edye utilizando **SAML 2.0** como método de autenticación (IdP provisto por NEO) y **REST API Authorization** para validar su elegibilidad de acceso al contenido.

Basado en:

- _ESP-INT API-SAML NEO.pdf_ :contentReference[oaicite:0]{index=0}
- _Gateway Fornecedores v2.5.pdf_ :contentReference[oaicite:1]{index=1}

---

## 1. Descripción General

NEO funciona como **IdP SAML 2.0**, controlando el login del usuario, mientras que Edye opera como **Service Provider (SP)**. Una vez autenticado el usuario, NEO devuelve un **subscriber_id** que Edye debe usar para las validaciones periódicas de autorización.

**Componentes del flujo:**

- Edye Play / Webview
- NEO Identity Provider (IdP)
- NEO Gateway
- Backend Edye (SP)
- API REST de autorización de NEO

---

## 2. Flujos Soportados

### 2.1 Autenticación (AuthN) vía SAML 2.0

Flujo resumido (SAML NEO):

1. El usuario selecciona operador.
2. Se abre la webview de login hospedada por NEO.
3. NEO valida credenciales y genera Assertion SAML.
4. Edye recibe la assertion en el ACS y la valida:
   - Firma digital
   - Tiempos de validez
   - Audience
   - Atributos mínimos

Ejemplo de respuesta posterior al login exitoso:

```json
{
  "access": true,
  "subscriber_id": "2823ejsd"
}
```

`subscriber_id` es un identificador único, anónimo y persistente.
Se usa en el proceso de autorización.

---

### 2.1 Autenticación (AuthN) vía SAML 2.0

Validación periódica para comprobar si el usuario sigue activo en el operador.

---

### Endpoints

#### GET

```bash
URLBASE/authorization?subscriber_id=XXXX&resource_id=YYYY
```

#### POST

```json
{
  "subscriber_id": "XXXX",
  "resource_id": "YYYY"
}
```

**Respuesta exitosa**

```json
{
  "access": true
}
```

**Autorización con múltiples niveles de servicio**

```json
{
  "access": true,
  "urns": ["urn:sva:myproduct:basic", "urn:sva:myproduct:standard"]
}
```

Edye puede utilizar `urn:*` para validar cualquier nivel disponible.

---

## 3. Requisitos del IdP (SAML)

| Parámetro                | Ejemplo / Descripción              |
| ------------------------ | ---------------------------------- |
| **Entity ID**            | https://idp.empresa.com/saml2      |
| **SSO URL**              | https://idp.empresa.com/sso/login  |
| **Certificado**          | Certificado X.509 provisto por NEO |
| **Formato NameID**       | emailAddress                       |
| **Atributos requeridos** | email, givenName, surname          |

---

### Validaciones obligatorias

- Firma digital válida
- Audience coincidente con el SP
- Validación estricta de `NotBefore` y `NotOnOrAfter`
- Manejo de assertion inválida o expirada

---

## 4. Configuración del Service Provider (Edye)

### 4.1 Metadata

NEO requiere la metadata del Service Provider (SP) y entrega su metadata en una URL con el siguiente formato:

```bash
https://saml.neotv.com.br/<partner>/saml2/idp/metadata.php?output=xhtml
```

`<partner>` debe ser reemplazado por el identificador asignado por NEO.

---

### 4.2 Atributos esperados

Edye debe mapear los siguientes atributos SAML:

| Atributo SAML | Uso                   |
| ------------- | --------------------- |
| **email**     | Identificación mínima |
| **givenName** | Nombre                |
| **surname**   | Apellido              |

---

## 5. Flujo Completo de Integración (AuthN + AuthZ)

```bash
sequenceDiagram
    participant User
    participant Edye
    participant NEO as NEO IdP/Gateway

    User->>Edye: Solicita login con operador
    Edye->>NEO: Redirección SAML (AuthNRequest)
    User->>NEO: Ingresa credenciales
    NEO->>Edye: Assertion SAML + subscriber_id
    Edye->>Edye: Valida firma, audience y tiempos
    Edye->>NEO: Authorization API (subscriber_id + resource_id)
    NEO->>Edye: access = true | false
    Edye->>User: Acceso permitido / Denegado
```

### 5.1 Diagrama del flujo de autenticación y autorización

![Diagrama del flujo de autenticación y autorización](/img/integraciones/neo-saml-flow.jpg)
> **Figura 1.** *Diagrama del flujo de autenticación y autorización*

---

## 6. Pruebas y Entornos

### Entornos SAML y API

| Entorno             | URL                                                             |
| ------------------- | --------------------------------------------------------------- |
| **SAML QA**         | https://qa.api.streamingsite.com/saml                           |
| **IdP Sandbox**     | https://sandbox-idp.okta.com                                    |
| **REST Staging**    | https://9097yffrd7.execute-api.us-east-1.amazonaws.com/staging/ |
| **REST Production** | https://auth.neotv.com.br/                                      |

---

### Casos de prueba obligatorios

- Login exitoso
- Firma inválida
- Assertion expirada
- Atributos faltantes
- Autorización activa
- Autorización denegada
- Validación multi-nivel (`urn:*`)

---

## 7. Logs y Monitoreo

### Eventos que deben registrarse

- Inicio SSO
- Assertion recibida
- Firma válida / inválida
- Creación de sesión interna
- Errores SAML
- Resultados de autorización

---

### Herramientas sugeridas

- Elastic + Kibana
- New Relic

---

## 8. Endpoints NEO

### 8.1 Autenticación SAML

La autenticación SAML es controlada completamente por NEO.  
No existe un endpoint directo para esta operación.

---

### 8.2 REST API – Authentication & Authorization

#### **Staging**

```bash
https://9097yffrd7.execute-api.us-east-1.amazonaws.com/staging/authentication
https://9097yffrd7.execute-api.us-east-1.amazonaws.com/staging/authorization
```

#### **Producción**

```bash
https://auth.neotv.com.br/authentication
https://auth.neotv.com.br/authorization
```

---

### 8.3 Listado de operadores disponibles

```bash
https://20arn6e6dj.execute-api.us-east-1.amazonaws.com/production/listoperators2?resource_id=<urn>
```

---

## 9. Códigos de Error

| Código      | Descripción                        |
| ----------- | ---------------------------------- |
| **IDP-000** | Internal server error              |
| **IDP-001** | Invalid user/password              |
| **IDP-003** | Error de comunicación con operador |

---

## 10. Checklist para Integración

### SAML

- SP metadata entregada a NEO
- Certificado configurado
- Audience configurado
- Validación de firma habilitada
- Atributos mapeados correctamente
- ACS URL funcional

---

### Authorization API

- Persistencia segura de `subscriber_id`
- Validación periódica implementada
- Manejo correcto de `urn:*`
- Manejo de `access=false`
- Registro de errores y estadísticas
