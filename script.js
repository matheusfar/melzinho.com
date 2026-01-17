// ===== GALERIA =====
const galeriaImagens = [
    'imagens/foto1.jpeg',
    'imagens/foto2.jpeg',
    'imagens/foto3.jpeg',
    'imagens/foto4.jpeg',
    'imagens/foto5.jpeg',
    'imagens/foto6.jpeg',
    'imagens/foto7.jpeg',
    'imagens/foto8.jpeg',
    'imagens/foto9.jpeg',
    'imagens/foto10.jpeg',
    'imagens/foto11.jpeg',
    'imagens/foto12.jpeg',
    'imagens/foto13.jpeg',
    'imagens/foto14.jpeg',
    'imagens/foto15.jpeg',
    'imagens/foto16.jpeg',
    'imagens/foto17.jpeg',
    'imagens/foto18.jpeg',
    'imagens/foto19.jpeg',
    'imagens/foto20.jpeg',
    'imagens/foto21.jpeg',
    'imagens/foto22.jpeg',
    'imagens/foto23.jpeg',
    'imagens/foto24.jpeg',
    'imagens/foto25.jpeg',
    'imagens/foto26.jpeg',
    'imagens/foto27.jpeg',
    'imagens/foto28.jpeg',
    'imagens/foto29.jpeg',
    'imagens/foto30.jpeg',
];

const fotos = document.getElementById('fotos-container');

galeriaImagens.forEach(img => {
    const i = document.createElement('img');
    i.src = img;
    i.className = 'foto';
    fotos.appendChild(i);
});


// ===== RECADOS =====
const formRecado = document.getElementById('form-recado');
const textoRecado = document.getElementById('texto-recado');
const listaRecados = document.getElementById('lista-recados');

let recados = JSON.parse(localStorage.getItem('recados')) || [];

function carregarRecados() {
    listaRecados.innerHTML = '';

    recados.forEach((r, i) => {
        const div = document.createElement('div');
        div.className = 'recado';
        div.textContent = r;

        div.addEventListener('click', () => {
            if (confirm('Apagar este recado? 💔')) {
                recados.splice(i, 1);
                localStorage.setItem('recados', JSON.stringify(recados));
                carregarRecados();
            }
        });

        listaRecados.appendChild(div);
    });
}

formRecado.addEventListener('submit', e => {
    e.preventDefault();

    if (!textoRecado.value.trim()) return;

    recados.push(textoRecado.value);
    localStorage.setItem('recados', JSON.stringify(recados));
    textoRecado.value = '';
    carregarRecados();
});

carregarRecados();


// ===== CAPIVARA =====
const capivara = document.getElementById('capivara-container');
const balao = document.getElementById('balao-fala');
const som = document.getElementById('som-capivara');

const frases = [
    'Oi mamãe 💖',
    'Eu te amo 🥰',
    'O papai te ama muito 💕',
    'Te amo mil milhões 💖',
    'Desculpa, o papai 😔'
];

capivara.addEventListener('click', () => {
    balao.textContent = frases[Math.floor(Math.random() * frases.length)];
    balao.style.display = 'block';
    som.currentTime = 0;
    som.play();
    setTimeout(() => balao.style.display = 'none', 6000);
});


// ===== CORAÇÕES INTERATIVOS =====
setInterval(() => {
    const c = document.createElement('div');
    c.className = 'coracao';
    c.innerHTML = '💖';
    c.style.left = Math.random() * 100 + 'vw';
    document.body.appendChild(c);

    c.addEventListener('click', () => {
        c.innerHTML = '✨';
        setTimeout(() => c.remove(), 300);
    });

    setTimeout(() => c.remove(), 6000);
}, 1000);


// ===== BOTÕES (CORREÇÃO PRINCIPAL) =====
const botaoWhatsapp = document.getElementById('botao-whatsapp');
const botaoEmail = document.getElementById('botao-email');

botaoWhatsapp.addEventListener('click', () => {
    window.open(
        'https://wa.me/5533999146170?text=' +
        encodeURIComponent('Oi mamãe 💖 vim pelo site fofo')
    );
});

botaoEmail.addEventListener('click', () => {
    window.location.href =
        'mailto:matheusf.ar@hotmail.com?subject=Mensagem do site 💕&body=Oi mamãe 💖';
});
