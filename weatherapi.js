const miApiKey = "b9a5083b165503bdae40599c6ef2ab42"; 

const ciudad = "Maturin"; 

const urlAPI = `https://api.openweathermap.org/data/2.5/weather?q=${ciudad}&appid=${miApiKey}&units=metric&lang=es`;

function obtenerClima() {
    fetch(urlAPI)
        .then(respuesta => respuesta.json()) 
        .then(datos => {
           
            const temperatura = Math.round(datos.main.temp);
            
            const descripcion = datos.weather[0].description;
            
            document.getElementById("clima-temp").innerText = `${temperatura}°C`;
            document.getElementById("clima-desc").innerText = descripcion.toUpperCase();
        })
        .catch(error => {
            console.error("Error al buscar el clima:", error);
            document.getElementById("clima-desc").innerText = "Error de conexión";
        });
}

obtenerClima();
