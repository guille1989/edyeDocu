---
id: devops-estrategia
title: 📃 DevOps Strategy
sidebar_label: 📃 DevOps Strategy
---

# DevOps Strategy  
**Version:** 1.0  
**Date:** 12/01/2025  

---

## 1. Objective and Scope

Define the organization’s updated DevOps strategy, consolidating automation, security, and continuous monitoring across development, integration, testing, and production environments.

This strategy applies to all platforms supported by:

- GitHub  
- Swagger  
- Monday  
- Grafana  
- Qualys  

---

## 2. DevOps Principles and Policies

### **Core Principles**
- End-to-end automation  
- Ongoing collaboration between teams  
- Continuous improvement  
- Built-in security (DevSecOps)  
- Continuous monitoring

### **Versioning Policy**
All code must be versioned in GitHub under a controlled branch scheme:

- `main`
- `stage`
- `production`
- `feature/*`

### **Deployment Policy**
Deployments must be performed exclusively through validated and automated pipelines, with prior quality control.

---

## 3. Governance and Collaboration

Each region (LatAm, Europe, North America) has a **DevOps Lead** responsible for coordinating releases, validations, and controlled deployments.

Task management is performed in **Monday**, including:

- Automated weekly reports  
- Version control in Drive/Miro  
- Formal documentation flow:  
  Request → Review → Adjustment → Approval → Publication.

---

## 4. Key Tools

| Tool | Purpose | Integration |
|------|---------|-------------|
| **GitHub / GitHub Actions** | Repository and automated CI/CD | Integration with Swagger |
| **Swagger / Postman** | Documentation and endpoint validation | Automated QA |
| **Monday** | Backlog and incident management | Source of tracking and control |
| **Grafana / Prometheus / Loki** | Monitoring and alerts | Email integration |
| **Qualys (VMDR/WAS)** | Vulnerability scanning and compliance | Continuous integration in monitoring |

---

## 5. Security and Monitoring

Security is an integral part of the DevOps pipeline (**DevSecOps**), with automated vulnerability controls via **Qualys**.

Monitoring is performed with **Grafana**, consolidating metrics for:

- Infrastructure  
- APIs  
- Critical services  

Alerts are sent by email and reviewed daily on the incident dashboard.