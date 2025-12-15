---
id: int-ing-partner-claro-video
title: Ingesta de Contenidos – Claro Video
sidebar_position: 2
---

# Ingesta de Contenidos – Claro Video

Este documento describe las **particularidades de la integración por ingesta de
contenidos del partner Claro Video**, basada en el **modelo estándar de ingesta
EDYE**.

---

## 1. Información general

- **Partner:** Claro Video  
- **Servicio:** Ingesta VOD Internacional  
- **Tipo de contenido:** Video on Demand  
- **Formato de video:** MP4 (H.264)  
- **Volumen estimado:** ~1500 assets por día  

---

## 2. Modelo de integración aplicado

Claro Video implementa el siguiente modelo:

- **Modelo:** Ingesta de Contenidos  
  Ver: `modelos/Ingesta de Contenidos`

Este documento no redefine el modelo, sino que documenta las
**configuraciones y reglas específicas del partner**.

---

## 3. Flujo aplicado

El flujo aplicado corresponde al flujo estándar de ingesta EDYE:

1. Carga de contenido en JW Player  
2. Sincronización JW Player ↔ EDYE API  
3. Validación de metadata e imágenes  
4. Generación de delivery para Claro Video  
5. Procesamiento de assets  
6. Entrega al partner  
7. Validación final y reporting  

![Flujo aplicado Edyes](/img/integraciones/ingesta/claro-video/claro-edyes-flow.jpg)
> **Figura 1.** Diagrama del flujo estándar de ingesta EDYE

Este flujo describe el comportamiento técnico del sistema EDYE.
A continuación se detalla el flujo operativo específico del partner Claro Video.

### 3.1. Flujo operativo del partner

Además del flujo técnico estándar de ingesta EDYE, Claro Video cuenta con un
flujo operativo que involucra a los equipos de Contenido, Diseño y DevOps.

Este flujo describe las tareas humanas previas y posteriores a la generación del
delivery.

![Flujo operativo del partner](/img/integraciones/ingesta/claro-video/claro-video-integracion-ingesta.jpg)
> **Figura 2.** Diagrama del flujo operativo del partner

---

## 4. Consideraciones operativas

- Alto volumen operativo diario (~1500 assets)
- Procesamiento asincrónico
- Tiempo promedio de procesamiento:
  - **3 a 5 minutos por asset**
- Entregas realizadas mediante batches controlados

---

## 5. Validaciones generales

Durante la ingesta para Claro Video se validan:

- Resolución mínima de video: **720p**
- Codificación soportada: **H.264**
- Metadata obligatoria completa
- Imágenes sincronizadas y válidas
- Naming conforme a reglas del partner

---

## 6. Estados de procesamiento

| Estado | Descripción |
|------|-------------|
| Pending | Delivery creado |
| Processing | Assets en procesamiento |
| Completed | Procesamiento exitoso |
| Failed | Error en uno o más assets |

El estado se consulta desde el **Admin Panel** de EDYE.

---

## 7. Método de entrega

Los contenidos procesados se entregan mediante:

- **Aspera (HITN Production)** – método principal
- **SFTP directo del partner** – cuando aplica

---

## 8. Anexos técnicos

Las siguientes reglas son obligatorias para Claro Video:

- Posters y artwork  
  Ver: `anexos/posters.md`

---

## 9. Observaciones

- Los flujos de ingesta vía FTP se encuentran en proceso de descontinuación.
- Cualquier cambio operativo debe validarse con **Operaciones EDYE**.

---

## 10. Documentación relacionada

- `modelos/ingesta.md`
- `flujo/flujo-ingesta.md`
- `anexos-globales/codigos-error.md`
