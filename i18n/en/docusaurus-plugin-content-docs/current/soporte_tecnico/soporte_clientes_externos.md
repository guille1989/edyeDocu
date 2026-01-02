---
id: soporte_clientes_externos
title: "External Client Support"
---

**Version:** 1.0  
**Date:** 12/01/2025

---

# Technical Support Procedure for External Clients

## 1. Introduction

This document serves as the corporate reference for the technical support service for external clients in the EDYE / HITN Digital ecosystem. Its purpose is to describe, in an operational and non-commercial manner, how assistance is provided to partners and external clients with technical needs related to EDYE’s technological services. The service philosophy is to provide effective and efficient assistance, both in hardware and software, adopting a proactive and reactive approach to address needs and prevent future incidents.

## 2. Purpose of the Document

The aim of this document is to formalize the multichannel technical support model that EDYE offers external clients. It is intended for internal teams (Technical Support, Operations, DevOps, SRE) and external partners with access to EDYE services. The information included here comes exclusively from official procedures and matrices; no undocumented assumptions or improvements are introduced.

## 3. Scope of the Support Service for External Clients

The technical support described is aimed solely at external clients who consume EDYE services through its streaming platform. The service is delivered through a multichannel and multicustomer approach, designed to resolve incidents and technical inquiries quickly.

### 3.1. Support scope

- **Coverage:** includes handling technical issues related to hardware and software for EDYE services, covering both incident resolution and preventive actions.
- **Users served:** partners and external clients with active services.
- **Available channels:** contact is made via the Zendesk ticketing system, which requires authentication.
- **Self-service:** use of a Zendesk knowledge base is encouraged so clients can resolve frequent needs themselves.

### 3.2. Out of scope

The reviewed documentation does not explicitly define which activities fall outside the support scope. Any exclusion or limitation not specified here is considered undefined in the current documentation.

## 4. Definitions and Key Terms

Para facilitar la comprensión del proceso, se incluyen los principales términos utilizados en el servicio:

| Term | Definition |
|---------|------------|
| Internal clients | Members of the technical team responsible for ensuring EDYE service delivery. |
| FAQ (Frequently Asked Questions) | Section on websites or repositories where common questions that partners and external clients may have about EDYE technical services are collected and answered. |
| Multichannel | Practice of assisting partners and external clients through multiple communication channels; in this case email and Monday. |
| Monday | Work OS that facilitates project execution and workflows. Used for internal notifications, ticket logging, and tracking. |
| Partner / External client | External customer or associate with active services for distributing EDYE content. |
| Status report | Document detailing ticket progress and status: actions taken, time spent, and relevant information to track progress. |
| SLA (Service Level Agreement) | Agreement that sets response conditions for resolving technical incidents. They may be defined internally or via contracts with partners. |
| End users | Direct EDYE subscribers or partner subscribers who access EDYE content. |
| Ticket | Digital record created when a partner or external client reports a problem or requests help. It enables efficient tracking, management, and resolution of the incident. |
| Zendesk | Customer service platform that centralizes interactions across multiple channels and enables process automation and data analysis. |

## 5. Service Summary

| Item | Description |
|----------|------------|
| Service name | Multichannel technical support |
| Objective | Provide efficient technical assistance according to user type. |
| Target audience | External clients. |
| Main channel | Zendesk, which requires authentication by the partner or external client. |
| Support scope | Handling hardware and software technical incidents related to EDYE services. The service seeks to resolve current issues and prevent future incidents. |
| Out of scope | No specific restrictions or exclusions are described in the current documentation. |

## 6. Roles and Responsibilities

A continuación se describen los roles documentados y sus responsabilidades principales:

### 6.1. Ticket administrator

- Review, classify, and assign tickets according to the required service level.
- Act as the communication channel between partners or external clients and the support team.
- Resolve tickets according to their knowledge and experience.

### 6.2. Level 1 agent

- Resolve assigned tickets in line with established SLAs.
- Update Monday with reports for each ticket per the actions taken.
- Inform via Monday the status of assigned tickets.
- Notify the ticket administrator when a technical solution cannot be provided.
- Update the technical support knowledge base.

### 6.3. Level 2 agent

- Resolve assigned tickets in line with established SLAs.
- Update Monday with reports for each ticket per the actions taken.
- Inform via Monday the status of assigned tickets.
- Notify the ticket administrator when a technical solution cannot be provided.
- Update the technical support knowledge base.

### 6.4. Executive level / VP

