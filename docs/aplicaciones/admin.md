---
id: app-admin
title: Servicio Admin
---

**Versión:** 1.0  
**Fecha:** 01/12/2025

---

## 1. Introducción y propósito

El **servicio Admin** constituye el portal administrativo interno del ecosistema EDYE/HITN Digital. Según el manual de usuario, el portal está orientado a la **gestión del producto**, permitiendo ejecutar operaciones y procesos que finalmente soportan la entrega de contenidos a **partners y usuarios finales**. Entre las tareas que se realizan en este servicio se encuentran la **gestión de usuarios y roles**, la consulta y registro de información, la visualización de métricas de uso, así como la configuración y el envío de playlists, imágenes y metadatos. Esta documentación está dirigida a equipos de **DevOps**, **Operaciones**, **SRE** y **Seguridad**, y describe de forma técnica y operativa la infraestructura y los flujos del servicio.

## 2. Descripción funcional

El servicio Admin actúa como interfaz administrativa para los equipos internos y partners. Las principales funcionalidades, derivadas del menú del portal, se resumen a continuación:

### 2.1. Panel de control (Dashboard)

**Technical Info:** presenta gráficos de tráfico por endpoint, uso por endpoint y métricas de errores. Un gráfico de líneas muestra los hits totales, exitosos y con error, mientras que gráficos de anillos muestran el uso del API por endpoint y por partner. Una tabla denominada Latest Errors lista los errores recientes, mostrando el ID, la fecha, el nivel y el usuario, con opción de consultar el detalle.

**Commercial Info:** visualiza la información comercial asociada a **InPlayer** (suscripciones, pagos y cuentas activas/expiradas) mediante gráficos de líneas y barras, así como tablas de estado de cuentas. También muestra el porcentaje de uso del API por partner.

### 2.2. Gestión de metadatos

**Download Metadata:** permite descargar los metadatos de shows, temporadas y episodios en el formato requerido por cada partner.

**Editar Metadata:** habilita la creación y edición de objetos (shows, episodios o películas). Para dar de alta un asset es obligatorio que el asset exista previamente en la librería de **JW Player**. El formulario de edición incluye campos como Media Type, JWP Code (código de media o thumbnail según el tipo de asset), Edye Asset #, fechas de estreno y finalización, idiomas, estudios y otra información de metadatos. También permite registrar títulos, descripciones, ratings, elenco, equipo de producción, fechas de lanzamiento por país y premios; estos campos se gestionan a través de formularios estructurados para cada sección del asset.

### 2.3. Gestión de imágenes y entregas

**Upload Files:** permite cargar, editar y eliminar imágenes por show, temporada o episodio. El usuario selecciona la temporada, el formato (p. ej., 16:9) y el archivo a cargar; al enviar la operación se genera una lista de imágenes asociadas al asset.

**Delivery View:** muestra los envíos de imágenes por partner. Para cada envío se visualizan datos como el nombre del partner, el método de entrega, si la entrega está habilitada, si utiliza marca de agua, los formatos de imagen y una lista de episodios con la cantidad de imágenes y opciones de descarga.

**Watermark:** gestiona colecciones de marcas de agua. Se pueden crear colecciones, subir imágenes de marca de agua, definir la colección por defecto y eliminar marcas de agua específicas.

**Delivery:** posibilita la creación de nuevos paquetes de entrega para un partner y el monitoreo de entregas existentes.

### 2.4. Registro y auditoría

**Api Log:** proporciona un registro cronológico de las peticiones al API. Permite filtrar por fechas, usuario o endpoint y descargar la información en CSV. La tabla muestra campos como ID, fecha, nivel (informativo o error), usuario, mensaje, geolocalización y código de respuesta.

**Notification Log:** lista las notificaciones enviadas a partners que requieren confirmaciones; incluye el ID, la fecha, el partner, el método, la URL y un acceso al detalle de la transacción.

**Terra Log:** registra eventos asociados a la integración con Terra, permitiendo filtrar por fecha, operación y tipo de evento. Muestra campos como ID, fecha, MSISDN, operación, nivel y respuesta.

