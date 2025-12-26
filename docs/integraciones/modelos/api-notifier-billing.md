---
id: int-api-notifier-billing
title: 🤝 Integración por API Notifier billing
---

**Versión:** 1.0  
**Fecha:** 01/12/2025  

---
# Integración Genérica EDYE — API + Notifier (DCB)

## 1. Introducción

El **Direct Carrier Billing (DCB)** es un método de pago en línea que permite a los usuarios adquirir bienes o servicios digitales cargando el importe directamente en la factura de su operador móvil. Este mecanismo elimina la necesidad de introducir datos bancarios y es especialmente útil en servicios móviles, medios digitales y países donde el uso de tarjetas de crédito no está generalizado.
En el contexto de **EDYE**, la plataforma preescolar de HITN Digital que ofrece contenidos educativos y de entretenimiento para niños en un entorno seguro, el DCB se utiliza para que los usuarios puedan suscribirse a la plataforma a través del operador móvil. Este documento define de forma genérica el modelo de integración **API + Notifier** utilizado por EDYE para ofrecer suscripciones mediante DCB, de manera neutra y sin referencias a un operador concreto.

## 2. Alcance

El objetivo de este documento es servir de guía técnico‑operativa para equipos de **Operaciones, DevOps** y **equipos técnicos de partners** que deban integrar servicios de EDYE usando DCB. Se describen:

- La arquitectura lógica del modelo API + Notifier.
- Los componentes involucrados y su interacción.
- Los flujos de comunicación para registro, autenticación y gestión de suscripciones.
- Las responsabilidades de EDYE y del operador.
- Consideraciones de seguridad, manejo de errores y buenas prácticas.

Fuera del alcance quedan detalles específicos de operadores, URLs reales, credenciales o variaciones por país.

## 3. Arquitectura lógica de la integración

La integración se basa en dos vectores de comunicación:

- **API REST de EDYE:** expone servicios para registro y autenticación de usuarios, validación de estado de suscripción y gestión de acceso a contenidos.
- **Notifier del operador:** mecanismo de mensajería asíncrona mediante el cual el operador envía eventos de facturación (altas, renovaciones, suspensiones y cancelaciones) a EDYE. Estos eventos permiten sincronizar el estado de suscripciones y actualizar el acceso del usuario.

La figura siguiente ilustra la arquitectura general del modelo API + Notifier. El diagrama es conceptual y muestra los elementos esenciales sin detalles de implementación específicos:

![Ciclo DevOps](/img/integraciones/api_notifier_billing/int_api_noti_billing_flujo.png)
> **Figura 1.** Arquitectura lógica de la integración

## 4. Componentes principales

| Componente                         | Descripción breve                                                                                                                                                   |
| ---------------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| **Usuario**                        | Cliente final que utiliza la aplicación de EDYE para acceder a contenidos y gestionar su suscripción.                                                               |
| **Aplicación EDYE**                    | Aplicación móvil o web donde el usuario consume el servicio. Gestiona la experiencia de usuario y se comunica con la API de EDYE.                                   |
| **API EDYE (REST)**                    | Conjunto de servicios expuestos por EDYE para crear cuentas, autenticar usuarios, consultar el estado de suscripción y autorizar el acceso a contenidos.            |
| **Módulo de Autenticación y Registro** | Procesa el registro y login de usuarios. Implementa requisitos de seguridad (contraseñas seguras, validaciones de edad).                                            |
| **Módulo de Gestión de Suscripciones** | Almacena y consulta el estado de la suscripción del usuario. Interactúa con el operador para iniciar, renovar o cancelar suscripciones.                             |
| **Billing interno**                    | Sistema interno de EDYE que gestiona la facturación, conciliación y provisión de servicios en función de los eventos recibidos del operador.                        |
| **Gestor de Acceso a Contenidos**      | Controla el acceso a los episodios, juegos y otros recursos según el plan activo del usuario.                                                                       |
| **Notifier del operador**              | Servicio del operador que envía eventos asíncronos (alta, renovación, suspensión y baja) al webhook configurado por EDYE para mantener la suscripción sincronizada. |
| **Operador DCB**                       | Entidad que presta el servicio de facturación directa a través de la red móvil y provee las APIs y el Notifier para gestionar pagos y eventos.                      |

## 5. Flujos de comunicación

### 5.1. Registro y autenticación de usuarios

El proceso de alta de un usuario en EDYE sigue una secuencia sencilla, descrita en la sección de ayuda oficial. El usuario descarga la aplicación desde las tiendas oficiales, selecciona un contenido y realiza un pequeño cálculo para confirmar que es un adulto. A continuación se muestra un formulario donde se introducen **nombre, correo electrónico y contraseña**. La contraseña debe cumplir los requisitos de seguridad (al menos ocho caracteres, incluir mayúsculas, minúsculas, número y carácter especial). Tras completar el registro se envía un correo de bienvenida donde se permite elegir el plan de suscripción.

EDYE expone servicios REST para:

