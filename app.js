const http = require('http');
const fs = require('fs');
const path = require('path');

// Créer le serveur HTTP
const server = http.createServer((req, res) => {
  // Définir les en-têtes de la réponse
  res.setHeader('Content-Type', 'application/json');
  
  // Gérer les différentes routes
  if (req.url === '/quote' && req.method === 'GET') {
    // Simuler une citation geek
    res.statusCode = 200;
    res.end(JSON.stringify({ quote: "La programmation, c'est de l'art, mais sans la beauté." }));
  } else if (req.url === '/character' && req.method === 'GET') {
    // Simuler un personnage
    res.statusCode = 200;
    res.end(JSON.stringify({ character: "Rick Sanchez (Rick and Morty)" }));
  } else if (req.url === '/meme' && req.method === 'GET') {
    // Simuler un mème
    res.statusCode = 200;
    res.end(JSON.stringify({ meme: "https://imgflip.com/s/meme/Mocking-Spongebob.jpg" }));
  } else if (req.url === '/planet' && req.method === 'GET') {
    // Simuler un nom de planète
    res.statusCode = 200;
    res.end(JSON.stringify({ planet: "Tatooine" }));
  } else if (req.url === '/' && req.method === 'GET') {
    // Servir le fichier HTML
    fs.readFile(path.join(__dirname, 'index.html'), (err, data) => {
      if (err) {
        res.statusCode = 500;
        res.end('Erreur du serveur');
        return;
      }
      res.statusCode = 200;
      res.end(data);
    });
  } else {
    // Page non trouvée
    res.statusCode = 404;
    res.end(JSON.stringify({ error: "Page non trouvée" }));
  }
});

// Lancer le serveur
const port = 8080;
server.listen(port, () => {
  console.log(`Le serveur écoute sur http://localhost:${port}`);
});
