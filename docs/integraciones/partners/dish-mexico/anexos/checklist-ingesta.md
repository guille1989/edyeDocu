---
id: int-partnet-dish-mexico-anexos-checklist
title: Checklist de Ingesta – Dish Mexico
sidebar_position: 2
---

# Checklist de Ingesta – Dish México

Este checklist debe completarse **antes, durante y después** de cada entrega de contenido VOD a Dish México para garantizar una ingesta exitosa.

---

## 1. Pre-Ingesta

### Media
- [ ] Archivo de video en formato **MP4**
- [ ] Codec de video **H.264 – High@L3**
- [ ] Resolución **1080p / 29.97 fps**
- [ ] Bitrate de video **15 Mbps**
- [ ] Audio **AAC LC**
- [ ] Audio **Stereo 192 Kbps / 48 kHz**
- [ ] Duración correcta y consistente con metadata
- [ ] Sin frames corruptos ni errores de sincronización A/V

### Subtítulos
- [ ] Subtítulos en formato **TTML o SRT**
- [ ] Idioma definido como **`es` (ISO-2)**
- [ ] Sincronización correcta con el video

### Artwork
- [ ] Posters y wallpapers generados según especificación
- [ ] Resoluciones correctas
- [ ] Formato **JPEG**
- [ ] PPP **72**
- [ ] Naming con **AssetID + postfix**
- [ ] Cantidad correcta:
  - Series: **3 imágenes**
  - Movies: **2 imágenes**

### Metadata
- [ ] XML individual por asset
- [ ] Formato **CableLabs VOD 1.1**
- [ ] AssetID definido correctamente
- [ ] Campos obligatorios completos
- [ ] Fechas en formato **DD/MM/AAAA**
- [ ] Rating conforme al sistema mexicano
- [ ] Referencias de artwork correctas

---

## 2. Ingesta

### Estructura de Carpetas
- [ ] `/MEDIA/ASSETID.mp4`
- [ ] `/METADATA/CHANNELNAME/ASSETID.xml`
- [ ] `/ART/CHANNELNAME/ASSETID/`

### Entrega
- [ ] Archivos subidos vía **Aspera**
- [ ] Media en carpeta raíz `/MEDIA` (sin subdirectorios)
- [ ] Metadata ubicada en el canal correcto
- [ ] Artwork en la ruta correspondiente al AssetID

### Validaciones Técnicas
- [ ] Naming consistente entre media, metadata y artwork
- [ ] AssetID coincide en todos los archivos
- [ ] XML válido (sin errores de sintaxis)
- [ ] Chapters (Ad breaks) incluidos si aplica

---

## 3. Post-Ingesta

### Verificación
- [ ] Confirmación de recepción en plataforma Dish
- [ ] Validación de procesamiento automático
- [ ] Media aceptada sin errores
- [ ] Artwork visible correctamente
- [ ] Metadata interpretada correctamente

### Control de Calidad
- [ ] Reproducción correcta del asset
- [ ] Audio y video sincronizados
- [ ] Subtítulos visibles y sincronizados
- [ ] Imágenes asociadas correctamente

### Reprocesos
- [ ] Errores documentados (si aplica)
- [ ] Correcciones realizadas según observaciones
- [ ] Reenvío **completo** del asset (media + metadata + artwork)

---

## 4. Estado Final

- [ ] Ingesta **exitosa**
- [ ] Asset habilitado para publicación
- [ ] Registro del proceso actualizado