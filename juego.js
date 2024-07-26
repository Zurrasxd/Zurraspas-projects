// Variables globales para almacenar las elecciones
let eleccionesAtaque = [];
let eleccionesDefensa = [];
let ronda = 0; // Contador de rondas del atacante

// Función para iniciar el modo VS Bot
function iniciarModoVSBot() {
    // Ocultar el menú y mostrar el área del juego
    document.getElementById('menu').classList.add('oculto');
    document.getElementById('juego').classList.remove('oculto');
    document.getElementById('ataque').classList.remove('oculto');
    document.getElementById('defensa').classList.add('oculto');
    document.getElementById('mensaje').classList.add('oculto'); // Ocultar el mensaje
}

// Función para iniciar el modo 1vs1
function iniciarModo1vs1() {
    // Ocultar el menú y mostrar el área del juego
    document.getElementById('menu').classList.add('oculto');
    document.getElementById('juego').classList.remove('oculto');
    document.getElementById('ataque').classList.remove('oculto');
    document.getElementById('defensa').classList.add('oculto');
    document.getElementById('mensaje').classList.add('oculto'); // Ocultar el mensaje
}

// Función para elegir un ataque
function elegirAtaque(posicion) {
    if (ronda < 5) {
        eleccionesAtaque.push(posicion);
        ronda++;
        // Si se han completado las 5 rondas, ocultar el menú de ataque y mostrar el de defensa
        if (ronda === 5) {
            document.getElementById('ataque').classList.add('oculto');
            document.getElementById('defensa').classList.remove('oculto');
            ronda = 0; // Reiniciar el contador para la próxima ronda
        }
    }
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

    // Ocultar el mensaje después de 2 segundos (2000 milisegundos)
    setTimeout(() => {
        mensaje.classList.add
