---
id: soporte_clientes_internos
title: "Soporte Clinetes Internos"
---

**Versión:** 1.0  
**Fecha:** 01/12/2025

---

# Procedimiento oficial de Soporte Técnico de EDYE / HITN Digital

## 1. Introducción y propósito

Este documento consolida el modelo actual de soporte técnico de EDYE / HITN Digital para clientes internos. Su finalidad es servir como referencia corporativa auditable para los equipos de Soporte Técnico, Operaciones, DevOps, SRE y Seguridad. La información aquí descrita se basa únicamente en el Procedimiento de Soporte Técnico – Cliente interno y la Matriz de escalamiento operativo facilitados por la organización; no se han añadido roles, flujos, herramientas o métricas no contemplados en dichas fuentes.

## 2. Objetivo del servicio de soporte técnico

El objetivo del servicio es proporcionar asistencia técnica eficiente a los colaboradores de EDYE (clientes internos) para resolver problemas relacionados con los servicios tecnológicos de la empresa, tanto de hardware como de software. El servicio adopta un enfoque proactivo y reactivo, buscando no solo solucionar problemas existentes sino prevenir incidentes futuros. Se trata de un servicio multicanal orientado a clientes internos.

## 3. Alcance (cliente interno)

### 3.1. Definiciones y términos clave

El servicio se dirige exclusivamente a clientes internos, definidos como colaboradores del equipo técnico que aseguran la prestación de los servicios de EDYE. A continuación se recogen algunos términos usados en el procedimiento:

| Término         | Definición |
|-----------------|------------|
| FAQ             | Acrónimo de Frequently Asked Questions o preguntas frecuentes; repositorio donde se recopilan y responden preguntas comunes sobre temas técnicos de los servicios de EDYE. |
| Multicanal      | Práctica de asistencia a partners y clientes internos a través de múltiples canales de comunicación como correo electrónico y Monday. |
| Monday          | Work OS utilizado por EDYE para la ejecución de proyectos y flujos de trabajo. |
| Reporte de estado | Documento que detalla el progreso y la situación actual de un ticket; muestra acciones tomadas, tiempo empleado e información relevante para rastrear la resolución del incidente. |
| SLA (Service Level Agreement) | Acuerdo de nivel de servicio que establece condiciones de respuesta en la solución de incidentes técnicos. |
| Ticket          | Registro digital creado cuando un cliente interno reporta un problema o solicitud de ayuda; permite rastrear, gestionar y resolver la incidencia. |

### 3.2. Alcance del servicio

El servicio de soporte cubre únicamente a clientes internos. Los usuarios finales (suscriptores directos de EDYE o de los partners) y los partners (clientes externos que difunden contenidos de EDYE) no forman parte de este procedimiento.

### 3.3. Tipo de usuarios atendidos

- Colaboradores de los equipos técnicos y de operaciones de EDYE / HITN Digital.
- Personal autorizado que cuenta con acceso a Monday y a los canales de soporte definidos.

### 3.4. Tipología general de solicitudes

Las solicitudes recibidas se clasifican según su naturaleza y el horario en que se presentan:

- **Dudas y operaciones del día a día**: consultas operativas rutinarias. La matriz establece un tiempo de respuesta de 2–3 horas en horario comercial.
- **Errores o preguntas técnicas en horario comercial**: incidentes técnicos que requieren intervención en horario laboral. Tiempo de respuesta: 2–3 horas.
- **Errores o preguntas técnicas fuera de horario comercial (1.º contacto)**: incidentes críticos reportados fuera de horario. Tiempo de respuesta: 24 horas.
- **Errores o preguntas técnicas fuera de horario comercial (2.º contacto)**: escalamiento adicional cuando el 1.º contacto no resuelve el caso; respuesta en 48 horas.
- **Preguntas de mercadeo y negocio**: consultas de áreas de mercadeo o negocio; respuesta en 24 horas.

## 4. Canales de atención

El soporte técnico se presta a través de los siguientes canales autorizados:

