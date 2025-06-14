# 🚀 BRM - Prueba Técnica

Este repositorio contiene la solución a una prueba técnica para BRM. El objetivo principal es demostrar habilidades técnicas en desarrollo backend, estructuración de código, uso de bases de datos y buenas prácticas de programación.

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

Este comando instalará todas las librerías y paquetes necesarios listados en el archivo `package.json`.

### PASO 3: Generar migraciones

Genera los archivos de migración de la base de datos:

```bash
npm run db:generate
```

Este comando creará los archivos de migración necesarios basados en el esquema de tu base de datos.

### PASO 4: Ejecutar migraciones y seed

Ejecuta los siguientes comandos **en orden**:

#### 4.1 Aplicar migraciones
```bash
npm run db:migrate
```
Crea las tablas y estructura necesaria en tu base de datos PostgreSQL.

#### 4.2 Poblar la base de datos
```bash
npm run db:seed
```
Inserta 5 usuarios de ejemplo en la base de datos para pruebas.

### PASO 5: Ejecutar el proyecto

Una vez completados todos los pasos anteriores, ejecuta el proyecto:

```bash
npm run dev
```

### PASO 6: Abrir Swagger o verificar api en postman

Una vez compile el programa se ejecutara en http://localhost:3000/, para acceder a swagger es: http://localhost:3000/doc

## ✅ Verificación

Para confirmar que todo funciona correctamente:

- ✅ El servidor debería iniciarse sin errores
- ✅ La conexión a PostgreSQL debería establecerse exitosamente
- ✅ Las tablas deberían estar creadas en la base de datos `brm`
- ✅ Deberías poder ver los 5 usuarios de ejemplo en la base de datos

## 🔧 Tecnologías Utilizadas

| Tecnología | Propósito |
|------------|-----------|
| **Node.js** | Runtime de JavaScript |
| **PostgreSQL** | Base de datos relacional |
| **Express** | Framework web para Node.js |
| **Drizzle** | ORM para TypeScript |
| **Pg** | Cliente PostgreSQL para Node.js |
| **Cors** | Middleware para habilitar CORS |
| **Swagger** | Documentación de APIs |

## 🧱 Arquitectura del Proyecto

Este proyecto sigue una **arquitectura en capas**, separando claramente responsabilidades como:

- 🔌 **Conexión a base de datos**
- 🎮 **Controladores**
- 🛣️ **Rutas**
- ✅ **Validaciones**
- 📖 **Documentación**

Esta organización modular permite **escalar fácilmente** el sistema, mantener un **código limpio** y facilitar la **colaboración entre desarrolladores**.

## 🧠 Aprendizajes

Durante el desarrollo de este proyecto, adquirí nuevos conocimientos y fortalecí buenas prácticas:

- ✅ **Dockerización**: Inicializar un Dockerfile para contenerizar la aplicación backend
- 📝 **Documentación**: Mejorar la legibilidad y mantenimiento del código
- 🧱 **Arquitectura Modular**: Organizar correctamente archivos y responsabilidades
- 📚 **API Documentation**: Integrar Swagger para documentar y visualizar APIs REST

## 🔧 Mejoras Futuras

Aspectos que pueden optimizarse en versiones futuras:

- 🐳 **Docker Compose**: Orquestar servicios (base de datos + backend) de forma automatizada
- 📖 **Documentación Avanzada**: Agregar ejemplos de uso y descripciones más detalladas
- 🧪 **Testing**: Implementar pruebas unitarias e integración
- 🔐 **Seguridad**: Añadir autenticación y autorización

## 🛠️ Solución de Problemas

### Error de conexión a PostgreSQL
- Verifica que PostgreSQL esté ejecutándose
- Confirma que las credenciales en `.env` sean correctas

### Error de base de datos no encontrada
- Asegúrate de crear la base de datos `brm` antes de ejecutar migraciones

### Error de permisos
- Verifica que el usuario PostgreSQL tenga permisos para crear tablas e insertar datos
