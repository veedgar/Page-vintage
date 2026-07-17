// 1. Pon aquí tu llave (API Key) entre las comillas
const miApiKey = "b9a5083b165503bdae40599c6ef2ab42"; 

// 2. Elegimos la ciudad por defecto
const ciudad = "Maturin"; 

// 3. Armamos la ruta exacta a la que le pediremos los datos
// (Le decimos que queremos el sistema métrico para los °C y el idioma en español)
const urlAPI = `https://api.openweathermap.org/data/2.5/weather?q=${ciudad}&appid=${miApiKey}&units=metric&lang=es`;

// 4. Hacemos la llamada a la API
function obtenerClima() {
    fetch(urlAPI)
        .then(respuesta => respuesta.json()) // Convertimos la respuesta a formato JSON
        .then(datos => {
            // Extraemos la temperatura (y la redondeamos para no tener decimales largos)
            const temperatura = Math.round(datos.main.temp);
            // Extraemos la descripción (ej: "nubes rotas", "lluvia ligera")
            const descripcion = datos.weather[0].description;
            
            // Inyectamos los datos en nuestro HTML
            document.getElementById("clima-temp").innerText = `${temperatura}°C`;
            document.getElementById("clima-desc").innerText = descripcion.toUpperCase();
        })
        .catch(error => {
            console.error("Error al buscar el clima:", error);
            document.getElementById("clima-desc").innerText = "Error de conexión";
        });
}

// Ejecutamos la función apenas cargue la página
obtenerClima();