**Bango Log:** muestra eventos relacionados con la integración con Bango; incluye identificación, fecha, nivel, usuario, mensaje, geolocalización y respuesta.

**Marketing API Log:** lista las interacciones con el sistema de email marketing (Mailchimp), con filtros por fecha, tipo de operación (contacto u orden) y tipo de evento.

**SSO API Log:** registra eventos de inicio de sesión mediante SSO; permite filtrar por origen y muestra campos como ID, fecha, origen, partner SSO, cliente SSO, método y endpoint, respuesta y opción de descarga.

### 2.5. Integración con JW Player

El servicio Admin se integra con la plataforma JW Player para administrar shows, episodios y tags. Las principales acciones son:

**Shows:** lista los shows publicados en JW Player y permite filtrar por librería (por ejemplo, 16:9 ES, carrusel o 16:9 PT). Se puede buscar un show, descargar la lista filtrada y, al activar la casilla, redirigirse a JW Player para editar los tags del show.

**Episodes:** permite editar la metadata de episodios específicos a través de las interfaces de JW Player. Se puede filtrar por librería, show o nombre del episodio y acceder al editor de JW Player para cada episodio.

**Tags vs Shows / Tags vs Episodes:** agrupan los shows o episodios por tag para una vista unificada y permiten editar los tags correspondientes en JW Player.

**Sync Shows Info:** sincroniza la información de las librerías de JW Player con la base de datos del API. Este proceso corre automáticamente cada noche, aunque puede ejecutarse manualmente cuando se requieren cambios inmediatos.

**Edit JW Player:** facilita la edición masiva de metadatos de un show y sus episodios, así como la sincronización de datos e imágenes solo para ese show.

### 2.6. Configuración

**Partners:** permite crear, editar o eliminar partners. Al crear un partner se define la información principal (nombre), la configuración de watermarks, los formatos de miniaturas y los métodos de entrega. También se gestionan credenciales (S3, SFTP, etc.), configuraciones de billing (como URL de suscripción y pasarela de pago) y formatos de naming para video, imagen y metadata. El panel permite habilitar o deshabilitar la entrega vía API y configurar carpetas de Aspera para distribución de archivos.

**Users:** crea, edita y asigna permisos a usuarios administrativos.

**Playlist:** asigna los playlists maestros por idioma.

**System Config:** gestiona variables de entorno necesarias para la ejecución de la aplicación.

**Cron Process:** muestra un listado de procesos automáticos, con información de la última ejecución y un historial de logs.

### 2.7. Herramientas

**Cache:** opción para borrar los servidores de caché.

**Coactive:** tablero con información de sincronización entre la biblioteca administrada y la base de datos de IA de Coactive, mostrando el estado de dicha sincronización.

**Logout:** cierre de sesión del portal.

## 3. Arquitectura y componentes

De acuerdo con la documentación interna, el servicio Admin está implementado como una aplicación web cliente‑servidor. Su arquitectura se compone de:

| Componente             | Descripción                                                                                                                                                                                                                                                                                                                        |
| ---------------------- | ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| **Frontend**           | Interfaz construida con Next JS, basada en React. El entorno de ejecución utiliza Node.js para aprovechar un modelo de eventos no bloqueante.                                                                                                                                                                                      |
| **Backend**            | Lógica principal desarrollada en Laravel (PHP), utilizando un patrón MVC y un ORM robusto para operaciones con la base de datos. Laravel soporta bases de datos relacionales como MySQL y se puede extender a MongoDB mediante paquetes específicos.                                                                               |
| **Base de datos**      | Instancia relacional MySQL empleada para almacenar configuraciones, usuarios y metadatos del catálogo. MySQL proporciona transacciones ACID y replicación.                                                                                                                                                                         |
| **Servicios externos** | Comunicación con el API de contenidos para publicar cambios, servicios de almacenamiento en la nube para cargar imágenes y activos, y otras integraciones como InPlayer, Terra, Bango, Mailchimp y SSO según lo indicado en los logs. Además, se integra con JW Player para la gestión de metadatos y sincronización de contenido. |