| Canal | Descripción | Requisitos de acceso |
|-------|-------------|---------------------|
| Monday | Plataforma principal de gestión de tickets. Los clientes internos crean, actualizan y consultan tickets en Monday. El Administrador de tickets clasifica y asigna los tickets a los agentes correspondientes. | Requiere credenciales de acceso a la cuenta corporativa de Monday. |
| Correo electrónico/Monday notifications | Los agentes y el administrador de tickets utilizan notificaciones generadas por Monday para asignar y comunicar el estado de los tickets. | El usuario debe tener un correo corporativo registrado en Monday. |
| Zendesk | Se utiliza para notificar al cliente interno sobre la solución del ticket y solicitar confirmación. | El acceso es gestionado por el administrador de tickets. |
| Slack | Canal de comunicación interna empleado para la reasignación de tickets de nivel 2 y notificaciones entre agentes y administrador. | Acceso a espacios de trabajo internos autorizados. |

## 5. Herramientas utilizadas

- **Monday**: Work OS para gestionar tickets, registrar la actividad y mantener la trazabilidad del proceso.
- **Zendesk**: plataforma de envío de notificaciones al cliente interno sobre la resolución de un ticket.
- **Slack**: canal interno de comunicación usado para notificaciones y escalamientos entre agentes y administrador.
- **Bases de conocimiento y FAQ**: repositorios donde se documentan soluciones, procedimientos y respuestas frecuentes.

## 6. Requisitos de acceso

- Contar con credenciales válidas de acceso a Monday y a Slack.
- Disponer de un correo electrónico corporativo para recibir notificaciones y comunicarse con el equipo de soporte.
- Para consultas en Zendesk, el cliente interno debe estar dado de alta por el Administrador de tickets.

## 7. Roles y responsabilidades

### 7.1. Administrador de tickets

- Revisar, clasificar y asignar los tickets según el nivel de servicio requerido.
- Servir como canal de comunicación con clientes internos y el equipo de soporte.
- Dar solución a tickets de acuerdo con su conocimiento y experiencia.
- Notificar al cliente interno sobre la resolución del ticket a través de Zendesk y registrar la gestión en Monday.
- Reasignar los tickets que no puedan resolverse en el nivel 1 o 2.

### 7.2. Agentes de soporte

Los agentes se dividen en niveles según la complejidad de la solicitud.

#### Nivel 1

- Solucionar los tickets asignados de acuerdo con los SLA establecidos.
- Actualizar en Monday los reportes de cada ticket y mantener informados a los clientes internos.
- Notificar al Administrador de tickets cuando no puedan ofrecer una solución técnica.
- Documentar las soluciones en la base de conocimiento.

#### Nivel 2

- Asumir tickets que no se resuelven en nivel 1 y solucionarlos respetando los SLA.
- Mantener actualizados los reportes en Monday y comunicar el estado a los interesados.
- Notificar al Administrador de tickets cuando no puedan ofrecer una solución técnica.
- Actualizar la base de conocimiento con las soluciones aplicadas.

#### Escalamiento a Nivel 3

Cuando el nivel 2 no resuelve un incidente, el Administrador de tickets remite el ticket al VP y al equipo técnico para su análisis. Este nivel analiza la prioridad, impacto y recursos disponibles y decide si se procede con un proveedor o experto externo. Si se aprueba, se ejecuta el proceso de solución técnica de nivel 3 con dicho proveedor. En caso contrario, se aplican medidas alternativas internas (p. ej. volver a una versión anterior, remover un componente o disminuir funcionalidad).

### 7.3. Proveedores o expertos externos

El proveedor o experto externo participa únicamente cuando el nivel 3 aprueba su intervención para resolver el incidente.

## 8. Clasificación de tickets

### 8.1. Tipos de solicitudes

El procedimiento identifica las siguientes categorías de tickets:

| Tipo de solicitud | Tiempo de respuesta | Responsable / Área | Referencia |
|-------------------|--------------------|--------------------|------------|
| Dudas y operaciones del día a día | 2–3 horas en horario comercial | Área de Operaciones – Gerente | Matriz de escalamiento |
| Errores o preguntas técnicas | 2–3 horas en horario comercial | Área de Operaciones – Gerente | Matriz de escalamiento |
| Errores o preguntas técnicas fuera de horario comercial (1.º contacto) | 24 horas | Área de Operaciones – Gerente | Matriz de escalamiento |
| Errores o preguntas técnicas fuera de horario comercial (2.º contacto) | 48 horas | Área de Operaciones – Cabeza de Tecnología | Matriz de escalamiento |
| Preguntas de mercadeo y negocio | 24 horas | Mercadeo y Negocio – VP | Matriz de escalamiento |