The VP analyzes service level requirements with external providers or experts and recommends actions based on case severity and available resources.

### 6.5. External providers or experts

Provide the technical solution in cases requiring specialized support.

## 7. Support Channels

### 7.1. Enabled tools

- **Zendesk:** primary customer service platform that centralizes tickets and requires authentication.
- **Monday:** Work OS used to classify, assign, and track tickets, as well as for internal notifications and reports.
- **Slack:** internal communication channel used for notifications and reassignment to higher levels.
- **Knowledge base in Zendesk:** repository of self-service articles available to external clients.

### 7.2. Access requirements

- Partners and external clients must have Zendesk access credentials to create and view tickets.
- The internal team uses Monday and Slack for internal management; these channels are not open to external clients.
- For self-service, clients can consult the knowledge base in Zendesk without creating a ticket.

### 7.3. Use of each channel

| Channel | Use |
|-------|-----|
| Zendesk | Creation and tracking of support tickets; communication with the external client and resolution notifications. |
| Monday | Internal tool for ticket classification, assignment, tracking, and reporting; sends notifications between administrators and agents. |
| Slack | Internal channel used for notifications and ticket reassignment to higher levels when appropriate. |
| Knowledge base | Self-service resource allowing external clients to consult articles to resolve common issues without opening a ticket. |

## 8. Ticket Classification

The documentation provides an operational escalation matrix with request types, response times, and associated contacts. These ticket types constitute the currently defined classification. Times are expressed in hours from ticket receipt, and contacts correspond to the operations area unless otherwise indicated.

| Request type | Response time | Area/Contact | Role | Medium |
|-------------------|--------------------|--------------|-------|-------|
| Contact for questions and day-to-day operations | 2–3 hours during business hours | Operations – Constantine Costopoulos | Manager | ccostopoulos@hitn.org / +1 (646) 296‑2497 |
| Escalation of errors or technical questions | 2–3 hours during business hours | Operations – Constantine Costopoulos | Manager | ccostopoulos@hitn.org / +1 (646) 296‑2497 |
| Escalation of errors or technical questions outside business hours (1st contact) | 24 hours | Operations – Constantine Costopoulos | Manager | ccostopoulos@hitn.org / +1 (646) 296‑2497 |
| Escalation of errors or technical questions outside business hours (2nd contact) | 48 hours | Operations – Agustín Gomez Vega | Head of Technology | agustin@edye.com / +1 (786) 329‑9448 |
| Marketing and business questions | 24 hours | Marketing and Business – Maximiliano Vaccaro | VP | mvaccaro@hitn.org / +1 (305) 721‑4309 |

### 8.1. Scheduling considerations

- **Business hours:** the documentation refers to “business hours” for requests with a 2–3 hour response; however, the exact schedule is not specified. It is assumed to be the usual workday, but no specific time range is included in the current documentation.
- **Outside business hours:** escalations outside business hours have response times of 24 and 48 hours for the first and second contacts respectively.

## 9. Support and Resolution Flow

![Support and resolution flow](/img/soporteClienteExterno.jpg)
> **Figure 1.** _General flow of the support and resolution process_

The ticket handling process follows a sequence of steps defined in the procedure, with corresponding records in Zendesk and Monday:

1. **Start – need detection:** the process starts when the external client identifies a need for technical support.
2. **Self-service via knowledge base:** the client consults the updated knowledge base in Zendesk to resolve the need on their own. If this solves the issue, the flow ends.
3. **Ticket creation:** if self-service is not enough, the external client opens a ticket in Zendesk.
4. **Review and classification:** the ticket administrator reviews the ticket, classifies it according to defined typologies, and assigns it to a level 1 agent. Assignment is done via Monday notification.
5. **Level 1 resolution process:** the level 1 agent executes the technical resolution process and notifies the ticket administrator of the result.
6. **Knowledge base update:** as part of closure, the level 1 agent updates the knowledge base as appropriate.
7. **Notification to the external client:** once resolved, the ticket administrator notifies the external client via Zendesk and records the resolution in Monday.
8. **External client confirmation:** the client confirms the solution. If there is no response, consent is assumed and the ticket is closed.
9. **Reassignment to level 2:** if the level 1 agent cannot resolve the ticket, the administrator reassigns it to a level 2 agent via Monday or Slack.
10. **Level 2 resolution process:** the level 2 agent manages the technical resolution, notifies the ticket administrator of the result, and updates the knowledge base when applicable.
11. **Reassignment to level 3:** if level 2 cannot resolve, the ticket is sent for analysis to the VP and the technical team.
12. **Case analysis (level 3):** the VP and technical team evaluate priority, impact, and available resources, define the best solution alternative, and notify via Monday or Slack.
13. **Resolution process with external provider:** if intervention of an external provider or expert is approved, they execute the level 3 solution and report the result.
14. **Alternative measures:** if external support is not approved, the support team applies alternative measures such as not intervening, rolling back to a previous version, removing components, or reducing functionality, and notifies the ticket administrator.

