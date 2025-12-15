---
id: int-ingesta-flujo-contenidos
title: Flujo de Ingesta
sidebar_position: 1
---

# Flujo de Ingesta de Contenidos

Este documento describe el **flujo operativo completo de la ingesta de contenidos**
en el ecosistema **EDYE**, desde la preparación del contenido hasta la entrega final
a los partners.

El objetivo de este flujo es asegurar que los contenidos, metadata e imágenes sean
procesados de forma consistente, validada y trazable.

---

## 1. Visión general del flujo

El flujo de ingesta sigue una secuencia controlada de pasos, donde cada etapa
depende de la correcta ejecución de la anterior.

```text
JW Player
   ↓
Sincronización
   ↓
EDYE API
   ↓
Validación de Metadata e Imágenes
   ↓
Generación de Delivery
   ↓
Entrega (Aspera / SFTP)
   ↓
Validación Final
   ↓
Reporting
```
---

## 2. Carga y preparación del contenido

### 2.1 Carga en JW Player

El contenido audiovisual (**series, películas y episodios**) es cargado en **JW Player**, donde se definen:

- Videos fuente
- Playlists
- Organización por series y temporadas
- Idiomas y variantes de contenido

**JW Player actúa como la fuente de verdad para los activos de video.**

### 2.2 Preparación de metadata (requerida)

Antes de sincronizar, se debe asegurar la **metadata mínima obligatoria** y, cuando aplique:

- IDs externos (ej. **TMS ID / Gracenote**) para correlación de catálogo
- Parámetros custom requeridos por operación/partner (ej. **Acronym**)
- Etiquetado editorial y de disponibilidad (ej. **geoList**, tags editoriales)

:::warning Atención
Si faltan campos obligatorios, el delivery puede quedar en **Failed** o **Completed with Warnings** según el caso.
:::

### 2.3 Preparación de imágenes

Previo a la sincronización, cada contenido debe contar con el paquete de imágenes requerido por partner:

- Posters
- Episodic stills
- Logos (si aplica)
- Thumbnails (si aplica)

Las imágenes deben cumplir con:

- Dimensiones y ratios definidos por el partner
- Formato correcto (**JPG / PNG**)
- Convenciones de naming establecidas (estructura + nombres)

---

## 3. Sincronización JW Player ↔ EDYE API

Una vez preparado el contenido, se ejecuta la sincronización entre **JW Player** y **EDYE API**.

**Objetivos de la sincronización:**

- Importar playlists y episodios
- Actualizar metadata
- Sincronizar imágenes
- Detectar assets faltantes

:::warning Nota importante
La falta de sincronización es una de las causas más frecuentes de errores en la ingesta.
:::

---

## 4. Validación previa a la ingesta

Antes de generar un delivery, EDYE ejecuta validaciones automáticas sobre:

- Existencia de playlists (incluyendo playlists por partner si aplica)
- Asociación correcta de episodios (series/temporadas)
- Disponibilidad de imágenes por contenido (posters / episodic stills / thumbnails)
- Metadata obligatoria completa (incluyendo IDs externos y custom params si aplica)
- Etiquetado correcto (ej. geoList, tags editoriales)
- Reglas específicas del partner (naming, estructura, formatos requeridos)

Si alguna validación falla, el flujo no avanza hasta su corrección.

---

## 5. Generación del delivery

Con las validaciones aprobadas, se procede a crear un delivery para uno o más partners.

### Configuración del delivery

- Partner destino
- Método/canal de entrega (según partner):
  - Aspera (HITN Production)
  - SFTP directo del partner
  - S3 del partner (casos específicos)
  - API/SSL (casos específicos)
- Alcance del paquete:
  - Metadata + imágenes (paquete completo)
  - Solo imágenes / Solo metadata (si el partner lo permite)
- Configuración de metadata específica del partner

Cada delivery se identifica mediante un **batch único**.

---

## 6. Procesamiento de assets

Durante el procesamiento, EDYE API:

- Genera archivos de metadata (XML y/o formatos aplicables)
- Procesa imágenes según el perfil del partner (ratios, tamaños, empaquetado)
- Aplica reglas de naming y estructura de carpetas
- Genera paquetes (cuando aplique) y prepara el delivery para su envío
- Ejecuta QC (warnings/errors) por asset y por delivery

### Estados de procesamiento

- **Pending / Received**: Delivery creado, pendiente de ejecución
- **Processing**: Assets en generación/packaging/transferencia
- **Completed**: Procesamiento finalizado correctamente
- **Completed with Warnings**: Finaliza, pero requiere revisión (ej. faltantes no bloqueantes)
- **Failed**: Error en uno o más assets (bloqueante)

---

## 7. Entrega al partner

Una vez procesados, los assets son entregados mediante el canal configurado:

- **Aspera**  
  Los archivos quedan disponibles en HITN Production.
- **SFTP directo**  
  Los archivos se envían directamente al repositorio del partner.
- **S3 (si aplica)**  
  Los archivos se publican en el bucket del partner.
- **API/SSL (si aplica)**  
  Los assets/metadata se entregan vía endpoints definidos para el partner.

La modalidad de entrega depende de la configuración específica de cada partner.

---

## 8. Validación final y control de calidad

Tras la entrega, el equipo puede:

- Verificar el estado individual de cada asset dentro del delivery
- Revisar warnings vs errors (QC)
- Identificar archivos pendientes o fallidos
- Reintentar assets específicos (o regenerar el delivery si aplica)
- Confirmar la finalización del batch

:::tip Recomendación operativa
Si un partner requiere paquete completo, los reenvíos suelen requerir regenerar/reenviar el **delivery completo** para asegurar consistencia.
:::

---

## 9. Reporting post-ingesta

Una vez completado el delivery, EDYE permite:

- Descargar reportes de entrega
- Validar los contenidos entregados (por partner/batch)
- Auditar fechas, IDs y disponibilidad
- Compartir reportes con partners

Los reportes pueden exportarse en **CSV** o **XLS**, según requerimiento del partner.

---

## 10. Puntos críticos del flujo

Los puntos más sensibles del flujo de ingesta son:

- Falta de sincronización con JW Player
- Metadata incompleta (incluyendo IDs externos/custom params si aplica)
- Imágenes faltantes o con naming/estructura incorrectos
- Paquete incompleto (posters / episodic stills / thumbnails según partner)
- Configuración incorrecta del delivery (canal, alcance, reglas partner)
- Warnings ignorados (pueden convertirse en incidencias operativas)

Estos puntos deben revisarse antes de ejecutar cada ingesta.

---

## 11. Relación con otros documentos

Este flujo se complementa con:

- `modelos/ingesta.md`
- `integraciones/partners/*`
- `anexos-globales/codigos-error.md`
- Documentación específica de imágenes, naming y metadata por partner

---

## 12. Consideraciones finales

El flujo de ingesta de EDYE está diseñado para ser:

- Repetible
- Auditable
- Escalable
- Adaptable a múltiples partners

El cumplimiento estricto de este flujo reduce incidencias operativas y asegura integraciones estables en producción.