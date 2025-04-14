// Confirmación de conexión
console.log("Conectado correctamente.");

// Función para identificar y mostrar los números pares ingresados por el usuario
function funcionPares() {
    let arrayNumer = prompt("Ingrese números separados por una coma: ");
    let arrayFin = arrayNumer.split(",");
    let arrayResult = [];

    // Filtrar los números pares
    for (let i = 0; i < arrayFin.length; i++) {
        if (arrayFin[i] % 2 == 0) {
            arrayResult.push(arrayFin[i]);
        // console.log(arrayResult.join(" - "));
        }
    }

    // Mostrar resultado
    alert(`Los números pares entre los ingresados son: ${arrayResult.join(" - ")}`);
}
