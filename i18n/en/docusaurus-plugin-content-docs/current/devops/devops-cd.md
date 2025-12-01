---
id: devops-cd
title: Entrega Continua (CD)
---

# Entrega Continua (CI)
**Versión:** 1.0  
**Fecha:** 01/12/2025  

---
## 1. Introducción
Definir la arquitectura técnica, configuración y políticas de acceso a los servidores que soportan los entornos de staging y production del ecosistema Edye.

---

## 2. Alcance
El presente procedimiento aplica a todos los servidores y entornos del ecosistema Edye, incluyendo los servicios:  
Admin, API, Satélite, Billing, Cloud, Play, Conecta y Conect, en sus ambientes de staging y production.

El alcance de este documento DevOps comprende únicamente las actividades relacionadas con la estabilidad, disponibilidad, seguridad y continuidad operativa de los servicios desplegados en dichos entornos.

---

## 3. Procedimiento
El proceso de Entrega Continua (CD) permite desplegar versiones estables del software en los entornos definidos mediante flujos automatizados y reproducibles.  
Los despliegues se gestionan a través de GitHub Actions y herramientas de monitoreo integradas.

---

## 3.1. Arquitectura general de entornos
La infraestructura de Edye se encuentra alojada en Linode (Akamai Cloud) y organizada en tres niveles principales:

- **Staging:** entorno intermedio para validación funcional y pruebas de QA.  
- **Production:** entorno activo con servicios en operación.

**Configuración técnica general:**

- Servidor Web: Linode/Ubuntu  
- Base de datos: MongoDB, MySQL  
- Despliegues: automatizados mediante GitHub Actions

---

### 3.1.1. Arquitectura general de servidores y DNS

