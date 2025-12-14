---
id: int-ingesta-flujo-contenidos
title: Flujo de Ingesta de Contenidos
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

El contenido audiovisual (series, películas y episodios) es cargado en
**JW Player**, donde se definen:

- Videos fuente
- Playlists
- Organización por series y temporadas
- Idiomas y variantes de contenido

JW Player actúa como la **fuente de verdad** para los activos de video.

---

### 2.2 Preparación de imágenes

Previo a la sincronización, cada episodio debe contar con:

- Posters
- Episodic stills
- Logos (si aplica)

Las imágenes deben cumplir con:

- Dimensiones y ratios definidos
- Formato correcto (JPG / PNG)
- Convenciones de naming establecidas

---

## 3. Sincronización JW Player ↔ EDYE API

Una vez preparado el contenido, se ejecuta la **sincronización entre JW Player y
EDYE API**.

### Objetivos de la sincronización

- Importar playlists y episodios
- Actualizar metadata
- Sincronizar imágenes
- Detectar assets faltantes

> ⚠️ **Nota importante**  
> La falta de sincronización es una de las causas más frecuentes de errores en la
> ingesta de contenidos.

---

## 4. Validación previa a la ingesta

Antes de generar un delivery, EDYE ejecuta validaciones automáticas sobre:

- Existencia de playlists
- Asociación correcta de episodios
- Disponibilidad de imágenes por episodio
- Metadata obligatoria completa
- Etiquetado correcto (ej. `geoList`, tags editoriales)

Si alguna validación falla, el flujo **no avanza** hasta su corrección.

---

## 5. Generación del delivery

Con las validaciones aprobadas, se procede a crear un **delivery** para uno o más
partners.

### Configuración del delivery

- Partner destino
- Método de entrega:
  - **Aspera** (HITN Production)
  - **SFTP directo** del partner
- Origen de assets
- Configuración de metadata específica del partner

Cada delivery se identifica mediante un **batch** único.

---

## 6. Procesamiento de assets

Durante el procesamiento, EDYE API:

- Genera los archivos de metadata (XML)
- Procesa imágenes según el perfil del partner
- Aplica reglas de naming y estructura de carpetas
- Prepara los assets para su entrega

### Estados de procesamiento

- **Pending**: Delivery creado
- **Processing**: Assets en generación
- **Completed**: Procesamiento finalizado
- **Failed**: Error en uno o más assets

---

## 7. Entrega al partner

Una vez procesados, los assets son entregados mediante:

- **Aspera**  
  Los archivos quedan disponibles en HITN Production.

- **SFTP directo**  
  Los archivos se envían directamente al repositorio del partner.

La modalidad de entrega depende de la configuración específica de cada partner.

---

## 8. Validación final y control de calidad

Tras la entrega, el equipo puede:

- Verificar el estado individual de cada asset
- Identificar archivos pendientes o fallidos
- Reintentar assets específicos
- Confirmar la finalización del batch

Esta etapa asegura que el partner reciba el contenido completo y correcto.

---

## 9. Reporting post-ingesta

Una vez completado el delivery, EDYE permite:

- Descargar reportes de entrega
- Validar los contenidos entregados
- Auditar fechas, IDs y disponibilidad
- Compartir reportes con partners

Los reportes pueden exportarse en **CSV o XLS**, según requerimiento del partner.

---

## 10. Puntos críticos del flujo

Los puntos más sensibles del flujo de ingesta son:

- Falta de sincronización con JW Player
- Imágenes faltantes o con naming incorrecto
- Metadata incompleta o inconsistente
- Configuración incorrecta del delivery
- Reglas específicas de partner no cumplidas

Estos puntos deben revisarse antes de ejecutar cada ingesta.

---

## 11. Relación con otros documentos

Este flujo se complementa con:

- `modelos/ingesta.md`
- `integraciones/partners/*`
- `anexos-globales/codigos-error.md`
- Documentación específica de imágenes y metadata

---

## 12. Consideraciones finales

El flujo de ingesta de EDYE está diseñado para ser:

- Repetible
- Auditable
- Escalable
- Adaptable a múltiples partners

El cumplimiento estricto de este flujo reduce incidencias operativas y asegura
integraciones estables en producción.
