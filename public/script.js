document.getElementById('quoteButton').addEventListener('click', async () => {
    const response = await fetch('/quote');
    const data = await response.json();
    document.getElementById('quoteResult').textContent = data.word;
});

document.getElementById('characterButton').addEventListener('click', async () => {
    const response = await fetch('/character');
    const data = await response.json();

    console.log("Ca merche")
    console.log(data)
    
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

document.getElementById('planetButton').addEventListener('click', async () => {
    const response = await fetch('/planet');
    const data = await response.json();
    document.getElementById('planetResult').textContent = data.planet;
});

document.getElementById('generalButton').addEventListener('click', async () => {
    // Vous pouvez ajouter une logique pour générer un élément aléatoire ici
    alert("Génération aléatoire !");
});
