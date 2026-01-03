---
id: int-edye-billing-partner-mi-bebe-y-yo
title: Edye Billing – Mi Bebé y Yo
---
## Specific integration information – Mi Bebé y Yo

This section gathers partner-specific information for the EDYE Billing integration via Pagoralia and InPlayer. The descriptions are based on the shared integration documents.

**Integration channel:** REST API with environment-specific endpoints. Pagoralia endpoints (`/create‑portal`) are used to generate the geolocated payment portal, and InPlayer endpoints (`/auth`, `/user`) for user authentication and registration.

**Architecture and flow:** Pagoralia generates a geolocated portal, adjusting language and currency based on the user’s IP address. InPlayer manages identity and validates paying users. The sequential flow consists of three steps: (1) portal generation; (2) registration in InPlayer; and (3) enabling access to the content. The portal is customized with client logos and colors.

**Fields and interoperability:** Pagoralia sends InPlayer the data for name, email, purchase ID, IP, and product type. InPlayer returns to the platform a JWT that includes the claims `userID`, `email`, `purchaseTime`, and `accessLevel`. Synchronization between both services is performed via webhooks that confirm payment and user registration.

**Validations and security:** Pagoralia checks that the country is supported, the client is available, and payment methods are active. InPlayer validates that the email is not duplicated, formats are correct, and passwords comply with security policies. The most common error messages are `403 Forbidden` (client not enabled) and `409 Conflict` (user already registered). Communications use HTTPS and signed tokens, and temporary portals expire after one hour.

**Environments and URLs:** Mi Bebé y Yo will use the QA and production endpoints of Pagoralia and InPlayer: `https://qa.pagoralia.com/create‑portal` and `https://qa.inplayer.com/api/auth` for testing, and `https://pagos.pagoralia.com` and `https://inplayer.com/api` for the production environment.

**Operational particularities:** The portal automatically adjusts language and currency based on the end user’s location and applies client branding. The integration is limited to real-time individual payments; revenue reconciliation is managed through EDYE standard mechanisms.

**Support contacts:** The original document does not specify contacts; these must be agreed upon in the service contracts.w