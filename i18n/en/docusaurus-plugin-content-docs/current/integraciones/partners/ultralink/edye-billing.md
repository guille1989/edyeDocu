---
id: int-edye-billing-partner-ultralink
title: Edye Billing – Ultralink
---
## Información de integración específica – Ultralink

En esta sección se recopila información específica del partner que implementa la integración EDYE Billing mediante Pagoralia e InPlayer. Las descripciones se basan en los documentos de integración compartidos.

**Canal de integración:** API REST con endpoints diferenciados por entorno. Se utilizan los endpoints de Pagoralia (`/create‑portal`) para generar el portal de pago geolocalizado y de InPlayer (`/auth`, `/user`) para autenticación y registro de usuarios.

**Arquitectura y flujo:** Pagoralia genera un portal geolocalizado ajustando el idioma y la moneda según la dirección IP del usuario. InPlayer gestiona la identidad y valida a los usuarios que pagan. El flujo secuencial consta de tres pasos: (1) generación del portal; (2) registro en InPlayer; y (3) habilitación de acceso a los contenidos. El portal se personaliza con logos y colores del cliente.

**Campos e interoperabilidad:** Pagoralia envía a InPlayer los datos de nombre, email, ID de compra, IP y tipo de producto. InPlayer devuelve a la plataforma un JWT que incluye las claims `userID`, `email`, `purchaseTime` y `accessLevel`. La sincronización entre ambos servicios se realiza mediante webhooks que confirman el pago y el registro del usuario.

**Validaciones y seguridad:** Pagoralia comprueba que el país esté soportado, que el cliente esté disponible y que los métodos de pago estén activos. InPlayer valida que el correo no esté duplicado, que los formatos sean correctos y que las contraseñas cumplan políticas de seguridad. Los mensajes de error más comunes son `403 Forbidden` (cliente no habilitado) y `409 Conflict` (usuario ya registrado). Las comunicaciones utilizan HTTPS y tokens firmados, y los portales temporales expiran tras una hora.

**Entornos y URLs:** Ultralink utilizará los endpoints de QA y producción de Pagoralia e InPlayer: `https://qa.pagoralia.com/create‑portal` y `https://qa.inplayer.com/api/auth` para pruebas, y `https://pagos.pagoralia.com` y `https://inplayer.com/api` para el entorno productivo.

**Particularidades operativas:** El portal ajusta automáticamente el idioma y la moneda según la ubicación del usuario final y aplica el branding del cliente. La integración se limita a pagos individuales en tiempo real; la conciliación de ganancias se gestiona por medio de mecanismos estándar de EDYE.

**Contactos de soporte:** El documento original no especifica contactos; estos se deberán acordar en los contratos de servicio.