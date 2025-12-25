---
id: int-partnet-dish-mexico-anexos-posters
title: Ingesta VOD – Dish México (MVShub Specifications)
sidebar_label: Ingesta VOD – Dish México
---

# Ingesta VOD – Dish México

**MVShub Delivery Specifications**

## 1. Introducción

Este documento define las **especificaciones de entrega de contenido VOD** para la plataforma OTT de **Dish México**, incluyendo:

- Media (video, audio, subtítulos)
- Artwork (posters y wallpapers)
- Metadata (XML CableLabs)

La ingesta es **automatizada**, por lo que **todos los requisitos deben cumplirse estrictamente** para que el contenido sea aceptado y procesado correctamente.

---

## 2. Canal de Entrega

- **Método:** Aspera
- **Cuenta:** Provista por Dish
- **Condición:** El partner debe cumplir previamente con todas las especificaciones técnicas antes de habilitar la ingesta.

---

## 3. Estructura de Carpetas

La entrega debe respetar exactamente la siguiente estructura:

```text
    /MEDIA/ASSETID.mp4

    /METADATA/CHANNELNAME/ASSETID.xml

    /ART/CHANNELNAME/ASSETID/
    ├── ASSETID_main.jpg
    ├── ASSETID_highlight.jpg
    └── ASSETID_highlight1.jpg (solo series)
```

---

## 4. Media

### 4.1 Video

| Parámetro  | Valor           |
| ---------- | --------------- |
| Codec      | H.264           |
| Contenedor | MP4             |
| Profile    | High@L3         |
| Bitrate    | 15 Mbps         |
| Resolución | 1080p 29.97 fps |

📌 Todos los archivos de video deben colocarse **directamente en `/MEDIA`**, sin subcarpetas.

---

### 4.2 Audio

| Parámetro     | Valor    |
| ------------- | -------- |
| Codec         | AAC      |
| Profile       | LC       |
| Bitrate       | 192 Kbps |
| Canales       | Stereo   |
| Sampling Rate | 48 kHz   |

---

### 4.3 Subtítulos

- **Formato:** TTML o SRT
- **Idioma:** `es` (ISO-2)

---

## 5. Artwork (Imágenes)

Las imágenes deben entregarse vía **Aspera**, dentro de la carpeta `/ART`.

---

### 5.1 Series

```text
    ART/ChannelName/AssetID/
    ├── AssetID_main.jpg
    ├── AssetID_highlight.jpg
    └── AssetID_highlight1.jpg
```

### 5.2 Movies

```text
    ART/ChannelName/AssetID/
    ├── AssetID_main.jpg
    └── AssetID_highlight.jpg
```

---

### 5.3 Especificaciones Técnicas

#### Serie Poster

- Resolución: **720 × 1080**
- PPP: 72
- Formato: JPEG
- Postfix: `_main.jpg`

#### Serie Wallpaper

- Resolución: **1920 × 1080**
- PPP: 72
- Formato: JPEG
- Postfix: `_highlight.jpg`

#### Episode Wallpaper

- Resolución: **1920 × 1080**
- PPP: 72
- Formato: JPEG
- Postfix: `_highlight1.jpg`

---

#### Movie Poster

- Resolución: **720 × 1080**
- PPP: 72
- Formato: JPEG
- Postfix: `_main.jpg`

#### Movie Wallpaper

- Resolución: **1920 × 1080**
- PPP: 72
- Formato: JPEG
- Postfix: `_highlight.jpg`

📌 Series: **3 imágenes obligatorias**  
📌 Movies: **2 imágenes obligatorias**

---

## 6. Metadata (XML)

### 6.1 Formato

- **Formato:** XML
- **Estándar:** CableLabs VOD Specification
- **Versión:** 1.1
- **Archivos:** 1 XML por asset

Dish proveerá un **template base** con los campos que pueden ser importados.

---

## 7. Asset ID Rules

- Prefijo: **4 letras del nombre del canal**
- Movies: libre tras el prefijo
- Episodes:

```text
PROVIDER + SERIE_ID + SEASON + EPISODE
```

---

## 8. Metadata – Movies (Campos obligatorios)

| Campo             | Descripción                       |
| ----------------- | --------------------------------- |
| Asset_ID          | ID único                          |
| asset_name        | Título                            |
| provider          | Canal                             |
| spanish_title     | Título en español                 |
| english_title     | Título en inglés                  |
| original_title    | Título original                   |
| summary_long      | Descripción larga                 |
| summary_short     | Descripción corta                 |
| rating            | Sistema MX (AA, A, B, B-15, C, D) |
| run_time          | hh:mm:ss                          |
| year              | Año                               |
| country_of_origin | ISO-2                             |
| actors            | Separados por coma                |
| director          | Separados por coma                |
| genre             | Separados por coma                |
| start_date        | DD/MM/AAAA                        |
| end_date          | DD/MM/AAAA                        |
| poster            | URL o referencia a ART            |
| wallpaper1        | URL o referencia a ART            |

---

## 9. Metadata – TV Shows / Episodes

Incluye campos de:

- Serie
- Temporada
- Episodio

Campos clave:

- asset_id
- Serie Name
- Episode Name
- Season_number
- episode_number
- rating
- run_time
- genre
- Serie poster / wallpaper
- Episode wallpaper

---

## 10. Ad Breaks (Chapters)

Si se cuenta con información de cortes publicitarios, debe agregarse al XML:

```xml
<App_Data App="MOD" Name="Chapter" Value="00:00:00;00,Intro"/>
<App_Data App="MOD" Name="Chapter" Value="00:23:45;11,Part"/>
<App_Data App="MOD" Name="Chapter" Value="01:21:11;01,Credits"/>
```

---

## 11. Consideraciones Finales

- La ingesta es **totalmente automatizada**.
- El **naming** y la **estructura de carpetas** son **estrictos y obligatorios**.
- Cualquier incumplimiento en las especificaciones técnicas o de metadata **provocará el rechazo del asset**.
- En caso de reprocesos, el contenido debe ser **reenviado completamente** (media, metadata y artwork).
