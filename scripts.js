let qtdCartas = 0;
let cartasExibidas = [].sort();
let gifs = ['bobrossparrot', 'explodyparrot', 'fiestaparrot', 'metalparrot', 'revertitparrot', 'tripletsparrot', 'unicornparrot']
let cartasViradas = [];
let jogadas = 0;



function quantidadesDeCartas() {
    qtdCartas = Number(prompt('Com quantas cartas deseja jogar?'));
    while (qtdCartas % 2 !== 0 || qtdCartas < 4 || qtdCartas > 14 || isNaN(qtdCartas)) {
        qtdCartas = prompt('Digite uma quantidade de cartas par de 4 até 14!')
    }
}

function colocarCartas() {
    const cartas = document.querySelector('.cartas')
    cartas.innerHTML = '';

    for (let i = 0; i < qtdCartas / 2; i++) {
        const carta = `<div class="carta" onclick="virarCarta(this)">
                <img class="frente" src="./img/front.png" alt="">
                <img class="verso" src="./img/${gifs[i]}.gif" alt="">
            </div>`

        cartasExibidas.push(carta);
        cartasExibidas.push(carta);
    }

    cartasExibidas.sort(comparador);

    for (let i = 0; i < cartasExibidas.length; i++) {
        cartas.innerHTML += cartasExibidas[i];
    }

}

function virarCarta(elemento) {
    const elementoVirado = cartasViradas.includes(elemento);
    if (!elementoVirado) {
        if (cartasViradas.length < 2) {
            elemento.classList.add('virado')
            cartasViradas.push(elemento);
        }

        if (cartasViradas.length === 2) {
            const carta1 = cartasViradas[0].querySelector('img.verso').src;
            const carta2 = cartasViradas[1].querySelector('img.verso').src;
            setTimeout(() => {
                if (carta1 !== carta2) {
                    cartasViradas[0].classList.remove('virado');
                    cartasViradas[1].classList.remove('virado');
                    cartasViradas = [];
                } else {
                    cartasViradas = [];
                }
                finalizarJogo();
            }, 1000);
        }
        jogadas++;
    }
}

function finalizarJogo() {
    const viradas = document.querySelectorAll('.virado')
    console.log(viradas.length + 1)
    if (viradas.length === qtdCartas) {
        const text = `VOCÊ GANHOU!!!
     Você terminou o jogo em ${jogadas / 2} jogadas.`
        alert(text);
    }
}
function comparador() {
    return Math.random() - 0.5;
}


quantidadesDeCartas();
colocarCartas();