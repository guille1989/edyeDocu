---
id: int-partnet-claro-brasil-anexos-checklist
title: Checklist de Ingesta – Claro Brasil
---

## Checklist de Ingesta – Claro Brasil

| Fase | Ítem | Descripción | Responsable | OK |
|------|------|-------------|-------------|----|
| **Pre-ingesta** | Video master disponible | MP4 H.264, resolución ≥ 720p, audio OK | Content Ops | ⬜ |
| Pre-ingesta | IDs definidos | `external_id`, `tms_id`, `acronym` consistentes | Content Ops | ⬜ |
| Pre-ingesta | Metadata mínima completa | Título, duración, idioma, tipo de contenido | Content Ops | ⬜ |
| Pre-ingesta | Metadata validada | JSON válido, UTF-8, sin caracteres invisibles | Content Ops | ⬜ |
| Pre-ingesta | Imágenes requeridas | Poster + episodic stills disponibles | Design | ⬜ |
| Pre-ingesta | Imágenes conformes | Ratio, resolución y naming correctos | Design | ⬜ |
| Pre-ingesta | Carga en JW Player | Video + metadata cargados correctamente | Content Ops | ⬜ |
| Pre-ingesta | Sync JWP → EDYE | Catálogo sincronizado sin errores | Content Ops | ⬜ |
| **Ingesta** | Solicitud de delivery | Solicitud enviada a DevOps | Content Ops | ⬜ |
| Ingesta | Validación EDYE | Consistencia video / metadata / imágenes | DevOps | ⬜ |
| Ingesta | Payload generado | Video + JSON + imágenes | DevOps | ⬜ |
| Ingesta | Envío a Claro BR | POST API Ingesta (multipart/form-data) | DevOps | ⬜ |
| Ingesta | Tracking ID recibido | Estado inicial `received` | DevOps | ⬜ |
| Ingesta | Seguimiento de estado | `processing` → `completed` | DevOps | ⬜ |
| **Post-ingesta** | Estado final OK | Estado `completed` confirmado | DevOps | ⬜ |
| Post-ingesta | Validación operativa | Sin errores críticos de QC | Operations | ⬜ |
| Post-ingesta | Registro de entrega | Tracking ID y timestamp documentados | Operations | ⬜ |
| Post-ingesta | Notificación de cierre | Entrega confirmada a stakeholders | Operations | ⬜ |
| **Reintentos** | Error identificado | Tipo de error documentado | DevOps | ⬜ |
| Reintentos | Corrección aplicada | Metadata / imágenes / video corregidos | Content Ops / Design | ⬜ |
| Reintentos | Reenvío correcto | Parcial o completo según el caso | DevOps | ⬜ |

---

> ℹ️ **Notas**
> - Reintentos parciales aplican solo para metadata o imágenes.
> - Cambios en video o IDs requieren reenvío completo.
> - El canal preferido es **API**; FTP/SFTP es solo fallback legacy.
