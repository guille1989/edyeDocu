---
id: int-partnet-watch-brazil-anexos-checklist
title: Checklist de Ingesta – Watch Brazil
---

## Checklist de Ingesta – Watch Brazil

| Fase             | Ítem                       | Validación                       | Responsable | OK  |
| ---------------- | -------------------------- | -------------------------------- | ----------- | --- |
| **Pre-ingesta**  | Video cargado en JW Player | Archivo MP4 H.264 disponible     | Content Ops | ⬜  |
| Pre-ingesta      | Resolución mínima          | ≥ 720p                           | Content Ops | ⬜  |
| Pre-ingesta      | Duración válida            | ≤ 2 horas                        | Content Ops | ⬜  |
| Pre-ingesta      | Content ID definido        | ID único y consistente           | Content Ops | ⬜  |
| Pre-ingesta      | Metadata base completa     | Título, ID cliente, ventanas     | Content Ops | ⬜  |
| Pre-ingesta      | Campo `rating` correcto    | A12 / AL / 12 / L                | Content Ops | ⬜  |
| Pre-ingesta      | Campo `studio`             | Valor = **Edye**                 | Content Ops | ⬜  |
| Pre-ingesta      | Campo `studio_name`        | Valor = **Edye**                 | Content Ops | ⬜  |
| Pre-ingesta      | `actors_display`           | Actores consolidados en un campo | Content Ops | ⬜  |
| Pre-ingesta      | Fechas con timestamp       | ISO 8601 con hora                | Content Ops | ⬜  |
| **Imágenes**     | Poster Horizontal          | 3840x2160 (16:9)                 | Diseño      | ⬜  |
| Imágenes         | Poster Vertical            | 1708x2562                        | Diseño      | ⬜  |
| Imágenes         | Still Horizontal           | 3840x2160 (16:9)                 | Diseño      | ⬜  |
| Imágenes         | Still Vertical             | 1708x2562 (obligatoria)          | Diseño      | ⬜  |
| Imágenes         | Naming correcto            | ASCII, sin espacios              | Diseño      | ⬜  |
| Imágenes         | Watermark                  | No requerido                     | Diseño      | ⬜  |
| **Ingesta**      | Endpoint correcto          | POST /api/ingesta/contenido      | DevOps      | ⬜  |
| Ingesta          | Autenticación              | Bearer Token válido              | DevOps      | ⬜  |
| Ingesta          | Formato request            | multipart (video + JSON)         | DevOps      | ⬜  |
| Ingesta          | Respuesta inicial          | 200 OK / received                | DevOps      | ⬜  |
| **Validación**   | Estado processing          | Flujo iniciado correctamente     | DevOps      | ⬜  |
| Validación       | QC video                   | Sin errores críticos             | DevOps      | ⬜  |
| Validación       | QC metadata                | Campos obligatorios válidos      | DevOps      | ⬜  |
| Validación       | QC imágenes                | Resoluciones y ratios OK         | DevOps      | ⬜  |
| **Entrega**      | Estado final               | completed                        | DevOps      | ⬜  |
| Entrega          | Tracking ID                | Generado y registrado            | DevOps      | ⬜  |
| Entrega          | Registro de delivery       | Documentado en Ops               | Content Ops | ⬜  |
| **Post-ingesta** | Validación operativa       | Checklist completo               | Operaciones | ⬜  |
| Post-ingesta     | Reporting                  | Delivery report enviado          | Operaciones | ⬜  |
| Post-ingesta     | Escalamiento (si aplica)   | Notificado a Watch Brazil        | Operaciones | ⬜  |
