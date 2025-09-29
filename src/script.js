/* Carrossel */
let contador = 1;
document.getElementById("radio1").checked = true;

setInterval(function(){
    nextImage();
}, 4000);

function nextImage(){
    contador++;
    if(contador>4){
        contador=1;
    }
    document.getElementById("radio"+contador).checked = true;
}

/* Modal */
const banco_de_dados = [
    {
        id: "demon_slayer",
        titulo: "Demon Slayer",
        ano: "2025",
        genero: "Animação, Ação, Aventura",
        sinopse: "Após ter sua família massacrada e sua irmã transformada em demônio, um jovem bondoso jura se tornar um caçador de demônios para vingar os seus e encontrar uma cura.",
        imagem: "imagens/demonslayer.jpg",
    },
    {
        id: "invocacao_do_mal",
        titulo: "Invocação do Mal 4",
        ano: "2025",
        genero: "Terror",
        sinopse: "No capítulo final da saga, os investigadores paranormais Ed e Lorraine Warren enfrentam seu caso mais aterrorizante em uma batalha definitiva contra o mal que ameaça suas próprias vidas.",
        imagem: "imagens/InvocacaodoMal.jpg",
    },
    {
        id: "animais_perigosos",
        titulo: "Animais Perigosos",
        ano: "2025",
        genero: "Terror",
        sinopse: "equestrada por um serial killer e presa em um barco, uma surfista precisa lutar por sua vida para não se tornar a próxima refeição de tubarões famintos.",
        imagem: "imagens/AnimaisPerigosos.jpg",
    },
    {
        id: "grande_viagem",
        titulo: "A Grande Viagem da Sua Vida",
        ano: "2025",
        genero: "Drama",
        sinopse: "Dois estranhos se conhecem em um casamento e embarcam juntos em uma jornada fantástica, na qual revivem momentos do passado para entender o presente e talvez alterar o futuro.",
        imagem: "imagens/ABigBoldBeautifulJourney.jpg",
    },
    {
        id: "voz_do_silencio",
        titulo: "A Voz do Silêncio",
        ano: "2016",
        genero: "Animação, Drama",
        sinopse: "Um jovem busca redenção ao tentar se reconectar com a garota surda que ele aterrorizou na infância, forçando ambos a confrontar as dolorosas cicatrizes do passado.",
        imagem: "imagens/AVozdoSilencio.jpg",
    },
    {
        id: "clube_luta",
        titulo: "Clube da Luta",
        ano: "1999",
        genero: "Ação, Comédia, Drama",
        sinopse: "Um homem de escritório insone, procurando uma maneira de sentir algo, cria um clube de luta clandestino com um estranho carismático, apenas para descobrir que seu novo amigo e o movimento que eles criaram são muito mais do que parecem.",
        imagem: "imagens/ClubeDaLuta.jpg"
    },
    {
        id: "eeaao",
        titulo: "Tudo em Todo Lugar ao Mesmo Tempo",
        ano: "2022",
        genero: "Ação, Comédia, Drama",
        sinopse: "Uma imigrante chinesa parte rumo a uma aventura onde, sozinha, precisará salvar o mundo, explorando outros universos e outras vidas que poderia ter vivido. Contudo, as coisas se complicam quando ela fica presa nessa infinidade de possibilidades sem conseguir retornar para casa.",
        imagem: "imagens/TudoEmTodoLugarAoMesmoTempo.jpg",
    },
    {
        id: "cidade_de_deus",
        titulo: "Cidade de Deus",
        ano: "2002",
        genero: "Crime, Drama",
        sinopse: "Os caminhos de duas crianças divergem nas favelas do Rio, enquanto um se esforça para se tornar um fotógrafo e o outro um chefe do tráfico.",
        imagem: "imagens/cidadededeus.jpg",
    },
    {
        id: "morte_morte",
        titulo: "Morte Morte Morte",
        ano: "2022",
        genero: "Terror, Comédia",
        sinopse:"Quando um grupo de jovens ricos planeja uma festança em uma mansão familiar remota, uma brincadeira dá muito errado neste filme sobre traições, amigos falsos e uma festa que termina muito, muito mal!",
        imagem: "imagens/mortemortemorte.jpg",
    },
    {
        id: "garota_seculoxx",
        titulo: "Garota do Século XX",
        ano: "2022",
        genero: "Romance, Comédia",
        sinopse: "O ano é 1999 e uma adolescente começa a monitorar o garoto pelo qual a melhor amiga está apaixonada. Tudo vai bem até que um outro amor começa a dar as caras.",
        imagem: "imagens/garotadoseculoxx.jpg",
    },
    {
        id: "walter_mitty",
        titulo: "A Vida Secreta de Walter Mitty",
        ano: "2013",
        genero: "Aventura, Comédia",
        sinopse: "O tímido Walter Mitty está sempre sonhando acordado para escapar da sua vida monótona, mas uma aventura muito real prova que ser herói não é tão fácil quanto parece.",
        imagem: "imagens/thesecretlifeofwaltermitty.jpg",
    },
    {
        id: "ilha_cachorros",
        titulo: "A Ilha dos Cachorros",
        ano: "2018",
        genero: "Animação, Ação, Aventura",
        sinopse: "Quando todos os cães da cidade de Megasaki são exilados para a enorme Ilha do Lixo, um rapaz de 12 anos, Atari, inicia uma viagem épica em busca do seu cão de guarda, o Spots.",
        imagem: "imagens/ilhadoscachorros.jpg",
    },
    {
        id: "verao_mudou_vida",
        titulo: "O Verão que Mudou a Minha Vida",
        ano: "2022",
        genero: "Drama, Romance",
        sinopse: "Belly Conklin está prestes a completar 16 anos e está indo para seu lugar favorito no mundo, Cousin Beach, para passar o verão com sua família e os Fishers. Belly cresceu muito no ano passado e tem a sensação de que este verão será diferente de todos os verões anteriores.",
        imagem: "imagens/thesummeriturnedpretty.jpg",
    },
    {
        id: "wandinha",
        titulo: "Wandinha",
        ano: "2022",
        genero: "Fantasia, Terror",
        sinopse: "Inteligente, sarcástica e meio morta por dentro. Wandinha Addams investiga uma onda de assassinatos e aproveita para fazer novos amigos e inimigos na Escola Nunca Mais.",
        imagem: "imagens/wandinha.jpg",
    },
    {
        id: "only_murders",
        titulo: "Only Murders in the Building",
        ano: "2021",
        genero: "Drama, Mistério",
        sinopse: "Três vizinhos obcecados por podcasts de crimes reais decidem criar o seu próprio programa para investigar um assassinato misterioso que aconteceu em seu prédio de luxo em Nova York, descobrindo que o assassino pode ser um de seus moradores.",
        imagem: "imagens/onlymurdersinthebuilding.jpg",
    },
    {
        id: "walter_boys",
        titulo: "Minha Vida com a Família Walter",
        ano: "2023",
        genero: "Romance, Drama",
        sinopse: "Uma tragédia transforma a vida de uma adolescente. E agora ela tem que morar em uma cidadezinha com a família da tutora, onde aprende sobre amor, esperança e amizade.",
        imagem: "imagens/mylifewiththewalterboys.jpg",
    },
    {
        id: "dexter",
        titulo: "Dexter",
        ano: "2006",
        genero: "Drama, Policial",
        sinopse: "De dia, o pacato Dexter trabalha como analista de manchas de sangue para a polícia de Miami. À noite, ele é um assassino em série cujo alvo são outros assassinos.",
        imagem: "imagens/dexter.jpg",
    },
    {
        id: "breaking_bad",
        titulo: "Breaking Bad",
        ano: "2008",
        genero: "Drama, Suspense",
        sinopse: "Ao saber que tem câncer, um professor passa a fabricar metanfetamina pelo futuro da família, mudando o destino de todos.",
        imagem: "imagens/breakingbad.jpg",
    },
    {
        id: "prison_break",
        titulo: "Prison Break",
        ano: "2005",
        genero: "Drama, Suspense",
        sinopse: "Quando seu irmão é condenado erroneamente pela morte do irmão de um político poderoso, o engenheiro Michael Scofield decide retirar à força seu irmão inocente da cadeia.",
        imagem: "imagens/prisonbreak.jpg",
    },
    {
        id: "himym",
        titulo: "How I Met Your Mother",
        ano: "2005",
        genero: "Comédia, Romance",
        sinopse: "A épica busca de Ted por sua alma gêmea é contada através de recordações, quando ele conta aos filhos como conheceu a mãe deles.",
        imagem: "imagens/howimetyourmother.jpg",
    },
    {
        id: "love101",
        titulo: "Love 101",
        ano: "2020",
        genero: "Drama",
        sinopse: "Ao tentarem unir uma professora e um treinador de basquete, quatro jovens problemáticos e uma aluna modelo descobrem a amizade, o amor e a coragem de serem eles mesmos.",
        imagem: "imagens/love101.jpg",
    },
    {
        id: "luther",
        titulo: "Luther",
        ano: "2010",
        genero: "Policial, Suspense",
        sinopse: "O detetive John Luther é um gênio investigando assassinatos; mas sua mente brilhante nem sempre pode salvá-lo da violência perigosa de suas paixões.",
        imagem: "imagens/luther.jpg",
    },
    {
        id: "for_all_mankind",
        titulo: "For All Mankind",
        ano: "2019",
        genero: "Drama, Ficção Científica",
        sinopse: "Imagine um mundo em que a corrida espacial global nunca chegou ao fim. Essa série dramática de Ronald D. Moore (Outlander, Battlestar Galactica) conta a história das vidas de alto risco dos astronautas da NASA e de suas famílias.",
        imagem: "imagens/forallmankind.jpg",
    },
    {
        id: "yellowjackets",
        titulo: "Yellowjackets",
        ano: "2021",
        genero: "Drama, Terror",
        sinopse: "Esta é a história de um time de jogadoras de futebol do ensino médio que sobrevivem a um acidente de avião. A série narra a transformação de um grupo complexo, mas próspero, ao mesmo tempo em que acompanha as vidas das sobreviventes anos depois.",
        imagem: "imagens/yellowjackt.jpg",
    }
];

