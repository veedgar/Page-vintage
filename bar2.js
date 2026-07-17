// ... (Aquí arriba está tu código de las imágenes creepypasta) ...

// NUEVA FUNCIÓN PARA EL ASIDE
function mostrarOcultarInfo() {
    // Buscamos el panel y el icono [+] en el HTML
    const panel = document.getElementById("panel-secreto");
    const icono = document.getElementById("icono-barra");

    // Si el panel está oculto, lo mostramos y cambiamos el icono a [-]
    if (panel.style.display === "none") {
        panel.style.display = "block";
        icono.innerText = "[-]";
    } else {
        // Si el panel está visible, lo ocultamos y regresamos el icono a [+]
        panel.style.display = "none";
        icono.innerText = "[+]";
    }
}