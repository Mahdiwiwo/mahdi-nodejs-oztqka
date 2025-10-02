# Utilise Node.js officiel
FROM node:18

# Créer un dossier de travail
WORKDIR /usr/src/app

# Copier et installer les dépendances
COPY package*.json ./
RUN npm install --production

# Copier le reste du code
COPY . .

# Exposer le port de l’app
EXPOSE 3000

# Lancer l'application
CMD ["npm", "start"]
