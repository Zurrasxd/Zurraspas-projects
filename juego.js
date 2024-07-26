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
    document.getElementById('menu').style.display = 'none';
    document.getElementById('juego').style.display = 'block';
    document.getElementById('ataque').style.display = 'block';
    document.getElementById('defensa').style.display = 'none';
    document.getElementById('eleccionesAtaque').innerHTML = '';
    document.getElementById('resultado').innerHTML = '';
}

function elegirAtaque(eleccion) {
    ataques.push(eleccion);
    mostrarEleccionesAtaque();
    
    if (ataques.length === 5) {
        document.getElementById('ataque').style.display = 'none';
        document.getElementById('eleccionesAtaque').style.display = 'none';
        if (modoJuego === 'vsBot') {
            iniciarDefensaBot(0);
        } else {
            document.getElementById('defensa').style.display = 'block';
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
    }
}

function comparar(ataque, defensa) {
    if (ataque === defensa) {
        resumenRondas.push(`Ronda ${resumenRondas.length + 1}: <span class="rojo">¡Puntos para el defensor!</span>`);
        puntosDefensor++;
    } else {
        resumenRondas.push(`Ronda ${resumenRondas.length + 1}: <span class="verde">¡Puntos para el atacante!</span>`);
        puntosAtacante++;
    }
    actualizarResultadoRonda();
}

function actualizarResultadoRonda() {
    let resultado = `<h2>Resumen de las rondas:</h2>`;
    resumenRondas.forEach(linea => {
        resultado += `${linea}<br>`;
    });
    document.getElementById('resultado').innerHTML = resultado;
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
    document.getElementById('defensa').style.display = 'none';
}

function mostrarInstrucciones() {
    document.getElementById('instrucciones').style.display = 'block';
    document.getElementById('menu').style.display = 'none';
}

function ocultarInstrucciones() {
    document.getElementById('instrucciones').style.display = 'none';
    document.getElementById('menu').style.display = 'block';
}
