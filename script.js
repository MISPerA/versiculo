// Lista de versículos bíblicos (substitua com seus próprios versículos)
const versiculos = [
    {
        versao: "Almeida Revista e Corrigida",
        livro: "João",
        capitulo: 3,
        versiculo: 16,
        texto: "Porque Deus amou o mundo de tal maneira que deu o seu Filho unigênito, para que todo aquele que nele crê não pereça, mas tenha a vida eterna."
    },
    {
        versao: "NVI",
        livro: "Salmo",
        capitulo: 23,
        versiculo: 1,
        texto: "O Senhor é o meu pastor; nada me faltará."
    },
    {
        versao: "Almeida Revista e Corrigida",
        livro: "Filipenses",
        capitulo: 4,
        versiculo: 13,
        texto: "Tudo posso naquele que me fortalece."
    },
    // Adicione mais versículos aqui
];

const verseElement = document.getElementById('verse');
const versionElement = document.querySelector('.version');
const bookChapterElement = document.querySelector('.book-chapter');

// Função para gerar um versículo aleatório
function generateRandomVerse() {
    const randomIndex = Math.floor(Math.random() * versiculos.length);
    const randomVerse = versiculos[randomIndex];

    // Atualize o conteúdo do versículo, versão, livro e capítulo
    verseElement.textContent = randomVerse.texto;
    versionElement.textContent = `Versão: ${randomVerse.versao}`;
    bookChapterElement.textContent = `Livro: ${randomVerse.livro}, Capítulo: ${randomVerse.capitulo}`;
}

// Gere um versículo aleatório ao carregar a página
generateRandomVerse();
