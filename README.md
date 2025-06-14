brm-prueba-tecnica
Este repositorio contiene la solución a una prueba técnica para BRM. El objetivo principal es demostrar habilidades técnicas en desarrollo backend, estructuración de código, uso de bases de datos y buenas prácticas de programación.
🚀 Instrucciones de Instalación y Ejecución
Prerrequisitos
Antes de ejecutar el proyecto, asegúrate de tener instalado:

Node.js (versión 16 o superior)
PostgreSQL
npm o yarn

PASO 1: Configuración del archivo .env
Crea un archivo .env en la raíz del proyecto con las siguientes variables de entorno:
envHOST=localhost
USER=postgres
PASSWORD=Juan1224?
DATABASE=brm
POSTGRESPASS=5432

Nota: Asegúrate de que PostgreSQL esté ejecutándose en tu sistema y que la base de datos brm exista. Si no existe, créala usando el comando:
sqlCREATE DATABASE brm;

PASO 2: Instalar dependencias
Instala todas las dependencias del proyecto ejecutando:
bashnpm i
Este comando instalará todas las librerías y paquetes necesarios listados en el archivo package.json.
PASO 3: Generar migraciones
Genera los archivos de migración de la base de datos:
bashnpm run db:generate
Este comando creará los archivos de migración necesarios basados en el esquema de tu base de datos.
PASO 4: Ejecutar migraciones y seed
Ejecuta los siguientes comandos en orden:
4.1 Aplicar migraciones
bashnpm run db:migrate
Este comando creará las tablas y estructura necesaria en tu base de datos PostgreSQL.
4.2 Poblar la base de datos
bashnpm run db:seed
Este comando insertará 5 usuarios de ejemplo en la base de datos para pruebas.
PASO 5: Ejecutar el proyecto
Una vez completados todos los pasos anteriores, puedes ejecutar el proyecto:
bashnpm run dev
✅ Verificación
Para verificar que todo esté funcionando correctamente:

El servidor debería iniciarse sin errores
La conexión a PostgreSQL debería establecerse exitosamente
Las tablas deberían estar creadas en la base de datos brm
Deberías poder ver los 5 usuarios de ejemplo en la base de datos

🛠️ Solución de Problemas

Error de conexión a PostgreSQL: Verifica que PostgreSQL esté ejecutándose y que las credenciales en el archivo .env sean correctas.
Error de base de datos no encontrada: Asegúrate de crear la base de datos brm antes de ejecutar las migraciones.
Error de permisos: Verifica que el usuario de PostgreSQL tenga permisos para crear tablas y insertar datos.

🔧 Tecnologías Utilizadas

Node.js
PostgreSQL
Express
Brizzle
Pg
Cors
Swagger

🧱  Estructura Utilizada

Este proyecto sigue una arquitectura en capas, separando claramente responsabilidades como conexión a base de datos, controladores, rutas, validaciones y documentación. Esta organización modular permite escalar fácilmente el sistema, mantener un código limpio y facilitar la colaboración entre desarrolladores."

🧠 Cosas que aprendí
Durante el desarrollo de este proyecto, adquirí nuevos conocimientos y fortalecí buenas prácticas en desarrollo backend:

✅ Inicializar un Dockerfile para contenerizar mi aplicación de backend.

📝 Documentar el código, mejorando la legibilidad y mantenimiento.

🧱 Aplicar una arquitectura modular y estructurada para organizar correctamente los archivos y responsabilidades del proyecto.

📚 Integrar Swagger para documentar y visualizar de forma clara las APIs REST.

🔧 Cosas que mejoraría
A medida que avance y adquiera más experiencia, hay aspectos que puedo optimizar en versiones futuras del proyecto:

🐳 Incorporar Docker Compose para orquestar servicios como base de datos y backend de forma más automatizada.

📖 Mejorar la documentación, tanto del código como de las APIs, agregando ejemplos de uso, descripciones más detalladas y mejor estructuración.
