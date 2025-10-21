let unidadActual = 'celsius'; 

function convertir_temp(){
    const temperaturas = document.getElementById("lista").value
    
    // --- 1. Obtener Elementos y Valores Actuales ---
    
    // Día 1 (hoy)
    const cel_min = document.getElementById("min_temp")
    const cel_max = document.getElementById("max_temp")
    // Leemos el valor actual visible (C o F)
    let min_temp = parseInt(cel_min.textContent); 
    let max_temp = parseInt(cel_max.textContent); 

    // Día 2 (mañana)
    const cel_min_2 = document.getElementById("min_temp_2")
    const cel_max_2 = document.getElementById("max_temp_2")
    let min_temp_2 = parseInt(cel_min_2.textContent);
    let max_temp_2 = parseInt(cel_max_2.textContent);

    // Día 3 (viernes)
    const cel_min_3 = document.getElementById("min_temp_3")
    const cel_max_3 = document.getElementById("max_temp_3")
    let min_temp_3 = parseInt(cel_min_3.textContent);
    let max_temp_3 = parseInt(cel_max_3.textContent);

    // Día 4 (sabado)
    const cel_min_4 = document.getElementById("min_temp_4")
    const cel_max_4 = document.getElementById("max_temp_4")
    let min_temp_4 = parseInt(cel_min_4.textContent);
    let max_temp_4 = parseInt(cel_max_4.textContent);


    // -------------------------------------------------------------
    // 2. Lógica de Conversión (Basada en Estado)
    // -------------------------------------------------------------
    
    // Convertir a Fahrenheit: Solo si se seleccionó F Y la unidad actual es C.
    if (temperaturas == "fahrenheit" && unidadActual == "celsius"){
        console.log("Convirtiendo C a F");
        
        // Fórmula C a F: (C * 1.8) + 32
        
        // Día 1
        cel_min.textContent = Math.round((min_temp * 1.8) + 32) + "°"
        cel_max.textContent = Math.round((max_temp * 1.8) + 32) + "°"
        // Día 2
        cel_min_2.textContent = Math.round((min_temp_2 * 1.8) + 32) + "°"
        cel_max_2.textContent = Math.round((max_temp_2 * 1.8) + 32) + "°"
        // Día 3
        cel_min_3.textContent = Math.round((min_temp_3 * 1.8) + 32) + "°"
        cel_max_3.textContent = Math.round((max_temp_3 * 1.8) + 32) + "°"
        // Día 4
        cel_min_4.textContent = Math.round((min_temp_4 * 1.8) + 32) + "°"
        cel_max_4.textContent = Math.round((max_temp_4 * 1.8) + 32) + "°"
        
        unidadActual = "fahrenheit"; // Actualiza el estado
    }
    
    // Convertir a Celsius: Solo si se seleccionó C Y la unidad actual es F.
    else if (temperaturas == "celsius" && unidadActual == "fahrenheit"){
        console.log("Convirtiendo F a C");
        // Fórmula F a C: (F - 32) / 1.8
        
        // Día 1
        cel_min.textContent = Math.round((min_temp - 32) / 1.8) + "°"
        cel_max.textContent = Math.round((max_temp - 32) / 1.8) + "°"
        // Día 2
        cel_min_2.textContent = Math.round((min_temp_2 - 32) / 1.8) + "°"
        cel_max_2.textContent = Math.round((max_temp_2 - 32) / 1.8) + "°"
        // Día 3
        cel_min_3.textContent = Math.round((min_temp_3 - 32) / 1.8) + "°"
        cel_max_3.textContent = Math.round((max_temp_3 - 32) / 1.8) + "°"
        // Día 4
        cel_min_4.textContent = Math.round((min_temp_4 - 32) / 1.8) + "°"
        cel_max_4.textContent = Math.round((max_temp_4 - 32) / 1.8) + "°"
        
        unidadActual = "celsius"; // Actualiza el estado
    }
}

function esconder() {
    const cookie = document.getElementById("cookies")

    cookie.remove();
}

function loading() {
    alert("Loading weather report...")
}