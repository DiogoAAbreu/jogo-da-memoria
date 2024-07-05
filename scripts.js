let qtdCartas = 0;
let cartasExibidas = [].sort();
let gifs = ['bobrossparrot', 'explodyparrot', 'fiestaparrot', 'metalparrot', 'revertitparrot', 'tripletsparrot', 'unicornparrot']
let num = [1, 2, 3, 4, 5];


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
    const viradas = document.querySelectorAll('.virado');
    if (viradas.length < 2) {
        const frente = elemento.querySelector('.frente');
        frente.parentNode.classList.toggle('virado');
        console.log(viradas)
    }

}
function removerCartas() {
    const viradas = document.querySelectorAll('.virado');
    console.log(viradas);
}

function comparador() {
    return Math.random() - 0.5;
}
quantidadesDeCartas();
colocarCartas();
removerCartas()