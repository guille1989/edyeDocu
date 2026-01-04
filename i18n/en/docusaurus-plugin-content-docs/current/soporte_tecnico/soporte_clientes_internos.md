---
id: soporte_clientes_internos
title: "Internal Client Support"
---

**Version:** 1.0  
**Date:** 12/01/2025

---

## 1. Introduction and Purpose

This document consolidates the current technical support model of EDYE / HITN Digital for internal clients. Its purpose is to serve as an auditable corporate reference for the Technical Support, Operations, DevOps, SRE, and Security teams. The information described here is based solely on the Technical Support Procedure – Internal client and the operational escalation matrix provided by the organization; no roles, flows, tools, or metrics beyond those sources have been added.

## 2. Objective of the Technical Support Service

The objective of the service is to provide efficient technical assistance to EDYE collaborators (internal clients) to solve problems related to the company’s technological services, both hardware and software. The service adopts a proactive and reactive approach, seeking not only to fix existing problems but also to prevent future incidents. It is a multichannel service oriented to internal clients.

## 3. Scope (Internal Client)

### 3.1. Definitions and Key Terms

The service is aimed exclusively at internal clients, defined as technical team collaborators who ensure the delivery of EDYE services. Below are some terms used in the procedure:

| Term                          | Definition                                                                                                                                              |
| ----------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------- |
| FAQ                           | Acronym for Frequently Asked Questions; repository where common questions about technical topics for EDYE services are collected and answered.          |
| Multichannel                  | Practice of assisting partners and internal clients through multiple communication channels such as email and Monday.                                   |
| Monday                        | Work OS used by EDYE for executing projects and workflows.                                                                                              |
| Status report                 | Document detailing the progress and current status of a ticket; shows actions taken, time spent, and relevant information to track incident resolution. |
| SLA (Service Level Agreement) | Agreement that sets response conditions for solving technical incidents.                                                                                |
| Ticket                        | Digital record created when an internal client reports a problem or requests help; allows tracking, managing, and resolving the incident.               |

### 3.2. Scope of the Service

The support service covers only internal clients. End users (direct EDYE subscribers or partner subscribers) and partners (external clients that distribute EDYE content) are not part of this procedure.

### 3.3. Type of Users Served

- Collaborators of the technical and operations teams of EDYE / HITN Digital.
- Authorized staff with access to Monday and the defined support channels.

### 3.4. General Typology of Requests

Requests received are classified according to their nature and when they are submitted:

- **Day-to-day questions and operations:** routine operational inquiries. The matrix sets a response time of 2–3 hours during business hours.
- **Errors or technical questions during business hours:** technical incidents that require intervention during working hours. Response time: 2–3 hours.
- **Errors or technical questions outside business hours (1st contact):** critical incidents reported outside business hours. Response time: 24 hours.
- **Errors or technical questions outside business hours (2nd contact):** additional escalation when the 1st contact does not resolve the case; response in 48 hours.
- **Marketing and business questions:** inquiries from marketing or business areas; response in 24 hours.

## 4. Support Channels

Technical support is provided through the following authorized channels:

| Channel                    | Description                                                                                                                                                                        | Access requirements                                          |
| -------------------------- | ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------ |
| Monday                     | Main ticket management platform. Internal clients create, update, and review tickets in Monday. The ticket administrator classifies and assigns tickets to the appropriate agents. | Requires access credentials to the corporate Monday account. |
| Email/Monday notifications | Agents and the ticket administrator use notifications generated by Monday to assign and communicate ticket status.                                                                 | The user must have a corporate email registered in Monday.   |
| Zendesk                    | Used to notify the internal client about the ticket resolution and request confirmation.                                                                                           | Access is managed by the ticket administrator.               |
| Slack                      | Internal communication channel used for reassignment of level 2 tickets and notifications between agents and the administrator.                                                    | Access to authorized internal workspaces.                    |

## 5. Tools Used

- **Monday:** Work OS to manage tickets, record activity, and maintain process traceability.
- **Zendesk:** platform to send notifications to the internal client about ticket resolution.
- **Slack:** internal communication channel used for notifications and escalations between agents and the administrator.
- **Knowledge bases and FAQ:** repositories where solutions, procedures, and frequent answers are documented.

## 6. Access Requirements

- Have valid credentials to access Monday and Slack.
- Have a corporate email to receive notifications and communicate with the support team.
- For Zendesk queries, the internal client must be registered by the ticket administrator.

