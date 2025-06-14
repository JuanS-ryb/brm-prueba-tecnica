FROM node:20-bookworm-slim
# Establece el directorio de trabajo en el contenedor
WORKDIR /app

# Copia todos los archivos del contexto al contenedor
COPY . .

# Instala dependencias
RUN npm install

RUN npm run db:generate

# Expone el puerto
EXPOSE 3000

# Comando para iniciar la app
CMD ["npm", "run", "dev"]
