# 🚀 BRM - Prueba Técnica

Este repositorio contiene la solución a una prueba técnica para BRM. El objetivo principal es demostrar habilidades técnicas en desarrollo backend, estructuración de código, uso de bases de datos y buenas prácticas de programación.

## 📋 Tabla de Contenidos

- [Prerrequisitos](#-prerrequisitos)
- [Instalación y Configuración](#-instalación-y-configuración)
- [Verificación](#-verificación)
- [Tecnologías Utilizadas](#-tecnologías-utilizadas)
- [Arquitectura del Proyecto](#-arquitectura-del-proyecto)
- [Aprendizajes](#-aprendizajes)
- [Mejoras Futuras](#-mejoras-futuras)
- [Solución de Problemas](#-solución-de-problemas)

## 🔧 Prerrequisitos

Antes de ejecutar el proyecto, asegúrate de tener instalado:

- **Node.js** (versión 16 o superior)
- **PostgreSQL** (versión 12 o superior)
- **npm** o **yarn**

## ⚙️ Instalación y Configuración

### PASO 1: Configuración del archivo .env

Crea un archivo `.env` en la raíz del proyecto con las siguientes variables de entorno:

```env
HOST=localhost
USER=postgres
PASSWORD=Juan1224?
DATABASE=brm
POSTGRESPASS=5432
```

> **⚠️ Importante:** Asegúrate de que PostgreSQL esté ejecutándose en tu sistema y que la base de datos `brm` exista. Si no existe, créala usando el comando:
> ```sql
> CREATE DATABASE brm;
> ```

### PASO 2: Instalar dependencias

Instala todas las dependencias del proyecto:

```bash
npm i
```

Este comando instalará todas las librerías y paquetes necesarios listados en el archivo `