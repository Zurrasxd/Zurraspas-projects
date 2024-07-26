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
    juegoDiv.style.opacity = 0;
    setTimeout(() => {
        juegoDiv.style.display = 'block';
        juegoDiv.style.opacity = 1;
    }, 500);
    document.getElementById('ataque').classList.add('show');
    document.getElementById('defensa').classList.remove('show');
}

function elegirAtaque(eleccion) {
    ataque = eleccion;
    document.getElementById('ataque').classList.remove('show');
    setTimeout(() => {
        if (modoJuego === 'vsBot') {
            defensa = obtenerDefensaAleatoria();
            comparar(defensa);
        } else {
            document.getElementById('defensa').classList.add('show');
        }
    }, 500); // Tiempo de transición de 0.5s
}

function obtenerDefensaAleatoria() {
    const opciones = ['arriba', 'medio', 'abajo'];
    return opciones[Math.floor(Math.random() * opciones.length)];
}

function elegirDefensa(eleccion) {
    defensa = eleccion;
    document.getElementById('defensa').classList.remove('show');
    setTimeout(() => {
        comparar(defensa);
    }, 500); // Tiempo de transición de 0.5s
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
        setTimeout(() => {
            document.getElementById('ataque').classList.add('show');
            document.getElementById('defensa').classList.remove('show');
        }, 500); // Tiempo de transición de 0.5s
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