> Nota: Las tecnologías descritas en el frontend, backend y base de datos provienen del documento base del servicio. El manual de usuario no detalla la pila de desarrollo ni la topología de infraestructura, por lo que estas descripciones se deben validar con el equipo técnico antes de auditorías formales.

## 4. Dependencias internas y externas

El servicio Admin interactúa con varios módulos y servicios:

- **API de contenidos:** expone los endpoints que permiten crear, actualizar o eliminar recursos del catálogo. El portal consulta y envía metadatos y recibe confirmación de operaciones.
- **Servicio de almacenamiento en la nube:** gestiona el almacenamiento y la entrega de imágenes y archivos multimedia. La configuración de delivery de imágenes por partner implica credenciales S3/SFTP y carpetas de Aspera.

**Integraciones de terceros:**

- **JW Player:** fuente de verdad para los assets audiovisuales. Los procesos de creación de metadatos y la sincronización de librerías dependen de que los assets existan previamente en JW Player.
- **InPlayer:** plataforma de suscripciones y pagos; el dashboard comercial muestra métricas de InPlayer.
- **Terra, Bango y Mailchimp:** servicios externos integrados a través de logs y procesos de notificación.
- **Coactive:** sistema de IA para análisis y etiquetado de contenido, con el que se sincroniza la biblioteca de Admin.
- **Sistema de pagos y facturación:** partners pueden asociar configuraciones de pasarelas de pago y URL específicas para sus páginas de suscripción.

## 5. Flujos operativos principales

### 5.1. Acceso y autenticación

El acceso al portal se realiza mediante autenticación con usuario y contraseña internos. El alta de usuarios se gestiona por el equipo de Edye. Tras la autenticación, los usuarios acceden al panel principal y a las secciones según sus permisos. Para integraciones SSO existe un log de eventos dedicado.

### 5.2. Edición de catálogo

- **Creación/edición de metadata:** el operador selecciona el tipo de asset (serie, episodio o película), diligencia los campos obligatorios y guarda la información. Solo se pueden crear assets que ya existen en JW Player.
- **Carga de imágenes:** desde Upload Files, se selecciona el show, temporada y formato y se sube el archivo. Las imágenes asociadas al asset quedan listadas junto con opciones de descarga.
- **Gestión de entregas:** se configuran paquetes de entrega para partners, asignando formatos y credenciales. Las entregas pueden hacerse mediante la API o por carpetas en sistemas como Aspera y S3.
- **Sincronización con JW Player:** los catálogos de shows y episodios se sincronizan cada noche. Las sincronizaciones manuales se utilizan cuando se requiere reflejar cambios de inmediato.

### 5.3. Monitoreo y auditoría

Los operadores utilizan los tableros del Dashboard para revisar el tráfico de la API y las métricas comerciales. Además, pueden consultar diferentes logs para auditar eventos:

- **API Log:** seguimiento de peticiones y errores, con filtros y exportación a CSV.
- **Notification Log, Terra Log, Bango Log, Marketing API Log y SSO API Log:** registros específicos de integraciones externas.
- **Coactive:** información sobre la sincronización con la base de datos de IA.

Los logs se utilizan para detectar incidencias, analizar tiempos de respuesta y verificar el cumplimiento de procesos de notificación.

## 6. Seguridad y control de accesos

- **Autenticación y autorización:** la aplicación utiliza control de acceso basado en roles. El alta de usuarios se realiza de forma centralizada y cada usuario recibe permisos específicos (p. ej., editores, supervisores). Para SSO se registran eventos en un log dedicado.
- **Transmisión segura:** todas las comunicaciones se realizan sobre HTTPS/TLS. Las contraseñas y claves de API se almacenan cifradas.
- **Gestión de secretos:** las credenciales de partners (S3, SFTP, Aspera) se almacenan de forma segura en la configuración del partner. Las variables de entorno sensibles se gestionan desde la sección System Config.
- **Auditoría:** las operaciones de usuarios y procesos automáticos quedan registradas en los diversos logs, permitiendo traceabilidad completa.

