// El "cerebro" de nuestro botón
// Aquí pones las imágenes que quieras usar
const imagenes = [
    "https://static.wikia.nocookie.net/antagonists/images/5/5a/Victor-surge-e569f5dc-0425-4d09-a45b-0edd9b0d9478.jpg/revision/latest?cb=20240123212603",
    "https://static.wikia.nocookie.net/creepypasta/images/c/c6/Gotosleepnds.jpg/revision/latest?cb=20120802215808&path-prefix=es",
    "https://static.wikia.nocookie.net/creepypasta-biographies/images/1/17/SmileDog2ndHD.jpg/revision/latest?cb=20180801180649"
];

function cambiarCreepypasta() {
    const numeroAzar = Math.floor(Math.random() * imagenes.length);
    const nuevaImagen = imagenes[numeroAzar];
    document.getElementById("imagen-terror").src = nuevaImagen;
}
