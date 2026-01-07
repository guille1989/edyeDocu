---
id: devops-ci
title: 📃 Continuous Integration (CI)
sidebar_label: 📃 Continuous Integration (CI)
---

## 1. Introducción

Define the guidelines and activities of the Continuous Integration (CI) process within the Edye / HITN Digital ecosystem, ensuring automation of build, validation, and source code quality control before deployment.

The main purpose of this procedure is to reduce human error, increase change traceability, and accelerate the delivery of stable software in staging and production environments, using corporate automation, review, and monitoring tools.

In this way, Continuous Integration helps maintain an efficient, secure, and auditable DevOps flow by integrating version control, automated tests, and quality analysis in a unified pipeline managed by GitHub Actions.

---

## 2. Alcance

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

## 3. Procedimiento

The Continuous Integration (CI) process in the Edye / HITN Digital ecosystem automates build, validation, testing, and source code quality control using GitHub Actions.

### 3.1. General flow of the Continuous Integration process

Each repository has a configured pipeline that is triggered by a **push** or **pull request** to the `main` or `develop` branches.

The following diagram represents the full sequence of the CI process in Edye:

![Flujo general del proceso de Integración Continua](/img/integracion-continua-devops.jpg)

> **Figure 1.** _Diagram of the general Continuous Integration process flow_

### 3.2. CI flow description

#### 3.2.1 Pipeline description – CI Cloud (Node.js)

The CI Cloud pipeline implements the automated process of validation, build, and deployment of the Node.js application for the production environment cloud-prod.edye.com. This flow ensures that only the versions approved in the branches are distributed to the Akamai/Linode production servers.

**1. Pipeline triggers**

The workflow runs under two conditions:

**a) Push to the branch**  
Each commit or merge performed on the branches automatically triggers the pipeline, starting the deployment process.

**b) Manual execution (`workflow_dispatch`)**  
Allows launching the pipeline from GitHub Actions without making a commit, useful for retries or controlled deployments.

**2. Execution environment**

The main job uses:

- Operating system: Ubuntu 22.04
- Node.js: version 22 (configured via actions/setup-node)

This environment ensures compatibility and reproducibility during process execution.

**3. Pipeline stages**

**- Repository checkout**

The pipeline fetches the source code from the repository using actions/checkout, allowing access to all current content in the branch.

**- Node.js setup**

Through actions/setup-node the Node.js version required to run the project tasks is defined.

**- Dependency update**

A package update process is run using the command npm update to ensure versions consistent with the production environment.

```bash
npm update
```

**- Execution of automated tests**

The test script defined in the project (npm run test) is executed. If any test fails, the pipeline ends and a faulty deployment is avoided.

```bash
npm run test
```

**- Project build**

The command npm run build is executed to generate the system’s final artifacts (bundle, dist, or equivalents).

```bash
npm run build
```

**- Cleanup before deployment**

To reduce the size of the final package, unnecessary directories are removed:

- node_modules
- .git

---

**4. Deployment on Linode Server 1**

**File transfer (SCP)**

The pipeline uses appleboy/scp-action to copy all generated files to the server directory: **/var/www/cloud-prod.edye.com**.

Authentication is handled through secure variables and secrets stored in GitHub.

**Execution of scripts on the server (SSH)**

Once the files are copied, the following actions are executed on the server:

- Load NVM and Node.js environment
- Install production environment dependencies (npm install)
- Restart the Node.js process using **PM2**, ensuring the service remains active with the new version.

**Deployment on Linode Server 2**

Exactly the same process applied on server 1 is repeated:

- Copy files via SCP
- Install dependencies
- Restart the service using PM2

This ensures high availability and consistency between both production nodes.

**Pipeline completion**

The pipeline concludes after completing deployment on both servers.  
The new version of the cloud-prod.edye.com service is operational on both nodes.

**General flow summary**

- Node.js environment setup
- Dependency update
- Execution of automated tests
- Project build
- Cleanup of unnecessary files
- File transfer to servers
- Installation of dependencies on servers
- Service restart with PM2
- Final publication on both production nodes

---

#### 3.2.2 Pipeline description – CI Admin - Deploy (Laravel)

The “CI Admin - Deploy” pipeline automates the deployment process of the Laravel Admin application in the stage environment. Its main function is to notify a deployment script on the server whenever the branch is updated, delegating to that script the internal tasks of updating the code and environment.

