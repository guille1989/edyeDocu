---
id: app-admine
title: 🈸 Admin Service
---

**Version:** 1.0  
**Date:** 12/01/2025

---

## 1. Introduction and Purpose

The **Admin Service** is the internal administrative portal for the EDYE/HITN Digital ecosystem. Per the user manual, the portal focuses on **product management**, enabling operations and processes that ultimately support content delivery to **partners and end users**. Tasks in this service include **user and role management**, querying and recording information, viewing usage metrics, and configuring and sending playlists, images, and metadata. This documentation targets **DevOps**, **Operations**, **SRE**, and **Security** teams and provides a technical and operational description of the service infrastructure and flows.

## 2. Functional Description

The Admin Service acts as an administrative interface for internal teams and partners. The main features, derived from the portal menu, are summarized below:

### 2.1. Dashboard

**Technical Info:** shows traffic charts by endpoint, usage by endpoint, and error metrics. A line chart displays total hits, successful hits, and errors, while donut charts show API usage by endpoint and by partner. A table named Latest Errors lists recent errors with ID, date, level, and user, with an option to view details.

**Commercial Info:** displays commercial information related to **InPlayer** (subscriptions, payments, and active/expired accounts) via line and bar charts, plus account status tables. It also shows the percentage of API usage per partner.

### 2.2. Metadata Management

**Download Metadata:** lets you download metadata for shows, seasons, and episodes in the format required by each partner.

**Edit Metadata:** enables creating and editing objects (shows, episodes, or movies). To register an asset, it must already exist in the **JW Player** library. The edit form includes fields such as Media Type, JWP Code (media or thumbnail code depending on asset type), Edye Asset #, premiere and end dates, languages, studios, and other metadata details. It also supports recording titles, descriptions, ratings, cast, production crew, country release dates, and awards; these fields are handled through structured forms for each asset section.

### 2.3. Image and Delivery Management

**Upload Files:** allows uploading, editing, and deleting images by show, season, or episode. The user selects the season, the format (e.g., 16:9), and the file to upload; upon submission, a list of images linked to the asset is generated.

**Delivery View:** shows image deliveries by partner. For each delivery it displays the partner name, delivery method, whether delivery is enabled, whether watermarking is used, image formats, and a list of episodes with image counts and download options.

**Watermark:** manages watermark collections. You can create collections, upload watermark images, set a default collection, and delete specific watermarks.

**Delivery:** enables creation of new delivery packages for a partner and monitoring of existing deliveries.

### 2.4. Logging and Auditing

**API Log:** provides a chronological record of API requests. It allows filtering by dates, user, or endpoint and downloading data as CSV. The table shows fields such as ID, date, level (informational or error), user, message, geolocation, and response code.

**Notification Log:** lists notifications sent to partners that require confirmations; it includes ID, date, partner, method, URL, and access to transaction details.

**Terra Log:** records events related to the Terra integration, allowing filtering by date, operation, and event type. It displays fields such as ID, date, MSISDN, operation, level, and response.

**Bango Log:** shows events related to the Bango integration; it includes ID, date, level, user, message, geolocation, and response.

**Marketing API Log:** lists interactions with the email marketing system (Mailchimp), with filters by date, operation type (contact or order), and event type.

**SSO API Log:** records SSO login events; it allows filtering by origin and shows fields like ID, date, origin, SSO partner, SSO client, method and endpoint, response, and download option.

### 2.5. JW Player Integration

The Admin Service integrates with the JW Player platform to manage shows, episodes, and tags. The main actions are:

**Shows:** lists shows published in JW Player and allows filtering by library (for example, 16:9 ES, carousel, or 16:9 PT). You can search for a show, download the filtered list, and, by selecting the checkbox, redirect to JW Player to edit the show tags.

**Episodes:** lets you edit metadata for specific episodes via JW Player interfaces. You can filter by library, show, or episode name and access the JW Player editor for each episode.

