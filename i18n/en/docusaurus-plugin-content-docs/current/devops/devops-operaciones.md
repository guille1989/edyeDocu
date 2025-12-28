---
id: devops-operaciones
title: 📃 DevOps Operations
sidebar_label: 📃 DevOps Operations
---

# DevOps Operations

**Version:** 1.0  
**Date:** 01/12/2025

---

## 1. Introduction

The purpose of this document is to establish the **procedures**, **tools**, and **responsibilities** that ensure the **stability**, **availability**, **continuous monitoring**, and **operational continuity** of the digital services of the **Edye / HITN Digital** ecosystem.

The **DevOps Operations** process ensures that all systems operate securely and at maximum performance, through **proactive monitoring**, **timely incident management**, and the execution of **preventive maintenance activities** that anticipate failures and reduce service interruptions.

---

## 2. Scope

This procedure applies to all productive and support components of the **Edye** ecosystem, including:

- **Admin**
- **API**
- **Satellite**
- **Billing**
- **Cloud**
- **Play**
- **Conecta**
- **Conect**

Applicable environments:

- **Staging**
- **Production**

It includes the following activities:

- Infrastructure administration and observability.
- Detection, analysis, and resolution of incidents.
- Performance and security monitoring.
- Contingency, backup, and service continuity plans.

---

## 3. Procedure

The DevOps Operations process ensures continuous supervision of services, early detection of anomalies, and agile response to failures or degradations, maintaining traceability and communication between DevOps teams.

---

## 3.1. Monitoring and observability

Monitoring is performed in real time on the infrastructure and key services, collecting metrics, logs, and events that are visualized on corporate operational dashboards.

| Category                                                        | Tool                  | Main function                                                                                                         |
| --------------------------------------------------------------- | --------------------- | --------------------------------------------------------------------------------------------------------------------- |
| Security and vulnerabilities                                    | Qualys                | Vulnerability scanning, PCI-DSS compliance, and critical alerts.                                                      |
| User metrics. Logs and alerts. Metrics and infrastructure       | https://monitor.edye.com | Usage tracking, content consumption, and frontend performance, with centralized logs and automatic alerts.            |
| Edyes service status metrics                                    | https://status.edye.com/ | Global overview of the operation of all Edyes services.                                                              |

---

## 3.2. Monitoring procedure

- Real-time metric capture from servers and applications.
- Automatic evaluation of critical thresholds (CPU > 80%, error rate > 2%).
- Incident registration in Monday.
- Post-event analysis with definition of corrective actions.

---

### 3.2.1. EDYE service STATUS (https://status.edye.com/)

The Edye Service Status is the public external monitoring platform of the Edye / HITN Digital ecosystem. It provides a consolidated view of the operational status of all services and allows historical availability evaluation through precise uptime indicators, facilitating early detection of incidents and transparency with partners and internal teams.

This panel shows:

**General ecosystem status**  
At the top, a global indicator (All systems Operational) summarizes the current availability of the entire platform.  
The status dynamically varies between:

- Operational (Green)
- (Yellow)
- (Red)

![General ecosystem status](/img/operaciones/estado-general-edyes-devops.jpg)

> **Figure 1.** _General ecosystem status._

**Historical uptime (last 90 days)**  
Each service has a bar chart representing its daily availability over the last 90 days.  
The use of colors allows quick identification of:

- Green → normal availability
- Yellow → partial degradation
- Red → total unavailability

![Historical uptime](/img/operaciones/uptime-edyes-devops.jpg)

> **Figure 2.** _Historical uptime last 90 days._

**Monitored services**  
The panel includes the main Edye modules:

- EDYE API
- EDYE Billing
- EDYE Cloud
- EDYE Com
- EDYE Conecta
- EDYE Connect
- EDYE Play

Each with its exact availability percentage (e.g. 99.997%), status indicator, and uptime history.

