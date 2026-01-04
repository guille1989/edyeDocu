---
id: devops-ci
title: 🔄 Integración Continua (CI)
---

**Versión:** 1.0  
**Fecha:** 01/12/2025

---

## 1. Introducción

Definir los lineamientos y actividades del proceso de Integración Continua (CI) dentro del ecosistema Edye / HITN Digital, asegurando la automatización de la compilación, validación y control de calidad del código fuente antes de su despliegue.

El propósito principal de este procedimiento es reducir errores humanos, aumentar la trazabilidad de los cambios y acelerar la entrega de software estable en los entornos de staging y production, utilizando herramientas corporativas de automatización, revisión y monitoreo.

De esta forma, la Integración Continua contribuye a mantener un flujo DevOps eficiente, seguro y auditable, integrando control de versiones, pruebas automatizadas y análisis de calidad en un pipeline unificado gestionado por GitHub Actions.

---

## 2. Alcance

Este procedimiento aplica a todos los repositorios alojados en GitHub pertenecientes al ecosistema Edye, incluyendo:

- EDYE-CONNECT
- EDYE-BILLING
- EDYE-API-STANDALONE
- EDYE-CONECTA
- EDYE-ADMIN
- EDYE-PLAY
- EDYE-CLOUD
- EDYE-API-SATELITE

Cada repositorio cuenta con un pipeline CI configurado en GitHub Actions, el cual se ejecuta automáticamente ante cada pull request (PR) o push hacia las ramas principales (**stage** o **production**). El alcance incluye la construcción, análisis, validación y empaquetado del código.

---

## 3. Procedimiento

El proceso de Integración Continua (CI) en el ecosistema Edye / HITN Digital automatiza la compilación, validación, pruebas y control de calidad del código fuente mediante GitHub Actions.

### 3.1. Flujo general del proceso de Integración Continua

Cada repositorio dispone de un pipeline configurado que se activa ante un **push** o **pull request** hacia las ramas `main` o `develop`.

El siguiente diagrama representa la secuencia completa del proceso CI en Edye:

![Flujo general del proceso de Integración Continua](/img/integracion-continua-devops.jpg)

> **Figura 1.** Diagrama del flujo general del proceso de Integración Continua


### 3.2. Descripción del flujo CI


#### 3.2.1 Descripción del Pipeline – CI Cloud (Node.js)

El pipeline CI Cloud implementa el proceso automatizado de validación, construcción y despliegue de la aplicación Node.js correspondiente al entorno productivo cloud-prod.edye.com. Este flujo garantiza que únicamente las versiones aprobadas en las ramas sean distribuidas en los servidores productivos de Akamai/Linode.

**1. Disparadores del Pipeline**

El workflow se ejecuta bajo dos condiciones:

**a) Push a la rama**  
Cada commit o merge realizado sobre las ramas activa automáticamente el pipeline, iniciando el proceso de despliegue.

**b) Ejecución manual (`workflow_dispatch`)**  
Permite lanzar el pipeline desde GitHub Actions sin necesidad de realizar un commit, útil para reintentos o despliegues controlados.

**2. Entorno de Ejecución**

El job principal utiliza:

- Sistema operativo: Ubuntu 22.04
- Node.js: versión 22 (configurada mediante actions/setup-node)

Este entorno garantiza compatibilidad y reproducibilidad durante la ejecución del proceso.

**3. Etapas del Pipeline**

**- Checkout del Repositorio**

El pipeline obtiene el código fuente del repositorio mediante actions/checkout, permitiendo acceder a todo el contenido vigente en la rama.

**- Configuración de Node.js**

A través de actions/setup-node se define la versión de Node.js necesaria para ejecutar las tareas del proyecto.

**- Actualización de Dependencias**

Se ejecuta un proceso de actualización de paquetes mediante el comando npm update para asegurar versiones coherentes con el entorno productivo.

```bash
npm update
```

