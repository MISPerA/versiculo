// Lista de versículos bíblicos (substitua com seus próprios versículos)
const versiculos = [
    {
        versao: "ARC",
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
        versao: "ARC",
        livro: "Filipenses",
        capitulo: 4,
        versiculo: 13,
        texto: "Tudo posso naquele que me fortalece."
    },
    // Adicione mais versículos aqui
    // Versículos adicionais na versão NVT
    {
        versao: "NVT",
        livro: "Filipenses",
        capitulo: 4,
        versiculo: 6,
        texto: "Não fiquem ansiosos por motivo algum; pelo contrário, orem a Deus em todos os momentos e peçam a ele tudo o que vocês precisam, agradecendo-lhe por tudo."
    },
    // Continue adicionando mais versículos aqui...
];

const verseElement = document.getElementById('verse');
const verseReferenceElement = document.getElementById('verse-reference');

// Função para gerar um versículo aleatório
function generateRandomVerse() {
    const randomIndex = Math.floor(Math.random() * versiculos.length);
    const randomVerse = versiculos[randomIndex];

    // Atualize o conteúdo do versículo e da referência
    verseElement.textContent = randomVerse.texto;
    verseReferenceElement.textContent = `${randomVerse.livro} ${randomVerse.capitulo}:${randomVerse.versiculo} - ${randomVerse.versao}`;
}

// Gere um versículo aleatório ao carregar a página
generateRandomVerse();

// Redirecionar para o perfil do Instagram ao clicar no link
const instagramLink = document.querySelector('.instagram');
instagramLink.addEventListener('click', function () {
    window.open(instagramLink.getAttribute('href'), '_blank');
});