## 7. Roles and Responsibilities

### 7.1. Ticket Administrator

- Review, classify, and assign tickets according to the required service level.
- Serve as the communication channel with internal clients and the support team.
- Resolve tickets based on their knowledge and experience.
- Notify the internal client about ticket resolution through Zendesk and record the management in Monday.
- Reassign tickets that cannot be resolved at level 1 or 2.

### 7.2. Support Agents

Agents are divided into levels according to request complexity.

#### Level 1

- Resolve assigned tickets in line with established SLAs.
- Update Monday with reports for each ticket and keep internal clients informed.
- Notify the ticket administrator when they cannot provide a technical solution.
- Document solutions in the knowledge base.

#### Level 2

- Take tickets not resolved at level 1 and solve them while respecting SLAs.
- Keep reports updated in Monday and communicate status to stakeholders.
- Notify the ticket administrator when they cannot provide a technical solution.
- Update the knowledge base with the applied solutions.

#### Escalation to Level 3

When level 2 does not resolve an incident, the ticket administrator forwards the ticket to the VP and the technical team for analysis. This level analyzes priority, impact, and available resources and decides whether to proceed with an external provider or expert. If approved, the level 3 technical resolution process is executed with that provider. Otherwise, alternative internal measures are applied (e.g., rolling back to a previous version, removing a component, or reducing functionality).

### 7.3. External Providers or Experts

The external provider or expert participates only when level 3 approves their intervention to resolve the incident.

## 8. Ticket Classification

### 8.1. Types of Requests

The procedure identifies the following ticket categories:

| Request type                                                       | Response time                   | Responsible / Area                   | Reference         |
| ------------------------------------------------------------------ | ------------------------------- | ------------------------------------ | ----------------- |
| Day-to-day questions and operations                                | 2–3 hours during business hours | Operations area – Manager            | Escalation matrix |
| Errors or technical questions                                      | 2–3 hours during business hours | Operations area – Manager            | Escalation matrix |
| Errors or technical questions outside business hours (1st contact) | 24 hours                        | Operations area – Manager            | Escalation matrix |
| Errors or technical questions outside business hours (2nd contact) | 48 hours                        | Operations area – Head of Technology | Escalation matrix |
| Marketing and business questions                                   | 24 hours                        | Marketing and Business – VP          | Escalation matrix |

### 8.2. Classification Criteria

Tickets are classified by:

- Type of incident: operational inquiries, technical errors, or marketing/business requests.
- Schedule: differentiates between business hours and off-hours, which determines response times.
- Criticality level: tickets that cannot be resolved at level 1 or 2 are escalated to higher levels.

## 9. SLAs and Response Times

Service Level Agreements (SLAs) define maximum response times for each type of request:

- Requests during business hours: response within 2–3 hours.
- Technical errors outside business hours (first contact): response in 24 hours.
- Technical errors outside business hours (second contact): response in 48 hours.
- Marketing and business questions: response in 24 hours.

Business hours are considered to be the work hours established internally (not documented in the matrix) and off-hours are any period after that schedule. Times apply from the creation of the ticket in Monday or its receipt by the administrator.

## 10. Technical Support Care Flow

![Internal Client Support](/img/soporteClienteInterno.jpg)

> **Figure 1.** _General flow of Internal Client Support_

### 10.1. Step-by-Step Flow Description

1. **Ticket creation:** The internal client creates a ticket in Monday when a need arises.
2. **Review and assignment:** The ticket administrator reviews the ticket, classifies it according to the typologies, and assigns it to a level 1 agent.
3. **Level 1 resolution process:** The level 1 agent performs the actions needed to solve the problem and notifies the ticket administrator of the result.
4. **Notification to the internal client:** If the ticket is solved, the administrator notifies the internal client via Zendesk and records the solution in Monday.
5. **Internal client confirmation:** The internal client confirms the solution; if there is no response, the ticket is considered solved and closed.
6. **Reassignment to level 2:** If the ticket cannot be solved at level 1, it is reassigned to a level 2 agent through Monday/Slack, attaching the status report.
7. **Level 2 resolution process:** The level 2 agent attempts to resolve the problem, notifies the administrator of the result, and updates the knowledge base when appropriate.
8. **Reassignment to level 3:** If the ticket remains unresolved, it is sent to the VP and the technical team for review.
9. **Case analysis:** The VP and technical team analyze priority, impact, and resources and define the best solution alternative.
10. **Level 3 resolution process:** If approved, a level 3 technical solution is executed with an external provider or expert and the result is reported to the ticket administrator.
11. **Alternative measures:** If external support is not approved, the support team applies alternative measures (do not intervene, roll back versions, remove components, reduce functionality, etc.) and notifies the administrator.

