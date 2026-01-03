---
id: int-partnet-dish-mexico-anexos-posters
title: Ingesta VOD – Dish México (MVShub Specifications)
sidebar_label: Ingesta VOD – Dish México
---

# VOD Ingestion – Dish México

**MVShub Delivery Specifications**

## 1. Introducción

This document defines the **VOD content delivery specifications** for the OTT platform of **Dish México**, including:

- Media (video, audio, subtítulos)
- Artwork (posters y wallpapers)
- Metadata (XML CableLabs)

Ingestion is **automated**, so **all requirements must be strictly met** for the content to be accepted and processed correctly.

---

## 2. Delivery Channel

- **Método:** Aspera
- **Cuenta:** Provista por Dish
- **Condición:** El partner debe cumplir previamente con todas las especificaciones técnicas antes de habilitar la ingesta.

---

## 3. Folder Structure

The delivery must strictly follow the following structure:

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

📌 All video files must be placed **directly in `/MEDIA`**, without subfolders.

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

### 4.3 Subtitles

- **Formato:** TTML o SRT
- **Idioma:** `es` (ISO-2)

---

## 5. Artwork (Images)

Images must be delivered via **Aspera**, inside the `/ART` folder.

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

### 5.3 Technical Specifications

#### Series Poster

- Resolución: **720 × 1080**
- PPP: 72
- Formato: JPEG
- Postfix: `_main.jpg`

#### Series Wallpaper

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

📌 Series: **3 mandatory images**  
📌 Movies: **2 mandatory images**

---

## 6. Metadata (XML)

### 6.1 Formato

- **Format:** XML
- **Standard:** CableLabs VOD Specification
- **Version:** 1.1
- **Files:** 1 XML per asset

Dish will provide a **base template** with fields that can be imported.

---

## 7. Asset ID Rules

- Prefix: **4 letters from the channel name**
- Movies: free after the prefix
- Episodes:

```text
PROVIDER + SERIE_ID + SEASON + EPISODE
```

---

## 8. Metadata – Movies (Mandatory fields)

| Campo             | Description                      |
| ----------------- | -------------------------------- |
| Asset_ID          | Unique ID                        |
| asset_name        | Title                            |
| provider          | Channel                          |
| spanish_title     | Title in Spanish                 |
| english_title     | Title in English                 |
| original_title    | Original title                   |
| summary_long      | Long description                 |
| summary_short     | Short description                |
| rating            | MX system (AA, A, B, B-15, C, D) |
| run_time          | hh:mm:ss                         |
| year              | Year                             |
| country_of_origin | ISO-2                            |
| actors            | Comma-separated                  |
| director          | Comma-separated                  |
| genre             | Comma-separated                  |
| start_date        | DD/MM/YYYY                       |
| end_date          | DD/MM/YYYY                       |
| poster            | URL or reference to ART          |
| wallpaper1        | URL or reference to ART          |

---

## 9. Metadata – TV Shows / Episodes

Includes fields for:

- Serie
- Temporada
- Episodio

Key fields:

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

## 11. Final Considerations

- Ingestion is **fully automated**.
- The **naming** and **folder structure** are **strict and mandatory**.
- Any non-compliance with technical or metadata specifications **will result in asset rejection**.
- In case of reprocessing, the content must be **resent completely** (media, metadata, and artwork).