### 8.2. Criterios de clasificación

Los tickets se clasifican según:

- Tipo de incidencia: consultas operativas, errores técnicos o solicitudes de mercadeo/negocio.
- Horario: se diferencia entre horario comercial y fuera de horario, lo que determina los tiempos de respuesta.
- Nivel de criticidad: los tickets que no pueden resolverse en nivel 1 o 2 se escalan a niveles superiores.

## 9. SLA y tiempos de respuesta

Los Acuerdos de Nivel de Servicio (SLA) definen los tiempos máximos de respuesta para cada tipo de solicitud:

- Solicitudes en horario comercial: respuesta dentro de 2–3 horas.
- Errores técnicos fuera de horario (primer contacto): respuesta en 24 horas.
- Errores técnicos fuera de horario (segundo contacto): respuesta en 48 horas.
- Preguntas de mercadeo y negocio: respuesta en 24 horas.

Se consideran horario comercial las horas laborales establecidas internamente (no documentadas en la matriz) y fuera de horario todo periodo posterior a dicho horario. Los tiempos se aplican desde la creación del ticket en Monday o su recepción por el administrador.

## 10. Flujo de atención del soporte técnico

![Soporte Clientes Internos ](/img/soporteClienteInterno.jpg)
> **Figura 1.** _Flujo general del Soporte Clientes Internos_

### 10.1. Descripción paso a paso del flujo

1. **Creación de ticket**: El cliente interno crea un ticket en Monday cuando surge una necesidad.
2. **Revisión y asignación**: El administrador de tickets revisa el ticket, lo clasifica según las tipologías y lo asigna a un agente de nivel 1.
3. **Proceso de solución nivel 1**: El agente de nivel 1 ejecuta las acciones necesarias para resolver el problema y notifica el resultado al administrador de tickets.
4. **Notificación al cliente interno**: Si el ticket se soluciona, el administrador notifica al cliente interno por Zendesk y registra la solución en Monday.
5. **Confirmación del cliente interno**: El cliente interno confirma la solución; si no se obtiene respuesta, el ticket se da por solucionado y se cierra.
6. **Reasignación a nivel 2**: Si el ticket no se puede resolver en nivel 1, se reasigna a un agente de nivel 2 a través de Monday/Slack, adjuntando el reporte de estado.
7. **Proceso de solución nivel 2**: El agente de nivel 2 trata de resolver el problema, notifica el resultado al administrador y actualiza la base de conocimiento cuando corresponde.
8. **Reasignación a nivel 3**: Si el ticket sigue sin resolverse, se envía para revisión al VP y al equipo técnico.
9. **Análisis del caso**: El VP y el equipo técnico analizan la prioridad, impacto y recursos y definen la mejor alternativa de solución.
10. **Proceso de solución nivel 3**: Si se aprueba, se ejecuta una solución técnica de nivel 3 con un proveedor o experto externo y se notifica el resultado al administrador de tickets.
11. **Medidas alternativas**: Si no se aprueba soporte externo, el equipo de soporte aplica medidas alternativas (no intervenir, revertir versiones, remover componentes, disminuir funcionalidades, etc.) y notifica al administrador.

### 10.2. Gestión por niveles

El flujo se estructura en tres niveles de soporte:

- **Nivel 1**: resolución de incidencias comunes y consultas operativas.
- **Nivel 2**: resolución de incidencias que requieren mayor conocimiento técnico o no resueltas en nivel 1.
- **Nivel 3**: análisis y toma de decisiones por parte del VP y el equipo técnico; posible intervención de proveedores externos o aplicación de medidas alternativas.

### 10.3. Cierre del ticket

El cierre del ticket ocurre cuando:

- El cliente interno confirma la solución a través de Zendesk o Monday.
- No se recibe respuesta del cliente interno en el plazo establecido; en este caso, el ticket se da por solucionado.

## 11. Modelo de escalamiento

### 11.1. Escalamiento operativo

