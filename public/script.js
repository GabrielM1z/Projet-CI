document.getElementById('quoteButton').addEventListener('click', async () => {
    const response = await fetch('/quote');
    const data = await response.json();
    document.getElementById('quoteResult').textContent = data.quote;
});

document.getElementById('characterButton').addEventListener('click', async () => {
    const response = await fetch('/character');
    const data = await response.json();
    document.getElementById('characterResult').textContent = data.character;
});

document.getElementById('memeButton').addEventListener('click', async () => {
    const response = await fetch('/meme');
    const data = await response.json();
    document.getElementById('memeResult').textContent = data.meme;
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