- *[**Linode servidores**](https://docs.google.com/spreadsheets/d/19VrWJu_G5nqdRHV1idEApHZ80LjAlgtPcORP6zDS-y8/edit?usp=drive_link)*
- *[**Nombres de dominio**](https://docs.google.com/spreadsheets/d/1x-BnfqmrZmFQHwP7ihllWhJsTDkXjA37w5z9jj-uCDE/edit?usp=drive_link)*

---

## 3.2. Acceso y autenticación a servidores/Bases de datos

### Acceso a servidor Linode
El acceso a los servidores del ecosistema Edye se realiza mediante los siguientes lineamientos:

- Conexión SSH segura, restringida por firewall.  
- Autenticación mediante clave pública (SSH Key) sobre el puerto 22/TCP.  
- Acceso limitado únicamente a roles autorizados:
  - Administradores (Admin / DevOps).

### Acceso a Bases de Datos

El ecosistema Edye opera con dos motores principales:

- **MySQL** (servicios Laravel: Admin, API, Billing, Conecta, Connect, Satélite)  
- **MongoDB** (servicios Node.js: Play y Cloud)

Cada tecnología cuenta con políticas particulares:

---

### MySQL

**Método de conexión:**

- Acceso únicamente desde servidores autorizados dentro de la red interna Linode.  
- No se permiten conexiones externas públicas.  
- Autenticación mediante usuario y contraseña.  
- Puerto estándar: **3306/TCP**  

**Usos principales:**

- Gestión de usuarios (API / Connect / Billing).  
- Sincronización de metadata.  
- Procesos de facturación y suscripción.  

---

### MongoDB

Utilizado por EDYE-PLAY y EDYE-CLOUD como base de datos NoSQL.

**Método de conexión:**

- Acceso interno por puerto **27017/TCP**  
- Autenticación mediante usuario y contraseña  
- Sin acceso público: solo red privada Linode / VPN  

**Usos principales:**

- Registro y analítica de eventos de usuario (Cloud)  
- Perfiles, preferencias y estados de reproducción (Play)  

---
## 3.3. Flujo del proceso de entrega continua

![Flujo del proceso de entrega continua](/img/entrega-continua-devops.jpg)
> **Figura 1.** Diagrama del flujo de Entrega Continua DevOps

**Descripción del flujo:**

### Despliegue automatizado

El pipeline ejecuta automáticamente el procedimiento de despliegue correspondiente al tipo de tecnología:x

#### Servicios Laravel (Apache)
- `git pull`
- `composer install` / optimización
- `php artisan migrate` *(solo en 1 nodo de Production)*
- Reinicio de Apache

#### Servicios Node.js (Nginx + PM2)
- Transferencia del build via SCP
- `pm2 reload`

---

### Validación Post-Deploy

Una vez desplegado en Staging, se realizan las siguientes validaciones:

- Revisión de logs iniciales  
- Validación de endpoints críticos  
- Comprobación de respuesta del backend/servicio  

Si todas las pruebas se completan correctamente, se habilita la opción de despliegue a Producción.

---

### Aprobación manual y despliegue en Producción

El despliegue en Staging a Production requiere una **aprobación manual** por parte del equipo autorizado (DevOps / Líder Técnico).
Una vez aprobada, el sistema ejecuta en Production el mismo procedimiento automatizado aplicado en Staging, garantizando coherencia entre entornos.
 
---

### Monitoreo y Seguimiento

Tras desplegar en Production, se activa el monitoreo continuo:

- Logs de servidor y aplicación  
- Métricas de rendimiento, uso y disponibilidad (https://monitor.edye.com)  
- Alertas: errores, tiempo de respuesta, caídas  

Si se detecta anomalía o degradación del servicio, el flujo avanza hacia el proceso de contingencia.

---

### Backup / Rollback

Ante errores post-despliegue:

- Restaurar versión anterior  
- Usar snapshots o artefactos históricos  
- Reactivar servicio en estado previo estable  

Esto asegura continuidad operativa y minimiza tiempos de caída.

---

## 3.4. Métodos de despliegue según tipo de servicio (Apache vs PM2/Nginx)

El ecosistema Edye utiliza dos modelos de ejecución distintos según la tecnología del servicio.

Aunque el proceso CI/CD es común, **la forma en que el servidor actualiza y levanta cada servicio depende del stack tecnológico.**


| Tipo de Servicio | Servidor / Proceso | Inicio del Servicio | Método de Despliegue | Logs |
|------------------|--------------------|----------------------|-----------------------|------|
| **Laravel** | Apache | Automático | git pull + composer install + artisan migrate + restart Apache | /var/log/apache2/* /var/www/{'app'}/storage/logs/laravel.log |
| **Node.js (Play / Cloud)** | Nginx + PM2 | PM2 (modo fork) | build CI → scp → pm2 reload | /var/log/nginx/*  ~/.pm2/logs/* |

---

### 3.4.1 Nginx + PM2

Los servicios Play y Cloud utilizan una arquitectura basada en **Node.js**, administrada mediante **PM2** y expuesta a Internet a través de **Nginx** como reverse proxy. Este stack se aplica exclusivamente a los servicios Node.

#### Nginx

- Última versión: https://nginx.org/  
- Actúa como reverse proxy  
- No ejecuta la app; solo enruta tráfico HTTPS  

**Rutas de configuración:**

- `/etc/nginx/sites-enabled/play-proxy.conf`  
- `/etc/nginx/sites-enabled/cloud-prod-proxy.conf`  

**Certificados:**

- Certbot automático  
- Renovación manual cada 75 días en balanceadores  

**Comandos:**

- `sudo systemctl reload nginx` Comando que recarga la configuración del servidor Nginx sin detener el proceso ni interrumpir las conexiones activas existentes.  
- `sudo systemctl restart nginx` Comando sudo systemctl restart nginx detiene completamente el servicio de Nginx y lo vuelve a iniciar desde cero, lo que implica una interrupción temporal de todas las conexiones activas y puede causar un breve período en el que tu sitio web no está disponible.

---

#### PM2

PM2 gestiona el ciclo de vida de los procesos Node.js, permitiendo reinicios controlados, monitoreo y autoinicio.

**Ubicación del código:**

- `/var/www/play`  
- `/var/www/cloud-prod.edye.com`

**Versiones de Node.js:**

- Cloud → 22.19.0  
- Play → 18.20.4  

**Logs:**

- `~/.pm2/logs`

**PM2 autostart:**

- `pm2 startup`  
- `pm2 save`

**Comandos frecuentes:**

- `pm2 start 0`  
- `pm2 stop 0`  
- `pm2 delete 0`  
- `pm2 reload 0`  

**Flujo de despliegue (Node.js):**

El pipeline no ejecuta git pull en servidores Node.js.

- CI ejecuta build + pruebas  
- Build se copia via SCP  
- `pm2 reload 0`  

**Validación y monitoreo:**

- Healthcheck 24/7  
- Alertas de degradación  
- Dashboard en https://monitor.edye.com  
- Status externo: https://status.edye.com  

**Rollback:**

- Retroceder rama production  
- Nuevo build  
- Re-despliegue  

---

### 3.4.2 Apache

Los servicios basados en Laravel dentro del ecosistema Edye operan sobre **Apache HTTP Server**. funcionan como aplicaciones PHP servidas directamente por Apache.

**Arquitectura:**

- Aplicaciones PHP servidas desde `/public`  
- Routing gestionado vía VirtualHost  

**Flujo de despliegue:**

- `git pull`  
- `composer install --no-dev --optimize-autoloader`  
- `php artisan migrate`  
- `php artisan optimize`  
- Limpieza de caches:
  - `php artisan cache:clear`
  - `php artisan config:clear`
  - `php artisan route:clear`
- `sudo systemctl restart apache2`

**Logs:**

- `/var/log/apache2/error.log`  
- `/var/log/apache2/access.log`  
- `/var/www/{'app'}/storage/logs/laravel.log`

**Validación y monitoreo:**

- Healthcheck activo  
- Logs Apache + Laravel  
- Observabilidad en Grafana  

**Rollback:**

- Revertir código  
- Reejecutar flujo de deploy  

---

## 3.5. Procedimiento de mantenimiento y contingencia

- Actualizaciones automáticas por cada PUSH  
- Limpieza de logs y temporales (Autorotate)  
- Backups diarios (Akamai Cloud Storage)  
- Escaneo Qualys diario  
- Rollback manual ante fallas críticas  

---

## 4. Herramientas

| Categoría | Herramienta | Uso principal |
|----------|-------------|---------------|
| Automatización y despliegue | GitHub Actions | Despliegue automatizado de aplicaciones y recursos |
| Infraestructura | Linode (Akamai Cloud), PM2, Nginx, Apache | Hosting y ejecución de servicios |
| Seguridad | Qualys | Escaneo de vulnerabilidades |
| Monitoreo | Grafana | Supervisión de rendimiento |
| Gestión operativa | Monday | Registro de entregas, incidencias y trazabilidad post-deploy |
