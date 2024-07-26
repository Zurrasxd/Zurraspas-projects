let puntosAtacante = 0;
let puntosDefensor = 0;
let resumenRondas = [];
let ataque = '';
let defensa = '';
let modoJuego = ''; // 'vsBot' o '1vs1'

function iniciarModoVSBot() {
    modoJuego = 'vsBot';
    iniciarJuego();
}

function iniciarModo1vs1() {
    modoJuego = '1vs1';
    iniciarJuego();
}

function iniciarJuego() {
    puntosAtacante = 0;
    puntosDefensor = 0;
    resumenRondas = [];
    document.getElementById('menu').style.display = 'none';
    
    let juegoDiv = document.getElementById('juego');
    juegoDiv.style.display = 'block'; // Muestra el área de juego

    // Muestra la sección de ataque y oculta la de defensa
    document.getElementById('ataque').style.display = 'block';
    document.getElementById('defensa').style.display = 'none';
}

function elegirAtaque(eleccion) {
    ataque = eleccion;
    document.getElementById('ataque').style.display = 'none'; // Oculta la sección de ataque
    if (modoJuego === 'vsBot') {
        defensa = obtenerDefensaAleatoria();
        comparar(defensa);
    } else {
        document.getElementById('defensa').style.display = 'block'; // Muestra la sección de defensa
    }
}

function obtenerDefensaAleatoria() {
    const opciones = ['arriba', 'medio', 'abajo'];
    return opciones[Math.floor(Math.random() * opciones.length)];
}

function elegirDefensa(eleccion) {
    defensa = eleccion;
    document.getElementById('defensa').style.display = 'none'; // Oculta la sección de defensa
    comparar(defensa);
}

function comparar(defensa) {
    if (!ataque || !defensa) {
        alert("Por favor, selecciona ataque y defensa.");
        return;
    }

    if (ataque === defensa) {
        resumenRondas.push(`Ronda ${resumenRondas.length + 1}: <span class="rojo">¡Puntos para el defensor!</span>`);
        puntosDefensor++;
    } else {
        resumenRondas.push(`Ronda ${resumenRondas.length + 1}: <span class="verde">¡Puntos para el atacante!</span>`);
        puntosAtacante++;
    }

    if (resumenRondas.length < 5) {
        // Muestra la sección de ataque y oculta la de defensa
        document.getElementById('ataque').style.display = 'block';
        document.getElementById('defensa').style.display = 'none';
    } else {
        mostrarResumen();
    }
}

function mostrarResumen() {
    let resultado = `<h2>Resumen de las rondas:</h2>`;
    resumenRondas.forEach(linea => {
        resultado += `${linea}<br>`;
    });

    resultado += `<h2>Puntos del Atacante: ${puntosAtacante}</h2>`;
    resultado += `<h2>Puntos del Defensor: ${puntosDefensor}</h2>`;

    if (puntosAtacante > puntosDefensor) {
        resultado += `<h2><span class="verde">¡El Atacante gana!</span></h2>`;
    } else if (puntosDefensor > puntosAtacante) {
        resultado += `<h2><span class="rojo">¡El Defensor gana!</span></h2>`;
    } else {
        resultado += `<h2>¡Es un empate!</h2>`;
    }

    document.getElementById('resultado').innerHTML = resultado;
}
