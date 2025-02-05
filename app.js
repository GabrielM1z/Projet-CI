const express = require('express');
const axios = require('axios');
const path = require('path');
require('dotenv').config(); // Charger les variables d'environnement depuis .env

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


app.get('/character', async (req, res) => {
  try {
    const randomId = Math.floor(Math.random() * 500) + 1; // Nombre entre 1 et 826
    const response = await axios.get(`https://pokeapi.co/api/v2/pokemon/${randomId}`);
    const character = response.data;

    res.json({ character: `${character.name}`, url: `${character.sprites.other.dream_world.front_default}` });
  } catch (error) {
    console.error("Erreur lors de la récupération du personnage :", error);
    res.status(500).json({ error: "Impossible de récupérer un personnage" });
  }
});

app.get('/meme', async (req, res) => {
  try {
    // Faire l'appel API à Meme API (https://meme-api.com/gimme)
    const response = await axios.get('https://meme-api.com/gimme');
    
    // La réponse contient l'URL du mème
    const memeUrl = response.data.url;

    // Renvoyer le mème sous forme de JSON
    res.json({ meme: memeUrl });
  } catch (error) {
    console.error("Erreur lors de l'appel à l'API Meme API:", error);
    res.status(500).json({ error: 'Erreur interne de serveur' });
  }
});

app.get('/planet', (req, res) => {
  res.json({ planet: "Tatooine" });
});

// Route /plane pour récupérer les données avec la clé API
app.get('/plane', async (req, res) => {
  try {
    // Récupérer la clé API depuis les variables d'environnement
    const apiKey = process.env.API_KEY;
    // Vérifier si la clé API est présente
    if (!apiKey) {
      return res.status(500).json({ error: 'Clé API manquante' });
    }

    // Faire l'appel à l'API avec la clé récupérée
    const response = await axios.get(`https://random-data-api.com/api/v3/projects/856b2ec7-ca72-4d5e-b1aa-505afe3f40d5?api_key=${apiKey}`);

    // Retourner la réponse de l'API
    res.json(response.data);
  } catch (error) {
    console.error("Erreur lors de l'appel à l'API /plane:", error);
    res.status(500).json({ error: 'Erreur interne de serveur' });
  }
});

// Exporter l'application pour l'utiliser dans le fichier www
module.exports = app;
