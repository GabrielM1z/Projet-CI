const express = require('express');
const path = require('path');

// Créer une instance de l'application express
const app = express();

// Configurer le dossier public pour les fichiers statiques (CSS, images, etc.)
app.use(express.static(path.join(__dirname, 'public')));

// Définir le moteur de rendu (optionnel si vous utilisez juste HTML)
app.set('view engine', 'ejs'); // Si tu veux utiliser ejs. Sinon, tu peux omettre cela pour HTML pur.

// Route pour la page d'accueil
app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, 'views', 'index.html'));
});

// Configuration des routes pour les requêtes
app.get('/quote', (req, res) => {
  res.json({ quote: "La programmation, c'est de l'art, mais sans la beauté." });
});

app.get('/character', (req, res) => {
  res.json({ character: "Rick Sanchez (Rick and Morty)" });
});

app.get('/meme', (req, res) => {
  res.json({ meme: "https://imgflip.com/s/meme/Mocking-Spongebob.jpg" });
});

app.get('/planet', (req, res) => {
  res.json({ planet: "Tatooine" });
});

// Exporter l'application pour l'utiliser dans le fichier www
module.exports = app;
