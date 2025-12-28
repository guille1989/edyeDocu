---
id: devops-estructura
title: "📃 DevOps Structure"
sidebar_label: 📃 DevOps Structure
---

# DevOps Structure

**Version:** 1.0  
**Date:** 12/01/2025

---

## 1. Introduction and Context

This document is part of the Edye (HITN Digital) technology documentation project, launched in July 2025 to consolidate DevOps, security, and monitoring processes across the digital ecosystem. The DevOps structure standardizes automation practices, continuous delivery, and software quality control in development, staging, and production environments.

---

## 2. DevOps Process Overview

The DevOps component integrates development, continuous integration, continuous delivery, operations, and continuous improvement. Its goal is to automate flows, shorten delivery times, and ensure software quality, supported by:

- **GitHub** (repositories, CI/CD)
- **Swagger** (API documentation)
- **Monday** (task management)
- **Grafana** (monitoring)
- **Qualys** (security)
- **Postman** (endpoint testing)

---

## 3. DevOps Cycle (General Pipeline)

The DevOps cycle implemented at Edye follows this main flow:

![DevOps Cycle](/img/flujo-devops.jpg)

> **Figure 1.** _General DevOps process flow_

Each phase relies on specific tools and assigned owners:

| Phase                      | Description                                | Tools                             |
| -------------------------- | ------------------------------------------ | --------------------------------- |
| **Planning**               | Backlog management, milestones, KPIs.      | Monday                            |
| **Development**            | Code implementation and unit testing.      | GitHub, Swagger, Postman          |
| **Continuous Integration** | Build, validation, and security analysis.  | GitHub Actions, Snyk, SonarQube   |
| **Continuous Delivery**    | Automated deployments.                     | GitHub Actions                    |
| **Operations**             | Monitoring, alerts, and incident response. | monitor.edye.com, status.edye.com |

---

## 4. Document Structure

DevOps documentation is organized hierarchically to ensure traceability and version control.

| Category                   | Documents                                                                                           |
| -------------------------- | --------------------------------------------------------------------------------------------------- |
| **Planning**               | https://docs.google.com/document/d/1e1P99kDmgtiPRaAMtj3oYz1zFkKUvrec49buXHp72D0/edit?usp=drive_link |
| **Development**            | https://docs.google.com/document/d/1TlZTob4QFa2sHtZ76Ku2NXcrI3V5mWGbYvv_zTQNmgk/edit?tab=t.0        |
| **Continuous Integration** | https://docs.google.com/document/d/1e9Nkp1mI-z8yjHeEcgsXJW6vHIu2aFj1N4mMSdSvYKY/edit?tab=t.0        |
| **Continuous Delivery**    | https://docs.google.com/document/d/19QMMCA3rwXQ2e18Q9jByyy2XnHC5zmNe8XulaiZDhlQ/edit?tab=t.0        |
| **Operations**             | https://docs.google.com/document/d/1txgJkjhwSdG694OBCQZhHs5iWSVDR6SCr74ZyZi66t0/edit?tab=t.0        |

---

## 5. Security and Monitoring

Security is embedded throughout the DevOps pipeline via:

- **Qualys** for scanning and compliance.
- **Grafana / Prometheus** for infrastructure and API monitoring.
- **Loki** for centralized logging.
- **Automated alerts** configured on critical metrics.

---

## 6. Roles and Responsibilities

| Role                     | Responsibilities                                          | Associated Tools         | Primary Interaction |
| ------------------------ | --------------------------------------------------------- | ------------------------ | ------------------- |
| **DevOps Engineer**      | Maintain CI/CD pipelines, infrastructure, and monitoring. | GitHub Actions, Grafana  | Backend, QA         |
| **Full-Stack Developer** | Implement APIs and maintain documentation.                | GitHub, Swagger, Postman | DevOps, QA          |
| **QA Engineer**          | Execute automated tests and integrations.                 | Postman, Jenkins         | Development         |
| **Project Manager**      | Coordinate releases and internal communication.           | Monday                   | All areas           |

---

## 7. Documentation Governance

Update flow:

**Request → Review → Adjustment → Approval → Update (Drive/Miro)**

Each document tracks:

- **Change owner**
- **Technical approver**
- **Repository administrator**

---

## 8. Best Practices

- Keep pipelines automated and validated.
- Apply branch control and code reviews.
- Update technical documentation for every release.
- Run postmortems after incidents.
- Use Monday as the single source of tracking.