- **Crear usuario:** recibe las credenciales y datos de registro, valida la edad e inicia el proceso de creación de cuenta.
- **Autenticar usuario:** valida credenciales y emite tokens de acceso (por ejemplo, JWT).
- **Consultar estado de suscripción:** permite a la aplicación conocer si el usuario tiene una suscripción activa, vencida o suspendida.
- **Autorizar acceso a contenidos:** valida permisos por plan y concede acceso a los recursos.

La comunicación se realiza mediante HTTPS y se utilizan tokens de autenticación para proteger los recursos.

### 5.2. Activación de suscripción (Alta)

Para activar una suscripción mediante DCB se siguen las fases descritas a continuación. Se basan en prácticas comunes de la industria y en el flujo descrito por la iniciativa CAMARA: en el modelo de facturación directa el pago puede realizarse en uno o dos pasos.

1. **Preparación del pago (opcional):** la aplicación solicita a la API de EDYE iniciar un proceso de suscripción. EDYE valida que el usuario esté registrado, que cumpla los criterios de elegibilidad y prepara el pedido. Esta fase es opcional porque la API de facturación del operador permite pagos de una sola fase, combinando preparación y cobro.
2. **Solicitud de pago:** EDYE envía al operador la solicitud de suscripción. La solicitud incluye el identificador del usuario (por ejemplo, MSISDN o token de usuario) y el importe del plan. El operador carga el importe en la factura del usuario y devuelve un identificador de transacción.
3. **Confirmación del pago (en modelos de dos pasos):** si se usa el esquema de reserva y confirmación, EDYE debe llamar a un endpoint de confirmación para completar la transacción. Existe igualmente un endpoint de cancelación para anular la reserva antes de que sea cobrada.
4. **Recepción de evento de alta:** tras el cobro exitoso, el operador envía un evento de alta (suscripción activada) al Notifier configurado. EDYE consume este evento, actualiza su sistema de billing interno y habilita el acceso al contenido.

### 5.3. Renovaciones

Las suscripciones se renuevan de acuerdo con la periodicidad del plan (por ejemplo, semanal, mensual o anual). El operador ejecuta el cobro y envía un evento de renovación a EDYE a través del Notifier. EDYE actualiza la fecha de vigencia y prolonga el acceso del usuario.

### 5.4. Suspensiones y cancelaciones

- **Suspensión:** el operador envía un evento de suspensión cuando no se puede cobrar la renovación (falta de saldo, bloqueo temporal del usuario, etc.). EDYE cambia el estado de la suscripción a suspendida y restringe el acceso hasta que se recupere la regularidad de pago.
- **Baja (cancelación):** se produce cuando el usuario cancela la suscripción o cuando el operador aplica una baja definitiva. El Notifier envía el evento, EDYE marca la suscripción como cancelada y revoca el acceso.

## 6. Tabla resumen de eventos

| Evento (eventType)   | Origen                | Descripción breve                           | Acción en EDYE                                               |
| -------------------- | --------------------- | ------------------------------------------- | ------------------------------------------------------------ |
| SUBSCRIPTION_STARTED | Operador via Notifier | Alta de suscripción (primer cobro exitoso). | Activar plan, actualizar billing interno y habilitar acceso. |
| RENEWAL              | Operador via Notifier | Renovación periódica de la suscripción.     | Actualizar vigencia y mantener acceso.                       |
| SUSPENSION           | Operador via Notifier | Cobro fallido o suspensión temporal.        | Suspender plan y restringir acceso hasta regularización.     |
| CANCELLATION         | Operador via Notifier | Cancelación definitiva.                     | Marcar la suscripción como cancelada y revocar acceso.       |

Los campos habituales de un evento incluyen un identificador de transacción (paymentId o subscriptionId), el **msisdn** o identificador del usuario, el tipo de evento y la fecha/hora de emisión. El Notifier del operador suele permitir incluir un **token de firma** para garantizar la integridad del mensaje.

## 7. Responsabilidades

### 7.1. Responsabilidades de EDYE

- **Exponer y mantener APIs seguras:** implementar servicios REST que permitan el registro, autenticación y consulta de suscripciones con controles de acceso adecuados.
- **Sincronizar eventos:** consumir los eventos provenientes del Notifier, verificar su autenticidad y actualizar el sistema de billing interno, perfil de usuario y gestor de acceso.
- **Gestión de datos y privacidad:** EDYE solamente almacena el nombre de usuario y la contraseña para guardar la información del contenido que consume el usuario; no recopila datos que revelen la identidad real. Se recomienda que los usuarios utilicen seudónimos y se cumplan las políticas de privacidad vigentes.
- **Monitorización y auditoría:** registrar las transacciones, errores y notificaciones para fines de auditoría y soporte. Implementar alertas ante fallos del Notifier o tasas de error anómalas.
- **Gestión de errores:** retornar códigos HTTP adecuados (por ejemplo, 400 Bad Request para parámetros inválidos, 401 Unauthorized para credenciales incorrectas, 500 Internal Server Error para fallos internos) y mensajes claros para facilitar la resolución.
- **Idempotencia:** garantizar que las operaciones de activación y renovación sean idempotentes utilizando identificadores de correlación para evitar cobros o activaciones duplicadas.

