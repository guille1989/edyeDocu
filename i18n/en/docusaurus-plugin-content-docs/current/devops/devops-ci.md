---
id: devops-ci
title: 📃 Continuous Integration (CI)
---

# Continuous Integration (CI)

**Version:** 1.0  
**Date:** 01/12/2025

---

## 1. Introduction

Define the guidelines and activities of the Continuous Integration (CI) process within the Edye / HITN Digital ecosystem, ensuring the automation of build, validation, and quality control of the source code before its deployment.

The main purpose of this procedure is to reduce human errors, increase traceability of changes, and accelerate the delivery of stable software in the staging and production environments, using corporate automation, review, and monitoring tools.

In this way, Continuous Integration helps maintain an efficient, secure, and auditable DevOps flow, integrating version control, automated testing, and quality analysis in a unified pipeline managed by GitHub Actions.

---

## 2. Scope

This procedure applies to all repositories hosted on GitHub belonging to the Edye ecosystem, including:

- EDYE-CONNECT
- EDYE-BILLING
- EDYE-API-STANDALONE
- EDYE-CONECTA
- EDYE-ADMIN
- EDYE-PLAY
- EDYE-CLOUD
- EDYE-API-SATELITE

Each repository has a CI pipeline configured in GitHub Actions, which runs automatically on every pull request (PR) or push to the main branches (**stage** or **production**). The scope includes building, analyzing, validating, and packaging the code.

---

## 3. Procedure

The Continuous Integration (CI) process in the Edye / HITN Digital ecosystem automates the build, validation, testing, and quality control of the source code using GitHub Actions.

---

## 3.1. General flow of the Continuous Integration process

Each repository has a configured pipeline that is triggered on a **push** or **pull request** to the `main` or `develop` branches.

The following diagram represents the complete sequence of the CI process in Edye:

![General flow of the Continuous Integration process](/img/integracion-continua-devops.jpg)

> **Figure 1.** Diagram of the general flow of the Continuous Integration process

---

## 3.2. CI flow description

---

### 3.2.1 Pipeline Description – CI Cloud (Node.js)

The CI Cloud pipeline implements the automated process of validation, build, and deployment of the Node.js application corresponding to the production environment cloud-prod.edye.com. This flow ensures that only the approved versions in the branches are distributed to the production servers of Akamai/Linode.

### 1. Pipeline Triggers

The workflow runs under two conditions:

**a) Push to the branch**  
Each commit or merge made to the branches automatically triggers the pipeline, starting the deployment process.

**b) Manual execution (`workflow_dispatch`)**  
Allows launching the pipeline from GitHub Actions without making a commit, useful for retries or controlled deployments.

### 2. Execution Environment

The main job uses:

- Operating system: Ubuntu 22.04
- Node.js: version 22 (configured via actions/setup-node)

This environment ensures compatibility and reproducibility during the process execution.

### 3. Pipeline Stages

#### 3.1. Repository Checkout

The pipeline fetches the source code from the repository using actions/checkout, allowing access to all current content in the branch.

#### 3.2. Node.js Setup

Through actions/setup-node, the required Node.js version is set to run the project tasks.

#### 3.3. Dependency Update

A package update process is run using the npm update command to ensure versions consistent with the production environment.

```bash
npm update
```

#### 3.4. Automated Test Execution

The test script defined in the project is run (npm run test). If any test fails, the pipeline ends and a faulty deployment is prevented.

```bash
npm run test
```

#### 3.5. Project Build

The command npm run build is run to generate the final system artifacts (bundle, dist, or equivalents).

```bash
npm run build
```

#### 3.6. Cleanup Before Deployment

To reduce the size of the final package, unnecessary directories are removed:

- node_modules
- .git

### 4. Deployment on Linode Server 1

#### 4.1. File Transfer (SCP)

The pipeline uses appleboy/scp-action to copy all generated files to the server directory: **/var/www/cloud-prod.edye.com**.

Authentication is done using secure variables and secrets stored in GitHub.

#### 4.2. Script Execution on the Server (SSH)

Once the files are copied, the following actions are performed on the server:

- Load NVM and Node.js environment
- Install production environment dependencies (npm install)
- Restart the Node.js process using **PM2**, ensuring the service is active with the new version.

### 5. Deployment on Linode Server 2

The exact same process applied to server 1 is repeated:

- File copy via SCP
- Dependency installation
- Service restart using PM2

This ensures high availability and consistency between both production nodes.

### 6. Pipeline Completion

The pipeline concludes after completing the deployment on both servers.  
The new version of the cloud-prod.edye.com service is operational on both nodes.

### General Flow Summary

- Node.js environment setup
- Dependency update
- Automated test execution
- Project build
- Cleanup of unnecessary files
- File transfer to servers
- Dependency installation on servers
- Service restart with PM2
- Final publication on both production nodes

