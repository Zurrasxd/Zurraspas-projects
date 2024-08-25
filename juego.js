// Función para cargar y mostrar contenido dinámicamente
function cargarContenido(url) {
    fetch(url)
        .then(response => response.text())
        .then(data => {
            document.body.innerHTML = data;
            // Reasignar los event listeners después de cargar el contenido
            if (url.includes('juego')) {
                inicializarJuego();
            } else if (url.includes('instrucciones')) {
                asignarEventosInstrucciones();
            }
        });
}

function iniciarModoVSBot() {
    cargarContenido('juego-vsbot.html');
}

function iniciarModo1vs1() {
    cargarContenido('juego-1vs1.html');
}

function mostrarInstrucciones() {
    cargarContenido('instrucciones.html');
}

function inicializarJuego() {
    let puntosAtacante = 0;
    let puntosDefensor = 0;
    let resumenRondas = [];
    let ataques = [];
    let defensas = [];
    let modoJuego = ''; // 'vsBot' o '1vs1'

    // Aquí colocas todo el código relacionado con el juego como antes

    // Ejemplo de funciones existentes:
    function reiniciarJuego() {
        // Código para reiniciar el juego
    }
    
    // Funciones adicionales para manejar el juego
}

function asignarEventosInstrucciones() {
    document.getElementById('volverAlMenu').onclick = function() {
        location.reload();
    };
}
