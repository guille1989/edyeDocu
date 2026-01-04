---
id: int-api-notifier-billing
title: 🤝 API Notifier Billing Integration
---

**Version:** 1.0  
**Date:** 12/01/2025

---

## 1. Introduction

**Direct Carrier Billing (DCB)** is an online payment method that allows users to purchase digital goods or services by charging the amount directly to their mobile operator’s bill. This mechanism eliminates the need to enter banking data and is especially useful in mobile services, digital media, and countries where credit card usage is not widespread.
In the context of **EDYE**, HITN Digital’s preschool platform that offers educational and entertainment content for children in a safe environment, DCB is used so users can subscribe to the platform through their mobile operator. This document generically defines the **API + Notifier** integration model used by EDYE to offer subscriptions via DCB, in a neutral way and without references to a specific operator.

## 2. Scope

The objective of this document is to serve as a technical-operational guide for **Operations, DevOps**, and **partner technical teams** that need to integrate EDYE services using DCB. It describes:

- The logical architecture of the API + Notifier model.
- The components involved and their interaction.
- Communication flows for registration, authentication, and subscription management.
- Responsibilities of EDYE and the operator.
- Security considerations, error handling, and best practices.

Out of scope are operator-specific details, real URLs, credentials, or country variations.

## 3. Logical Architecture of the Integration

The integration is based on two communication vectors:

- **EDYE REST API:** exposes services for user registration and authentication, subscription status validation, and access management to content.
- **Operator Notifier:** asynchronous messaging mechanism through which the operator sends billing events (activations, renewals, suspensions, and cancellations) to EDYE. These events allow synchronization of subscription status and updating user access.

The following figure illustrates the general architecture of the API + Notifier model. The diagram is conceptual and shows the essential elements without specific implementation details:

![Ciclo DevOps](/img/integraciones/api_notifier_billing/int_api_noti_billing_flujo.png)

> **Figure 1.** Logical architecture of the integration

## 4. Main Components

| Component                                  | Brief description                                                                                                                                                            |
| ------------------------------------------ | ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| **User**                                   | End customer who uses the EDYE application to access content and manage their subscription.                                                                                  |
| **EDYE Application**                       | Mobile or web application where the user consumes the service. Manages the user experience and communicates with the EDYE API.                                               |
| **EDYE API (REST)**                        | Set of services exposed by EDYE to create accounts, authenticate users, check subscription status, and authorize access to content.                                          |
| **Authentication and Registration Module** | Processes user registration and login. Implements security requirements (strong passwords, age validations).                                                                 |
| **Subscription Management Module**         | Stores and queries the user subscription status. Interacts with the operator to start, renew, or cancel subscriptions.                                                       |
| **Internal billing**                       | EDYE’s internal system that manages billing, reconciliation, and service provisioning based on events received from the operator.                                            |
| **Content Access Manager**                 | Controls access to episodes, games, and other resources according to the user’s active plan.                                                                                 |
| **Operator Notifier**                      | Operator service that sends asynchronous events (activation, renewal, suspension, and cancellation) to the webhook configured by EDYE to keep the subscription synchronized. |
| **DCB Operator**                           | Entity that provides direct billing service through the mobile network and supplies the APIs and the Notifier to manage payments and events.                                 |

## 5. Communication Flows

### 5.1. User Registration and Authentication

User onboarding in EDYE follows a simple sequence described in the official help section. The user downloads the application from official stores, selects content, and completes a small calculation to confirm adulthood. Next, a form is displayed where **name, email, and password** are entered. The password must meet security requirements (at least eight characters, including uppercase, lowercase, number, and special character). After completing registration, a welcome email is sent allowing selection of the subscription plan.

EDYE exposes REST services to:

- **Create user:** receives credentials and registration data, validates age, and starts the account creation process.
- **Authenticate user:** validates credentials and issues access tokens (for example, JWT).
- **Check subscription status:** allows the application to know whether the user has an active, expired, or suspended subscription.
- **Authorize access to content:** validates plan-based permissions and grants access to resources.

Communication is done via HTTPS and authentication tokens are used to protect resources.

### 5.2. Subscription Activation (Start)

To activate a subscription via DCB, the phases below are followed. They are based on common industry practices and on the flow described by the CAMARA initiative: in the direct billing model, payment can be completed in one or two steps.

1. **Payment preparation (optional):** the application requests the EDYE API to start a subscription process. EDYE validates that the user is registered, meets eligibility criteria, and prepares the order. This phase is optional because the operator’s billing API allows single-phase payments, combining preparation and charge.
2. **Payment request:** EDYE sends the subscription request to the operator. The request includes the user identifier (for example, MSISDN or user token) and the plan amount. The operator charges the amount to the user’s bill and returns a transaction identifier.
3. **Payment confirmation (in two-step models):** if the reserve-and-confirm scheme is used, EDYE must call a confirmation endpoint to complete the transaction. There is also a cancellation endpoint to void the reservation before it is charged.
4. **Receipt of activation event:** after successful charging, the operator sends an activation event (subscription activated) to the configured Notifier. EDYE consumes this event, updates its internal billing system, and enables content access.

### 5.3. Renewals

Subscriptions are renewed according to the plan frequency (for example, weekly, monthly, or yearly). The operator executes the charge and sends a renewal event to EDYE via the Notifier. EDYE updates the validity date and extends user access.

### 5.4. Suspensions and Cancellations

- **Suspension:** the operator sends a suspension event when the renewal cannot be charged (insufficient balance, temporary user block, etc.). EDYE changes the subscription status to suspended and restricts access until payment regularity is restored.
- **Cancellation:** occurs when the user cancels the subscription or when the operator applies a definitive cancellation. The Notifier sends the event, EDYE marks the subscription as canceled, and revokes access.