### 10.2. Management by Levels

The flow is structured into three support levels:

- **Level 1:** resolution of common incidents and operational inquiries.
- **Level 2:** resolution of incidents requiring greater technical knowledge or not resolved at level 1.
- **Level 3:** analysis and decision-making by the VP and the technical team; possible intervention of external providers or application of alternative measures.

### 10.3. Ticket Closure

Ticket closure occurs when:

- The internal client confirms the solution through Zendesk or Monday.
- No response is received from the internal client within the established timeframe; in this case, the ticket is considered solved.

## 11. Escalation Model

### 11.1. Operational Escalation

The operational escalation matrix indicates who to contact based on the type of request and schedule. The main information is summarized below:

| Escalation scenario                                                | Response time                   | Area / Position                 | Contact                         | Email                 | Phone             |
| ------------------------------------------------------------------ | ------------------------------- | ------------------------------- | ------------------------------- | --------------------- | ----------------- |
| Day-to-day questions and operations                                | 2–3 hours during business hours | Operations / Manager            | Constantine Costopoulos (Kosta) | ccostopoulos@hitn.org | +1 (646) 296‑2497 |
| Errors or technical questions during business hours                | 2–3 hours                       | Operations / Manager            | Constantine Costopoulos (Kosta) | ccostopoulos@hitn.org | +1 (646) 296‑2497 |
| Errors or technical questions outside business hours (1st contact) | 24 hours                        | Operations / Manager            | Constantine Costopoulos (Kosta) | ccostopoulos@hitn.org | +1 (646) 296‑2497 |
| Errors or technical questions outside business hours (2nd contact) | 48 hours                        | Operations / Head of Technology | Agustín Gómez Vega              | agustin@edye.com      | +1 (786) 329‑9448 |
| Marketing and business questions                                   | 24 hours                        | Marketing and Business / VP     | Maximiliano Vaccaro             | mvaccaro@hitn.org     | +1 (305) 721‑4309 |

### 11.2. Responsibles and Times

The contacts indicated in the matrix are responsible for responding within the established times. When a ticket cannot be resolved at the corresponding level, the ticket administrator triggers escalation to the next level following the escalation matrix and described flow.

### 11.3. Tools Used in Escalation

- **Ticket management:** Monday is the source of truth for ticket creation, classification, assignment, tracking, and closure.
- **Communication:** Slack and Monday notifications are used for internal coordination and ticket reassignment.
- **Logging and tracking:** All actions are recorded in Monday to maintain traceability; Zendesk notifications are used to inform the internal client.

## 12. Tracking Metrics

The procedure defines two key metrics:

| Metric                     | Frequency | Responsible          | Tool             |
| -------------------------- | --------- | -------------------- | ---------------- |
| Number of tickets received | Daily     | Ticket administrator | Monday / Zendesk |
| SLAs met by user or type   | Weekly    | Ticket administrator | Monday           |

These metrics are used to control workload and the effectiveness of technical support and are reported to the operations and management teams.

## 13. Knowledge Management

### 13.1 Knowledge Base

Support agents must update the knowledge base after resolving each ticket. This includes documenting steps, solutions, and best practices. The goal is to reduce incident recurrence and facilitate learning among agents.

### 13.2. FAQ

Frequently asked questions are published on EDYE’s help site (https://ayuda.edye.com/hc/es), where answers to common problems are included. Monday also provides support material for using the platform.

## 14. Related Documentation

- **Technical support procedure – Internal client (PRO-STEC 2):** official document establishing the flow and responsibilities of technical support (version 1.0, 08/01/2025).
- **Operational escalation matrix (ANX-STEC):** table of contacts and response times for each escalation type.

## 15. Final Considerations

The described model is intended solely for internal clients of EDYE / HITN Digital. It must not be used to serve end users or external partners.

All ticket management and communication must be recorded in official tools (Monday, Slack, Zendesk) to ensure traceability and SLA compliance.

The Technical Support, Operations, DevOps, SRE, and Security teams must periodically review metrics and update the knowledge base to ensure continuous service improvement.
