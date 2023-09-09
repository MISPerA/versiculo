// Lista de versículos bíblicos (substitua com seus próprios versículos)
const versiculos = [
    "Porque Deus amou o mundo de tal maneira que deu o seu Filho unigênito, para que todo aquele que nele crê não pereça, mas tenha a vida eterna. - João 3:16",
    "O Senhor é o meu pastor; nada me faltará. - Salmo 23:1",
    "Tudo posso naquele que me fortalece. - Filipenses 4:13",
    // Adicione mais versículos aqui
];

const verseElement = document.getElementById('verse');

// Função para gerar um versículo aleatório
function generateRandomVerse() {
    const randomIndex = Math.floor(Math.random() * versiculos.length);
    const randomVerse = versiculos[randomIndex];
    verseElement.textContent = randomVerse;
}

// Gere um versículo aleatório ao carregar a página
generateRandomVerse();
