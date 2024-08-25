let puntosAtacante = 0;
let puntosDefensor = 0;
let resumenRondas = [];
let ataques = [];
let defensas = [];
let modoJuego = ''; // 'vsBot' o '1vs1'

function iniciarModoVSBot() {
    modoJuego = 'vsBot';
    reiniciarJuego();
}

function iniciarModo1vs1() {
    modoJuego = '1vs1';
    reiniciarJuego();
}

function reiniciarJuego() {
    puntosAtacante = 0;
    puntosDefensor = 0;
    resumenRondas = [];
    ataques = [];
    defensas = [];
    
    document.getElementById('menu').classList.add('oculto');
    document.getElementById('juego').classList.remove('oculto');
    document.getElementById('ataque').classList.remove('oculto');
    document.getElementById('defensa').classList.add('oculto');
    document.getElementById('eleccionesAtaque').innerHTML = '';
    document.getElementById('resultado').innerHTML = '';
    document.getElementById('finalButtons').classList.add('oculto');
}

function elegirAtaque(eleccion) {
    ataques.push(eleccion);
    mostrarEleccionesAtaque();
    
    if (ataques.length === 5) {
        document.getElementById('ataque').classList.add('oculto');
        document.getElementById('eleccionesAtaque').classList.add('oculto');
        if (modoJuego === 'vsBot') {
            iniciarDefensaBot(0);
        } else {
            document.getElementById('defensa').classList.remove('oculto');
        }
    }
}

function mostrarEleccionesAtaque() {
    const contenedor = document.getElementById('eleccionesAtaque');
    contenedor.innerHTML = '';
    ataques.forEach(ataque => {
        const div = document.createElement('div');
        div.innerText = ataque;
        contenedor.appendChild(div);
    });
}

function iniciarDefensaBot(indice) {
    if (indice < 5) {
        const defensa = obtenerDefensaAleatoria();
        defensas.push(defensa);
        comparar(ataques[indice], defensa);
        setTimeout(() => iniciarDefensaBot(indice + 1), 1000); // 1 segundo de intervalo
    } else {
        mostrarResumen();
        document.getElementById('finalButtons').classList.remove('oculto');
    }
}

function obtenerDefensaAleatoria() {
    const opciones = ['arriba', 'medio', 'abajo'];
    return opciones[Math.floor(Math.random() * opciones.length)];
}

function elegirDefensa(eleccion) {
    defensas.push(eleccion);
    comparar(ataques[defensas.length - 1], eleccion);

    if (defensas.length === 5) {
        mostrarResumen();
        document.getElementById('finalButtons').classList.remove('oculto');
    }
}

function comparar(ataque