## 10. Operational Escalation

Ticket escalation is organized in levels to ensure response times match incident criticality:

- **Level 1 – Operations (Manager):** handles day-to-day operational questions and escalation of errors or technical questions during business hours. Contact is Constantine Costopoulos, Operations Manager, with a 2–3 hour response time during business hours.
- **First contact outside business hours:** for escalations of errors or technical questions outside business hours, the initial contact remains Constantine Costopoulos with a 24-hour response time.
- **Second contact outside business hours:** if there is no response or the issue persists, contact Agustín Gomez Vega, Head of Technology, with a 48-hour response time.
- **Marketing and business escalation:** marketing and business questions are routed to the Marketing and Business area with contact Maximiliano Vaccaro, VP, and a 24-hour response time.

Escalation levels ensure support continuity based on schedule and incident nature. If a level cannot resolve the incident, it is escalated to the next per the defined flow.

## 11. SLAs and Response Times

Service level agreements (SLAs) are defined by request type and schedule. The documentation sets the following response times:

| Request type | Support level | Documented SLA |
|-------------------|-----------------|-----------------|
| Day-to-day questions and operations | Level 1 | 2–3 hours during business hours |
| Errors or technical questions (business hours) | Level 1 | 2–3 hours |
| Errors or technical questions (first contact outside business hours) | Level 1 / Operations Management | 24 hours |
| Errors or technical questions (second contact outside business hours) | Level 2 / Head of Technology | 48 hours |
| Marketing and business questions | VP of Marketing and Business | 24 hours |

The documentation does not define resolution times or availability commitments; only initial response times are set.

## 12. Support Tools

The tools used in the support process enable comprehensive ticket management and collaboration between teams:

- **Zendesk:** central ticketing and communication platform for external clients; used to create, track, and close tickets.
- **Monday:** Work OS that facilitates project and workflow execution. Used for assignment, ticket tracking, internal notifications, status reporting, and knowledge base version control.
- **Slack:** internal messaging tool used to notify and coordinate ticket reassignment at higher levels.
- **Knowledge base (Zendesk):** repository accessible to external clients for self-service, updated by agents after each resolution.

## 13. Knowledge Management

Knowledge management is a key component to reduce recurrence of incidents and improve self-help:

- **Updated knowledge base:** support agents update the knowledge base after each technical resolution process.
- **Version control:** the documentation indicates knowledge base changes should be version-controlled, though the specific method is not described.
- **Use by external clients:** the knowledge base in Zendesk is available for clients to consult articles and resolve questions before opening a ticket.

## 14. Tracking Metrics

The support service performs tracking via metrics defined in the procedure:

| Metric | Frequency | Responsible | Tool |
|---------|------------|-------------|-------------|
| Number of tickets received | Daily | Ticket administrator | Monday / Zendesk |
| SLAs met by user/type | Weekly | Ticket administrator | Monday |

No additional metrics such as resolution time or customer satisfaction are described; therefore, any other metric is considered undefined in the current documentation.

## 15. Templates, Forms, and Macros

The documentation records templates and forms used in Monday to streamline ticket management:

| Tool | Template/Macro | Objective |
|-------------|-----------------|----------|
| Monday | Errors and technical questions form | Streamline handling of frequent technical incidents. |
| Monday | Marketing and business form | Streamline handling of marketing and business questions. |
| Monday | Status report format | Establish the minimum required content for status reports on each ticket. |

### 15.1 Available forms

The mentioned forms are in Monday and intended for the internal team. The documentation does not specify additional templates or macros in Zendesk; any template not included here is considered undefined.

## 16. Conclusion

This document compiles the official information available about the technical support service for external clients of EDYE / HITN Digital. The structure presented facilitates its integration into corporate documentation platforms such as Confluence or Docusaurus. To keep the procedure current, it is important to update this document whenever roles, SLAs, tools, or workflows change, following the version control established in the source documentation.
