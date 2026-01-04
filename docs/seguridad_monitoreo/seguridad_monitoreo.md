---
id: seguridad_monitoreo
title: "Seguridad y Monitoreo"
---

**Versión:** 1.0  
**Fecha:** 01/12/2025

---

## 1. Introducción y propósito

El ecosistema de EDYE integra múltiples servicios (API, plataformas de streaming, facturación y conectores) que se ejecutan sobre una infraestructura híbrida. Para asegurar su disponibilidad y proteger la información, EDYE implementa una estrategia de seguridad, monitoreo y evaluación basada en herramientas especializadas y prácticas operativas consolidadas.
Esta sección describe el alcance y el objetivo de dichas prácticas, definiendo los elementos clave de seguridad y monitoreo y su relación con los equipos de DevOps, Operaciones, SRE y Seguridad.
El documento proporciona una vista operativa de las herramientas utilizadas, los tipos de datos supervisados y las responsabilidades asociadas, tomando como referencia los diagramas de “Seguridad y Monitoreo” y el documento de especificaciones de EDYE.

## 2. Gestión y Monitoreo de Infraestructura

![Seguridad y Monitoreo](/img/seguridad/infraYseguridad.jpg)

> **Figura 1.** _Flujo general del proceso Seguridad y Monitoreo_

### Descripción de la infraestructura monitoreada

EDYE utiliza servidores Ubuntu como base de sus servicios. Para la gestión y el monitoreo de estos hosts se emplea Landscape, una solución que administra el ciclo de vida de las instancias, aplica actualizaciones y permite recopilar eventos del sistema. La infraestructura supervisada incluye estados de los servidores (encendido/apagado), versiones de sistema operativo y paquetes, así como eventos relevantes del sistema.

### 2.1. Herramienta utilizada

- **Landscape**: administra y monitoriza servidores Ubuntu y centraliza los event logs de cada host.
  El diagrama de Gestión y Monitoreo de Infraestructura muestra a Landscape conectado a los servidores Ubuntu, lo que refleja la relación directa entre la herramienta y la infraestructura.

### 2.2. Información recolectada

La plataforma recolecta:

- **Estado de servidores**: encendido, uso de CPU, memoria y espacio de disco.
- **Eventos del sistema**: registros de actualizaciones, cambios de configuración y alertas de seguridad.
- **Inventario**: versiones de sistema operativo y paquetes instalados.

La información capturada por Landscape constituye la base para realizar tareas de mantenimiento, aplicar parches y supervisar la salud de la infraestructura.

## 3. Seguridad y Cumplimiento

![Seguridad y Cumplimiento](/img/seguridad/seguridadCompliance.jpg)

> **Figura 2.** _Flujo general del proceso Seguridad y Cumplimiento_

### Enfoque general

La estrategia de seguridad de EDYE se basa en la detección proactiva de vulnerabilidades y en el cumplimiento de normativas vigentes. Para ello se utilizan herramientas que escanean tanto la infraestructura como las aplicaciones, permiten priorizar riesgos y evidenciar el cumplimiento de estándares.
El diagrama de Seguridad y Cumplimiento sitúa la plataforma Qualys como núcleo de esta capa de seguridad y subdivide su funcionalidad en VMDR, WAS y Compliance.

### 3.1. Herramientas de escaneo y análisis

- **VMDR (Vulnerability Management, Detection and Response)**: módulo de Qualys que gestiona vulnerabilidades. Utiliza técnicas de scoring, como TruRisk, para identificar y clasificar las vulnerabilidades más críticas.

  - **Alcance**: realiza escaneos diarios por dentro y por fuera de los servidores; releva configuraciones internas y puertos abiertos externos, comparándolos con la base de datos de vulnerabilidades más reciente para generar reportes con gravedad y sugerencias de remediación.
  - **Responsable**: equipo DevOps (administrador: Agustín).

- **WAS (Web Application Scanning)**: realiza escaneos externos sobre aplicaciones web y utiliza un banco de ataques de referencia para identificar vulnerabilidades de configuración o código.

  - En el caso de APIs, se importa la colección de pruebas (p.ej., Postman) y se escanean todos los endpoints.
  - **Responsable**: equipo DevOps (administrador: Agustín).

- **Compliance**: módulo que valida el cumplimiento de políticas y normas. Qualys verifica que las operaciones tecnológicas y los datos cumplan con leyes y estándares (actualmente se valida contra la norma de la industria de tarjetas de crédito).

  - Permite definir políticas internas, generar evidencias y facilitar auditorías.

