---
id: int-ingesta
title: Ingesta de Contenidos
sidebar_position: 1
---

# Modelo de Integración: Ingesta de Contenidos

Este documento describe el **modelo estándar de ingesta de contenidos** dentro del
ecosistema **EDYE**, utilizado por múltiples partners para la distribución de
contenidos audiovisuales (series, películas, episodios, imágenes y metadata).

Este modelo aplica, entre otros, a los siguientes partners:

- Claro Video
- Megacable
- Dish México
- Sky Brasil
- Roku Premium Subscriptions
- WATCH Brasil

---

## 1. Alcance

El modelo de ingesta cubre:

- Preparación y validación de contenidos
- Sincronización con JW Player
- Generación de assets por partner
- Entrega de metadata e imágenes
- Validación, monitoreo y reporting post-ingesta

No cubre:

- Autenticación de usuarios
- Facturación
- Consumo del contenido por el partner

---

## 2. Sistemas involucrados

Los siguientes sistemas participan en el flujo de ingesta:

- **JW Player**  
  Origen de videos, playlists y still images.

- **EDYE API**  
  Motor central de procesamiento, validación y generación de assets.

- **Admin Panel (EDYE)**  
  Interfaz operativa para sincronización, validaciones y generación de deliveries.

- **Almacenamiento**

  - Aspera (HITN Production)
  - SFTP directo del partner (según configuración)

- **Partner**  
  Receptor final de los assets generados.

---

## 3. Tipos de contenido soportados

El modelo de ingesta soporta los siguientes tipos de contenido:

- Series
- Películas
- Episodios
- Playlists
- Imágenes:
  - Posters
  - Episodic stills
  - Logos
- Metadata asociada al contenido

---

## 4. Flujo general de ingesta

El flujo estándar de ingesta se compone de los siguientes pasos:

1. El contenido audiovisual es cargado y organizado en **JW Player**.
2. Se ejecuta la **sincronización de JW Player con EDYE API**.
3. Se valida la metadata y el etiquetado del contenido.
4. Se genera un **delivery** para uno o más partners.
5. EDYE API procesa los assets (XML, imágenes).
6. Los assets son entregados vía **Aspera o SFTP**.
7. Se valida el estado final de la ingesta.
8. Se generan reportes post-ingesta.

📌 Ver diagrama completo:  
`/integraciones/flujo/ingesta-flow.png`

---

## 5. Pre-requisitos obligatorios

Antes de ejecutar una ingesta, se deben cumplir los siguientes requisitos:

- Playlists correctamente configuradas en JW Player
- Episodios sincronizados con EDYE API
- Imágenes válidas asociadas a cada episodio
- Metadata completa y consistente
- Etiquetado correcto (ej. `geoList`, tags editoriales)
- Partner habilitado para delivery

---

## 6. Variantes del modelo de ingesta

El modelo de ingesta presenta las siguientes variantes según el partner:

| Variante       | Descripción                                             |
| -------------- | ------------------------------------------------------- |
| Aspera         | Assets generados y almacenados en HITN Production       |
| SFTP Directo   | Assets enviados directamente al repositorio del partner |
| XML + Imágenes | Delivery completo de metadata e imágenes                |
| Solo Imágenes  | Delivery limitado a artwork e imágenes                  |

Cada partner puede aplicar una o más variantes del modelo.

---

## 7. Validaciones del sistema

Durante la ingesta, EDYE API ejecuta validaciones automáticas sobre:

- Existencia de imágenes requeridas
- Coherencia entre playlists y episodios
- Estructura y naming de assets
- Sincronización JW Player ↔ EDYE
- Configuración del delivery por partner

### Estados de procesamiento

- **Pending / Received**: Delivery creado, pendiente de ejecución
- **Processing**: Assets en generación
- **Completed**: Ingesta finalizada correctamente
- **Failed**: Error en uno o más assets

---

## 8. Monitoreo y control

El estado de una ingesta puede ser monitoreado desde el **Admin Panel**:

- Vista general de deliveries
- Log detallado por asset
- Estado individual de cada archivo
- Reintento manual de assets fallidos

---

## 9. Errores comunes y troubleshooting

| Error                  | Causa probable                | Acción recomendada         |
| ---------------------- | ----------------------------- | -------------------------- |
| Validation error       | Imágenes no sincronizadas     | Ejecutar sync de JW Player |
| Missing assets         | Episodios sin stills          | Reemplazar imágenes        |
| Delivery stuck         | Error en batch                | Revisar log y reintentar   |
| Metadata inconsistente | Campos obligatorios faltantes | Corregir metadata          |

---

## 10. Reporting post-ingesta

Una vez completada la ingesta, EDYE permite:

- Descargar reportes en formato CSV o XLS
- Validar assets entregados por partner
- Auditar fechas, IDs y disponibilidad del contenido

Algunos partners requieren formatos específicos (ej. XLS).

---

## 11. Seguridad y control de acceso

- El acceso al Admin Panel está restringido por roles.
- No se exponen credenciales en la documentación.
- Las operaciones de ingesta quedan registradas en logs auditables.

---

## 12. Referencias

- [Flujo de Ingesta](../flujo/flujo-ingesta.md)
- [Gestión de Imágenes](../imagenes/)
- [Integraciones por Partner](../partners/)
- [Códigos de Error](../anexos-globales/codigos-error.md)