const posters = document.querySelectorAll('.poster');
const modalContainer = document.getElementById('modal_container');
const modal = document.getElementById('modal');
const modalTitulo = document.getElementById('modal_titulo');
const modalAno = document.getElementById('modal_ano');
const modalGenero = document.getElementById('modal_genero');
const modalSinopse = document.getElementById('modal_sinopse');
const modalImagem = document.getElementById('modal_imagem');

posters.forEach(poster => {
    poster.addEventListener('click', () => {
        const posterId = poster.id;

        const dados = banco_de_dados.find(item => item.id === posterId);
        
        modalTitulo.textContent = dados.titulo;
        modalAno.textContent = "Ano: " + dados.ano;
        modalGenero.textContent = "Gênero: " + dados.genero;
        modalSinopse.textContent = dados.sinopse;
        modalImagem.src = dados.imagem;

        modalContainer.classList.add('active');
        document.body.classList.add("aberto");
    });
});

const botaoFechar = document.querySelector('.fechar');

const fecharModal = () => {
    modalContainer.classList.remove('active');
    document.body.classList.remove("aberto");
};
botaoFechar.addEventListener('click', fecharModal);

modalContainer.addEventListener('click', (event) => {
    if (event.target === modalContainer) {
        fecharModal();
    }
});

/* Hamburguer */
const hamburguerButton = document.getElementById("hamburguerButton");
const closeButton = document.getElementById("closeButton");
const mobileMenu = document.getElementById("mobileMenu");


hamburguerButton.addEventListener('click', function() {
    mobileMenu.style.display = 'flex';
});

closeButton.addEventListener('click', function() {
    mobileMenu.style.display = 'none';
});