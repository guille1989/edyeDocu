---
id: integracion-mvpd-oauth2
title: Integración Adobe Pass (MVPD)
sidebar_label: Integración Adobe Pass (OAuth2)
description: Documento unificado de integración Adobe Pass para partners MVPD como Claro Puerto Rico y Liberty.
tags:
  - integraciones
---

# Integración Adobe Pass (MVPD)

**Versión:** 1.0  
**Fecha:** 01/12/2025

---

Este documento consolida el proceso de integración de autenticación mediante Adobe Pass (MVPD) utilizado por partners como **Claro Puerto Rico** y **Liberty**.  
Ambos casos implementan un flujo estándar **OAuth 2.0** administrado por Adobe Pass Gateway y son 100% compatibles entre sí.

---

## 1. Información general de la integración

| Campo               | Valor                                                             |
| ------------------- | ----------------------------------------------------------------- |
| Tipo de integración | Adobe Pass (MVPD)                                                 |
| Protocolo           | OAuth 2.0                                                         |
| Validación          | token JWT + sesión backend                                        |
| Flujo soportado     | Login usuario → Adobe Auth → Token Exchange → Validación → Sesión |
| Apps involucradas   | Smart TV, Apps móviles                                            |
| Backend involucrado | OTT Authentication Backend                                        |

## Partners soportados

| Partner           | 
| ----------------- |
| Claro Puerto Rico |
| Liberty           |


---

## 2. Arquitectura general

El flujo de autenticación utiliza estos componentes:

- Aplicación cliente (Smart TV / App móvil)
- Adobe Pass Gateway
- Backend OTT (servidor de autenticación interno)
- Sistemas de sesión y validación JWT


![Arquitectura general](/img/integraciones/adobe-pass-flow.jpg)
> **Figura 1.** *Diagrama general del flujo OAuth2 de Adobe Pass*

### Flujo resumido

1. Usuario selecciona su proveedor de TV (MVPD).
2. La app redirige a Adobe Pass (Login).
3. Adobe retorna un **authorization_code** al backend.
4. El backend intercambia el código por **access_token** + **id_token**.
5. Se valida firma y claims del token JWT.
6. Se crea y mantiene una sesión local.

---

## 3. Configuración de Adobe

La configuración es **idéntica** para ambos partners.

| Parámetro           | Valor                                             |
| ------------------- | ------------------------------------------------- |
| Client ID           | `tv-auth-client-789`                              |
| Client Secret       | (protegido)                                       |
| Scopes permitidos   | `mvpd:auth`, `mvpd:profile`, `openid`             |
| Redirect URI        | `https://streaming.tvapp.com/auth/adobe/callback` |
| Tipo de integración | Adobe Pass (MVPD)                                 |

> Todos los valores provienen de los documentos fuente proporcionados por los partners.

---

## 4. Flujo de autenticación (App → Backend)

### 4.1. Selección del MVPD

El usuario elige su proveedor (Claro PR o Liberty).

> **Figura 2.** *Selección del MVPD*

### 4.2. Redirección a Adobe Pass

La aplicación redirige a la página de login de Adobe Pass.

> **Figura 3.** *Redirección a Adobe Pass*

### 4.3. Código de autorización

Adobe responde al backend con: `auth_code`

> **Figura 4.** *Código de autorización*

### 4.4. Token Exchange (Backend → Adobe)

El backend solicita:

- `access_token`
- `id_token`

> **Figura 4.** *Token Exchange (Backend → Adobe)*

### 4.5. Validación del token JWT

Validaciones requeridas:

| Claim | Descripción                     |
| ----- | ------------------------------- |
| `sub` | Identificador del usuario       |
| `aud` | Debe coincidir con el Client ID |
| `iss` | Debe ser Adobe                  |
| `exp` | No expirado                     |

### 4.6. Creación de sesión local

La sesión se mantiene **1 hora**, con opción de refresh.

> **Figura 5.** *Creación de sesión local*

---

## 5. Validaciones y seguridad

| Requisito         | Detalle                                     |
| ----------------- | ------------------------------------------- |
| Algoritmo         | RS256 (Adobe issuer)                        |
| Validación        | JWT signature + claims                      |
| Duración sesión   | 1 hora                                      |
| Manejo de errores | Token inválido, expirado, issuer incorrecto |

---

## 6. Pruebas y entornos

### Entorno Sandbox

Configurado en Adobe Dev Console bajo: `tvapp-sandbox`

### Casos de prueba

- ✔ Login exitoso
- ✔ Token inválido
- ✔ Token expirado
- ✔ Login sin proveedor configurado

### Herramientas recomendadas

- Postman
- JWT.io
- Adobe Pass Test App

> **Figura 6.** *Pruebas del flujo OAuth2 en Postman*

---

## 7. Logs y monitoreo

| Evento          | Significado                  |
| --------------- | ---------------------------- |
| Inicio login    | Usuario inició autenticación |
| Redirección     | App → Adobe                  |
| Token recibido  | Backend obtuvo tokens        |
| Sesión iniciada | Autenticación completada     |

> **Figura 7.** *Ejemplo de logs relevantes para Adobe Pass OAuth*

### KPIs monitoreados

- Ratio de login exitoso
- Errores por MVPD
- Tiempo promedio de login

### Herramientas observabilidad

- Datadog
- CloudWatch

---

## 8. Documentación complementaria

- Guía oficial Adobe:  
  https://www.adobe.io/apis/cloudplatform/console/authentication.html

- Manual interno OTT Auth v4
- Contacto técnico Adobe: soporte-auth@adobe.com

---

## 9. Variantes por partner (Claro PR vs Liberty)

Aunque ambos partners son equivalentes técnicamente, aquí se deja explícito:

| Componente   | Claro Puerto Rico | Liberty |
| ------------ | ----------------- | ------- |
| Flujo OAuth2 | Igual             | Igual   |
| Tokens       | Igual             | Igual   |
| Arquitectura | Igual             | Igual   |
| Seguridad    | Igual             | Igual   |
| KPIs         | Igual             | Igual   |

> Conclusión: **Ambas integraciones son 100 % idénticas en términos técnicos y operativos.**