---

### 3.2.2 Pipeline Description – CI Admin - Deploy (Laravel)

The “CI Admin - Deploy” pipeline automates the deployment process of the Laravel Admin application in the stage environment. Its main function is to notify a deployment script on the server each time the branch is updated, delegating to that script the internal tasks of code and environment update.

### 1. Pipeline Triggers

The workflow runs in two scenarios:

**a) Push to the branch**  
Every time a commit or merge is made to the branches, GitHub Actions automatically triggers this deployment pipeline.

**b) Manual execution (`workflow_dispatch`)**  
The pipeline can be run manually from the “Actions” tab in GitHub, allowing the process to be relaunched without generating new commits.

### 2. Execution Environment

The main job of the workflow is called **deploy** and runs on:

- Runner operating system: **Ubuntu 22.04**

This runner acts as the origin of the remote connection to the server where the Laravel Admin application is hosted.

### 3. General Pipeline Process

The pipeline consists of a single main step, which is responsible for invoking the remote deployment process:

#### 3.1. SSH Connection and Remote Execution

The `appleboy/ssh-action` action is used to connect to the server via SSH, using the credentials defined as variables and secrets in GitHub:

- Host: defined in `ADMIN_PROD_HOST`
- User: defined in `ADMIN_PROD_USER`
- Password: defined in `ADMIN_PROD_PASSWORD`

Once the connection is established, the runner executes a `curl` command on the server that makes a local HTTP request:

- **Method:** POST
- **URL:** `http://127.0.0.1/deploy/deploy.php`
- **Parameters:**
  - token sent in the URL, obtained from the `ADMIN_PROD_TOKEN` secret
  - JSON body with the `ref` field indicating the branch reference: `"refs/heads/production"`

This POST activates the `deploy.php` script on the server itself, which is responsible for internally executing the necessary actions to update the application with the latest version of the branch code (for example, fetching changes from the repository, updating dependencies, running Laravel tasks, clearing caches, etc., as configured in that script).

### 4. Logical Deployment Flow

In summary, the pipeline flow is as follows:

- A change in the branch is detected or the workflow is launched manually.
- GitHub Actions starts the **deploy** job on an Ubuntu 22.04 runner.
- The runner connects via SSH to the server using the secure credentials configured in GitHub.
- On the server, a local HTTP request (`curl`) is made to `deploy.php` with:
  - a security token
  - the branch reference as a parameter
- The `deploy.php` script processes the request and executes the deployment flow defined for the Laravel Admin application.
- Once the deployment script is finished, the new version of the application is available in the **stage/** environment.

### 5. DevOps Approach

This pipeline aligns with the Edye ecosystem's DevOps strategy by:

- Centralizing environment deployment in GitHub Actions.
- Keeping credentials and tokens managed as secrets in GitHub.
- Delegating the specific deployment logic for Laravel to a server script (`deploy.php`), allowing the process to be adapted and extended without modifying the pipeline.
- Facilitating controlled and repeatable redeployments through the manual option (`workflow_dispatch`).

---

## 3.3. Execution and validation policies

- The Pull Request requires approval by the technical area.
- Every Merge must pass the CI pipeline.
- At least one technical reviewer is required for merging to Stage and Production.

---

## 3.4. Pipeline File Structure

Each repository in the Edye ecosystem must contain a main Continuous Integration workflow file at the following path: **.github/workflows/ci.yml**

Basic configuration example  
_[Pipeline File Structure](https://drive.google.com/file/d/1SvEgbb7Nh5Z_eFrrlLFLRECpUTM_qHEQ/view?usp=drive_link)_

---

## 3.5. Branch and trigger conventions

Version control and CI pipeline execution are based on the following branch structure:

| Branch         | Purpose                                 | Associated pipeline                                                        |
| -------------- | --------------------------------------- | -------------------------------------------------------------------------- |
| **main**       | Stable production code.                 | Pipeline does not apply. <br/>SCI limited to test and lint.                |
| **stage**      | Staging or integrated test environment. | Node.js stack pipeline per branch. <br/>Laravel stack pipeline per branch. |
| **production** | Production environment.                 | Node.js stack pipeline per branch. <br/>Laravel stack pipeline per branch. |
| **Satellite**  | Special environment (NY).               | Laravel stack pipeline per branch.                                         |

---

# 4. Tools

The main tools used in Eddy's Continuous Integration are:

| Category                    | Tool           | Main use                                                  |
| --------------------------- | -------------- | --------------------------------------------------------- |
| Repositories and versioning | GitHub         | Code management, PR, branch control, and CI/CD workflows. |
| CI/CD automation            | GitHub Actions | Automatic execution of pipelines and validations.         |