**Tags vs Shows / Tags vs Episodes:** groups shows or episodes by tag for a unified view and allows editing the corresponding tags in JW Player.

**Sync Shows Info:** syncs JW Player library information with the API database. This process runs automatically each night, though it can be executed manually when immediate changes are needed.

**Edit JW Player:** facilitates bulk editing of a show's metadata and its episodes, as well as syncing data and images for that show only.

### 2.6. Configuration

**Partners:** lets you create, edit, or delete partners. When creating a partner, you define main information (name), watermark settings, thumbnail formats, and delivery methods. It also manages credentials (S3, SFTP, etc.), billing settings (such as subscription URL and payment gateway), and naming formats for video, image, and metadata. The panel allows enabling or disabling delivery via API and configuring Aspera folders for file distribution.

**Users:** creates, edits, and assigns permissions to administrative users.

**Playlist:** assigns master playlists by language.

**System Config:** manages environment variables required for the application to run.

**Cron Process:** displays a list of automated processes with information about the last execution and a log history.

### 2.7. Tools

**Cache:** option to clear cache servers.

**Coactive:** dashboard with synchronization information between the managed library and Coactive's AI database, showing the sync status.

**Logout:** portal sign out.

## 3. Architecture and Components

According to internal documentation, the Admin Service is implemented as a client-server web application. Its architecture consists of:

| Component              | Description                                                                                                                                                                                                                                                                                                                        |
| ---------------------- | ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| **Frontend**           | Interface built with Next JS, based on React. The runtime uses Node.js to leverage a non-blocking event model.                                                                                                                                                                                                                      |
| **Backend**            | Core logic developed in Laravel (PHP), using an MVC pattern and a robust ORM for database operations. Laravel supports relational databases like MySQL and can be extended to MongoDB through specific packages.                                                                                                                   |
| **Database**           | Relational MySQL instance used to store configurations, users, and catalog metadata. MySQL provides ACID transactions and replication.                                                                                                                                                                                              |
| **External services**  | Communication with the content API to publish changes, cloud storage services to upload images and assets, and other integrations such as InPlayer, Terra, Bango, Mailchimp, and SSO as indicated in the logs. It also integrates with JW Player for metadata management and content synchronization.                               |

> Note: The technologies described for frontend, backend, and database come from the service base document. The user manual does not detail the development stack or infrastructure topology, so these descriptions must be validated with the technical team before formal audits.

## 4. Internal and External Dependencies

The Admin Service interacts with several modules and services:

- **Content API:** exposes endpoints to create, update, or delete catalog resources. The portal queries and sends metadata and receives operation confirmations.
- **Cloud storage service:** manages storage and delivery of images and media files. Image delivery settings per partner involve S3/SFTP credentials and Aspera folders.

**Third-party integrations:**

- **JW Player:** the source of truth for audiovisual assets. Metadata creation processes and library synchronization rely on assets already existing in JW Player.
- **InPlayer:** subscription and payment platform; the commercial dashboard shows InPlayer metrics.
- **Terra, Bango, and Mailchimp:** external services integrated via logs and notification processes.
- **Coactive:** AI system for content analysis and tagging, with which the Admin library synchronizes.
- **Payments and billing system:** partners can associate payment gateway settings and specific URLs for their subscription pages.

## 5. Main Operational Flows

### 5.1. Access and Authentication

Portal access is via internal username/password authentication. User onboarding is handled by the Edye team. After authentication, users access the main dashboard and sections according to their permissions. A dedicated event log exists for SSO integrations.

### 5.2. Catalog Editing

- **Metadata creation/editing:** the operator selects the asset type (series, episode, or movie), completes required fields, and saves the information. Only assets that already exist in JW Player can be created.
- **Image upload:** from Upload Files, select the show, season, and format and upload the file. Images linked to the asset are listed with download options.
- **Delivery management:** delivery packages are configured for partners, assigning formats and credentials. Deliveries can be made via the API or through folders in systems like Aspera and S3.
- **Synchronization with JW Player:** show and episode catalogs are synchronized every night. Manual syncs are used when changes need to be reflected immediately.