## 7. Operación, monitoreo y logs

El servicio Admin se despliega mediante un flujo de integración y entrega continua (CI/CD), con pruebas automáticas, empaquetado en contenedores y publicación en entornos de desarrollo, staging y producción. Los operadores realizan pruebas de smoke antes de promover a producción. El orquestador gestiona el auto‑escalado y balanceo de carga. Las variables sensibles se gestionan como secretos.

El monitoreo incluye:

- **Métricas de aplicación:** tráfico por endpoint, tiempo de respuesta, tasa de errores y uso de recursos. Estas métricas se visualizan en el panel Technical Info.
- **Métricas comerciales:** actividad de suscripciones, pagos y estado de cuentas, capturadas a partir de InPlayer y mostradas en el panel Commercial Info.
- **Logs estructurados:** todos los subsistemas generan registros que se centralizan para búsquedas y auditoría. Los registros se pueden descargar en formatos planos para análisis externo.

## 8. Continuidad operativa y resiliencia

- **Alta disponibilidad:** la aplicación se despliega en múltiples zonas de disponibilidad con balanceadores de carga.
- **Backups y recuperación:** se realizan copias de seguridad de la base de datos y de los contenedores de estado. Existe replicación asíncrona a una región secundaria y procedimientos documentados para conmutación por error.
- **Pruebas de contingencia:** se programan ejercicios de restauración y failover para validar los tiempos de recuperación.

> Nota: estas prácticas provienen del documento base y no son detalladas en el manual de usuario. Deben confirmarse con el equipo de operaciones.

## 9. Limitaciones conocidas / supuestos documentados

- **Pre‑existencia de assets en JW Player:** la creación de un asset en el servicio Admin requiere que el asset exista previamente en la librería de JW Player.
- **Dependencia de integraciones externas:** muchas funciones dependen de servicios de terceros (InPlayer, Terra, Bango, Mailchimp, SSO, Aspera). La disponibilidad y latencia de estos servicios impacta la operación.
- **Sincronización nocturna:** la sincronización completa de shows y episodios con JW Player se ejecuta automáticamente cada noche y puede tardar. Los usuarios deben evitar ejecutarla manualmente a menos que sea necesario.
- **Configuración sensible:** los datos de entrega (credenciales de buckets, formatos de imagen, pasarelas de pago) deben gestionarse con cuidado. El manual no detalla políticas de rotación ni gestión de secretos; se debe revisar con el área de seguridad.

## 10. Pendientes de validación

- **Pila tecnológica exacta:** el manual de usuario no confirma explícitamente el uso de Laravel, Next JS ni MySQL; estos detalles provienen del documento base y deben confirmarse con el equipo de desarrollo antes de auditar la infraestructura.
- **Topología de despliegue:** no se proporcionan detalles sobre el orquestador de contenedores (p. ej., Kubernetes, ECS) ni la configuración de auto‑escalado.
- **Procesos CI/CD:** el pipeline descrito en el documento base (pruebas unitarias, construcción de contenedores, despliegue en entornos) no está documentado en el manual y debe validarse.
- **Mecanismos de cifrado y gestión de claves:** aunque se menciona cifrado y HTTPS, no se detallan algoritmos ni mecanismos de gestión de secretos.
- **Flujos de aprobación y auditoría de partners:** las reglas de negocio para la creación y aprobación de nuevos partners, así como la habilitación de entregas automáticas, no están especificadas en la documentación; se requiere confirmación.

## 11. Observaciones finales

La consolidación presentada integra la funcionalidad detallada en el Manual de Usuario con la estructura operativa y técnica del documento base. Se han evitado suposiciones no documentadas y se han marcado los puntos que requieren validación. Este documento proporciona una visión coherente y actualizada del servicio Admin, adecuada para su publicación en plataformas de documentación corporativa como Docusaurus, Confluence o documentos PDF.
