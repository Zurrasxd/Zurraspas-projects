let puntosAtacante = 0;
let puntosDefensor = 0;
let resumenRondas = [];
let ataque = '';
let defensa = '';

function iniciarJuego() {
    puntosAtacante = 0;
    puntosDefensor = 0;
    resumenRondas = [];
    document.getElementById('juego').style.display = 'block';
    document.getElementById('ataque').style.display = 'block';
    document.getElementById('defensa').style.display = 'none';
}

function elegirAtaque(eleccion) {
    ataque = eleccion;
    document.getElementById('ataque').style.display = 'none';
    document.getElementById('defensa').style.display = 'block';
}

function elegirDefensa(eleccion) {
    defensa = eleccion;
    document.getElementById('defensa').style.display = 'none';
    
    // Comparar ataque y defensa
    comparar(eleccion);
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
        document.getElementById('ataque').style.display = 'block';
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
