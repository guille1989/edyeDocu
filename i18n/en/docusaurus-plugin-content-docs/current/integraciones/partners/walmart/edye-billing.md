---
id: int-edye-billing-partner-waltmart
title: Edye Billing – Walmart
---
## Información de integración específica – Walmart

This section compiles partner-specific information implementing the EDYE Billing integration through Pagoralia and InPlayer. The descriptions are based on the shared integration documents.

**Integration channel:** REST API with environment-specific endpoints. Pagoralia endpoints (`/create‑portal`) are used to generate the geolocated payment portal, and InPlayer endpoints (`/auth`, `/user`) handle user authentication and registration.

**Architecture and flow:** Pagoralia generates a geolocated portal, adjusting language and currency based on the user’s IP address. InPlayer manages identity and validates paying users. The sequential flow has three steps: (1) portal generation; (2) registration in InPlayer; and (3) enabling access to the content. The portal is customized with the client’s logos and colors.

**Fields and interoperability:** Pagoralia sends InPlayer the name, email, purchase ID, IP, and product type. InPlayer returns a JWT to the platform that includes the claims `userID`, `email`, `purchaseTime`, and `accessLevel`. Synchronization between both services is done via webhooks that confirm payment and user registration.

**Validations and security:** Pagoralia verifies that the country is supported, that the client is available, and that payment methods are active. InPlayer validates that the email is not duplicated, that formats are correct, and that passwords comply with security policies. The most common error messages are `403 Forbidden` (client not enabled) and `409 Conflict` (user already registered). Communications use HTTPS and signed tokens, and temporary portals expire after one hour.

**Environments and URLs:** Walmart will use the QA and production endpoints of Pagoralia and InPlayer: `https://qa.pagoralia.com/create‑portal` and `https://qa.inplayer.com/api/auth` for testing, and `https://pagos.pagoralia.com` and `https://inplayer.com/api` for the production environment.

**Operational particulars:** The portal automatically adjusts language and currency based on the end user’s location and applies the client’s branding. The integration is limited to one-time, real-time payments; revenue reconciliation is handled through EDYE’s standard mechanisms.

**Support contacts:** The original document does not specify contacts; these must be agreed upon in the service contracts.
