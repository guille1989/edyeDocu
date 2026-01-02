---
id: seguridad_monitoreo
title: "Security and Monitoring"
---

**Version:** 1.0  
**Date:** 12/01/2025

---
## 1. Introduction and Purpose

The EDYE ecosystem integrates multiple services (API, streaming platforms, billing, and connectors) running on a hybrid infrastructure. To ensure availability and protect information, EDYE implements a security, monitoring, and assessment strategy based on specialized tools and established operational practices.
This section describes the scope and goal of these practices, defining the key security and monitoring elements and their relationship with DevOps, Operations, SRE, and Security teams.
The document provides an operational view of the tools used, the types of data monitored, and associated responsibilities, referencing the “Security and Monitoring” diagrams and the EDYE specifications document.

## 2. Infrastructure Management and Monitoring

![Security and Monitoring](/img/seguridad/infraYseguridad.jpg)
> **Figure 1.** _General flow of the Security and Monitoring process_

# Description of the monitored infrastructure

EDYE uses Ubuntu servers as the base for its services. Landscape is employed to manage and monitor these hosts, administering instance lifecycle, applying updates, and collecting system events. The monitored infrastructure includes server states (on/off), operating system and package versions, as well as relevant system events.

### 2.1. Tool used

- **Landscape**: manages and monitors Ubuntu servers and centralizes event logs from each host.
  The Infrastructure Management and Monitoring diagram shows Landscape connected to Ubuntu servers, reflecting the direct relationship between the tool and the infrastructure.

### 2.2. Information collected

The platform collects:

- **Server state:** on/off, CPU usage, memory, and disk space.
- **System events:** logs of updates, configuration changes, and security alerts.
- **Inventory:** operating system versions and installed packages.

The information captured by Landscape forms the basis for maintenance tasks, patching, and monitoring infrastructure health.

## 3. Security and Compliance

![Security and Compliance](/img/seguridad/seguridadCompliance.jpg)
> **Figure 2.** _General flow of the Security and Compliance process_

# General approach

EDYE’s security strategy is based on proactive vulnerability detection and compliance with applicable regulations. It uses tools that scan both infrastructure and applications, prioritize risks, and demonstrate adherence to standards.
The Security and Compliance diagram places the Qualys platform at the core of this security layer and subdivides its functionality into VMDR, WAS, and Compliance.

### 3.1. Scanning and analysis tools

- **VMDR (Vulnerability Management, Detection and Response):** Qualys module that manages vulnerabilities. It uses scoring techniques such as TruRisk to identify and classify the most critical vulnerabilities.
  - **Scope:** performs daily scans inside and outside servers; surveys internal configurations and external open ports, comparing them against the latest vulnerability database to generate reports with severity and remediation suggestions.
  - **Owner:** DevOps team (administrator: Agustín).

- **WAS (Web Application Scanning):** performs external scans on web applications using a reference attack bank to identify configuration or code vulnerabilities.
  - For APIs, the test collection (e.g., Postman) is imported and all endpoints are scanned.
  - **Owner:** DevOps team (administrator: Agustín).

- **Compliance:** module that validates adherence to policies and standards. Qualys verifies that technology operations and data comply with laws and standards (currently validated against the credit card industry standard).
  - Allows defining internal policies, generating evidence, and facilitating audits.

- **Qualys Platform:** SaaS platform that integrates the above modules and offers asset inventory, reporting, and remediation.
  - Centralizes asset and vulnerability management and serves as the control point for security and operations teams.

#### Scan differentiation

| Scan type               | Tool                | Objective and scope                                                                |
|------------------------ |-------------------- |-----------------------------------------------------------------------------------|
| Infrastructure          | VMDR                | Detect vulnerabilities in configurations and operating systems; review external open ports and exposed services. |
| Applications            | WAS                 | Identify issues in web applications and APIs using automated pentesting techniques. |
| Vulnerability management | VMDR + Qualys      | Prioritize risks and automate remediation using risk scores.                       |
| Regulatory compliance   | Compliance          | Verify adherence to standards and policies, currently aligned with the credit card industry standard. |

## 4. Monitoring and Alerting

![Monitoring and Alerting](/img/seguridad/monitoringAlerting.jpg)
> **Figure 3.** _General flow of the Monitoring and Alerting process_

# Monitoring strategy

EDYE monitoring covers both service availability and performance. APIs, applications, databases, third-party integrations, and infrastructure are monitored, as well as user experience via external (black box) tests. The goal is to guarantee a 99.9% availability SLA and react quickly to failures.

### 4.1. Monitored metrics

Las métricas se clasifican en:

- **Infrastructure metrics:** CPU, memory, disk usage, and service state. Collected and exposed to Prometheus.
- **Server and application logs:** application and microservice logs sent to Loki for indexing and search.
- **Service performance:** API response times, 5xx error rate, and availability, sent to Grafana via Black Box (QoS).
- **External tests (black box):** checks availability and response times externally via HTTP/HTTPS, DNS, TCP, and ICMP probes. Runs independently with servers in the United States and Brazil.