## 6. Event Summary Table

| Event (eventType)    | Origin                | Brief description                                  | Action in EDYE                                             |
| -------------------- | --------------------- | -------------------------------------------------- | ---------------------------------------------------------- |
| SUBSCRIPTION_STARTED | Operator via Notifier | Subscription activation (first successful charge). | Activate plan, update internal billing, and enable access. |
| RENEWAL              | Operator via Notifier | Periodic subscription renewal.                     | Update validity and maintain access.                       |
| SUSPENSION           | Operator via Notifier | Failed charge or temporary suspension.             | Suspend plan and restrict access until regularization.     |
| CANCELLATION         | Operator via Notifier | Final cancellation.                                | Mark the subscription as canceled and revoke access.       |

Typical event fields include a transaction identifier (paymentId or subscriptionId), the **msisdn** or user identifier, the event type, and the issue date/time. The operator’s Notifier usually allows including a **signature token** to ensure message integrity.

## 7. Responsibilities

### 7.1. Responsibilities of EDYE

- **Expose and maintain secure APIs:** implement REST services that allow registration, authentication, and subscription queries with proper access controls.
- **Synchronize events:** consume events from the Notifier, verify their authenticity, and update the internal billing system, user profile, and access manager.
- **Data and privacy management:** EDYE only stores the username and password to save information on the content the user consumes; it does not collect data revealing real identity. Users are encouraged to use pseudonyms and comply with current privacy policies.
- **Monitoring and auditing:** record transactions, errors, and notifications for audit and support purposes. Implement alerts for Notifier failures or anomalous error rates.
- **Error management:** return appropriate HTTP codes (for example, 400 Bad Request for invalid parameters, 401 Unauthorized for incorrect credentials, 500 Internal Server Error for internal failures) and clear messages to aid resolution.
- **Idempotency:** ensure activation and renewal operations are idempotent using correlation identifiers to avoid duplicate charges or activations.

### 7.2. Responsibilities of the Operator (Partner)

- **Provide DCB billing APIs:** expose payment endpoints for one or two phases, cancellation, and payment inquiry.
- **Manage consents and authentication:** resolve user identity and obtain consent to charge the bill, as described in the CAMARA flow: the operator is responsible for providing privacy URLs and managing user consent.
- **Issue events via the Notifier:** reliably send activation, renewal, suspension, and cancellation events to EDYE’s webhook. Include unique identifiers and message signature.
- **Provide retry mechanisms:** if a notification delivery fails, the operator must retry until it receives a 200 OK response from EDYE.
- **Offer test environments:** supply a sandbox environment where EDYE can test integrations without real charges.

## 8. Security Considerations

- **Encryption and secure transport:** all services (API and Notifier) must run over HTTPS/TLS.
- **Authentication and authorization:** implement OAuth 2.0 and OpenID Connect schemes for authentication between EDYE, aggregators, and operators. User identity must be transmitted securely and identifiers such as IP address or MSISDN can be used.
- **Notification validation:** verify the signature or token accompanying each Notifier event to ensure it originates from the operator. It is advisable to have shared public keys to validate signatures or a shared HMAC mechanism.
- **Personal data protection:** EDYE does not store information revealing the user’s real identity and recommends using anonymous usernames. Any sensitive data must be stored encrypted and comply with applicable regulations (e.g., GDPR).
- **Access control and rate limiting:** implement rate limits and blocking policies to prevent abuse and denial-of-service attacks.
- **Versioning and secrets management:** manage API versions and rotate keys and tokens regularly.

## 9. Error and Event Handling

- **Authentication errors:** when user credentials are incorrect, the API will return 401 Unauthorized with a descriptive message.
- **Parameter errors:** if parameters are missing or incorrectly formatted, return 400 Bad Request.
- **Operator errors:** the operator can send error events (for example, payment rejected). EDYE must process them and adjust the subscription status.
- **Duplicates:** to avoid processing the same event multiple times, store a unique event identifier and discard already processed events.
- **Retries:** if EDYE does not return 200 OK, the operator will resend the event. Implement exponential backoff retries on both sides.

## 10. Operational Best Practices

- **Use segregated environments:** test the integration in a sandbox environment before moving to production.
- **Continuous monitoring:** establish metrics for latency, payment success rate, Notifier response times, and alarms in case of anomalies.
- **Documentation and versioning:** keep documentation up to date, specify API versions, and schema changes.
- **Time synchronization:** synchronize system clocks to correctly log event timestamps.
- **Support and escalation:** define communication channels between technical teams to manage incidents and maintain service level agreements.
- **Resilience testing:** simulate network failures and Notifier retries to validate system behavior.
- **Audit and compliance:** store access and transaction logs for the period defined by internal policies and regulations.

## 11. Glossary of Terms

| Term                             | Definition                                                                                                                |
| -------------------------------- | ------------------------------------------------------------------------------------------------------------------------- |
| **DCB (Direct Carrier Billing)** | Payment method that charges the cost of a transaction to the user’s mobile operator bill.                                 |
| **API REST**                     | HTTP-based programming interface that follows the REST paradigm to expose web services.                                   |
| **Notifier**                     | Service provided by the operator to send asynchronous events to EDYE (activations, renewals, suspensions, cancellations). |
| **msisdn**                       | Mobile phone number that identifies the subscriber on the operator’s network.                                             |
| **OAuth 2.0 / OIDC**             | Authorization and authentication standards used to securely exchange credentials between applications.                    |
| **EventType**                    | Event field indicating the type of notified operation (SUBSCRIPTION_STARTED, RENEWAL, SUSPENSION, CANCELLATION).          |

This document is part of EDYE’s corporate documentation ecosystem. It has been prepared for technical and operational purposes and will be kept up to date as direct billing integrations evolve.