**1. Pipeline triggers**

The workflow runs in two scenarios:

**a) Push to the branch**  
Whenever a commit or merge is made to the branches, GitHub Actions automatically triggers this deployment pipeline.

**b) Manual execution (`workflow_dispatch`)**  
The pipeline can be executed manually from the “Actions” tab in GitHub, allowing the process to be relaunched without generating new commits.

**2. Execution environment**

The main job of the workflow is named **deploy** and runs on:

- Runner operating system: **Ubuntu 22.04**

This runner acts as the origin of the remote connection to the server where the Laravel Admin application is hosted.

**3. General pipeline process**

The pipeline consists of a single main step, which is responsible for invoking the remote deployment process:

**SSH connection and remote execution**

The `appleboy/ssh-action` is used to connect to the server via SSH, using the credentials defined as variables and secrets in GitHub:

- Host: defined in `ADMIN_PROD_HOST`
- User: defined in `ADMIN_PROD_USER`
- Password: defined in `ADMIN_PROD_PASSWORD`

Once the connection is established, the runner executes a `curl` command on the server that makes a local HTTP request:

- **Method:** POST
- **URL:** `http://127.0.0.1/deploy/deploy.php`
- **Parameters:**
  - token sent in the URL, obtained from the `ADMIN_PROD_TOKEN` secret
  - JSON body with the `ref` field indicating the branch reference: `"refs/heads/production"`

This POST activates the `deploy.php` script on the server itself, which is responsible for internally executing the actions needed to update the application with the latest version of the branch code (for example, pulling changes from the repository, updating dependencies, running Laravel tasks, clearing caches, etc., as configured in that script).

**4. Logical deployment flow**

In summary, the pipeline flow is as follows:

- A change in the branch is detected or the workflow is launched manually.
- GitHub Actions starts the **deploy** job on an Ubuntu 22.04 runner.
- The runner connects via SSH to the server using the secure credentials configured in GitHub.
- On the server, a local HTTP request (`curl`) to `deploy.php` is executed with:
  - a security token
  - the branch reference as a parameter
- The `deploy.php` script processes the request and executes the deployment flow defined for the Laravel Admin application.
- After the deployment script finishes, the new version of the application is available in the **stage/** environment.

**5. DevOps approach**

This pipeline aligns with the DevOps strategy of the Edye ecosystem by:

- Centralizing environment deployment in GitHub Actions.
- Keeping credentials and tokens managed as secrets in GitHub.
- Delegating the specific Laravel deployment logic to a server script (`deploy.php`), allowing the process to be adapted and extended without modifying the pipeline.
- Making it easy to relaunch deployments in a controlled and repeatable way using the manual option (`workflow_dispatch`).

---

### 3.3. Execution and validation policies

- The Pull Request needs approval from the technical area.
- Every merge must pass the CI pipeline.
- At least one technical reviewer is required for the merge to Stage and Production.

---

### 3.4. Pipeline file structure

Each repository in the Edye ecosystem must contain a main Continuous Integration workflow file at the following path: **.github/workflows/ci.yml**

Basic configuration example  
_[Pipeline File Structure](https://drive.google.com/file/d/1SvEgbb7Nh5Z_eFrrlLFLRECpUTM_qHEQ/view?usp=drive_link)_

---

### 3.5. Branch conventions and triggers

Version control and CI pipeline execution are based on the following branch structure:

| Rama           | Propósito                                | Pipeline asociado                                                       |
| -------------- | ---------------------------------------- | ----------------------------------------------------------------------- |
| **main**       | Stable production code.                  | Pipeline not applicable. <br/>SCI limited to test and lint.             |
| **stage**      | Staging or integrated testing environment.| Stack Node.js pipeline per branch. <br/>Stack Laravel pipeline per branch. |
| **production** | Production environment.                  | Stack Node.js pipeline per branch. <br/>SStack Laravel pipeline per branch. |
| **Satellite**  | Special environment (NY).                | Stack Laravel pipeline per branch.                                      |

---

## 4. Herramientas

The main tools used in Eddy’s Continuous Integration are:

| Categoría                 | Herramienta    | Uso principal                                              |
| ------------------------- | -------------- | ---------------------------------------------------------- |
| Repositories and versioning | GitHub         | Code management, PRs, branch control, and CI/CD workflows. |
| CI/CD automation          | GitHub Actions | Automatic execution of pipelines and validations.          |
