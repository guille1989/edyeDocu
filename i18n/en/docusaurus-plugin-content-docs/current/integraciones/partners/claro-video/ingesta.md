---
id: int-ing-partner-claro-video
title: Content Ingestion – Claro Video
sidebar_position: 2
---

# Content Ingestion – Claro Video

This document describes the **specifics of the content ingestion integration for
the Claro Video partner**, based on the **standard EDYE ingestion model**.

---

## 1. General information

- **Partner:** Claro Video  
- **Service:** International VOD Ingestion  
- **Content type:** Video on Demand  
- **Video format:** MP4 (H.264)  
- **Estimated volume:** ~1500 assets per day  

---

## 2. Applied integration model

Claro Video implements the following model:

- **Model:** Content Ingestion  
  See: `modelos/Ingesta`

This document does not redefine the model; it documents the
**partner-specific configurations and rules**.

---

## 3. Applied flow

In addition to the standard EDYE ingestion technical flow, Claro Video has an
operational flow that involves the Content, Design, and DevOps teams.

This flow describes the human tasks before and after the delivery generation.

![Partner operational flow](/img/integraciones/ingesta/claro-video/claro-video-integracion-ingesta.jpg)
> **Figure 1.** Partner operational flow diagram

---

## 4. Operational considerations

- High daily operational volume (~1500 assets)
- Asynchronous processing
- Average processing time:
  - **3 to 5 minutes per asset**
- Deliveries performed through controlled batches

---

## 5. General validations

During ingestion for Claro Video the following are validated:

- Minimum video resolution: **720p**
- Supported encoding: **H.264**
- Complete mandatory metadata
- Synchronized and valid images
- Naming in accordance with partner rules

---

## 6. Processing states

| State | Description |
|------|-------------|
| Pending | Delivery created |
| Processing | Assets in processing |
| Completed | Successful processing |
| Failed | Error in one or more assets |

The status is checked from the **EDYE Admin Panel**.

---

## 7. Delivery method

Processed content is delivered through:

- **Aspera (HITN Production)** – main method
- **Direct partner SFTP** – when applicable

---

## 8. Technical annexes

The following rules are mandatory for Claro Video:

- Posters and artwork  
  See: `Anexos-Claro Video/Posters y Artwork Claro Video`

---

## 9. Notes

- Ingestion flows via FTP are being phased out.
- Any operational change must be validated with **EDYE Operations**.

---

## 10. Related documentation

- `modelos/ingesta.md`
- `flujo/flujo-ingesta.md`
- `anexos-globales/codigos-error.md`
