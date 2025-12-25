---
id: int-partnet-directv-anexos-checklist
title: Checklist de Ingesta – Directv
---

## Checklist Compacto — Ingesta DIRECTV

| Fase         | Validación clave         | Criterio mínimo                                 | Responsable   |
|--------------|-------------------------|-------------------------------------------------|---------------|
| Pre-ingesta  | Video listo             | H.264 · ≥720p · ≤2h                             | Content Ops   |
| Pre-ingesta  | Metadata obligatoria    | Campos requeridos (`titulo`, `id_cliente`, `archivo_media`) | Content Ops   |
| Pre-ingesta  | Naming correcto         | Cumple convención Edye/DIRECTV                  | Content Ops   |
| Pre-ingesta  | Artes solicitadas       | Posters / thumbnails / stills definidos          | Content Ops   |
| Diseño       | Artes creadas           | Ratios/tamaños según spec DIRECTV               | Design Team   |
| Diseño       | Artes cargadas          | Imágenes en EDYE                                | Design Team   |
| Ingesta      | Request ejecutado       | POST API o FTP ejecutado                        | DevOps        |
| Ingesta      | Tracking registrado     | ID recibido y consultado                        | DevOps        |
| Validación   | QC interno              | Video · metadata · imágenes OK                  | DevOps        |
| Entrega      | Estado final            | `completed` sin errores                         | DevOps        |
| Post-ingesta | Evidencia archivada     | Logs y status en Elastic/Kibana                 | DevOps        |
| Cierre       | Cierre operativo        | Caso documentado                                | Content Ops   |