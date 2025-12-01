---
id: devops-operaciones
title: Operaciones DevOps
---

# Operaciones DevOps

**Versión:** 1.0  
**Fecha:** 01/12/2025

---

## 1. Introducción

El propósito de este documento es establecer los **procedimientos**, **herramientas** y **responsabilidades** que aseguren la **estabilidad**, **disponibilidad**, **monitoreo continuo** y **continuidad operativa** de los servicios digitales del ecosistema **Edye / HITN Digital**.

El proceso de **Operaciones DevOps** garantiza que todos los sistemas funcionen de manera segura y con el máximo rendimiento, mediante un **monitoreo proactivo**, la **gestión oportuna de incidentes** y la ejecución de **actividades de mantenimiento preventivo** que permiten anticipar fallas y reducir interrupciones del servicio.

---

## 2. Alcance

Este procedimiento aplica a todos los componentes productivos y de soporte del ecosistema **Edye**, incluyendo:

- **Admin**
- **API**
- **Satélite**
- **Billing**
- **Cloud**
- **Play**
- **Conecta**
- **Conect**

Entornos aplicables:

- **Staging**
- **Producción**

Comprende las siguientes actividades:

- Administración y observabilidad de la infraestructura.
- Detección, análisis y resolución de incidentes.
- Monitoreo del rendimiento y seguridad.
- Planes de contingencia, respaldo y continuidad del servicio.

---

## 3. Procedimiento

El proceso de Operaciones DevOps garantiza la supervisión continua de los servicios, la detección temprana de anomalías y la respuesta ágil ante fallos o degradaciones, manteniendo la trazabilidad y comunicación entre los equipos DevOps.

---

## 3.1. Monitoreo y observabilidad

El monitoreo se ejecuta en tiempo real sobre la infraestructura y los servicios clave, recolectando métricas, logs y eventos que se visualizan en los tableros operativos corporativos.

| Categoría                                                        | Herramienta              | Función principal                                                                                                       |
| ---------------------------------------------------------------- | ------------------------ | ----------------------------------------------------------------------------------------------------------------------- |
| Seguridad y vulnerabilidades                                     | Qualys                   | Escaneo de vulnerabilidades, cumplimiento PCI-DSS y alertas críticas.                                                   |
| Métricas de usuarios. Logs y alertas. Métricas e infraestructura | https://monitor.edye.com | Seguimiento de uso, consumo de contenidos y rendimiento del frontend, con centralización de logs y alertas automáticas. |
| Métricas estatus de servicios Edyes                              | https://status.edye.com/ | Panoramio global de funcionamiento de todos los servicios Edyes.                                                        |

---

## 3.2. Procedimiento de monitoreo

- Captura de métricas en tiempo real desde servidores y aplicaciones.
- Evaluación automática de umbrales críticos (CPU > 80%, error rate > 2%).
- Registro del incidente en Monday.
- Ejecución de análisis post-evento con definición de acciones correctivas.

---

### 3.2.1. STATUS de servicios EDYE (https://status.edye.com/)

El Service Status de Edye es la plataforma pública de monitoreo externo del ecosistema Edye / HITN Digital. Proporciona una vista consolidada del estado operativo de todos los servicios y permite evaluar la disponibilidad histórica mediante indicadores precisos de uptime, facilitando la detección temprana de incidencias y la transparencia con partners y equipos internos.

Este panel muestra:

**Estado general del ecosistema**  
En la parte superior se presenta un indicador global (All systems Operational), que resume la disponibilidad actual de toda la plataforma.  
El estado varía dinámicamente entre:

- Operational (Verde)
- (Amarillo)
- (Rojo)

![Estado general del ecosistema](/img/operaciones/estado-general-edyes-devops.jpg)

> **Figura 1.** _Estado general del ecosistema._

**Uptime histórico (últimos 90 días)**  
Cada servicio dispone de un gráfico de barras que representa su disponibilidad diaria durante los últimos 90 días.  
El uso de colores permite identificar rápidamente:

- Verde → disponibilidad normal
- Amarillo → degradación parcial
- Rojo → indisponibilidad total

![Uptime histórico](/img/operaciones/uptime-edyes-devops.jpg)

> **Figura 2.** _Uptime histórico últimos 90 días._

**Servicios monitoreados**  
El panel incluye los módulos principales de Edye:

- EDYE API
- EDYE Billing
- EDYE Cloud
- EDYE Com
- EDYE Conecta
- EDYE Connect
- EDYE Play

