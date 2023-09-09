// Lista de versículos bíblicos (substitua com seus próprios versículos)
const versiculos = [
    {
        livro: "João",
        capitulo: 3,
        versiculo: 16,
        traducao: "Porque Deus amou o mundo de tal maneira que deu o seu Filho unigênito, para que todo aquele que nele crê não pereça, mas tenha a vida eterna."
    },
    {
        livro: "Salmo",
        capitulo: 23,
        versiculo: 1,
        traducao: "O Senhor é o meu pastor; nada me faltará."
    },
    {
        livro: "Filipenses",
        capitulo: 4,
        versiculo: 13,
        traducao: "Tudo posso naquele que me fortalece."
    },
    // Adicione mais versículos aqui
];

const verseElement = document.getElementById('verse');
const translationElement = document.querySelector('.translation');
const bookChapterElement = document.querySelector('.book-chapter');

// Função para gerar um versículo aleatório
function generateRandomVerse() {
    const randomIndex = Math.floor(Math.random() * versiculos.length);
    const randomVerse = versiculos[randomIndex];

    // Atualize o conteúdo do versículo, tradução, livro e capítulo
    verseElement.textContent = randomVerse.traducao;
    translationElement.textContent = `Tradução: ${randomVerse.traducao}`;
    bookChapterElement.textContent = `Livro: ${randomVerse.livro}, Capítulo: ${randomVerse.capitulo}`;
}

// Gere um versículo aleatório ao carregar a página
generateRandomVerse();
