---
id: devops-planificacion
title: Planificación DevOps
sidebar_label: Planificación DevOps
---

# Planificación DevOps  
**Versión:** 1.0  
**Fecha:** 01/12/2025    

---

## 1. Introducción

El presente documento forma parte del conjunto de procedimientos técnicos que estructuran el ciclo DevOps del ecosistema **Edye / HITN Digital**.  
Su propósito es definir el marco metodológico y operativo para la fase de **planificación**, asegurando la correcta gestión de tareas, recursos y prioridades dentro de los proyectos tecnológicos.

La planificación DevOps constituye el punto de partida del ciclo de desarrollo continuo, permitiendo:

- Alinear las necesidades del negocio con los objetivos técnicos.  
- Garantizar la trazabilidad de las tareas.  
- Optimizar la colaboración entre desarrollo, QA, infraestructura y operaciones.

Este procedimiento se integra con los procesos de:

- Desarrollo  
- Integración Continua (CI)  
- Entrega Continua (CD)  
- Operaciones  
- Mejora Continua  

Formando un flujo integral orientado a la eficiencia, automatización y calidad del software.

---

## 2. Alcance

Este procedimiento aplica a **todos los proyectos, productos y servicios digitales** desarrollados dentro del ecosistema Edye que requieran planificación técnica bajo el modelo DevOps.

Establece lineamientos sobre:

- Organización y priorización de tareas técnicas.  
- Roles y responsabilidades del equipo DevOps.  
- Uso de herramientas corporativas (Monday, GitHub, Grafana).  
- Seguimiento y validación de entregas planificadas.  

El alcance va desde la **revisión del backlog** hasta la **validación final**, enlazándose con las fases de:

- Desarrollo  
- Integración  
- Despliegue  
- Operaciones  
- Evaluación Postmortem  

---

## 3. Procedimiento

### 3.1. Descripción general

El proceso de planificación DevOps define la secuencia de actividades necesarias para:

- Organizar  
- Priorizar  
- Gestionar  

las tareas técnicas dentro del ciclo de desarrollo continuo.

El flujo abarca:

1. Revisión  
2. Priorización  
3. Asignación  
4. Ejecución  
5. Validación  

Todas las actividades se gestionan mediante:

- **Monday**: backlog, dependencias, fechas.  
- **GitHub**: control de versiones, validación técnica, PRs.  

---

### 3.2. Diagrama del flujo de planificación DevOps

![Flujo de planificación DevOps](/img/planificacion-devops-diagrama.jpg)
> **Figura 1.** Diagrama del flujo del proceso de planificación DevOps.

---

### 3.3. Detalle por fase o actividad

| **Fase**                     | **Entrada**                  | **Actividad**                                   | **Herramienta**                     | **Salida**                 |
|-----------------------------|------------------------------|-------------------------------------------------|-------------------------------------|-----------------------------|
| **1. Revisión de backlog**  | Tareas en Monday             | Revisión y priorización técnica                 | Monday                              | Backlog validado           |
| **2. Planificación de tareas** | Backlog aprobado            | Asignar tareas, fechas y dependencias           | Monday                              | Plan de desarrollo de tareas |
| **3. Desarrollo**           | Plan de desarrollo de tareas | Programación de componentes y pruebas unitarias | GitHub / Postman / Swagger          | Código validado            |
| **4. Integración continua** | Pull Requests                | Validación y compilación automatizada           | GitHub Actions                      | Build validada             |
| **5. Despliegue**           | Código aprobado              | Ejecución de pipeline CI/CD y despliegue en Staging | GitHub Actions                  | Release desplegada         |
| **6. Evaluación**           | Métricas y reportes          | Análisis de desempeño y mejoras                 | Grafana / Evaluaciones manuales     | Informe de retrospectiva   |


---

## 4. Herramientas

| Categoría | Herramienta | Uso |
|-----------|-------------|-----|
| **Gestión** | Monday | Gestión de prioridades, releases, tareas y flujos de trabajo |
