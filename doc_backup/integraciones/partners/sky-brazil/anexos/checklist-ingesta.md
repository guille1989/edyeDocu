---
id: int-partnet-sky-brazil-anexos-checklist
title: Checklist de Ingesta – Sky Brazil
---

## Checklist de Ingesta — Sky Brazil

| Fase | Área | Ítem a validar | ✓ |
|------|------|---------------|---|
| **Pre-ingesta** | Video | Video aprobado editorialmente | ⬜ |
|  |  | Codec H.264 | ⬜ |
|  |  | Resolución ≥ 720p | ⬜ |
|  |  | Duración ≤ 2h | ⬜ |
|  |  | Audio presente y sincronizado | ⬜ |
|  |  | Nombre de archivo sin espacios ni caracteres especiales | ⬜ |
|  | JW Player | Video cargado correctamente | ⬜ |
|  |  | Organización correcta (serie/temporada/episodio) | ⬜ |
|  |  | Idioma definido | ⬜ |
|  |  | Variantes asociadas (si aplica) | ⬜ |
|  | Metadata | `titulo` completo | ⬜ |
|  |  | `asset_id` estable | ⬜ |
|  |  | `id_cliente = SKYBR` | ⬜ |
|  |  | `tipo` (movie/show/episode) | ⬜ |
|  |  | Metadata sin caracteres especiales rotos | ⬜ |
|  | Imágenes | JPG / RGB | ⬜ |
|  |  | 16:9 – 1920×1080 (sin texto) | ⬜ |
|  |  | 4:3 – 1440×1080 (sin texto) | ⬜ |
|  |  | 2:3 – 1280×1920 | ⬜ |
|  |  | Screen grab para episodios | ⬜ |
|  |  | Imágenes cargadas en EDYE | ⬜ |
| **Ingesta** | Sync EDYE | Sync JW Player → EDYE ejecutado | ⬜ |
|  |  | Assets visibles en EDYE | ⬜ |
|  | Delivery | Delivery generado por DevOps | ⬜ |
|  |  | Canal definido (API / Aspera) | ⬜ |
|  |  | Naming y estructura correctos | ⬜ |
|  | Validación | Video validado | ⬜ |
|  |  | Metadata validada | ⬜ |
|  |  | Imágenes validadas | ⬜ |
| **Entrega** | API | POST de ingesta ejecutado | ⬜ |
|  |  | Estado `received` | ⬜ |
|  |  | ID de ingesta registrado | ⬜ |
|  |  | Estado final `completed` | ⬜ |
|  | Aspera | Transferencia completada (si aplica) | ⬜ |
| **Post-ingesta** | Reintentos | Error identificado (si aplica) | ⬜ |
|  |  | Corrección aplicada en origen | ⬜ |
|  |  | Reintento / reenvío ejecutado | ⬜ |
|  | Cierre | Logs revisados | ⬜ |
|  |  | Reporting actualizado | ⬜ |
|  |  | Flujo cerrado | ⬜ |

> ✅ **Resultado esperado:** contenido ingerido y procesado correctamente en Sky Brazil sin errores ni reprocesos.
