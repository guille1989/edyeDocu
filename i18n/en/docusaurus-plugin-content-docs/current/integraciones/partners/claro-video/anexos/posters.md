---
id: int-partnet-claro-video-anexos-posters
title: Posters and Artwork Claro Video
sidebar_position: 1
---

# Posters and Artwork – Claro Video

This document defines the **technical and graphic rules** that must be met for
the correct ingestion of **posters and images** for the Claro Video partner.

---

## Scope

Aplica a:

- Series
- Temporadas
- Episodios
- Películas

Incluye:

- Posters
- Episodic stills
- Variantes por idioma
- Versiones CLEAN (sin texto)

---

## Languages and variants

| Code  | Description |
| ----- | ----------- |
| EN    | English     |
| PT    | Portuguese  |
| SS    | Spanish     |
| CLEAN | No text     |

---

## Folder structure

```text
TITULODELACONTENIDO/
├── HD/
│   ├── CLEAN/
│   ├── EN/
│   ├── PT/
│   └── SS/
└── SD/
    ├── CLEAN/
    ├── EN/
    ├── PT/
    └── SS/
```

---

## File naming – Episodes

### General format

```text
TITULO-TEMP-EP-EP_VARIANTE_CALIDAD_CODIGO.jpg
```

### Components

| Component    | Description                      |
| ------------ | -------------------------------- |
| **TITULO**   | Content name                     |
| **TEMP**     | Season number                    |
| **EP**       | Episode number                   |
| **VARIANTE** | CLEAN / EN / PT / SS             |
| **CALIDAD**  | HD / SD                          |
| **CODIGO**   | Internal code (BC10, PS01, etc.) |

### Valid examples

```text
TITULODELASERIE-01-01-01_CLEAN_HD_BC10.jpg
TITULODELASERIE-01-01-01_SS_HD_PS04.jpg
TITULODELASERIE-01-01-01_EN_SD_BC13.jpg
```

### Important considerations

- **Folders** must be in **UPPERCASE** and **without spaces**.
- An **incorrect naming** can cause:
  - Validation failures
  - Delivery rejection
- All **required variants** must be delivered as applicable.

---

### Change control

Any modification to:

- Dimensiones
- Naming
- Idiomas
- Estructura de carpetas

Must be validated beforehand with **EDYE Operations** and **Claro Video**.
