
---
id: devops-cd
title: 📃 Continuous Delivery (CD)
---

# Continuous Delivery (CD)
**Version:** 1.0  
**Date:** 01/12/2025  

---
## 1. Introduction
Define the technical architecture, configuration, and access policies for the servers that support the staging and production environments of the Edye ecosystem.

---

## 2. Scope
This procedure applies to all servers and environments of the Edye ecosystem, including the services:  
Admin, API, Satellite, Billing, Cloud, Play, Conecta, and Conect, in their staging and production environments.

The scope of this DevOps document only covers activities related to the stability, availability, security, and operational continuity of the services deployed in these environments.

---

## 3. Procedure
The Continuous Delivery (CD) process allows stable versions of the software to be deployed in the defined environments through automated and reproducible flows.  
Deployments are managed through GitHub Actions and integrated monitoring tools.

---

## 3.1. General environment architecture
Edye's infrastructure is hosted on Linode (Akamai Cloud) and organized into three main levels:

- **Staging:** intermediate environment for functional validation and QA testing.  
- **Production:** active environment with services in operation.

**General technical configuration:**

- Web Server: Linode/Ubuntu  
- Database: MongoDB, MySQL  
- Deployments: automated via GitHub Actions

---

### 3.1.1. General server and DNS architecture

- *[**Linode servers**](https://docs.google.com/spreadsheets/d/19VrWJu_G5nqdRHV1idEApHZ80LjAlgtPcORP6zDS-y8/edit?usp=drive_link)*
- *[**Domain names**](https://docs.google.com/spreadsheets/d/1x-BnfqmrZmFQHwP7ihllWhJsTDkXjA37w5z9jj-uCDE/edit?usp=drive_link)*

---

## 3.2. Server/Database access and authentication

### Access to Linode server
Access to the Edye ecosystem servers is performed according to the following guidelines:

- Secure SSH connection, restricted by firewall.  
- Authentication via public key (SSH Key) on port 22/TCP.  
- Access limited only to authorized roles:
  - Administrators (Admin / DevOps).

### Access to Databases

The Edye ecosystem operates with two main engines:

- **MySQL** (Laravel services: Admin, API, Billing, Conecta, Connect, Satellite)  
- **MongoDB** (Node.js services: Play and Cloud)

Each technology has particular policies:

---

### MySQL

**Connection method:**

- Access only from authorized servers within the internal Linode network.  
- No public external connections allowed.  
- Authentication via username and password.  
- Standard port: **3306/TCP**  

**Main uses:**

- User management (API / Connect / Billing).  
- Metadata synchronization.  
- Billing and subscription processes.  

---

### MongoDB

Used by EDYE-PLAY and EDYE-CLOUD as NoSQL database.

**Connection method:**

- Internal access via port **27017/TCP**  
- Authentication via username and password  
- No public access: only Linode private network / VPN  

**Main uses:**

- User event registration and analytics (Cloud)  
- Profiles, preferences, and playback states (Play)  

---
## 3.3. Continuous delivery process flow

![Continuous delivery process flow](/img/entrega-continua-devops.jpg)
> **Figure 1.** Diagram of the DevOps Continuous Delivery flow

**Flow description:**

### Automated deployment

The pipeline automatically executes the deployment procedure corresponding to the technology type:

#### Laravel Services (Apache)
- `git pull`
- `composer install` / optimization
- `php artisan migrate` *(only on 1 Production node)*
- Apache restart

#### Node.js Services (Nginx + PM2)
- Build transfer via SCP
- `pm2 reload`

---

### Post-Deploy Validation

Once deployed in Staging, the following validations are performed:

- Review of initial logs  
- Validation of critical endpoints  
- Backend/service response check  

If all tests are completed successfully, the option to deploy to Production is enabled.

---

### Manual approval and deployment to Production

Deployment from Staging to Production requires **manual approval** by the authorized team (DevOps / Technical Lead).
Once approved, the system executes in Production the same automated procedure applied in Staging, ensuring consistency between environments.
 
---

### Monitoring and Tracking

After deploying to Production, continuous monitoring is activated:

- Server and application logs  
- Performance, usage, and availability metrics (https://monitor.edye.com)  
- Alerts: errors, response time, outages  

If an anomaly or service degradation is detected, the flow advances to the contingency process.

---

### Backup / Rollback

In case of post-deployment errors:

- Restore previous version  
- Use snapshots or historical artifacts  
- Reactivate service in previous stable state  

This ensures operational continuity and minimizes downtime.

---

## 3.4. Deployment methods by service type (Apache vs PM2/Nginx)

The Edye ecosystem uses two different execution models depending on the service technology.

Although the CI/CD process is common, **the way the server updates and starts each service depends on the technology stack.**


| Service Type | Server / Process | Service Start | Deployment Method | Logs |
|--------------|------------------|---------------|-------------------|------|
| **Laravel** | Apache | Automatic | git pull + composer install + artisan migrate + restart Apache | /var/log/apache2/* /var/www/{'app'}/storage/logs/laravel.log |
| **Node.js (Play / Cloud)** | Nginx + PM2 | PM2 (fork mode) | CI build → scp → pm2 reload | /var/log/nginx/*  ~/.pm2/logs/* |

---

### 3.4.1 Nginx + PM2

Play and Cloud services use an architecture based on **Node.js**, managed by **PM2** and exposed to the Internet through **Nginx** as a reverse proxy. This stack applies exclusively to Node services.

#### Nginx

- Latest version: https://nginx.org/  
- Acts as a reverse proxy  
- Does not run the app; only routes HTTPS traffic  

**Configuration paths:**

- `/etc/nginx/sites-enabled/play-proxy.conf`  
- `/etc/nginx/sites-enabled/cloud-prod-proxy.conf`  

**Certificates:**

- Automatic Certbot  
- Manual renewal every 75 days on balancers  

**Commands:**

- `sudo systemctl reload nginx` Command that reloads the Nginx server configuration without stopping the process or interrupting existing active connections.  
- `sudo systemctl restart nginx` The sudo systemctl restart nginx command completely stops the Nginx service and restarts it from scratch, which implies a temporary interruption of all active connections and may cause a brief period in which your website is unavailable.

---

#### PM2

PM2 manages the Node.js process lifecycle, allowing controlled restarts, monitoring, and autostart.

**Code location:**

- `/var/www/play`  
- `/var/www/cloud-prod.edye.com`

**Node.js versions:**

- Cloud → 22.19.0  
- Play → 18.20.4  

**Logs:**

- `~/.pm2/logs`

**PM2 autostart:**

- `pm2 startup`  
- `pm2 save`

**Frequent commands:**

- `pm2 start 0`  
- `pm2 stop 0`  
- `pm2 delete 0`  
- `pm2 reload 0`  

**Deployment flow (Node.js):**

The pipeline does not run git pull on Node.js servers.

- CI runs build + tests  
- Build is copied via SCP  
- `pm2 reload 0`  

**Validation and monitoring:**

- 24/7 Healthcheck  
- Degradation alerts  
- Dashboard at https://monitor.edye.com  
- External status: https://status.edye.com  

**Rollback:**

- Roll back production branch  
- New build  
- Redeploy  

---

### 3.4.2 Apache

Laravel-based services within the Edye ecosystem run on **Apache HTTP Server**. They function as PHP applications served directly by Apache.

**Architecture:**

- PHP applications served from `/public`  
- Routing managed via VirtualHost  

**Deployment flow:**

- `git pull`  
- `composer install --no-dev --optimize-autoloader`  
- `php artisan migrate`  
- `php artisan optimize`  
- Cache cleaning:
  - `php artisan cache:clear`
  - `php artisan config:clear`
  - `php artisan route:clear`
- `sudo systemctl restart apache2`

**Logs:**

- `/var/log/apache2/error.log`  
- `/var/log/apache2/access.log`  
- `/var/www/{'app'}/storage/logs/laravel.log`

**Validation and monitoring:**

- Active healthcheck  
- Apache + Laravel logs  
- Observability in Grafana  

**Rollback:**

- Revert code  
- Rerun deploy flow  

---

## 3.5. Maintenance and contingency procedure

- Automatic updates for each PUSH  
- Log and temp cleanup (Autorotate)  
- Daily backups (Akamai Cloud Storage)  
- Daily Qualys scan  
- Manual rollback in case of critical failures  

---

## 4. Tools

| Category | Tool | Main use |
|----------|-------------|---------------|
| Automation and deployment | GitHub Actions | Automated deployment of applications and resources |
| Infrastructure | Linode (Akamai Cloud), PM2, Nginx, Apache | Hosting and running services |
| Security | Qualys | Vulnerability scanning |
| Monitoring | Grafana | Performance monitoring |
| Operational management | Monday | Delivery records, incidents, and post-deploy traceability |