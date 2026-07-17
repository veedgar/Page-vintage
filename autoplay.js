document.body.addEventListener('click', function() {
    const reproductor = document.getElementById("musica-fondo");
    
    // Si la música está pausada, la reproducimos
    if (reproductor.paused) {
        reproductor.play();
    }
}, { once: true });