![Monitored services](/img/operaciones/uptime-marker-edyes-devops.jpg)

> **Figure 3.** _Monitored services last 90 days._

**Automatic update**  
The system updates at regular intervals (for example, every few seconds), allowing information practically in real time, as indicated by the update counter (Next update in X sec).

![Automatic update](/img/operaciones/upgrade-edyes-devops.jpg)

> **Figure 4.** _Automatic dashboard update._

**Overall Uptime (last 24h · 7 days · 30 days · 90 days)**  
The panel includes consolidated metrics of the global availability of the ecosystem:

- 99.978% – Last 24 hours
- 99.948% – Last 7 days
- 99.919% – Last 30 days
- 99.939% – Last 90 days

This block allows evaluation of the general stability of the platform over time and detection of improvement or degradation trends.

![Overall Uptime](/img/operaciones/overall-uptime-edyes-devops.jpg)

> **Figure 5.** _Overall Uptime._

**Incident and update log (Status Updates)**  
The panel incorporates an updates area that shows reported incidents, scheduled maintenance, or historical problems.

This indicates that no relevant incidents have occurred in the last month.  
The “Status update history” link provides access to the full history of recorded events.

![Incident and update log](/img/operaciones/status-update-edyes-devops.jpg)

> **Figure 6.** _Incident and update log._

**Purpose within the ecosystem**  
The service fulfills key functions:

- External monitoring (Blackbox monitoring). Verifies availability from outside the infrastructure, detecting outages, connectivity errors, or certificate expiration.
- Transparency with partners and clients. Allows operators, commercial teams, and stakeholders to quickly check system health.
- Complement to Grafana / Loki / Prometheus. While Grafana centralizes internal metrics, the Service Status panel shows the end-user perspective.

---

### 3.2.2. Monitor https://monitor.edye.com (Grafana)

The Edye Monitor is the internal centralized observability platform of the Edye / HITN Digital ecosystem. It is built on Grafana and consolidates real-time metrics from servers, applications, APIs, databases, and critical external services. Its purpose is to enable early detection of anomalies, continuous performance monitoring, and complete traceability in operational incidents.

