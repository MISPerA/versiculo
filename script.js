// Lista de versículos bíblicos (substitua com seus próprios versículos)
const versiculos = [
{
        versao: "NVT",
        livro: "João",
        capitulo: 3,
        versiculo: 16,
        texto: "13- \"Porque Deus amou tanto o mundo que deu seu Filho único, para que todo o que nele crer não pereça, mas tenha a vida eterna."
    },
    {
        versao: "NVT",
        livro: "Salmo",
        capitulo: 23,
        versiculo: 1,
        texto: "1- O Senhor é meu pastor, e nada me faltará."
    },
    {
        versao: "NVT",
        livro: "Filipenses",
        capitulo: 4,
        versiculo: 13,
        texto: "13- Posso todas as coisas por meio de Cristo, que me dá forças."
    },
    {
        versao: "NVT",
        livro: "Filipenses",
        capitulo: 4,
        versiculo: 6,
        texto: "6- Não vivam preocupados com coisa alguma; em vez disso, orem a Deus pedindo aquilo de que precisam e agradecendo-lhe por tudo que ele já fez."
    },
    {
        versao: "NVT",
        livro: "Filipenses",
        capitulo: 4,
        versiculo: 8,
        texto: "8- Por fim, irmãos, quero lhes dizer só mais uma coisa. Concentrem-se em tudo que é verdadeiro, tudo que é nobre, tudo que é correto, tudo que é puro, tudo que é amável e tudo que é admirável. Pensem no que é excelente e digno de louvor."
    },
    {
        versao: "NVT",
        livro: "Efésios",
        capitulo: 6,
        versiculo: 11,
        texto: "11- Vistam toda a armadura de Deus, para que possam permanecer firmes contra as estratégias do diabo."
    },
    {
        versao: "NVT",
        livro: "Efésios",
        capitulo: 5,
        versiculo: 1,
        texto: "1- Portanto, como filhos amados de Deus, imitem-no em tudo que fizerem."
    },
    {
        versao: "NVT",
        livro: "Efésios",
        capitulo: 5,
        versiculo: 2,
        texto: "2- Vivam em amor, seguindo o exemplo de Cristo, que nos amou e se entregou por nós como oferta e sacrifício de aroma agradável a Deus."
    },
    {
        versao: "NVT",
        livro: "Efésios",
        capitulo: 5,
        versiculo: 19,
        texto: "19- cantando salmos, hinos e cânticos espirituais entre si e louvando o Senhor de coração com música."
    },
    {
        versao: "NVT",
        livro: "Efésios",
        capitulo: 5,
        versiculo: 20,
        texto: "20- Por tudo deem graças a Deus, o Pai, em nome de nosso Senhor Jesus Cristo."
    },
    {
        versao: "NVT",
        livro: "João",
        capitulo: 8,
        versiculo: "31-32",
        texto: "31- Jesus disse aos judeus que creram nele: \"Vocês são verdadeiramente meus discípulos se permanecerem fiéis a meus ensinamentos. \n32- Então conhecerão a verdade, e a verdade os libertará\"."
    },
    {
        versao: "NVT",
        livro: "João",
        capitulo: 8,
        versiculo: 11,
        texto: "11- \"Não, Senhor\", respondeu ela. E Jesus disse: \"Eu também não a condeno. Vá e não peque mais\"."
    },
    {
        versao: "NVT",
        livro: "Mateus",
        capitulo: 6,
        versiculo: "33-34",
        texto: "33- Busquem, em primeiro lugar, o reino de Deus e a sua justiça, e todas essas coisas lhes serão dadas. \n34- \"Portanto, não se preocupem com o amanhã, pois o amanhã trará suas próprias inquietações. Bastam para hoje os problemas deste dia\"."
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
