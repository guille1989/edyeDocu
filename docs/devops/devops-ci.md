---
id: devops-ci
title: Integración Continua (CI)
---

La Integración Continua en Edye automatiza compilación, pruebas y análisis de calidad
para todos los repositorios en GitHub mediante GitHub Actions. :contentReference[oaicite:10]{index=10}

## Flujo general

1. Commit / Push a `develop` o `main`.
2. GitHub Actions hace `checkout` del repo.
3. Instalación de dependencias.
4. Build / compilación.
5. Pruebas automatizadas (unitarias e integración).
6. Escaneo de seguridad y calidad (Snyk / SonarQube).
7. Generación de artefactos.
8. Notificaciones a Slack / actualización en Monday.
9. Gate de calidad: si falla cualquier etapa, se bloquea el merge.

## Ejemplo básico de workflow

```yaml
name: CI Pipeline

on:
  push:
    branches: [ main, develop ]
  pull_request:
    branches: [ main, develop ]

jobs:
  build-test:
    runs-on: ubuntu-latest
    steps:
      - uses: actions/checkout@v4
      - name: Instalar dependencias
        run: npm install
      - name: Ejecutar pruebas
        run: npm test
