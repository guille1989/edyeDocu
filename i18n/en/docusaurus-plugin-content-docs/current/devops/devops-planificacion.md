---
id: devops-planificacion
title: 📃 DevOps Planning
sidebar_label: 📃 DevOps Planning
---

# DevOps Planning

**Version:** 1.0  
**Date:** 12/01/2025

---

## 1. Introduction

This document is part of the technical procedures that structure the DevOps cycle of the **Edye / HITN Digital** ecosystem.  
Its purpose is to define the methodological and operational framework for the **planning** phase, ensuring proper management of tasks, resources, and priorities within technology projects.

DevOps planning is the starting point of the continuous development cycle, enabling:

- Alignment between business needs and technical objectives.
- Guaranteed task traceability.
- Optimized collaboration among development, QA, infrastructure, and operations.

This procedure integrates with the processes of:

- Development
- Continuous Integration (CI)
- Continuous Delivery (CD)
- Operations
- Continuous Improvement

Forming an end-to-end flow aimed at efficiency, automation, and software quality.

---

## 2. Scope

This procedure applies to **all digital projects, products, and services** developed within the Edye ecosystem that require technical planning under the DevOps model.

It establishes guidelines for:

- Organizing and prioritizing technical tasks.
- Roles and responsibilities of the DevOps team.
- Use of corporate tools (Monday, GitHub, Grafana).
- Tracking and validating planned deliverables.

The scope ranges from **backlog review** to **final validation**, tying into the phases of:

- Development
- Integration
- Deployment
- Operations
- Postmortem Evaluation

---

## 3. Procedure

### 3.1. General description

The DevOps planning process defines the sequence of activities required to:

- Organize
- Prioritize
- Manage

technical tasks within the continuous development cycle.

The flow covers:

1. Review
2. Prioritization
3. Assignment
4. Execution
5. Validation

All activities are managed through:

- **Monday**: backlog, dependencies, dates.
- **GitHub**: version control, technical validation, PRs.

---

### 3.2. DevOps planning flow diagram

![DevOps planning flow](/img/planificacion-devops-diagrama.jpg)

> **Figure 1.** Diagram of the DevOps planning process flow.

---

### 3.3. Detail by phase or activity

| **Phase**                    | **Input**                 | **Activity**                                       | **Tool**                      | **Output**                   |
| --------------------------- | ------------------------- | -------------------------------------------------- | ----------------------------- | ---------------------------- |
| **1. Backlog review**       | Tasks in Monday           | Review and technical prioritization                | Monday                        | Validated backlog            |
| **2. Task planning**        | Approved backlog          | Assign tasks, dates, and dependencies              | Monday                        | Task development plan        |
| **3. Development**          | Task development plan     | Component coding and unit testing                  | GitHub / Postman / Swagger    | Validated code               |
| **4. Continuous integration** | Pull Requests            | Automated validation and build                     | GitHub Actions                | Validated build              |
| **5. Deployment**           | Approved code             | Run CI/CD pipeline and deploy to Staging           | GitHub Actions                | Deployed release             |
| **6. Evaluation**           | Metrics and reports       | Performance analysis and improvements              | Grafana / Manual evaluations  | Retrospective report         |

---

## 4. Tools

| Category    | Tool    | Use                                                          |
| ----------- | ------- | ------------------------------------------------------------ |
| **Management** | Monday | Management of priorities, releases, tasks, and workflows      |