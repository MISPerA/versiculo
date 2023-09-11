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
    {
        versao: "NVT",
        livro: "Filipenses",
        capitulo: 4,
        versiculo: 6,
        texto: "Não fiquem ansiosos por motivo algum; pelo contrário, orem a Deus em todos os momentos e peçam a ele tudo o que vocês precisam, agradecendo-lhe por tudo."
    },
    {
        versao: "NVT",
        livro: "Filipenses",
        capitulo: 4,
        versiculo: 8,
        texto: "Por fim, meus irmãos e irmãs, encham a mente de vocês com tudo o que é verdadeiro, nobre, respeitável, certo, puro, adorável e de boa fama; se houver virtude e se algo for digno de louvor, pensem nessas coisas."
    },
    {
        versao: "NVT",
        livro: "João",
        capitulo: 3,
        versiculo: 16,
        texto: "Pois Deus amou o mundo de tal maneira que deu seu Filho único, para que todo aquele que nele crer não pereça, mas tenha a vida eterna."
    },
    {
        versao: "NVT",
        livro: "Efésios",
        capitulo: 6,
        versiculo: 11,
        texto: "Vistam toda a armadura de Deus, para poderem ficar firmes contra as ciladas do Diabo."
    },
    {
        versao: "NVT",
        livro: "Efésios",
        capitulo: 5,
        versiculo: 1,
        texto: "Portanto, imitem a Deus, como filhos muito amados."
    },
    {
        versao: "NVT",
        livro: "Efésios",
        capitulo: 5,
        versiculo: 2,
        texto: "Vivam em amor, seguindo o exemplo de Cristo, que nos amou e se entregou por nós como oferta e sacrifício de aroma agradável a Deus."
    },
    {
        versao: "NVT",
        livro: "Efésios",
        capitulo: 5,
        versiculo: 19,
        texto: "cantem uns para os outros salmos, hinos e canções espirituais; louvem o Senhor de todo o coração."
    },
    {
        versao: "NVT",
        livro: "Efésios",
        capitulo: 5,
        versiculo: 20,
        texto: "e, em nome de nosso Senhor Jesus Cristo, agradeçam constantemente a Deus, o Pai, por todas as coisas."
    },
    {
        versao: "NVT",
        livro: "João",
        capitulo: 8,
        versiculo: "31-32",
        texto: "Disse, pois, Jesus aos judeus que haviam crido nele: Se vós permanecerdes na minha palavra, verdadeiramente sereis meus discípulos; e conhecereis a verdade, e a verdade vos libertará."
    },
    {
        versao: "NVT",
        livro: "João",
        capitulo: 8,
        versiculo: 11,
        texto: "E ela disse: Ninguém, Senhor. Então, lhe disse Jesus: Nem eu tampouco te condeno; vai e não peques mais."
    },
    {
        versao: "NVT",
        livro: "Mateus",
        capitulo: 6,
        versiculo: "33-34",
        texto: "Busquem, pois, em primeiro lugar o Reino de Deus e a sua justiça, e todas essas coisas lhes serão acrescentadas. Portanto, não se preocupem com o amanhã, pois o amanhã se preocupará consigo mesmo. Basta a cada dia o seu próprio mal."
    },
    // Adicione mais versículos aqui
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
