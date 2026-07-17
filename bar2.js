
function mostrarOcultarInfo() {
    const panel = document.getElementById("panel-secreto");
    const icono = document.getElementById("icono-barra");

    if (panel.style.display === "none") {
        panel.style.display = "block";
        icono.innerText = "[-]";
    } else {
        panel.style.display = "none";
        icono.innerText = "[+]";
    }
}