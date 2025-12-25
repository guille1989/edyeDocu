---
id: int-partnet-claro-video-anexos-posters
title: Posters y Artwork Claro Video
sidebar_position: 1
---

# Posters y Artwork – Claro Video

Este documento define las **reglas técnicas y gráficas** que deben cumplirse para
la correcta ingesta de **posters e imágenes** del partner Claro Video.

---

## Alcance

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

## Idiomas y variantes

| Código | Descripción |
| ------ | ----------- |
| EN     | Inglés      |
| PT     | Portugués   |
| SS     | Español     |
| CLEAN  | Sin texto   |

---

## Estructura de carpetas

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

## Nomenclatura de archivos – Episodios

### Formato general

```text
TITULO-TEMP-EP-EP_VARIANTE_CALIDAD_CODIGO.jpg
```

### Componentes

| Componente   | Descripción                       |
| ------------ | --------------------------------- |
| **TITULO**   | Nombre del contenido              |
| **TEMP**     | Número de temporada               |
| **EP**       | Número de episodio                |
| **VARIANTE** | CLEAN / EN / PT / SS              |
| **CALIDAD**  | HD / SD                           |
| **CODIGO**   | Código interno (BC10, PS01, etc.) |

### Ejemplos válidos

```text
TITULODELASERIE-01-01-01_CLEAN_HD_BC10.jpg
TITULODELASERIE-01-01-01_SS_HD_PS04.jpg
TITULODELASERIE-01-01-01_EN_SD_BC13.jpg
```

### Consideraciones importantes

- Las **carpetas** deben estar en **MAYÚSCULAS** y **sin espacios**.
- Un **naming incorrecto** puede provocar:
  - Fallos de validación
  - Rechazo del delivery
- Todas las **variantes requeridas** deben entregarse según corresponda.

---

### Control de cambios

Cualquier modificación en:

- Dimensiones
- Naming
- Idiomas
- Estructura de carpetas

Debe ser validada previamente con **Operaciones EDYE** y **Claro Video**.