### 7.2. Responsabilidades del operador (partner)

- **Proveer APIs de facturación DCB:** exponer endpoints de pago de una o dos fases, cancelación y consulta de pagos.
- **Gestionar consentimientos y autenticación:** resolver la identidad del usuario y obtener su consentimiento para cargar la factura, tal como se describe en el flujo CAMARA: el operador es responsable de proporcionar las URLs de privacidad y gestionar el consentimiento del usuario.
- **Emitir eventos a través del Notifier:** enviar de forma fiable los eventos de alta, renovación, suspensión y baja al webhook de EDYE. Incluir identificadores únicos y firma del mensaje.
- **Proveer mecanismos de reintento:** en caso de fallo al entregar una notificación, el operador debe reintentar hasta que reciba una respuesta 200 OK de EDYE.
- **Ofrecer entornos de prueba:** suministrar un entorno de sandbox donde EDYE pueda probar integraciones sin cargos reales.

## 8. Consideraciones de seguridad

- **Cifrado y transporte seguro:** todos los servicios (API y Notifier) deben funcionar sobre HTTPS/TLS.
- **Autenticación y autorización:** implementar esquemas de OAuth 2.0 y OpenID Connect para la autenticación entre EDYE, agregadores y operadores. La identidad del usuario se debe transmitir de forma segura y se pueden usar identificadores como la dirección IP o el MSISDN.
- **Validación de notificaciones:** verificar la firma o token que acompaña a cada evento del Notifier para asegurarse de que proviene del operador. Es recomendable disponer de claves públicas compartidas para validar firmas o un mecanismo HMAC compartido.
- **Protección de datos personales:** EDYE no almacena información que revele la identidad real del usuario, y recomienda utilizar nombres de usuario anónimos. Cualquier dato sensible debe almacenarse cifrado y cumplir con la normativa aplicable (p. ej., GDPR).
- **Control de acceso y rate limiting:** implementar límites de tasa y políticas de bloqueo para evitar abusos y ataques de denegación de servicio.
- **Versionado y gestión de secretos:** gestionar versiones de API y rotar claves y tokens con regularidad.

## 9. Manejo de errores y eventos

- **Errores de autenticación:** cuando las credenciales del usuario son incorrectas, la API devolverá 401 Unauthorized con un mensaje descriptivo.
- **Errores de parámetros:** si faltan parámetros o tienen formato incorrecto, devolver 400 Bad Request.
- **Errores del operador:** el operador puede enviar eventos de error (por ejemplo, pago rechazado). EDYE debe procesarlos y ajustar el estado de la suscripción.
- **Duplicados:** para evitar procesar varias veces el mismo evento, se debe almacenar un identificador único de evento y descartar los eventos ya procesados.
- **Reintentos:** si EDYE no devuelve 200 OK, el operador reenviará el evento. Se recomienda implementar reintentos con retroceso exponencial en ambos extremos.

## 10. Buenas prácticas operativas

- **Uso de ambientes segregados:** probar la integración en un entorno de sandbox antes de pasar a producción.
- **Monitoreo continuo:** establecer métricas de latencia, tasa de éxito de pagos, tiempos de respuesta del Notifier y alarmas en caso de anomalías.
- **Documentación y versionado:** mantener documentación actualizada, especificar versiones de API y cambios de esquema.
- **Sincronización horaria:** sincronizar los relojes de los sistemas para registrar correctamente los timestamps de eventos.
- **Soporte y escalamiento:** definir canales de comunicación entre equipos técnicos para gestionar incidencias y mantener acuerdos de nivel de servicio.
- **Pruebas de resiliencia:** simular fallos de red y reintentos del Notifier para validar el comportamiento del sistema.
- **Auditoría y cumplimiento:** almacenar logs de acceso y transacciones durante el periodo definido por las políticas internas y regulaciones.

## 11. Glosario de términos

| Término                      | Definición                                                                                                                |
| ---------------------------- | ------------------------------------------------------------------------------------------------------------------------- |
| **DCB (Direct Carrier Billing)** | Método de pago que carga el costo de una transacción a la factura del operador móvil del usuario.                         |
| **API REST**                     | Interfaz de programación basada en HTTP que sigue el paradigma REST para exponer servicios web.                           |
| **Notifier**                     | Servicio proporcionado por el operador para enviar eventos asíncronos a EDYE (altas, renovaciones, suspensiones, bajas).  |
| **msisdn**                       | Número de teléfono móvil que identifica al abonado en la red del operador.                                                |
| **OAuth 2.0 / OIDC**             | Estándares de autorización y autenticación utilizados para intercambiar credenciales de manera segura entre aplicaciones. |
| **EventType**                    | Campo del evento que indica el tipo de operación notificada (SUBSCRIPTION_STARTED, RENEWAL, SUSPENSION, CANCELLATION).    |

Este documento es parte del ecosistema documental corporativo de EDYE. Ha sido elaborado con fines técnicos y operativos, y se mantendrá actualizado conforme evolucionen las integraciones de facturación directa.