Cada uno con su porcentaje exacto de disponibilidad (ej. 99.997%), indicador de estado y su historial de uptime.

![Servicios monitoreados](/img/operaciones/uptime-marker-edyes-devops.jpg)

> **Figura 3.** _Servicios monitoreados últimos 90 días._

**Actualización automática**  
El sistema se actualiza en intervalos regulares (por ejemplo, cada pocos segundos), permitiendo información prácticamente en tiempo real, como se indica con el contador de actualización (Next update in X sec).

![Actualización automática](/img/operaciones/upgrade-edyes-devops.jpg)

> **Figura 4.** _Actualización automática dashboard._

**Overall Uptime (últimas 24h · 7 días · 30 días · 90 días)**  
El panel incluye métricas consolidadas de disponibilidad global del ecosistema:

- 99.978% – Últimas 24 horas
- 99.948% – Últimos 7 días
- 99.919% – Últimos 30 días
- 99.939% – Últimos 90 días

Este bloque permite evaluar la estabilidad general de la plataforma a lo largo del tiempo y detectar tendencias de mejora o degradación.

![Overall Uptime](/img/operaciones/overall-uptime-edyes-devops.jpg)

> **Figura 5.** _Overall Uptime._

**Registro de incidentes y actualizaciones (Status Updates)**  
El panel incorpora un área de actualizaciones que muestra incidentes reportados, mantenimientos programados o problemas históricos.

Esto indica que no se han producido incidentes relevantes en el último mes.  
El enlace “Status update history” da acceso al historial completo de eventos registrados.

![Registro de incidentes y actualizaciones](/img/operaciones/status-update-edyes-devops.jpg)

> **Figura 6.** _Registro de incidentes y actualizaciones._

**Propósito dentro del ecosistema**  
El servicio cumple funciones claves:

- Monitoreo externo (Blackbox monitoring). Verifica disponibilidad desde fuera de la infraestructura, detectando caídas, errores de conectividad o expiración de certificados.
- Transparencia con partners y clientes. Permite a operadores, equipos comerciales y stakeholders verificar rápidamente la salud del sistema.
- Complemento a Grafana / Loki / Prometheus. Mientras Grafana centraliza métricas internas, el panel de Service Status muestra la perspectiva del usuario final.

---

### 3.2.2. Monitor https://monitor.edye.com (Grafana)

El Monitor Edye es la plataforma interna de observabilidad centralizada del ecosistema Edye / HITN Digital. Está construido sobre Grafana y consolida métricas en tiempo real provenientes de servidores, aplicaciones, APIs, bases de datos y servicios externos críticos. Su propósito es permitir detección temprana de anomalías, supervisión continua del rendimiento y trazabilidad completa ante incidentes operativos.