**- Ejecución de Pruebas Automatizadas**

Se ejecuta el script de pruebas definido en el proyecto (npm run test). Si alguna prueba falla, el pipeline finaliza y se evita un despliegue defectuoso.

```bash
npm run test
```

**- Construcción del Proyecto (Build)**

Se ejecuta el comando npm run build para generar los artefactos finales del sistema (bundle, dist o equivalentes).

```bash
npm run build
```

**- Limpieza Antes del Despliegue**

Con el objetivo de reducir el peso del paquete final, se eliminan los directorios no necesarios:

- node_modules
- .git

---

**4. Despliegue en Servidor Linode 1**

**Transferencia de Archivos (SCP)**

El pipeline utiliza appleboy/scp-action para copiar todos los archivos generados hacia el directorio del servidor: **/var/www/cloud-prod.edye.com**.

La autenticación se realiza mediante variables y secretos seguros almacenados en GitHub.

**Ejecución de Scripts en el Servidor (SSH)**

Una vez copiados los archivos, se ejecutan las siguientes acciones en el servidor:

- Carga del entorno NVM y Node.js
- Instalación de dependencias del entorno productivo (npm install)
- Reinicio del proceso Node.js mediante **PM2**, asegurando que el servicio quede activo con la nueva versión.

**Despliegue en Servidor Linode 2**

Se repite exactamente el mismo proceso aplicado en el servidor 1:

- Copia de archivos mediante SCP
- Instalación de dependencias
- Reinicio del servicio mediante PM2

Esto garantiza alta disponibilidad y consistencia entre ambos nodos productivos.

**Finalización del Pipeline**

El pipeline concluye tras completar el despliegue en los dos servidores.  
La nueva versión del servicio cloud-prod.edye.com queda operativa en ambos nodos.

**Resumen del Flujo General**

- Configuración del entorno Node.js
- Actualización de dependencias
- Ejecución de pruebas automatizadas
- Construcción del proyecto
- Limpieza de archivos no necesarios
- Transferencia de archivos a los servidores
- Instalación de dependencias en servidores
- Reinicio del servicio con PM2
- Publicación final en ambos nodos productivos

---

#### 3.2.2 Descripción del Pipeline – CI Admin - Deploy (Laravel)

El pipeline “CI Admin - Deploy” automatiza el proceso de despliegue de la aplicación Laravel Admin en el entorno stage. Su función principal es notificar a un script de despliegue en el servidor cada vez que se actualiza la rama, delegando en dicho script las tareas internas de actualización del código y del entorno.

**1. Disparadores del Pipeline**

El workflow se ejecuta en dos escenarios:

**a) Push a la rama**  
Cada vez que se realiza un commit o merge hacia las ramas, GitHub Actions dispara automáticamente este pipeline de despliegue.

**b) Ejecución manual (`workflow_dispatch`)**  
El pipeline puede ejecutarse manualmente desde la pestaña “Actions” de GitHub, lo que permite relanzar el proceso sin necesidad de generar nuevos commits.

**2. Entorno de Ejecución**

El job principal del workflow se denomina **deploy** y se ejecuta sobre:

- Sistema operativo del runner: **Ubuntu 22.04**

Este runner actúa como origen de la conexión remota hacia el servidor donde está alojada la aplicación Laravel Admin.

**3. Proceso General del Pipeline**

El pipeline consta de un único paso principal, que se encarga de invocar el proceso de despliegue remoto:

**Conexión por SSH y ejecución remota**

Se utiliza la acción `appleboy/ssh-action` para conectarse al servidor mediante SSH, usando las credenciales definidas como variables y secretos en GitHub:

- Host: definido en `ADMIN_PROD_HOST`
- Usuario: definido en `ADMIN_PROD_USER`
- Contraseña: definida en `ADMIN_PROD_PASSWORD`

Una vez establecida la conexión, el runner ejecuta en el servidor un comando `curl` que realiza una petición HTTP local:

