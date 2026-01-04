---
id: devops-estrategia
title: 📃 Estrategia DevOps
sidebar_label: 📃 Estrategia DevOps
---

**Versión:** 1.0  
**Fecha:** 01/12/2025

---

## 1. Objetivo y alcance

Definir la estrategia DevOps revisada de la organización, consolidando la automatización, seguridad y monitoreo continuo en los entornos de desarrollo, integración, pruebas y producción.

Esta estrategia aplica a todas las plataformas soportadas por:

- GitHub
- Swagger
- Monday
- Grafana
- Qualys

---

## 2. Principios y Políticas DevOps

### **Principios básicos**

- Automatización extremo a extremo
- Colaboración constante entre equipos
- Mejora continua
- Seguridad integrada (DevSecOps)
- Monitoreo constante

### **Política de Versionamiento**

Todo código debe estar versionado en GitHub bajo un esquema de ramas controlado:

- `main`
- `stage`
- `production`
- `feature/*`

### **Política de Despliegue**

Los despliegues deben realizarse exclusivamente mediante **pipelines validados y automatizados**, con control de calidad previo.

---

## 3. Gobernanza y Colaboración

Cada región (_Latam, Europa, Norteamérica_) cuenta con un **DevOps Lead** responsable de coordinar entregas, validaciones y despliegues controlados.

La gestión de tareas se realiza en **Monday**, con:

- Reportes semanales automatizados
- Control de versiones en Drive/Miro
- Flujo formal de documentación:

Solicitud → Revisión → Ajuste → Aprobación → Publicación.

---

## 4. Herramientas Principales

| Herramienta                     | Propósito                                | Integración                       |
| ------------------------------- | ---------------------------------------- | --------------------------------- |
| **GitHub / GitHub Actions**     | Repositorio y CI/CD automatizado         | Integración con Swagger           |
| **Swagger / Postman**           | Documentación y validación de endpoints  | QA automatizado                   |
| **Monday**                      | Gestión de backlog e incidentes          | Fuente de seguimiento y control   |
| **Grafana / Prometheus / Loki** | Monitoreo y alertas                      | Integración por correo            |
| **Qualys (VMDR/WAS)**           | Escaneo de vulnerabilidades y compliance | Integración continua en monitoreo |

---

## 5. Seguridad y Monitoreo

La seguridad forma parte integral del pipeline DevOps (**DevSecOps**), aplicándose controles automáticos de vulnerabilidades mediante **Qualys**.

El monitoreo se realiza con **Grafana**, consolidando métricas de:

- Infraestructura
- APIs
- Servicios críticos

Las alertas se envían por correo y se revisan diariamente en el panel de incidentes.
