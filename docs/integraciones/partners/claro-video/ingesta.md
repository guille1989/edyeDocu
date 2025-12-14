---
id: int-ing-partner-claro-video
title: Anexo Técnico – Posters y Artwork Claro Video
sidebar_position: 1
---

# Anexo Técnico: Posters y Artwork – Claro Video

Este documento define las **especificaciones técnicas, estructura de carpetas y
convenciones de nombrado** requeridas por **Claro Video** para la correcta
publicación e ingesta de posters y artes gráficos dentro del ecosistema **EDYE**.

Este anexo aplica exclusivamente a integraciones por **ingesta de contenidos**.

---

## 1. Alcance

Las especificaciones descritas en este documento aplican a:

- Series
- Películas
- Temporadas
- Episodios

Incluye:

- Posters
- Episodic stills
- Variantes por idioma
- Versiones con y sin texto

---

## 2. Tipos de contenido

### 2.1 Series

Para contenidos tipo **serie**, se deben generar:

- Poster genérico de la serie
- Posters por temporada
- Posters por episodio

Se recomienda **diferenciar visualmente cada temporada** mediante posters
específicos.

---

### 2.2 Películas

Para contenidos tipo **película**, se debe generar:

- Poster único del contenido

---

## 3. Especificaciones técnicas de imágenes

Las imágenes deben cumplir con las siguientes especificaciones para **exportación web**:

| Tipo           | Dimensiones | Ratio | DPI | Formato |
| -------------- | ----------- | ----- | --- | ------- |
| WCHICA         | 290 x 163   | 16:9  | 72  | JPG     |
| WMEDIANA       | 200 x 300   | 2:3   | 72  | JPG     |
| WGRANDE        | 675 x 380   | 16:9  | 72  | JPG     |
| WHORIZONTAL 4K | 3840 x 2160 | 16:9  | 72  | JPG     |
| WCUADRADO 4K   | 2160 x 2160 | 1:1   | 72  | JPG     |
| WVERTICAL 4K   | 1708 x 2562 | 2:3   | 72  | JPG     |

---

## 4. Idiomas y variantes de imagen

Claro Video requiere variantes explícitas por idioma y tipo de imagen:

| Código | Descripción                      |
| ------ | -------------------------------- |
| EN     | Imágenes con textos en inglés    |
| PT     | Imágenes con textos en portugués |
| SS     | Imágenes con textos en español   |
| CLEAN  | Imágenes sin texto               |

---

## 5. Reglas generales de nomenclatura

### 5.1 Reglas obligatorias

- Todo el **naming debe estar en MAYÚSCULAS**
- **No se permiten espacios**
- **No se permiten caracteres especiales**  
  (Á, É, Í, Ó, Ú, ¿, ¡, (, ), etc.)
- Los separadores deben ser guiones (`-`) y guiones bajos (`_`)

---

## 6. Estructura de carpetas

La estructura base de directorios debe ser la siguiente:

```text
TITULODELACONTENIDO/
├── EXPORTACION/
├── EXPORTACION_WEB/
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

## 7. Nomenclatura de archivos – Episodios

### 7.1 Formato general

```text
TITULO-TEMP-EP-EP_VARIANTE_CALIDAD_CODIGO.jpg
```

### 7.2 Componentes del nombre

| Componente   | Descripción                               |
| ------------ | ----------------------------------------- |
| **TITULO**   | Nombre del contenido                      |
| **TEMP**     | Número de temporada                       |
| **EP**       | Número de episodio                        |
| **VARIANTE** | CLEAN / EN / PT / SS                      |
| **CALIDAD**  | HD / SD                                   |
| **CODIGO**   | Código interno de imagen (ej. BC10, PS01) |

### 7.3 Ejemplos válidos

```text
TITULODELASERIE-01-01-01_CLEAN_HD_BC10.jpg
TITULODELASERIE-01-01-01_SS_HD_PS04.jpg
TITULODELASERIE-01-01-01_EN_SD_BC13.jpg
```

---

## 8. Consideraciones importantes

- El nombre del **folder principal** debe estar en **MAYÚSCULAS** y **sin espacios**.
- Las imágenes incorrectamente nombradas pueden provocar:
  - Fallos de validación
  - Rechazo del delivery por parte del partner
- Todas las **variantes de idioma** deben entregarse cuando el contenido lo requiera.

---

## 9. Relación con la integración

Este anexo debe leerse en conjunto con:

- `modelos/ingesta.md`
- `flujo/flujo-ingesta.md`
- `partners/claro-video/ingesta.md`

Este documento **no reemplaza** el flujo de ingesta ni la documentación general del
modelo, sino que define **reglas específicas del partner Claro Video**.

---

## 10. Control de cambios

Cualquier modificación en:

- Dimensiones
- Naming
- Idiomas
- Estructura de carpetas

Debe ser validada previamente con el equipo de **Operaciones EDYE** y el partner
**Claro Video**.