Este sistema complementa el monitoreo externo (https://status.edye.com) proporcionando una visión profunda del comportamiento interno de la infraestructura, mientras que Status Edye muestra únicamente la experiencia del usuario final (blackbox monitoring).

**Vista General del Estado del Sistema**

La pantalla principal del Monitor Edye presenta un resumen en tiempo real del estado de los servicios y servidores del ecosistema.

![Vista General del Estado del Sistema](/img/operaciones/dashboard-edyes-devops.jpg)

> **Figura 6.** _Vista general del sistema (Dashboard principal)._

En este panel se visualiza:

- Estado actual de los servicios (OK / Degraded / Down)
- Consumo de recursos por servidor (CPU, RAM, Load Average)
- Rendimiento del API: latencia promedio, errores por minuto, throughput
- Estado de procesos internos (cron jobs, workers, PM2, servicios Laravel)
- Alertas activas o degradaciones detectadas

**Métricas de Infraestructura**

El sistema recoge y gráfica métricas de cada uno de los servidores del ecosistema, incluyendo:

**CPU y RAM**

_Figura X. Consumo de CPU y memoria en servidores Edye._

Indicadores principales:

- Uso promedio y picos de CPU
- Consumo de memoria RAM por servicio
- Tendencias de carga horaria/diaria
- Eventos de saturación (>80%) que disparan alertas automáticas

**Latencia y tiempos de respuesta**

Se incluyen gráficos que muestran:

- Tiempo de respuesta del API por endpoint
- Latencia del frontend (Play)
- Métricas de consultas a MySQL y MongoDB

_Figura X. Latencia y tiempo de respuesta del API Edye_

**Consumo de Contenidos y Métricas del Frontend**

Una de las secciones más relevantes del panel monitorea en tiempo real:

_Figura X. Consumo de contenidos y rendimiento del frontend_

Incluye:

- Conteo de reproducciones por minuto/hora
- Consumo de contenidos (VOD, Live)
- Distribución por país o partner
- Usuarios activos concurrentes
- Eventos de error en reproducción

Esta información permite detectar caídas de CDN, picos de tráfico anómalos o problemas de integración con JW Player.

**Logs Centralizados y Detección de Errores**

El panel incluye vistas integradas con Loki, mostrando:

![Logs Centralizados y Detección de Errores](/img/operaciones/logs-edyes-devops.jpg)

> **Figura X.** _Logs centralizados y errores de sistema (Loki)._

- Logs de Nginx (Play/Cloud)
- Logs de Apache (servicios Laravel)
- Logs de PM2 para Node.js
- Logs de errores de API

Opciones incluidas:

- Filtros por servicio, nivel, fecha u ocurrencia del error
- Búsqueda avanzada por endpoint, tag, partner o ID de contenido
- Vista correlacionada entre logs + métricas para diagnóstico rápido

**Alertas Automáticas**

El sistema posee reglas configuradas para notificar al equipo operativo cuando ocurre alguna anomalía.

_Figura X. Alertas automáticas del Monitor Edye_

Alertas configuradas:

- CPU > 80% sostenido
- RAM > 85%
- Latencia API > 500 ms
- Error Rate > 2%
- Caída de algún servicio (Node.js, Laravel, PM2, Apache)
- Falla de integraciones (VTR, Claro, Pagoralia, InPlayer)
- Falla de cron jobs o procesos de sincronización

Notificaciones:

- Email automático
- Registro en Monday como incidente (cuando aplica el procedimiento)

**Diagnóstico y Acciones Operativas**

El monitor se utiliza como fuente principal de información durante:

- Gestión de incidentes
- Postmortems
- Validación post-deploy
- Análisis de degradación de performance

Permite:

- Comparar curvas antes/después de un despliegue
- Identificar picos en CPU/RAM producto de bugs
- Revisar patrones de error repetidos
- Detectar partners que generan sobrecarga o errores frecuentes

**Integración con el Proceso DevOps**

El Monitor Edye se integra directamente en el flujo de DevOps:

- Revisión automática tras cada despliegue (CI/CD)
- Monitoreo continuo para decisiones de rollback
- Métricas que alimentan el tablero de incidentes
- Validación del estado de los servicios antes de iniciar entregas a partners

---

## 3.3. Gestión de incidentes

Cada incidente se gestiona de acuerdo con su tipo, impacto y prioridad.  
El proceso garantiza trazabilidad completa desde la detección hasta la resolución final.

| Tipo de incidente                      | Procedimiento                                                     |
| -------------------------------------- | ----------------------------------------------------------------- |
| Falla en servidor o servicio           | Notificación automática → diagnóstico → reinicio o rollback.      |
| Errores en API o endpoints             | Validación Swagger → revisión de logs → hotfix en GitHub.         |
| Vulnerabilidades críticas              | Escalamiento al CISO → remediación inmediata.                     |
| Degradación de rendimiento             | Análisis en Grafana → ajuste de recursos.                         |
| Problemas con partners o integraciones | Verificación de paquetes → reenvío controlado o rollback parcial. |

## 3.4. Continuidad operativa y mantenimiento

- Backups automáticos diarios en Akamai Cloud Storage.
- Revisiones semanales de logs y paquetes del sistema.
- Actualización programada de paquetes (APT Update/Upgrade).
- Pruebas de restauración trimestrales desde snapshots.
- Reinicio planificado de servicios fuera de horario operativo.

---

## 3.5. Flujo de gestión de incidencias

![Flujo de gestión de incidencias](/img/operaciones/diagrama-incidentes-edyes-devops.jpg)

> **Figura X.** _Diagrama del flujo de gestión de incidentes operativos DevOps._

**Descripción general del flujo:**

**Fases:**

**Detección**  
Monitoreo detecta anomalía o alerta de Grafana / Qualys.

**Registro**  
Se crea ticket en Monday (tipo, prioridad, impacto).

**Clasificación**  
Se evalúa el impacto en usuarios, servicios o integraciones.

**Diagnóstico**  
Revisión de logs (Loki), métricas, API, infraestructura.

**Acción correctiva**

- Reinicio de servicios
- Rollback
- Hotfix
- Ajuste de infraestructura
- Coordinación con partners si aplica

**Validación**  
Confirmación mediante healthchecks y monitoreo.

**Documentación**  
Registro de causa raíz, impacto, tiempos, correcciones.

---

## 3.6. Configuración de Servidores Web (Nginx)

Esta sección documenta la configuración estándar de Nginx para las aplicaciones Node.js del ecosistema Edye en los entornos de staging y producción.

Actualmente aplican principalmente a:

- **CLOUD (cloud.edye.com)** – Aplicación Node.js expuesta a través de proxy reverso.
- **PLAY (play.edye.com)** – Frontend web (Next.js/Node.js) expuesto vía Nginx, con control de métodos y cabeceras de seguridad.

---

### 3.6.1. Patrón general de proxy reverso para aplicaciones Node.js

Todas las aplicaciones Node.js se publican mediante Nginx como reverse proxy hacia un proceso Node que escucha en `localhost:3000` (o el puerto que se defina en cada servidor).

**Patrón base:**

- `listen` en la IP interna del servidor, puerto 80 (o 443 si el TLS termina en la misma instancia).
- `server_name` con el dominio de la aplicación (cloud.edye.com, play.edye.com, etc.).
- `location /` apuntando a `proxy_pass http://localhost:3000;`.

**Cabeceras estándar:**

- `proxy_set_header Host $host;`
- `proxy_set_header Upgrade $http_upgrade;`
- `proxy_set_header Connection 'upgrade';`

**Timeouts:**

- `proxy_read_timeout 60s;`
- `send_timeout 60s;`

**Optimización:**

- `gzip on;` y `gzip_types` para contenidos estáticos y JSON.
- Buffers de proxy (`proxy_buffer_size`, `proxy_buffers`, `proxy_busy_buffers_size`).

**Seguridad básica:**

- Ocultar cabeceras de tecnología:  
  `proxy_hide_header X-Powered-By;`  
  `more_clear_headers Server;`

Este patrón se reutiliza en las configuraciones específicas de **CLOUD** y **PLAY**.

---

### 3.6.2. Configuración Nginx – cloud.edye.com (CLOUD)

Archivo de configuración (producción y/o staging):

- Ruta sugerida: /etc/nginx/sites-available/cloud-prod-proxy.conf
- Enlace simbólico: /etc/nginx/sites-enabled/cloud-prod-proxy.conf

Configuración:

```bash
server {
    listen 192.168.130.157:80;
    server_name cloud.edye.com;
    more_clear_headers Server;
    location / {
        proxy_pass http://localhost:3000;
        proxy_http_version 1.1;
        proxy_set_header Upgrade $http_upgrade;
        proxy_set_header Connection 'upgrade';
        proxy_set_header Host $host;
        proxy_cache_bypass $http_upgrade;
        proxy_hide_header X-Powered-By;
        proxy_read_timeout 60s;
        send_timeout 60s;
    }
    client_max_body_size 10m;
    gzip on;
    gzip_types text/plain text/css application/json application/javascript application/xml;
    gzip_min_length 256;
    proxy_buffer_size 128k;
    proxy_buffers 4 256k;
    proxy_busy_buffers_size 256k;
}
```

**Puntos clave:**

**Escucha y dominio**  
Los servidores escuchan al balanceador en (IP interna):80.

**Proxy a Node.js**

- Todas las peticiones (/) se redirigen a `http://localhost:3000`, donde corre la app Node.
- Se habilita soporte para WebSockets (`Upgrade` / `Connection 'upgrade'`).

**Seguridad y headers**  
`more_clear_headers Server;` y `proxy_hide_header X-Powered-By;` evitan exponer detalles de la tecnología.

**Tamaño de carga**  
`client_max_body_size 10m;` limita el tamaño máximo de archivos subidos a 10 MB.

**Rendimiento**

- `gzip on;` + `gzip_types` para comprimir texto, JSON, JS, XML.
- Configuración de buffers para manejar respuestas grandes sin penalizar memoria.

---

### 3.6.3. Configuración Nginx – play.edye.com (PLAY)

Archivo de configuración (producción y/o staging):

- Ruta sugerida: /etc/nginx/sites-available/play-proxy.conf
- Enlace simbólico: /etc/nginx/sites-enabled/play-proxy.conf

Configuración:

```bash
server {
    listen 192.168.222.103:80;
    server_name play.edye.com; # Replace with your domain
    # REDIRECT HECHO EN EL CODIGO DEL APP
    if ($http_x_forwarded_proto = "http") {
        return 301 https://$host$request_uri;
    }
    location / {
        if ($request_method !~ ^(GET|HEAD|OPTIONS)$) { return 405; }
        proxy_pass http://localhost:3000;
        proxy_http_version 1.1;
        proxy_set_header Upgrade $http_upgrade;
        proxy_set_header Connection 'upgrade';
        proxy_set_header Host $host;
        proxy_cache_bypass $http_upgrade;
        proxy_hide_header X-Powered-By;
        proxy_read_timeout 60s;
        send_timeout 60s;
        #proxy_set_header   X-Real-IP            $remote_addr;
        #proxy_set_header   X-Forwarded-For      $proxy_add_x_forwarded_for;
        proxy_set_header   X-Forwarded-Proto    $http_x_forwarded_proto;
    }
    # API search — allow POST (and GET if needed)
    location = /api/search {
        if ($request_method !~ ^(POST)$) { return 405; }
        proxy_pass http://localhost:3000;
        proxy_http_version 1.1;
        proxy_set_header Upgrade $http_upgrade;
        proxy_set_header Connection 'upgrade';
        proxy_set_header Host $host;
        proxy_cache_bypass $http_upgrade;
        proxy_hide_header X-Powered-By;
        proxy_read_timeout 60s;
        send_timeout 60s;
        proxy_set_header   X-Forwarded-Proto    $http_x_forwarded_proto;
    }
    more_clear_headers Server;
    add_header X-Frame-Options "SAMEORIGIN" always;
    add_header X-XSS-Protection "1; mode=block" always;
    add_header X-Content-Type-Options "nosniff" always;
    add_header Referrer-Policy "no-referrer-when-downgrade" always;
    add_header Strict-Transport-Security "max-age=31536000; includeSubDomains; preload" always;
    #add_header Content-Security-Policy "default-src 'self'; img-src 'self'>
    client_max_body_size 512K;  # Adjust the size as needed
    gzip on;
    gzip_types text/plain text/css application/json application/javascript >
    gzip_min_length 256;
    proxy_buffer_size 128k;
    proxy_buffers 4 256k;
    proxy_busy_buffers_size 256k;
}
```

**Puntos clave:**

**Escucha y dominio**  
Los servidores escuchan al balanceador en (IP local):80.

**Redirección a HTTPS**  
Se usa la cabecera `X-Forwarded-Proto` para forzar HTTP → HTTPS:

```bash
if ($http_x_forwarded_proto = "http") {
    return 301 https://$host$request_uri;
}
```

Esto asume que el TLS termina en un balanceador o capa anterior que inyecta X-Forwarded-Proto.

**Restricción de métodos en /**  
Solo se permiten **GET, HEAD y OPTIONS** para la app web (`location /`).  
Cualquier otro método (POST, PUT, DELETE, etc.) devuelve **405 Method Not Allowed**.

Esto ayuda a:

- Reducir superficie de ataque.
- Asegurar que las operaciones de lectura pasen por la app web, y las de escritura se controlen en endpoints específicos.

**Endpoint específico `/api/search`**  
Se define `location = /api/search` con comportamiento distinto:

- Solo permite POST. Si el método no es POST ⇒ **405**.
- Redirige también a `http://localhost:3000` pero con esa política de métodos.

Útil para búsquedas o endpoints que requieren payload.

**Cabeceras de seguridad**

- `X-Frame-Options "SAMEORIGIN"`: evita que el sitio se incruste en iframes de otros dominios.
- `X-XSS-Protection "1; mode=block"`: protección básica contra XSS en navegadores antiguos.
- `X-Content-Type-Options "nosniff"`: evita que el navegador infiera tipos de contenido.
- `Referrer-Policy "no-referrer-when-downgrade"`: controla envío del header `Referer`.
- `Strict-Transport-Security` (HSTS): obliga a usar HTTPS en el dominio y subdominios durante un año.

**Tamaño de petición**  
`client_max_body_size 512K;` limita el tamaño de payload (más agresivo que en CLOUD).

**Rendimiento**  
Configuración de `gzip` y buffers similar a CLOUD.

---

### 3.6.4. Operación y mantenimiento de configuraciones Nginx

Para todos los servidores de staging y producción:

**Ubicación de archivos**

`/etc/nginx/sites-available/<nombre>.conf`
`/etc/nginx/sites-enabled/<nombre>.conf (symlink)`

**Validación de configuración**

- Antes de aplicar cambios:

`nginx -t`

Si la prueba es exitosa:

`systemctl reload nginx`

Cualquier error debe quedar registrado en los logs del sistema:

`/var/log/nginx/error.log`

**Buenas prácticas**

- No exponer IPs públicas ni puertos internos en la documentación externa.
- Mantener consistente el uso de `X-Forwarded-Proto`, `Host` y otras cabeceras entre CLOUD y PLAY.
- Documentar cambios relevantes en Monday vinculando la tarea al cambio en Nginx y al commit de GitHub (si aplica).

---

## 3.7. Gestión de procesos Node.js (PM2)

PM2 es el administrador de procesos utilizado para ejecutar las aplicaciones Node.js en los servidores de **staging** y **producción** del ecosistema Edye.

En los servidores actuales **no se utiliza un archivo** `ecosystem.config.js`, sino que los procesos se levantan directamente con comandos PM2 individuales.

---

### 3.7.1 Modelo de ejecución

Las aplicaciones Node.js (Play y Cloud) se ejecutan mediante:

`pm2 start <script>.js --name "<nombre-app>"`

El estado de las aplicaciones se gestiona directamente con PM2:

```bash
pm2 status
pm2 restart <identificador de la aplicación en pm2>
pm2 stop <identificador de la aplicación en pm2>
pm2 delete <identificador de la aplicación en pm2>
```

**Como no existe archivo de ecosistema**, toda la configuración depende de:

- Los comandos iniciales usados al ejecutar `pm2 start`
- Los valores persistentes almacenados en PM2
- La configuración del módulo pm2-logrotate

---

### 3.7.2 Módulo activo: pm2-logrotate

El servidor tiene habilitado el módulo **pm2-logrotate**, encargado de rotar automáticamente los logs de cada aplicación.

**Configuración actual:**

```bash
pm2 set pm2-logrotate:max_size 100M
pm2 set pm2-logrotate:retain 10
pm2 set pm2-logrotate:compress true
pm2 set pm2-logrotate:dateFormat YYYY-MM-DD
pm2 set pm2-logrotate:workerInterval 30
pm2 set pm2-logrotate:rotateInterval 0 0 * * *
pm2 set pm2-logrotate:rotateModule true
```

**Esto garantiza:**

- Log rotation automática
- Control de tamaño
- No saturar el disco
- Logs comprimidos en los entornos

---

### 3.7.3 Ubicación de logs

PM2 crea sus logs en:

```bash
~/.pm2/logs/<app>-out.log
~/.pm2/logs/<app>-error.log
```

Después de rotar:

```bash
~/.pm2/logs/<app>-out-2025-01-13.log.gz
```

**Importante:**

Estos logs se consumen junto con `nginx/error.log` y `nginx/access.log` para análisis post-incidente (ver sección 3.5 del documento de Operaciones).

---

### 3.7.4 Persistencia y arranque automático

Como no existe un archivo ecosystem, PM2 persiste el estado actual mediante:

```bash
pm2 save
pm2 startup
```

Esto garantiza que:

- Las apps se levanten automáticamente tras un reinicio del servidor
- Los cambios se mantengan aun sin ecosystem

---

### 3.7.5 Recomendaciones operativas

- Mantener `pm2 save` después de cualquier cambio de procesos
- Verificar logs después de deploy:
  `pm2 logs <app> --lines 100`
- Evitar ejecutar `pm2 delete all` en producción
- Revisar tamaño del disco periódicamente:
  `du -sh ~/.pm2/logs`

  ***

## 4. Herramientas

| Categoría                                      | Herramienta                                                                                    | Uso principal                                                                     |
| ---------------------------------------------- | ---------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------- |
| Monitoreo, métricas, alertas, y notificaciones | Grafana (Monitoreo de las métricas) / Prometheus (Junta status servidores) / Loki (Junta Logs) | Supervisión de disponibilidad y rendimiento. Visualización de logs centralizados. |
| Seguridad y cumplimiento                       | Qualys                                                                                         | Escaneo, gestión de accesos y cumplimiento normativo.                             |
| Gestión operativa                              | Monday                                                                                         | Registro, trazabilidad y documentación de incidentes.                             |
