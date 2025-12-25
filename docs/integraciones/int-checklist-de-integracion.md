---
id: int-checklist
title: Edyes - Checklist de Integraciones
---
**Versión:** 1.0  
**Fecha:** 01/12/2025  

---

## ✅ Checklist — Integración API + Notifier (Direct Carrier Billing)

### 1. Información general

- Nombre del partner
- País / región
- Tipo de operador (telco / carrier / agregador)
- Ambiente(s) definidos: staging / producción
- Contactos técnicos del partner
- Ventana de soporte y escalamiento

### 2. Arquitectura y alcance

- Tipo de integración confirmado (API + Notifier DCB)
- Flujo de alta de suscripción definido
- Flujo de renovación definido
- Flujo de baja / cancelación definido
- Flujo de retry / reintentos definido
- Responsabilidades EDYE vs Partner documentadas

### 3. API – Configuración

- Endpoints de EDYE habilitados
- Endpoints del partner documentados
- Método de autenticación acordado (token / header / firma)
- IPs permitidas (whitelisting)
- Rate limits definidos
- Timeouts acordados

### 4. Notifier (eventos)

- URL de notificación del partner definida
- Tipos de eventos acordados:
	- Alta
	- Renovación
	- Baja
	- Error / fallo
- Formato de payload validado
- Reintentos y manejo de errores definidos
- ACK / respuesta esperada documentada

### 5. Billing y estados

- Estados de suscripción mapeados
- Periodicidad de cobro definida
- Manejo de grace period definido
- Tratamiento de cobros fallidos definido
- Reglas de acceso asociadas a estado

### 6. Seguridad y compliance

- HTTPS obligatorio
- Validación de firma / token
- Logs de eventos habilitados
- Retención de logs definida
- Cumplimiento regulatorio local validado

### 7. Testing y validación

- Casos de prueba documentados
- Pruebas en ambiente staging ejecutadas
- Pruebas de error / edge cases
- Validación de reconciliación de eventos
- Go-live aprobado por ambas partes

## ✅ Checklist — Integración APP Integration (APO + Notifier + APK)

### 1. Información general

- Partner identificado
- Plataforma(s): Android / Android TV / OTT
- País / región
- Contactos técnicos
- Ambientes definidos

### 2. APK

- APK EDYE entregado
- Versión documentada
- Firma / keystore validada
- Reglas de actualización definidas
- Proceso de publicación acordado

### 3. APO (Application Provider Operator)

- Configuración de canales
- Configuración de branding
- Parámetros por partner definidos
- Control de acceso validado
- Sincronización de configuración validada

### 4. Notifier

- Eventos soportados definidos
- Endpoint de notificación configurado
- Formato de eventos validado
- Manejo de errores documentado

### 5. Autenticación y acceso

- Modelo de login definido
- Asociación usuario-suscripción validada
- Control parental / perfiles validado

### 6. Testing

- Instalación en dispositivos reales
- Flujos de login probados
- Flujos de billing probados
- Pruebas de actualización de app
- Aprobación final del partner

## ✅ Checklist — Integración EDYE Billing – Ingesta

### 1. Información general

- Partner identificado
- Tipo de ingestión (API / CSV / híbrido)
- Periodicidad de envío
- Ambientes definidos
- Contactos técnicos

### 2. Modelo de datos

- Esquema de usuarios definido
- Esquema de suscripciones definido
- Estados de suscripción acordados
- Identificadores únicos definidos
- Validaciones obligatorias documentadas

### 3. Flujo de ingestión

- Alta de usuario
- Alta de suscripción
- Renovación
- Baja / cancelación
- Actualización de estado

### 4. Transporte

- Endpoint / canal definido
- Seguridad (auth / firma / IP)
- Manejo de errores
- Reintentos definidos

### 5. Reconciliación

- Mecanismo de control diario
- Logs y auditoría
- Manejo de inconsistencias

### 6. Testing

- Cargas iniciales probadas
- Casos de error validados
- Pruebas de volumen
- Go-live aprobado

## ✅ Checklist — Integración Delivery vía API

### 1. Información general

- Partner identificado
- Tipo de entrega (metadata / imágenes / video)
- Frecuencia de consumo
- Ambientes definidos

### 2. API

- Endpoints habilitados
- Autenticación configurada
- Filtros por catálogo definidos
- Versionado de API acordado

### 3. Contenidos

- Metadata validada
- Imágenes validadas
- Videos validados (si aplica)
- Naming conventions acordadas

### 4. Performance

- Rate limits definidos
- Caching acordado
- SLA de disponibilidad

### 5. Testing

- Consumo en staging
- Validación de payloads
- Manejo de errores
- Aprobación final

## ✅ Checklist — Integración Ingesta de Contenidos

### 1. Información general

- Partner identificado
- Tipo de ingesta (API / Aspera / SFTP)
- Alcance (video / metadata / imágenes)
- Frecuencia de entrega

### 2. Formatos

- Especificación de metadata
- Especificación de imágenes
- Especificación de video
- Naming conventions

### 3. Transporte

- Canal configurado
- Credenciales entregadas
- Seguridad validada

### 4. Procesamiento

- QC automático
- QC manual (si aplica)
- Manejo de errores

### 5. Testing

- Carga piloto
- Validación completa
- Aprobación de operación

