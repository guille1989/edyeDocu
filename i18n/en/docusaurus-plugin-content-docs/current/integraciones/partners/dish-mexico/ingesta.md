---
id: int-ing-partner-dish-mexico
title: Content Ingestion – Dish Mexico
---

# Content Ingestion – Dish México

## 1. Description

VOD ingestion integration for Dish México through delivery of media,
metadata, and artwork, operated primarily via Aspera.

## 2. Ingestion Type

- Primary mode: Aspera
- Secondary mode: API (if applicable)
- Frequency: daily
- Estimated volume: ~1500 assets/day

## 3. Delivery Channels

### 3.1 Aspera

- Account provided by Dish
- Expected directories:
  - /MEDIA
  - /METADATA
  - /ART

## 4. Flujo de Ingesta – Dish México

```mermaid
---
config:
  theme: mc
  look: neo
---
sequenceDiagram
    actor CO as "Content Operations"
    actor DT as "Design Team"
    actor DD as "EDYE DevOps"
    actor CV as "Dish Mexico"

    CO->>CO: Recibe contenido del equipo de programación
    CO->>CO: Sube contenido a JW Player y crea metadata
    CO->>CO: Sincroniza JW Player con EDYE API

    CO->>DT: Solicita creación de arte principal por serie
    DT->>DT: Diseña arte según especificaciones del partner
    DT->>CO: Notifica arte disponible
    CO->>CO: Verifica y valida arte cargado en EDYE

    CO->>DD: Solicita generación de delivery
    DD->>DD: Genera delivery para  Dish Mexico
    DD->>DD: Ejecuta validación operativa (metadata / imágenes / naming)

    alt Errores en la validación
        DD->>CO: Reporta errores para corrección
        CO->>CO: Corrige contenido / metadata / imágenes
    else Validación exitosa
        DD->>CV: Entrega assets vía SFTP / Aspera
    end
```
> **Figure 1.** _Partner operational flow diagram_

This flow describes the complete operational process from the receipt of
content by the Content Operations team to the final delivery of the
content to the Dish México customer via Aspera.

## 5. Metadata

- Standard: CableLabs XML
- Version: according to Dish specification
- Mandatory validations:
  - ProgramID
  - Title
  - Rating
  - Language
  - Duration

> See Annex: Metadata / XML CableLabs – Dish México

## 6. Dish-Specific Rules

- Strict naming by ProgramID
- Ingestion rejected if artwork is missing
- Reprocessing requires full resend

## 7. Dependencies

- Aspera
- XML validator
- Standard Edye Ingestion pipeline

## 8. References

- General model: Ingesta de Contenidos
- General flow: Flujo de Ingesta de Contenidos
