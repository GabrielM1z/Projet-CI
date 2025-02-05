const express = require('express');
const path = require('path');
const axios = require('axios'); // Importer axios pour effectuer des appels API

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

// Configuration des routes
app.get('/quote', async (req, res) => {
  try {
    // Faire un appel à l'API Random Word pour obtenir un mot aléatoire
    const response = await axios.get('https://random-word-api.herokuapp.com/word?number=1&lang=fr');

    // Retourner le mot obtenu depuis l'API
    res.json({ word: response.data[0] });
  } catch (error) {
    console.error('Error fetching word:', error);
    res.json({ word: "Erreur lors de la récupération du mot." });
  }
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
