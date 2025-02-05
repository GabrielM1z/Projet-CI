# Utiliser Node.js
FROM node:18

# Définir le dossier de travail
WORKDIR /app

# Copier les fichiers
COPY package*.json ./
RUN npm install
COPY . .

# Définir la variable d'environnement (clé API passée au runtime)
ENV PORT=8080

# Exposer le port
EXPOSE 8080

# Commande de démarrage
CMD ["npm", "start"]