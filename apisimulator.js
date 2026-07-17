const imagenes = [
    "imagenes/Victor-surge-e569f5dc-0425-4d09-a45b-0edd9b0d9478.jpg",
    "imagenes/Gotosleepnds.jpg",
    "imagenes/SmileDog2ndHD.jpg"
];

function cambiarCreepypasta() {
    const numeroAzar = Math.floor(Math.random() * imagenes.length);
    const nuevaImagen = imagenes[numeroAzar];
    document.getElementById("imagen-terror").src = nuevaImagen;
}