### 4.2. Tools and functions

- **Prometheus:** collects infrastructure metrics via a pull model and stores them in a time series database. Uses PromQL for queries and forwards data to Grafana for visualization.
- **Loki:** multi-tenant log aggregation system that indexes metadata and enables efficient searches; Grafana uses this data for visualizations.
- **Black Box (QoS):** Prometheus exporter that tests endpoint availability and performance; supports HTTP/HTTPS, DNS, TCP, and ICMP checks.
- **Grafana:** analysis and visualization platform that centralizes metrics and logs, allows configuring dashboards and alerts; administered by the DevOps team.

### 4.3. Alert model

Los equipos establecen umbrales y canales para notificaciones:

- **Alert channels:** Slack and email.
- **Severity:** info, warning, and critical.
- **Example thresholds:** latency > 500 ms (warning); availability < 99% (critical).

Las alertas se configuran en Grafana y se alimentan de Prometheus y Loki. Los umbrales se ajustan según los acuerdos de nivel de servicio (SLA) y la criticidad de cada servicio. Los equipos de SRE y Operaciones analizan los eventos y coordinan la respuesta.

## 5. Code Security

![Code Security](/img/seguridad/codeSecurity.jpg)
> **Figure 4.** _General flow of the Code Security process_

# Security integrated into the development cycle (DevSecOps)

EDYE incorporates security from design through the software lifecycle. Code reviews are mandatory via pull requests with peer review. Additionally, static and dynamic analyses are integrated into the CI/CD pipeline to identify issues before reaching production.

### 5.1. Controls applied to code repositories

- **Code repositories:** API and application source code is stored in GitHub, serving as the version control and collaboration system.
  GitHub also provides information about repository access and activity.

#### Types of analysis

| Analysis type                     | Tool or function     | Description                                                                 |
|-----------------------------------|----------------------|-----------------------------------------------------------------------------|
| Static application security testing (SAST) | SonarQube    | Assesses code quality and security during development, identifying bugs and vulnerabilities before compilation. |
| Dynamic application security testing (DAST) | OWASP ZAP   | Runs automated penetration tests on running web applications to detect vulnerabilities. |
| Dependency analysis               | Snyk                 | Examines libraries and packages to identify vulnerable versions and recommends updates. |
| Code Scanning (GitHub)            | GitHub feature       | Searches for errors and vulnerabilities in repository code.                 |
| Secret Scanning (GitHub)          | GitHub feature       | Scans repository history to detect exposed tokens, keys, and credentials, generating automatic alerts. |
| Dependency Review (GitHub)        | GitHub feature       | Shows dependency changes during a pull request, with version and vulnerability information. |
| Dependabot (GitHub)               | Dependabot           | Automates detection and updates of outdated or vulnerable dependencies, creating pull requests and alerts. |

### 5.2. Relationship with CI/CD

The continuous integration and continuous deployment (CI/CD) pipeline runs code and dependency analyses on every build. This way, any vulnerability identified by SonarQube, OWASP ZAP, or Snyk blocks integration until resolved. GitHub mechanisms (Code Scanning, Secret Scanning, Dependency Review, and Dependabot) complement this process by automatically inspecting repository code and proposing updates.
These practices reinforce the DevSecOps culture, where security responsibility is shared between development and operations teams.

## 6. Roles and Responsibilities

La operación de la plataforma de seguridad y monitoreo requiere una coordinación clara entre equipos:

- **DevOps / Operations team:** responsible for administering Landscape, Qualys, Prometheus, Loki, Grafana, and GitHub repository configurations. This team manages vulnerability scans (VMDR and WAS), reviews compliance reports, tunes monitoring thresholds, and coordinates remediation actions. Per the specifications, Agustín acts as administrator for Landscape, Qualys, and Grafana.
- **SRE team:** defines and reviews service level indicators (SLIs), manages service level objectives (SLOs), and operates the alerting system. Works with Operations to automate responses and escalate critical incidents.
- **Security team:** verifies policy compliance, reviews scan results (VMDR, WAS, SonarQube, ZAP, Snyk), and coordinates compliance audits. Also defines secure code acceptance criteria and advises developers on best practices.
- **Developers:** participate in code review, fix vulnerabilities reported by tools, and follow policies for secure handling of secrets and dependencies.

## 7. Operational Considerations

- **Best practices:** the reference document recommends using AWS Secrets Manager for secret handling, applying the principle of least privilege, and avoiding exposure of credentials in code repositories. These principles must be observed in all lifecycle phases.
- **Scope limits:** this section describes what is monitored and with which tools, but does not detail internal configurations or specific procedures. For information on CI/CD setup, infrastructure as code management, or other practices, see EDYE’s Infrastructure and DevOps documents.
- **Integration with other documents:** the security and monitoring strategy is part of EDYE’s documentation suite. It complements architecture guides, access policies, and deployment instructions. Diagram references are included only for context; flows are not reinterpreted nor are undocumented capabilities added.