- **Método:** POST
- **URL:** `http://127.0.0.1/deploy/deploy.php`
- **Parámetros:**
  - token enviado en la URL, obtenido del secreto `ADMIN_PROD_TOKEN`
  - cuerpo JSON con el campo `ref` indicando la referencia de la rama: `"refs/heads/production"`

Este POST activa el script `deploy.php` en el propio servidor, el cual es el responsable de ejecutar internamente las acciones necesarias para actualizar la aplicación con la última versión del código de la rama (por ejemplo, obtener cambios del repositorio, actualizar dependencias, ejecutar tareas de Laravel, limpiar cachés, etc., según esté configurado en dicho script).

**4. Flujo Lógico del Despliegue**

De forma resumida, el flujo del pipeline es el siguiente:

- Se detecta un cambio en la rama o se lanza el workflow manualmente.
- GitHub Actions inicia el job **deploy** en un runner Ubuntu 22.04.
- El runner se conecta por SSH al servidor utilizando las credenciales seguras configuradas en GitHub.
- En el servidor, se ejecuta una petición HTTP local (`curl`) a `deploy.php` con:
  - un token de seguridad
  - la referencia de la rama como parámetro
- El script `deploy.php` procesa la solicitud y ejecuta el flujo de despliegue definido para la aplicación Laravel Admin.
- Finalizado el script de despliegue, la nueva versión de la aplicación queda disponible en el entorno **stage/**.

**5. Enfoque DevOps**

Este pipeline se alinea con la estrategia DevOps del ecosistema Edye al:

- Centralizar el despliegue de entornos en GitHub Actions.
- Mantener las credenciales y tokens gestionados como secretos en GitHub.
- Delegar en un script del servidor (`deploy.php`) la lógica específica del despliegue Laravel, permitiendo adaptar y extender el proceso sin modificar el pipeline.
- Facilitar relanzar despliegues de forma controlada y repetible mediante la opción manual (`workflow_dispatch`).

---

### 3.3. Políticas de ejecución y validación

- El Pull Request necesita aprobación por parte del área técnica.
- Todo Merge debe superar el pipeline CI.
- Se requiere mínimo un revisor técnico para el merge a Stage y Production.

---

### 3.4. Estructura de Archivos del Pipeline

Cada repositorio del ecosistema Edye debe contener un archivo principal del workflow de Integración Continua en la siguiente ruta: **.github/workflows/ci.yml**

Ejemplo básico de configuración  
_[Estructura de Archivos del Pipeline](https://drive.google.com/file/d/1SvEgbb7Nh5Z_eFrrlLFLRECpUTM_qHEQ/view?usp=drive_link)_

---

### 3.5. Convenciones de ramas y triggers

El control de versiones y la ejecución de pipelines CI se basan en la siguiente estructura de ramas:

| Rama           | Propósito                                | Pipeline asociado                                                       |
| -------------- | ---------------------------------------- | ----------------------------------------------------------------------- |
| **main**       | Código de producción estable.            | No aplica pipeline. <br/>SCI limitado a test y lint.                    |
| **stage**      | Entorno de staging o pruebas integradas. | Stack Node.js pipeline por rama. <br/>Stack Laravel pipeline por rama.  |
| **production** | Entorno de producción.                   | Stack Node.js pipeline por rama. <br/>SStack Laravel pipeline por rama. |
| **Satellite**  | Entorno especial (NY).                   | Stack Laravel pipeline por rama.                                        |

---

## 4. Herramientas

Las principales herramientas empleadas en la Integración Continua de Eddy son:

| Categoría                 | Herramienta    | Uso principal                                              |
| ------------------------- | -------------- | ---------------------------------------------------------- |
| Repositorios y versionado | GitHub         | Gestión de código, PR, control de ramas y workflows CI/CD. |
| Automatización de CI/CD   | GitHub Actions | Ejecución automática de pipelines y validaciones.          |
