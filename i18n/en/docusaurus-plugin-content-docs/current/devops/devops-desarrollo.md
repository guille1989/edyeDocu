---
id: devops-desarrollo
title: 📃 DevOps Development
sidebar_label: 📃 DevOps Development
---

# DevOps Development

**Version:** 1.0  
**Date:** 12/01/2025

---

## 1. Introduction

Define the guidelines, activities, roles, and tools applicable to the software development process within the Edye (HITN Digital) technology ecosystem.

This procedure aims to guarantee the quality, consistency, and traceability of the source code prior to its integration into testing and deployment environments. It also establishes the technical and operational principles for agile, secure development aligned with corporate DevOps practices.

---

## 2. Scope

This procedure applies to all source code implementation, documentation, validation, and version control activities hosted in Edye’s official repositories.

It covers the full cycle from task assignment to code approval for integration into staging or production environments, ensuring traceability between requirements, commits, tests, and deliveries.

This procedure applies to backend, frontend, and QA development teams, as well as DevOps Engineers and Project Managers responsible for quality control and deliverable validation.

---

## 3. Procedure

The DevOps development process at Edye defines the activities and technical guidelines for implementation, version control, testing, and documentation of the source code within the HITN Digital technology ecosystem.

The flow integrates the phases of **coding**, **validation**, and **peer review** before integration into staging and production environments, ensuring traceability and quality of the delivered software.

---

## 3.1. Development environment

Edye’s development environment is based on a modern technology architecture built mainly with **Node.js**, **Next.js**, and **Laravel**.

The platform operates under a hybrid database model:

- **MySQL** → relational engine for structured processes.
- **MongoDB** → NoSQL database for components that require flexibility and scalability.

### Main environments

- **Local**: individual developer work.
- **Staging**: integrated testing and QA environment.
- **Production**: validated stable deployment.

### Version control

Version control is managed in **GitHub**, using the main branches:

- `main`
- `production`
- `features/*`
- `staging`

---

## 3.2. Process inputs and outputs

| Type        | Description                                                                              |
| ----------- | ---------------------------------------------------------------------------------------- |
| **Inputs**  | Tasks assigned in Monday, functional/technical requirements, bug or improvement reports. |
| **Outputs** | Documented, tested, and approved code in GitHub; updated Swagger; validated Postman.     |

> _Note:_ For some repositories, Swagger/Postman deliveries are not required.

---

## 3.3. DevOps development flow diagram

The following diagram visually represents the **general flow of the development phase within Edye’s DevOps cycle**.

![DevOps development flow diagram](/img/desarrollo-devops.jpg)

> **Figure 1.** _Diagram of the DevOps development process flow._

---

## 3.4. Detail by phase or activity

- **Assignment and preparation:** Task reception → branch creation from `production` using `feature/<name>` or `<name>`.
- **Coding:** Development of the assigned component.
- **Testing:** Creation of unit tests with Jest and validation with Postman collections.  
  Swagger documentation is generated automatically.
- **Technical review:** Pull Request (PR), peer review, GitHub Actions validations.
- **Approval and merge:** Functional validation, controlled merge, semantic versioning, changelog update.

---

## 3.5. GitHub repositories

Repositories are hosted on GitHub and constitute the single source of truth for code and technical documentation in the EDYE ecosystem. Each repository maintains its branches, CI/CD pipelines, and associated documentation files (README.md, Swagger, Postman).

| Repository              | Purpose                                            | Branches                    | Stack                       |
| ----------------------- | -------------------------------------------------- | --------------------------- | --------------------------- |
| **EDYE-CONNECT**        | SSO middleware for operators, apps, and partners.  | Main / Staging / Production | PHP - Laravel - MySQL       |
| **EDYE-BILLING**        | Payments, promotions, and subscriptions.           | Main / Staging / Production | PHP - Laravel - MySQL       |
| **EDYE-API-STANDALONE** | Main backend with REST endpoints.                  | Main / Staging / Production | PHP - Laravel - MySQL       |
| **EDYE-CONECTA**        | SSO connector between Edye and operators.          | Main / Staging / Production | PHP - Laravel - MySQL       |
| **EDYE-ADMIN**          | Central CMS for shows, metadata, images, partners. | Main / Staging / Production | PHP - Laravel - MySQL       |
| **EDYE-PLAY**           | Web platform (kids/parents).                       | Main / Staging / Production | Node.js - Next.js - MongoDB |
| **EDYE-CLOUD**          | User activity and storage.                         | Main / Staging / Production | Node.js - MongoDB           |
| **EDYE-API-SATELITE**   | Redundancy, load, and resilience.                  | Main / Staging / Production | PHP - Laravel - MySQL       |

> **Standard naming:** `edye-[module]`

Each repository must include its own README.md with installation instructions, dependencies, active branches, deployment pipelines, and technical contacts.

---

## 3.6. Cloning GitHub repositories

Developers must have permissions and have configured SSH or PAT.

### Cloning via SSH (recommended)

**Prerequisites:**

- Have an SSH key (`id_rsa` or `ed25519`)
- Add the public key to GitHub:  
  **Settings → SSH and GPG keys**

**Official tutorial:**  
https://docs.github.com/en/authentication/connecting-to-github-with-ssh/adding-a-new-ssh-key-to-your-github-account

**Clone command:**

```bash
git clone git@github.com:edye/<repository>.git
```

---

## 3.7. Development standards

Software development at Edye follows uniform criteria to ensure consistency, maintainability, and code quality.

Standards include:

- **Modular structure** organized by service.
- **Mandatory code review** before every merge request.
- **Controlled branch naming**
  - `feature/<name>`
  - `<name>`
- **Semantic versioning**, e.g., `v1.3.2`.
- **Proper definition of RESTful endpoints**, ensuring consistent **JSON responses**.
- **Compliance with style conventions** and API documentation using **Swagger/OpenAPI**.

---

## 4. Tools

| Category            | Tool          | Use                                                                                                                                |
| ------------------- | ------------- | ---------------------------------------------------------------------------------------------------------------------------------- |
| **Version control** | GitHub        | Repositories, PRs, code review                                                                                                     |
| **Testing**         | Jest, Postman | Functional and integration validation                                                                                              |
| **Management**      | Monday        | Backlog tracking and deliveries. All changes must update the technical documentation and reference the originating task in Monday. |
