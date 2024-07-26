let puntosAtacante = 0;
let puntosDefensor = 0;
let resumenRondas = [];

function iniciarJuego() {
    puntosAtacante = 0;
    puntosDefensor = 0;
    resumenRondas = [];
    jugar(1);
}

function jugar(ronda) {
    if (ronda > 5) {
        mostrarResumen();
        return;
    }

    const ataque = prompt("Atacante, elige un número del 1 al 3:");
    const defensa = prompt("Defensor, elige un número del 1 al 3:");

    if (ataque < 1 || ataque > 3 || defensa < 1 || defensa > 3) {
        alert("Número inválido. Intenta nuevamente.");
        jugar(ronda);
        return;
    }

    if (ataque == defensa) {
        resumenRondas.push(`Ronda ${ronda}: <span class="rojo">¡Puntos para el defensor!</span>`);
        puntosDefensor++;
    } else {
        resumenRondas.push(`Ronda ${ronda}: <span class="verde">¡Puntos para el atacante!</span>`);
        puntosAtacante++;
    }

    jugar(ronda + 1);
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