La matriz de escalamiento operativo indica a quién contactar según el tipo de solicitud y el horario. A continuación se resume la información principal:

| Escenario de escalamiento | Tiempo de respuesta | Área / Puesto | Contacto | Correo electrónico | Teléfono |
|--------------------------|--------------------|---------------|----------|--------------------|----------|
| Dudas y operaciones del día a día | 2–3 horas en horario comercial | Operaciones / Gerente | Constantine Costopoulos (Kosta) | ccostopoulos@hitn.org | +1 (646) 296‑2497 |
| Errores o preguntas técnicas en horario comercial | 2–3 horas | Operaciones / Gerente | Constantine Costopoulos (Kosta) | ccostopoulos@hitn.org | +1 (646) 296‑2497 |
| Errores o preguntas técnicas fuera de horario comercial (1.º contacto) | 24 horas | Operaciones / Gerente | Constantine Costopoulos (Kosta) | ccostopoulos@hitn.org | +1 (646) 296‑2497 |
| Errores o preguntas técnicas fuera de horario comercial (2.º contacto) | 48 horas | Operaciones / Cabeza de Tecnología | Agustín Gómez Vega | agustin@edye.com | +1 (786) 329‑9448 |
| Preguntas de mercadeo y negocio | 24 horas | Mercadeo y Negocio / VP | Maximiliano Vaccaro | mvaccaro@hitn.org | +1 (305) 721‑4309 |

### 11.2. Responsables y tiempos

Los contactos indicados en la matriz son responsables de responder dentro de los tiempos establecidos. Cuando un ticket no puede ser resuelto en el nivel correspondiente, el administrador de tickets activa el escalamiento al siguiente nivel siguiendo la matriz de escalamiento y el flujo descrito.

### 11.3. Herramientas utilizadas en el escalamiento

- **Gestión de tickets**: Monday es la fuente de verdad para la creación, clasificación, asignación, seguimiento y cierre de tickets.
- **Comunicación**: Slack y las notificaciones de Monday sirven para la coordinación interna y la reasignación de tickets.
- **Registro y seguimiento**: Todas las acciones se registran en Monday para mantener trazabilidad; las notificaciones de Zendesk se usan para informar al cliente interno.

## 12. Métricas de seguimiento

El procedimiento define dos métricas clave:

| Métrica | Frecuencia | Responsable | Herramienta |
|---------|------------|-------------|-------------|
| Número de tickets recibidos | Diario | Administrador de tickets | Monday / Zendesk |
| SLA cumplidos por usuario o tipo | Semanal | Administrador de tickets | Monday |

Estas métricas se utilizan para controlar la carga de trabajo y la eficacia del soporte técnico y se reportan a los equipos de operaciones y dirección.

## 13. Gestión del conocimiento

### 13.1 Base de conocimiento

Los agentes de soporte deben actualizar la base de conocimiento después de resolver cada ticket. Esto incluye documentar pasos, soluciones y mejores prácticas. El objetivo es reducir la recurrencia de incidentes y facilitar el aprendizaje entre agentes.

### 13.2. FAQ

Las preguntas frecuentes se publican en el sitio de ayuda de EDYE (https://ayuda.edye.com/hc/es), donde se incluyen respuestas a problemas comunes. Asimismo, Monday proporciona material de soporte para el uso de la plataforma.

## 14. Documentación relacionada

- **Procedimiento de soporte técnico – Cliente interno (PRO‑STEC 2)**: documento oficial que establece el flujo y las responsabilidades del soporte técnico (versión 1.0, 01/08/2025).
- **Matriz de escalamiento operativo (ANX‑STEC)**: tabla de contactos y tiempos de respuesta para cada tipo de escalamiento.

## 15. Consideraciones finales

El modelo descrito está orientado únicamente a clientes internos de EDYE / HITN Digital. No se debe emplear para atender usuarios finales o partners externos.

Toda la gestión y comunicación de tickets debe registrarse en las herramientas oficiales (Monday, Slack, Zendesk) para asegurar la trazabilidad y el cumplimiento de los SLA.

Los equipos de Soporte Técnico, Operaciones, DevOps, SRE y Seguridad deberán revisar periódicamente las métricas y actualizar la base de conocimiento para garantizar la mejora continua del servicio.