This system complements external monitoring (https://status.edye.com) by providing a deep view of the internal behavior of the infrastructure, while Status Edye only shows the end-user experience (blackbox monitoring).

**System Status Overview**

The main screen of the Edye Monitor presents a real-time summary of the status of the ecosystem's services and servers.

![System Status Overview](/img/operaciones/dashboard-edyes-devops.jpg)

> **Figure 6.** _System overview (Main dashboard)._ 

This panel displays:

- Current status of services (OK / Degraded / Down)
- Resource consumption per server (CPU, RAM, Load Average)
- API performance: average latency, errors per minute, throughput
- Status of internal processes (cron jobs, workers, PM2, Laravel services)
- Active alerts or detected degradations

**Infrastructure Metrics**

The system collects and graphs metrics from each of the ecosystem's servers, including:

**CPU and RAM**

_Figure X. CPU and memory consumption on Edye servers._

Main indicators:

- Average and peak CPU usage
- RAM consumption per service
- Hourly/daily load trends
- Saturation events (>80%) that trigger automatic alerts

**Latency and response times**

Graphs include:

- API response time by endpoint
- Frontend latency (Play)
- MySQL and MongoDB query metrics

_Figure X. Latency and response time of the Edye API_

**Content Consumption and Frontend Metrics**

One of the most relevant sections of the panel monitors in real time:

_Figure X. Content consumption and frontend performance_

Includes:

- Play count per minute/hour
- Content consumption (VOD, Live)
- Distribution by country or partner
- Concurrent active users
- Playback error events

This information allows detection of CDN outages, anomalous traffic spikes, or integration problems with JW Player.

**Centralized Logs and Error Detection**

The panel includes integrated views with Loki, showing:

![Centralized Logs and Error Detection](/img/operaciones/logs-edyes-devops.jpg)

> **Figure X.** _Centralized logs and system errors (Loki)._ 

- Nginx logs (Play/Cloud)
- Apache logs (Laravel services)
- PM2 logs for Node.js
- API error logs

Included options:

- Filters by service, level, date, or error occurrence
- Advanced search by endpoint, tag, partner, or content ID
- Correlated view between logs + metrics for quick diagnosis

**Automatic Alerts**

The system has rules configured to notify the operations team when an anomaly occurs.

_Figure X. Automatic alerts from the Edye Monitor_

Configured alerts:

- CPU > 80% sustained
- RAM > 85%
- API Latency > 500 ms
- Error Rate > 2%
- Service outage (Node.js, Laravel, PM2, Apache)
- Integration failure (VTR, Claro, Pagoralia, InPlayer)
- Cron job or synchronization process failure

Notifications:

- Automatic email
- Registration in Monday as an incident (when the procedure applies)

**Diagnosis and Operational Actions**

The monitor is used as the main source of information during:

- Incident management
- Postmortems
- Post-deploy validation
- Performance degradation analysis

It allows:

- Compare curves before/after a deployment
- Identify CPU/RAM spikes due to bugs
- Review repeated error patterns
- Detect partners generating overload or frequent errors

**Integration with the DevOps Process**

The Edye Monitor integrates directly into the DevOps flow:

- Automatic review after each deployment (CI/CD)
- Continuous monitoring for rollback decisions
- Metrics that feed the incident board
- Validation of service status before starting deliveries to partners

---

## 3.3. Incident management

Each incident is managed according to its type, impact, and priority.  
The process ensures complete traceability from detection to final resolution.

| Incident type                         | Procedure                                                        |
| ------------------------------------- | ---------------------------------------------------------------- |
| Server or service failure             | Automatic notification → diagnosis → restart or rollback.        |
| API or endpoint errors                | Swagger validation → log review → hotfix in GitHub.              |
| Critical vulnerabilities              | Escalation to CISO → immediate remediation.                      |
| Performance degradation               | Analysis in Grafana → resource adjustment.                       |
| Partner or integration issues         | Package verification → controlled resend or partial rollback.    |

## 3.4. Operational continuity and maintenance

- Daily automatic backups in Akamai Cloud Storage.
- Weekly review of system logs and packages.
- Scheduled package update (APT Update/Upgrade).
- Quarterly restoration tests from snapshots.
- Planned service restart outside operational hours.

---

## 3.5. Incident management flow

![Incident management flow](/img/operaciones/diagrama-incidentes-edyes-devops.jpg)

> **Figure X.** _DevOps operational incident management flow diagram._

**General flow description:**

**Phases:**

**Detection**  
Monitoring detects anomaly or alert from Grafana / Qualys.

**Registration**  
Ticket is created in Monday (type, priority, impact).

**Classification**  
Impact on users, services, or integrations is evaluated.

**Diagnosis**  
Review of logs (Loki), metrics, API, infrastructure.

**Corrective action**

- Service restart
- Rollback
- Hotfix
- Infrastructure adjustment
- Coordination with partners if applicable

**Validation**  
Confirmation through healthchecks and monitoring.

**Documentation**  
Record of root cause, impact, times, corrections.

---

## 3.6. Web Server Configuration (Nginx)

This section documents the standard Nginx configuration for the Node.js applications of the Edye ecosystem in the staging and production environments.

Currently mainly applies to:

- **CLOUD (cloud.edye.com)** – Node.js application exposed through reverse proxy.
- **PLAY (play.edye.com)** – Web frontend (Next.js/Node.js) exposed via Nginx, with method and security header control.

---

### 3.6.1. General reverse proxy pattern for Node.js applications

All Node.js applications are published via Nginx as a reverse proxy to a Node process listening on `localhost:3000` (or the port defined on each server).

**Base pattern:**

- `listen` on the server's internal IP, port 80 (or 443 if TLS terminates on the same instance).
- `server_name` with the application's domain (cloud.edye.com, play.edye.com, etc.).
- `location /` pointing to `proxy_pass http://localhost:3000;`.

**Standard headers:**

- `proxy_set_header Host $host;`
- `proxy_set_header Upgrade $http_upgrade;`
- `proxy_set_header Connection 'upgrade';`

**Timeouts:**

- `proxy_read_timeout 60s;`
- `send_timeout 60s;`

**Optimization:**

- `gzip on;` and `gzip_types` for static content and JSON.
- Proxy buffers (`proxy_buffer_size`, `proxy_buffers`, `proxy_busy_buffers_size`).

**Basic security:**

- Hide technology headers:  
  `proxy_hide_header X-Powered-By;`  
  `more_clear_headers Server;`

This pattern is reused in the specific configurations of **CLOUD** and **PLAY**.

---

### 3.6.2. Nginx Configuration – cloud.edye.com (CLOUD)

Configuration file (production and/or staging):

- Suggested path: /etc/nginx/sites-available/cloud-prod-proxy.conf
- Symlink: /etc/nginx/sites-enabled/cloud-prod-proxy.conf

Configuration:

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

**Key points:**

**Listen and domain**  
Servers listen to the balancer on (internal IP):80.

**Proxy to Node.js**

- All requests (/) are redirected to `http://localhost:3000`, where the Node app runs.
- WebSockets support is enabled (`Upgrade` / `Connection 'upgrade'`).

**Security and headers**  
`more_clear_headers Server;` and `proxy_hide_header X-Powered-By;` prevent exposing technology details.

**Upload size**  
`client_max_body_size 10m;` limits the maximum upload file size to 10 MB.

**Performance**

- `gzip on;` + `gzip_types` to compress text, JSON, JS, XML.
- Buffer configuration to handle large responses without penalizing memory.

---

### 3.6.3. Nginx Configuration – play.edye.com (PLAY)

Configuration file (production and/or staging):

- Suggested path: /etc/nginx/sites-available/play-proxy.conf
- Symlink: /etc/nginx/sites-enabled/play-proxy.conf

Configuration:

```bash
server {
    listen 192.168.222.103:80;
    server_name play.edye.com; # Replace with your domain
    # REDIRECT DONE IN APP CODE
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

**Key points:**

**Listen and domain**  
Servers listen to the balancer on (local IP):80.

**Redirect to HTTPS**  
The `X-Forwarded-Proto` header is used to force HTTP → HTTPS:

```bash
if ($http_x_forwarded_proto = "http") {
    return 301 https://$host$request_uri;
}
```

This assumes that TLS terminates on a balancer or previous layer that injects X-Forwarded-Proto.

**Method restriction on /**  
Only **GET, HEAD, and OPTIONS** are allowed for the web app (`location /`).  
Any other method (POST, PUT, DELETE, etc.) returns **405 Method Not Allowed**.

This helps to:

- Reduce attack surface.
- Ensure that read operations go through the web app, and write operations are controlled on specific endpoints.

**Specific endpoint `/api/search`**  
`location = /api/search` is defined with different behavior:

- Only allows POST. If the method is not POST ⇒ **405**.
- Also redirects to `http://localhost:3000` but with that method policy.

Useful for searches or endpoints that require payload.

**Security headers**

- `X-Frame-Options "SAMEORIGIN"`: prevents the site from being embedded in iframes from other domains.
- `X-XSS-Protection "1; mode=block"`: basic protection against XSS in old browsers.
- `X-Content-Type-Options "nosniff"`: prevents the browser from inferring content types.
- `Referrer-Policy "no-referrer-when-downgrade"`: controls sending of the `Referer` header.
- `Strict-Transport-Security` (HSTS): forces the use of HTTPS on the domain and subdomains for one year.

**Request size**  
`client_max_body_size 512K;` limits the payload size (more aggressive than in CLOUD).

**Performance**  
`gzip` and buffer configuration similar to CLOUD.

---

### 3.6.4. Operation and maintenance of Nginx configurations

For all staging and production servers:

**File locations**

`/etc/nginx/sites-available/<name>.conf`
`/etc/nginx/sites-enabled/<name>.conf (symlink)`

**Configuration validation**

- Before applying changes:

`nginx -t`

If the test is successful:

`systemctl reload nginx`

Any error must be recorded in the system logs:

`/var/log/nginx/error.log`

**Best practices**

- Do not expose public IPs or internal ports in external documentation.
- Keep consistent use of `X-Forwarded-Proto`, `Host`, and other headers between CLOUD and PLAY.
- Document relevant changes in Monday linking the task to the Nginx change and the GitHub commit (if applicable).

---

## 3.7. Node.js process management (PM2)

PM2 is the process manager used to run Node.js applications on the **staging** and **production** servers of the Edye ecosystem.

Currently, **no** `ecosystem.config.js` file is used on the servers; instead, processes are started directly with individual PM2 commands.

---

### 3.7.1 Execution model

Node.js applications (Play and Cloud) are run using:

`pm2 start <script>.js --name "<app-name>"`

The state of the applications is managed directly with PM2:

```bash
pm2 status
pm2 restart <pm2 app identifier>
pm2 stop <pm2 app identifier>
pm2 delete <pm2 app identifier>
```

**Since there is no ecosystem file**, all configuration depends on:

- The initial commands used when running `pm2 start`
- The persistent values stored in PM2
- The pm2-logrotate module configuration

---

### 3.7.2 Active module: pm2-logrotate

The server has the **pm2-logrotate** module enabled, which automatically rotates the logs of each application.

**Current configuration:**

```bash
pm2 set pm2-logrotate:max_size 100M
pm2 set pm2-logrotate:retain 10
pm2 set pm2-logrotate:compress true
pm2 set pm2-logrotate:dateFormat YYYY-MM-DD
pm2 set pm2-logrotate:workerInterval 30
pm2 set pm2-logrotate:rotateInterval 0 0 * * *
pm2 set pm2-logrotate:rotateModule true
```

**This ensures:**

- Automatic log rotation
- Size control
- No disk saturation
- Compressed logs in environments

---

### 3.7.3 Log location

PM2 creates its logs in:

```bash
~/.pm2/logs/<app>-out.log
~/.pm2/logs/<app>-error.log
```

After rotation:

```bash
~/.pm2/logs/<app>-out-2025-01-13.log.gz
```

**Important:**

These logs are consumed along with `nginx/error.log` and `nginx/access.log` for post-incident analysis (see section 3.5 of the Operations document).

---

### 3.7.4 Persistence and automatic startup

Since there is no ecosystem file, PM2 persists the current state using:

```bash
pm2 save
pm2 startup
```

This ensures that:

- Apps start automatically after a server reboot
- Changes are maintained even without an ecosystem file

---

### 3.7.5 Operational recommendations

- Keep `pm2 save` after any process change
- Check logs after deploy:
  `pm2 logs <app> --lines 100`
- Avoid running `pm2 delete all` in production
- Check disk size periodically:
  `du -sh ~/.pm2/logs`

  ***

## 4. Tools

| Category                                      | Tool                                                                                      | Main use                                                                         |
| ---------------------------------------------- | ----------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------- |
| Monitoring, metrics, alerts, and notifications | Grafana (Metrics monitoring) / Prometheus (Server status aggregation) / Loki (Log aggregation) | Availability and performance monitoring. Centralized log visualization.           |
| Security and compliance                        | Qualys                                                                                     | Scanning, access management, and regulatory compliance.                           |
| Operational management                         | Monday                                                                                     | Incident registration, traceability, and documentation.                           |