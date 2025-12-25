---
id: int-partnet-vtr-anexos-checklist
title: Checklist de Ingesta – VTR
---

## Checklist de Ingesta — Partner VTR

Este checklist debe completarse antes, durante y después de cada entrega de contenidos a VTR.  
Su objetivo es reducir rechazos, reprocesos y fallos de validación.

### 1. Pre-ingesta (Preparación)

**Video**
- ⬜ Archivo final disponible
- ⬜ Formato MP4 / H.264
- ⬜ Resolución mínima: 720p
- ⬜ Duración máxima: 2 horas
- ⬜ Audio presente y sincronizado
- ⬜ Archivo sin errores de playback
- ⬜ Nombre de archivo sin espacios ni caracteres especiales invisibles

**Metadata mínima**
- ⬜ `titulo`
- ⬜ `id_cliente`
- ⬜ `archivo_media`
- ⬜ Encoding UTF-8, sin caracteres rotos

**Imágenes (si aplica)**
- ⬜ Posters y stills definidos
- ⬜ Ratios según definición VTR (TBD)
- ⬜ Imágenes subidas vía API a EDYE
- ⬜ Confirmación de carga enviada a Operaciones

---

### 2. Ingesta / Entrega

- ⬜ Canal definido: API (principal) o FTP polling (legado)
- ⬜ Ingesta ejecutada (POST API o depósito FTP)
- ⬜ Tracking ID registrado
- ⬜ Estado inicial: `received` / `processing`

---

### 3. Validación técnica

- ⬜ Video cumple specs técnicas
- ⬜ Metadata parseada correctamente
- ⬜ QC automático sin errores
- ⬜ Thumbnails generados correctamente

---

### 4. Errores y reintentos

- ⬜ Error identificado y documentado
- ⬜ Corrección aplicada (video o metadata)
- ⬜ Reintento ejecutado (nueva ingesta)

---

### 5. Cierre operativo

- ⬜ Estado final: `completed`
- ⬜ Evidencia archivada (logs / status)
- ⬜ Cierre comunicado a stakeholders