---
id: devops-desarrollo
title: Desarrollo DevOps
---

# Desarrollo DevOps   
**Versión:** 1.0  
**Fecha:** 01/12/2025  

---
## 1. Introducción

Definir los lineamientos, actividades, roles y herramientas aplicables al proceso de desarrollo de software dentro del ecosistema tecnológico de Edye (HITN Digital).

Este procedimiento tiene como propósito garantizar la calidad, coherencia y trazabilidad del código fuente previo a su integración en los entornos de pruebas y despliegue. Además, establece los principios técnicos y operativos para un desarrollo ágil, seguro y alineado con las prácticas DevOps corporativas.

---

## 2. Alcance

El presente procedimiento aplica a todas las actividades de implementación, documentación, validación y control de versiones del código fuente alojado en los repositorios oficiales de Edye.

Cubre el ciclo completo desde la asignación de una tarea hasta la aprobación del código para su integración en los entornos de staging o producción, garantizando trazabilidad entre requerimientos, commits, pruebas y entregas.

Este procedimiento es de aplicación para los equipos de desarrollo backend, frontend y QA, así como para los perfiles DevOps Engineer y Project Manager responsables del control de calidad y validación de entregables. 

---

## 3. Procedimiento

El proceso de desarrollo DevOps en Edye define las actividades y lineamientos técnicos para la implementación, control de versiones, pruebas y documentación del código fuente dentro del ecosistema tecnológico de HITN Digital.

El flujo integra las fases de **codificación**, **validación** y **revisión cruzada** antes de su integración a los entornos de staging y producción, asegurando trazabilidad y calidad del software entregado.

---

## 3.1. Entorno de desarrollo

El entorno de desarrollo de Edye se sustenta en una arquitectura tecnológica moderna basada en servicios y aplicaciones construidas principalmente con **Node.js**, **Next.js** y **Laravel**.

La plataforma opera bajo un modelo de bases de datos híbridas:

- **MySQL** → motor relacional para procesos estructurados.  
- **MongoDB** → base de datos NoSQL para componentes que requieren flexibilidad y escalabilidad.

### Entornos principales

- **Local**: desarrollo individual de los programadores.  
- **Staging**: entorno de pruebas integradas y QA.  
- **Producción**: despliegue estable validado.

### Control de versiones

El control de versiones se gestiona en **GitHub**, utilizando las ramas principales:

- `main`  
- `production`  
- `features/*`  
- `staging`  

---

## 3.2. Entradas y salidas del proceso

| Tipo     | Descripción |
|----------|-------------|
| **Entradas** | Tareas asignadas en Monday, requerimientos funcionales/técnicos, reportes de bugs o mejoras. |
| **Salidas** | Código documentado, probado y aprobado en GitHub; Swagger actualizado; Postman validado. |

> *Nota:* Para algunos repositorios, las entregas Swagger/Postman no son necesarias.

---

## 3.3. Diagrama del flujo de desarrollo DevOps

El siguiente diagrama representa de forma visual el **flujo general de la fase de desarrollo dentro del ciclo DevOps** del ecosistema Edye.

![Diagrama del flujo de desarrollo DevOps](/img/desarrollo-devops.jpg)
> **Figura 1.** *Diagrama del flujo del proceso de desarrollo DevOps.*  

---

## 3.4. Detalle por fase o actividad

- **Asignación y preparación:** Recepción de tarea → creación de branch desde `production` usando `feature/<nombre>` o `<nombre>`.
- **Codificación:** Desarrollo del componente asignado.
- **Testing:** Creación de unit tests con Jest y validación con Postman collections.  
  Documentación Swagger se genera automáticamente.
- **Revisión técnica:** Pull Request (PR), revisión cruzada, validaciones GitHub Actions.
- **Aprobación y merge:** Validación funcional, merge controlado, versionado semántico, actualización del changelog.

---

## 3.5. Repositorios GitHub

Los repositorios se encuentran en GitHub, y constituyen la fuente única de verdad del código y la documentación técnica del ecosistema EDYE. Cada repositorio mantiene sus ramas, pipelines CI/CD y archivos de documentación asociados (README.md, Swagger, Postman).


| Repositorio | Propósito | Ramas | Stack |
|-------------|-----------|--------|--------|
| **EDYE-CONNECT** | Middleware SSO para operadores, apps y partners. | Main / Staging / Production | PHP - Laravel - MySQL |
| **EDYE-BILLING** | Pagos, promociones y suscripciones. | Main / Staging / Production | PHP - Laravel - MySQL |
| **EDYE-API-STANDALONE** | Backend principal con endpoints REST. | Main / Staging / Production | PHP - Laravel - MySQL |
| **EDYE-CONECTA** | Conector SSO entre Edye y operadores. | Main / Staging / Production | PHP - Laravel - MySQL |
| **EDYE-ADMIN** | CMS central para shows, metadata, imágenes y partners. | Main / Staging / Production | PHP - Laravel - MySQL |
| **EDYE-PLAY** | Plataforma web (niños/padres). | Main / Staging / Production | Node.js - Next.js - MongoDB |
| **EDYE-CLOUD** | Actividad de usuarios y almacenamiento. | Main / Staging / Production | Node.js - MongoDB |
| **EDYE-API-SATELITE** | Redundancia, carga y resiliencia. | Main / Staging / Production | PHP - Laravel - MySQL |

> **Nomenclatura estándar:** `edye-[módulo]`

Cada repositorio debe incluir su propio README.md con instrucciones de instalación, dependencias, ramas activas, pipelines de despliegue y contactos técnicos.

---

## 3.6. Clonar repositorios GitHub

El desarrollador debe contar con permisos y haber configurado SSH o PAT.

### Clonación mediante SSH (recomendada)

**Requisitos previos:**

- Tener clave SSH (`id_rsa` o `ed25519`)  
- Agregar clave pública en GitHub:  
  **Settings → SSH and GPG keys**

**Tutorial oficial:**  
https://docs.github.com/es/authentication/connecting-to-github-with-ssh/adding-a-new-ssh-key-to-your-github-account

**Comando de clonación:**

```bash
git clone git@github.com:edye/<repositorio>.git
```

---

## 3.7. Estándares de desarrollo

El desarrollo de software en Edye sigue criterios uniformes para asegurar consistencia, mantenibilidad y calidad del código.

Los estándares incluyen:

- **Estructura modular** organizada por servicio.
- **Revisión de código obligatoria** antes de cada *merge request*.
- **Nomenclatura de ramas controlada**  
  - `feature/<nombre>`  
  - `<nombre>`
- **Versionado semántico**, por ejemplo: `v1.3.2`.
- **Definición correcta de endpoints RESTful**, asegurando respuestas **JSON coherentes**.
- **Cumplimiento de convenciones de estilo** y documentación de API mediante **Swagger/OpenAPI**.

---

## 4. Herramientas

| Categoría              | Herramienta     | Uso |
|------------------------|-----------------|-----|
| **Control de versiones** | GitHub          | Repositorios, PRs, code review |
| **Pruebas**             | Jest, Postman   | Validación funcional e integración |
| **Gestión**             | Monday          | Seguimiento de backlog y entregas. Todos los cambios deben actualizar la documentación técnica y referenciar la tarea origen en Monday. |