- **Qualys Platform**: plataforma SaaS que integra los módulos anteriores y ofrece inventario de activos, reportes y remediación.
  - Centraliza la gestión de activos y vulnerabilidades y sirve como punto de control para los equipos de seguridad y operaciones.

#### Diferenciación de escaneos

| Tipo de escaneo             | Herramienta   | Objetivo y alcance                                                                                                  |
| --------------------------- | ------------- | ------------------------------------------------------------------------------------------------------------------- |
| Infraestructura             | VMDR          | Detectar vulnerabilidades en configuraciones y sistemas operativos; revisar puertos abiertos y servicios expuestos. |
| Aplicaciones                | WAS           | Identificar fallos en aplicaciones web y APIs mediante técnicas de pentesting automatizado.                         |
| Gestión de vulnerabilidades | VMDR + Qualys | Priorizar riesgos y automatizar la remediación utilizando puntuaciones de riesgo.                                   |
| Compliance normativo        | Compliance    | Verificar cumplimiento de normas y políticas, actualmente alineado con la norma de tarjetas de crédito.             |

## 4. Monitoreo y Alertamiento

![Monitoreo y Alertamiento](/img/seguridad/monitoringAlerting.jpg)

> **Figura 3.** _Flujo general del proceso Monitoreo y Alertamiento_

### Estrategia de monitoreo

El monitoreo de EDYE cubre tanto la disponibilidad de servicios como el rendimiento. Se vigilan APIs, aplicaciones, bases de datos, integraciones de terceros e infraestructura, así como la experiencia del usuario mediante pruebas externas (black box). La meta es garantizar un SLA de 99,9 % de disponibilidad y reaccionar rápidamente ante fallos.

### 4.1. Métricas supervisadas

Las métricas se clasifican en:

- **Métricas de infraestructura**: uso de CPU, memoria, disco y estado de servicios. Se recolectan y exponen a Prometheus.
- **Logs de servidores y aplicaciones**: registros de aplicaciones y microservicios, que se envían a Loki para su indexación y búsqueda.
- **Desempeño de servicios**: tiempos de respuesta de API, tasa de errores 5xx y disponibilidad, enviados a Grafana a través de Black Box (QoS).
- **Pruebas externas (black box)**: verifica desde fuera la disponibilidad y tiempos de respuesta mediante chequeos HTTP/HTTPS, DNS, TCP e ICMP. Se ejecuta de forma independiente con servidores en Estados Unidos y Brasil.

### 4.2. Herramientas y funciones

- **Prometheus**: recopila métricas de infraestructura mediante un modelo de extracción y las almacena en una base de datos de series temporales. Utiliza PromQL para consultar datos y remite la información a Grafana para su visualización.
- **Loki**: sistema de agregación de logs multiusuario que indexa metadatos y permite búsquedas eficientes; Grafana utiliza estos datos para visualizaciones.
- **Black Box (QoS)**: exportador de Prometheus que prueba la disponibilidad y el rendimiento de endpoints; admite chequeos HTTP/HTTPS, DNS, TCP e ICMP.
- **Grafana**: plataforma de análisis y visualización que centraliza métricas y logs, permite configurar dashboards y alertas; su administración corresponde al equipo de DevOps.

### 4.3. Modelo de alertas

Los equipos establecen umbrales y canales para notificaciones:

- **Canales de alerta**: Slack y correo electrónico.
- **Severidad**: info, warning y critical.
- **Umbrales de ejemplo**: latencia > 500 ms (warning); disponibilidad < 99 % (critical).

Las alertas se configuran en Grafana y se alimentan de Prometheus y Loki. Los umbrales se ajustan según los acuerdos de nivel de servicio (SLA) y la criticidad de cada servicio. Los equipos de SRE y Operaciones analizan los eventos y coordinan la respuesta.

## 5. Seguridad de Código

![Seguridad de Código](/img/seguridad/codeSecurity.jpg)

> **Figura 4.** _Flujo general del proceso Seguridad de Código_

### Seguridad integrada al ciclo de desarrollo (DevSecOps)

EDYE incorpora la seguridad desde el diseño y durante el ciclo de vida del software. Las revisiones de código son obligatorias mediante pull requests con revisión por pares. Además, se integran análisis estáticos y dinámicos en la pipeline CI/CD para identificar problemas antes de llegar a producción.

### 5.1. Controles aplicados sobre repositorios de código

