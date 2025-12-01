---
id: devops-estructura
title: Estructura Devops
---

# Estructura DevOps   
**Versión:** 1.0  
**Fecha:** 01/12/2025    

---

## 1. Introducción y Contexto

Este documento forma parte del proyecto de documentación tecnológica de Edye (HITN Digital), desarrollado a partir de julio de 2025 con el objetivo de consolidar los procesos DevOps, seguridad y monitoreo del ecosistema digital. La estructura DevOps busca estandarizar prácticas de automatización, despliegue continuo y control de calidad del software en los entornos de desarrollo, staging y producción.

---

## 2. Descripción General del Proceso DevOps

El componente DevOps integra los procesos de desarrollo, integración continua, entrega continua, operaciones y mejora continua en la organización. Su objetivo es automatizar flujos, reducir tiempos de entrega y garantizar la calidad del software.  
Se apoya en herramientas como:

- **GitHub** (repositorios, CI/CD)  
- **Swagger** (documentación de APIs)  
- **Monday** (gestión de tareas)  
- **Grafana** (monitoreo)  
- **Qualys** (seguridad)  
- **Postman** (pruebas de endpoints)

---

## 3. Ciclo DevOps (Pipeline General)

El ciclo DevOps implementado en Edye sigue el siguiente flujo principal:

![Ciclo DevOps](/img/flujo-devops.jpg)
> **Figura 1.** *Flujo general del proceso DevOps*

Cada fase está soportada por herramientas específicas y responsables asignados:

| Fase                | Descripción                                        | Herramientas                          |
|--------------------|----------------------------------------------------|----------------------------------------|
| **Planificación**  | Gestión de backlog, milestones y KPIs.             | Monday                                 |
| **Desarrollo**     | Implementación de código y pruebas unitarias.      | GitHub, Swagger, Postman               |
| **Integración Continua** | Compilación, validación y análisis de seguridad. | GitHub Actions, Snyk, SonarQube        |
| **Entrega Continua**      | Despliegue automatizado.                         | GitHub Actions                         |
| **Operaciones**    | Monitoreo, alertas y gestión de incidentes.        | monitor.edye.com, status.edye.com      |

---

## 4. Estructura Documental

La documentación DevOps se organiza jerárquicamente para asegurar trazabilidad y control de versiones.

| Categoría               | Documentos |
|------------------------|------------|
| **Planificación**      | https://docs.google.com/document/d/1e1P99kDmgtiPRaAMtj3oYz1zFkKUvrec49buXHp72D0/edit?usp=drive_link |
| **Desarrollo**         | https://docs.google.com/document/d/1TlZTob4QFa2sHtZ76Ku2NXcrI3V5mWGbYvv_zTQNmgk/edit?tab=t.0 |
| **Integración Continua** | https://docs.google.com/document/d/1e9Nkp1mI-z8yjHeEcgsXJW6vHIu2aFj1N4mMSdSvYKY/edit?tab=t.0 |
| **Entrega Continua**   | https://docs.google.com/document/d/19QMMCA3rwXQ2e18Q9jByyy2XnHC5zmNe8XulaiZDhlQ/edit?tab=t.0 |
| **Operaciones**        | https://docs.google.com/document/d/1txgJkjhwSdG694OBCQZhHs5iWSVDR6SCr74ZyZi66t0/edit?tab=t.0 |

---

## 5. Seguridad y Monitoreo

La seguridad forma parte integral del pipeline DevOps y se implementa mediante:

- **Qualys** para escaneo y cumplimiento.
- **Grafana / Prometheus** para monitoreo de infraestructura y APIs.
- **Loki** para centralización de logs.
- **Alertas automáticas** configuradas sobre métricas críticas.

---

## 6. Roles y Responsabilidades

| Rol                | Responsabilidades                                            | Herramientas Asociadas         | Interacción Principal |
|-------------------|--------------------------------------------------------------|--------------------------------|------------------------|
| **DevOps Engineer** | Mantener pipelines CI/CD, infraestructura y monitoreo.        | GitHub Actions, Grafana        | Backend, QA           |
| **FullStack Developer** | Implementar APIs y mantener documentación.                 | GitHub, Swagger, Postman       | DevOps, QA            |
| **QA Engineer**  | Ejecutar pruebas automatizadas e integraciones.               | Postman, Jenkins               | Desarrollo            |
| **Project Manager** | Coordinar entregas y comunicación interna.                   | Monday                         | Todas las áreas       |

---

## 7. Gobernanza Documental

El flujo de actualización sigue:

**Solicitud → Revisión → Ajuste → Aprobación → Actualización (Drive/Miro)**

Cada documento tiene:

- **Responsable del cambio**
- **Aprobador técnico**
- **Administrador de repositorio**

---

## 8. Mejores Prácticas

- Mantener pipelines automatizados y validados.
- Aplicar control de ramas y revisiones de código.
- Actualizar documentación técnica en cada versión.
- Ejecutar postmortems tras incidentes.
- Usar Monday como fuente única de seguimiento.