### 5.3. Monitoring and Auditing

Operators use the Dashboard panels to review API traffic and commercial metrics. They can also consult various logs to audit events:

- **API Log:** request and error tracking, with filters and CSV export.
- **Notification Log, Terra Log, Bango Log, Marketing API Log, and SSO API Log:** records specific to external integrations.
- **Coactive:** information about synchronization with the AI database.

Logs are used to detect incidents, analyze response times, and verify compliance with notification processes.

## 6. Security and Access Control

- **Authentication and authorization:** the application uses role-based access control. User onboarding is centralized and each user receives specific permissions (e.g., editors, supervisors). SSO events are recorded in a dedicated log.
- **Secure transport:** all communications occur over HTTPS/TLS. Passwords and API keys are stored encrypted.
- **Secret management:** partner credentials (S3, SFTP, Aspera) are stored securely in partner settings. Sensitive environment variables are managed from the System Config section.
- **Auditing:** user operations and automated processes are logged, enabling full traceability.

## 7. Operations, Monitoring, and Logs

The Admin Service is deployed via a CI/CD pipeline with automated tests, container packaging, and promotion to development, staging, and production environments. Operators perform smoke tests before promoting to production. The orchestrator manages auto-scaling and load balancing. Sensitive variables are managed as secrets.

Monitoring includes:

- **Application metrics:** traffic by endpoint, response time, error rate, and resource usage. These metrics are displayed in the Technical Info panel.
- **Commercial metrics:** subscription activity, payments, and account status captured from InPlayer and shown in the Commercial Info panel.
- **Structured logs:** all subsystems generate records that are centralized for search and auditing. Logs can be downloaded in flat formats for external analysis.

## 8. Operational Continuity and Resilience

- **High availability:** the application is deployed across multiple availability zones with load balancers.
- **Backups and recovery:** backups are performed for the database and stateful containers. There is asynchronous replication to a secondary region and documented procedures for failover.
- **Contingency tests:** restoration and failover exercises are scheduled to validate recovery times.

> Note: these practices come from the base document and are not detailed in the user manual. They must be confirmed with the operations team.

## 9. Known Limitations / Documented Assumptions

- **Pre-existing assets in JW Player:** creating an asset in the Admin Service requires that the asset already exists in the JW Player library.
- **Dependence on external integrations:** many functions rely on third-party services (InPlayer, Terra, Bango, Mailchimp, SSO, Aspera). Availability and latency of these services impact operations.
- **Nightly synchronization:** the full sync of shows and episodes with JW Player runs automatically every night and can take time. Users should avoid running it manually unless necessary.
- **Sensitive configuration:** delivery data (bucket credentials, image formats, payment gateways) must be handled carefully. The manual does not detail rotation policies or secret management; this should be reviewed with the security team.

## 10. Items Pending Validation

- **Exact technology stack:** the user manual does not explicitly confirm the use of Laravel, Next JS, or MySQL; these details come from the base document and must be confirmed with the development team before auditing the infrastructure.
- **Deployment topology:** no details are provided about the container orchestrator (e.g., Kubernetes, ECS) or auto-scaling configuration.
- **CI/CD processes:** the pipeline described in the base document (unit tests, container builds, environment deployments) is not documented in the manual and must be validated.
- **Encryption and key management mechanisms:** although encryption and HTTPS are mentioned, algorithms and secret management mechanisms are not detailed.
- **Partner approval and auditing flows:** business rules for creating and approving new partners, as well as enabling automatic deliveries, are not specified in the documentation and require confirmation.

## 11. Final Observations

The consolidation presented here integrates the functionality detailed in the User Manual with the operational and technical structure from the base document. Undocumented assumptions have been avoided, and items requiring validation have been flagged. This document provides a coherent, up-to-date view of the Admin Service, suitable for publication in corporate documentation platforms such as Docusaurus, Confluence, or PDF documents.
