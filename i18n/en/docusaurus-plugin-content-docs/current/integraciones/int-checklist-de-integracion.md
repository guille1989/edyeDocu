---
id: int-checklist
title: Edyes - Integrations Checklist
---
**Version:** 1.0  
**Date:** 12/01/2025  

---

## ✅ Checklist — API + Notifier Integration (Direct Carrier Billing)

### 1. General Information

- Partner name
- Country / region
- Operator type (telco / carrier / aggregator)
- Defined environment(s): staging / production
- Partner technical contacts
- Support and escalation window

### 2. Architecture and Scope

- Confirmed integration type (API + Notifier DCB)
- Subscription activation flow defined
- Renewal flow defined
- Cancellation flow defined
- Retry flow defined
- Documented EDYE vs Partner responsibilities

### 3. API – Configuration

- EDYE endpoints enabled
- Partner endpoints documented
- Agreed authentication method (token / header / signature)
- Allowed IPs (whitelisting)
- Defined rate limits
- Agreed timeouts

### 4. Notifier (Events)

- Partner notification URL defined
- Agreed event types:
	- Activation
	- Renewal
	- Cancellation
	- Error / failure
- Payload format validated
- Retries and error handling defined
- ACK / expected response documented

### 5. Billing and States

- Subscription states mapped
- Billing periodicity defined
- Grace period handling defined
- Handling of failed charges defined
- Access rules tied to state

### 6. Security and Compliance

- HTTPS mandatory
- Signature / token validation
- Event logs enabled
- Log retention defined
- Local regulatory compliance validated

### 7. Testing and Validation

- Test cases documented
- Staging environment tests executed
- Error / edge case tests
- Event reconciliation validated
- Go-live approved by both parties

## ✅ Checklist — APP Integration (APO + Notifier + APK)

### 1. General Information

- Partner identified
- Platform(s): Android / Android TV / OTT
- Country / region
- Technical contacts
- Defined environments

### 2. APK

- EDYE APK delivered
- Version documented
- Signature / keystore validated
- Update rules defined
- Publication process agreed

### 3. APO (Application Provider Operator)

- Channel configuration
- Branding configuration
- Partner-specific parameters defined
- Access control validated
- Configuration synchronization validated

### 4. Notifier

- Supported events defined
- Notification endpoint configured
- Event format validated
- Error handling documented

### 5. Authentication and Access

- Login model defined
- User-subscription association validated
- Parental control / profiles validated

### 6. Testing

- Installation on real devices
- Login flows tested
- Billing flows tested
- App update tests
- Final partner approval

## ✅ Checklist — EDYE Billing Integration – Ingestion

### 1. General Information

- Partner identified
- Ingestion type (API / CSV / hybrid)
- Sending periodicity
- Defined environments
- Technical contacts

### 2. Data Model

- User schema defined
- Subscription schema defined
- Subscription states agreed
- Unique identifiers defined
- Mandatory validations documented

### 3. Ingestion Flow

- User creation
- Subscription creation
- Renewal
- Cancellation
- Status update

### 4. Transport

- Endpoint / channel defined
- Security (auth / signature / IP)
- Error handling
- Retries defined

### 5. Reconciliation

- Daily control mechanism
- Logs and audit
- Handling inconsistencies

### 6. Testing

- Initial loads tested
- Error cases validated
- Volume tests
- Go-live approved

## ✅ Checklist — Delivery Integration via API

### 1. General Information

- Partner identified
- Delivery type (metadata / images / video)
- Consumption frequency
- Defined environments

### 2. API

- Endpoints enabled
- Authentication configured
- Catalog filters defined
- API versioning agreed

### 3. Content

- Metadata validated
- Images validated
- Videos validated (if applicable)
- Naming conventions agreed

### 4. Performance

- Defined rate limits
- Caching agreed
- Availability SLA

### 5. Testing

- Consumption in staging
- Payload validation
- Error handling
- Final approval

## ✅ Checklist — Content Ingestion Integration

### 1. General Information

- Partner identified
- Ingestion type (API / Aspera / SFTP)
- Scope (video / metadata / images)
- Delivery frequency

### 2. Formats

- Metadata specification
- Image specification
- Video specification
- Naming conventions

### 3. Transport

- Channel configured
- Credentials delivered
- Security validated

### 4. Processing

- Automatic QC
- Manual QC (if applicable)
- Error handling

### 5. Testing

- Pilot load
- Complete validation
- Operations approval