- **Repositorios de código**: el código fuente de la API y de las aplicaciones se almacena en GitHub, que sirve como sistema de control de versiones y colaboración.
  GitHub también proporciona información sobre accesos y actividades del repositorio.

#### Tipos de análisis

| Tipo de análisis                         | Herramienta o función | Descripción                                                                                                                    |
| ---------------------------------------- | --------------------- | ------------------------------------------------------------------------------------------------------------------------------ |
| Análisis estático de código (SAST)       | SonarQube             | Evalúa la calidad y seguridad del código durante el desarrollo, identificando bugs y vulnerabilidades antes de la compilación. |
| Análisis dinámico de aplicaciones (DAST) | OWASP ZAP             | Ejecuta pruebas de penetración automatizadas sobre aplicaciones web en ejecución para detectar vulnerabilidades.               |
| Análisis de dependencias                 | Snyk                  | Examina las bibliotecas y paquetes utilizados para identificar versiones vulnerables y recomienda actualizaciones.             |
| Code Scanning (GitHub)                   | Función de GitHub     | Busca errores y vulnerabilidades en el código del repositorio.                                                                 |
| Secret Scanning (GitHub)                 | Función de GitHub     | Escanea el historial del repositorio para detectar tokens, claves y credenciales expuestos, generando alertas automáticas.     |
| Dependency Review (GitHub)               | Función de GitHub     | Muestra los cambios en dependencias durante una pull request, con información sobre versiones y vulnerabilidades.              |
| Dependabot (GitHub)                      | Dependabot            | Automatiza la detección y actualización de dependencias obsoletas o vulnerables, creando pull requests y alertas.              |

### 5.2. Relación con CI/CD

El pipeline de integración continua y despliegue continuo (CI/CD) ejecuta los análisis de código y dependencias en cada build. De este modo, cualquier vulnerabilidad identificada por SonarQube, OWASP ZAP o Snyk bloquea la integración hasta que se resuelva. Los mecanismos de GitHub (Code Scanning, Secret Scanning, Dependency Review y Dependabot) complementan este proceso al inspeccionar automáticamente el código en los repositorios y proponer actualizaciones.
Estas prácticas refuerzan la cultura DevSecOps, donde la responsabilidad de la seguridad es compartida entre los equipos de desarrollo y operaciones.

## 6. Roles y responsabilidades

La operación de la plataforma de seguridad y monitoreo requiere una coordinación clara entre equipos:

- **Equipo DevOps / Operaciones**: responsable de la administración de Landscape, Qualys, Prometheus, Loki, Grafana y de las configuraciones de los repositorios de GitHub. Este equipo gestiona los escaneos de vulnerabilidades (VMDR y WAS), revisa los informes de compliance, ajusta los umbrales de monitoreo y coordina las acciones de remediación. Según las especificaciones, Agustín actúa como administrador de Landscape, Qualys y Grafana.
- **Equipo SRE**: define y revisa los indicadores de desempeño (SLIs), gestiona los acuerdos de nivel de servicio (SLOs) y opera el sistema de alertas. Trabaja junto con Operaciones para automatizar respuestas y escalar incidentes críticos.
- **Equipo de Seguridad**: verifica el cumplimiento de políticas, revisa los resultados de los escaneos (VMDR, WAS, SonarQube, ZAP, Snyk) y coordina auditorías de compliance. También define los criterios de aceptación de código seguro y asesora a los desarrolladores en buenas prácticas.
- **Desarrolladores**: participan en la revisión de código, corrigen vulnerabilidades reportadas por las herramientas y siguen las políticas de manejo seguro de secretos y dependencias.

## 7. Consideraciones operativas

- **Buenas prácticas**: el documento de referencia aconseja utilizar AWS Secrets Manager para el manejo de secretos, aplicar el principio de menor privilegio y evitar exponer credenciales en repositorios de código. Estos principios se deben respetar en todas las fases del ciclo de vida.
- **Límites de alcance**: esta sección describe qué se supervisa y con qué herramientas, pero no detalla configuraciones internas ni procedimientos específicos. Para información sobre la configuración de CI/CD, gestión de infraestructura como código u otras prácticas, consulte los documentos de Infraestructura y DevOps de EDYE.
- **Integración con otros documentos**: la estrategia de seguridad y monitoreo forma parte de la suite documental de EDYE. Se complementa con las guías de arquitectura, las políticas de acceso y las instrucciones de despliegue. La referencia a diagramas se incluye solo para contextualizar; no se reinterpretan flujos ni se añaden capacidades no documentadas.
