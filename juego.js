// Variables globales para almacenar las elecciones
let eleccionesAtaque = [];
let eleccionesDefensa = [];

// Función para iniciar el modo VS Bot
function iniciarModoVSBot() {
    // Implementa la lógica para el modo VS Bot
    document.getElementById('juego').classList.remove('oculto');
    document.getElementById('ataque').classList.remove('oculto');
    document.getElementById('defensa').classList.add('oculto');
    document.getElementById('mensaje').classList.add('oculto'); // Oculta el mensaje
}

// Función para iniciar el modo 1vs1
function iniciarModo1vs1() {
    // Implementa la lógica para el modo 1vs1
    document.getElementById('juego').classList.remove('oculto');
    document.getElementById('ataque').classList.remove('oculto');
    document.getElementById('defensa').classList.add('oculto');
    document.getElementById('mensaje').classList.add('oculto'); // Oculta el mensaje
}

// Función para elegir un ataque
function elegirAtaque(posicion) {
    eleccionesAtaque.push(posicion);
    // Desplegar el menú de defensa
    document.getElementById('ataque').classList.add('oculto');
    document.getElementById('defensa').classList.remove('oculto');
}

// Función para elegir una defensa
function elegirDefensa(posicion) {
    eleccionesDefensa.push(posicion);

    // Lógica para comprobar si hay acierto o fallo
    const ultimaEleccionAtaque = eleccionesAtaque[eleccionesAtaque.length - 1];
    const acierto = eleccionesDefensa.includes(ultimaEleccionAtaque);

    // Mostrar mensaje
    const mensaje = document.getElementById('mensaje');
    mensaje.classList.remove('oculto');
    mensaje.textContent = acierto ? '¡Acierto!' : 'Fallo';
    mensaje.classList.add(acierto ? 'acierto' : 'fallo');

    // Ocultar el menú de defensa
    document.getElementById('defensa').classList.add('oculto');
}
