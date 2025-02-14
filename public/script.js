document.getElementById('quoteButton').addEventListener('click', async () => {
    const response = await fetch('/quote');
    const data = await response.json();
    document.getElementById('quoteResult').textContent = data.word;
});

document.getElementById('characterButton').addEventListener('click', async () => {
    const response = await fetch('/character');
    const data = await response.json();

    const characterResult = document.getElementById('characterResult');
    characterResult.innerHTML = '';
    characterResult.textContent = data.character; // Utiliser le texte récupéré dans le JSON

    // Créer un élément image
    const img = document.createElement('img');
    img.src = data.url; // Utiliser l'URL de l'image récupérée
    img.alt = 'Perso aléatoire'; // Texte alternatif pour l'image
    img.style.maxHeight = '300px'; // Définir la hauteur maximale
    img.style.maxWidth = '100%'; // Définir la largeur maximale

    // Ajouter l'image sans supprimer le texte
    characterResult.appendChild(document.createElement('br'));
    characterResult.appendChild(img);
});

document.getElementById('memeButton').addEventListener('click', async () => {
    const response = await fetch('/meme');
    const data = await response.json();

    // Créer un élément image
    const img = document.createElement('img');
    img.src = data.meme; // Utiliser l'URL de l'image récupérée
    img.alt = 'Mème aléatoire'; // Texte alternatif pour l'image
    img.style.maxHeight = '300px'; // Définir la hauteur maximale
    img.style.maxWidth = '100%'; // Définir la largeur maximale

    // Ajouter l'image au conteneur de résultat
    const memeResult = document.getElementById('memeResult');
    memeResult.innerHTML = ''; // Effacer tout contenu précédent
    memeResult.appendChild(img); // Ajouter la nouvelle image
});

document.getElementById('planeButton').addEventListener('click', async () => {
    const response = await fetch('/data');
    const data = await response.json();
    document.getElementById('planeResult').textContent = data.airline_name;
    document.getElementById('numplaneResult').textContent = data.airline_flight_number;
});

document.getElementById('nameButton').addEventListener('click', async () => {
    const response = await fetch('/data');
    const data = await response.json();
    document.getElementById('nameResult').textContent = data.full_name;
});

document.getElementById('cityButton').addEventListener('click', async () => {
    const response = await fetch('/data');
    const data = await response.json();
    document.getElementById('cityResult').textContent = data.city;
});