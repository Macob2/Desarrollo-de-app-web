console.log("Vinculado correctamente...");
function uno(){
    let nu = parseInt(prompt("ingrese un numero"));
    let n_arr = [];
    let res = 0;

    // Bucle que solicita al usuario los números a sumar
    for(let i = 1; i <= nu; i++){
    // Agrega cada número ingresado al array
    res += i
    n_arr.push(i)
    }
    
// Muestra el resultado de la suma en una alerta
alert(`la suma de los numeros es ${n_arr.join(" - ")}
El resultado es: ${res}`)
}

function dos() {
    let array_dos = [];  // Arreglo para almacenar los números pares
    let numero_p = 200;  // Límite superior

    // Bucle que recorre los números del 1 al 100
    for (let i = 1; i <= numero_p; i++) {
        // Verifica si el número es par
        if (i % 2 === 0) {
            array_dos.push(i);  // Agrega el número par al arreglo
        }
    }

    // Muestra los números pares
    alert(`Los números pares hasta 100 son: ${array_dos.join(" - ")}`);
}
// Función para mostrar los números pares entre un número inicial y un número final
function tres() {
    let array_tres = [];  // Arreglo para almacenar los números pares
    let numero_m = 200;  // Límite superior

    // Bucle que recorre los números del 1 al 100
    for (let i = 1; i <= numero_m; i++) {
        // Verifica si el número es par
        if (i % 2 !== 0) {
            array_tres.push(i);  // Agrega el número par al arreglo
        }
    }

    // Muestra los números pares
    alert(`Los números pares hasta 100 son: ${array_tres.join(" - ")}`);
}     

function cuatro(){
    let n1 = parseInt(prompt("Ingrese un números: "));
    let n2 = parseInt(prompt("Ingrese otro números: "));
    let n3 = parseInt(prompt("Ingrese otro números: "));
    let n4 = parseInt(prompt("Ingrese otro números: "));
    let n5 = parseInt(prompt("Ingrese otro números: "));

    let resultadoCuatro = n1 + n2 + n3 + n4 + n5;

alert("La suma de los numeros ingresados son: " + resultadoCuatro);

}

function cinco(){
    let numer = parseInt(prompt("ingrese cuantos numeros quiere sumar"));
    let nArr = [];
    let resulta = 0;

    // Bucle que solicita al usuario los números a sumar
    for(let i = 1; i <= numer; i++){
    // Agrega cada número ingresado al array
    nArr.push(parseInt(prompt(`Ingrese que numeros quiere sumar: `)));
    }

    // Bucle para sumar todos los números en el array
    for(let i = 0; i < numer; i++){
    resulta += nArr[i]
    }
// Muestra el resultado de la suma en una alerta
alert(`la suma de los numeros es ${resulta}`);
}

//Esta función solicita al usuario dos números y un signo de operación matemática (+, -, *, /)
//Luego, realiza la operación correspondiente según el signo ingresado y muestra el resultado usando una alerta.
function seis(){
    let ingre = parseInt(prompt("ingrese un valor"));
    let ingreD = parseInt(prompt("ingrese otro valor"));
    let resFinalD = ingre / ingreD;
    let resFinalM = ingre * ingreD;
    let resFinalS = ingre + ingreD;
    let resFinalR = ingre - ingreD;

    let i = prompt("Ingrese un signo de operación para estos números (+, -, *, /)");

    if (i === "/" || i === "%") {
        alert("El resultado de la división de los números que usted ingresó es: " + resFinalD);
    } else if (i === "x" || i === "*") {
        alert("El resultado de la multiplicación de los números que usted ingresó es: " + resFinalM);
    } else if (i === "+") {
        alert("El resultado de la suma de los números que usted ingresó es: " + resFinalS);
    } else if (i === "-") {
        alert("El resultado de la resta de los números que usted ingresó es: " + resFinalR);
    } else {
        alert("Operación no válida. Intente con +, -, *, o /.");
    }
}

//Esta función solicita al usuario dos números que definen un rango
// Luego, suma todos los números pares que se encuentran entre ese número inicial y final, y muestra el resultado en una alerta
function siete(){
    let nmi = parseInt(prompt("ingrese un numero : "));
    let nma = parseInt(prompt("ingrese otro numero para sumar: "));
    let arrR = 0; 

        // Aseguramos que nmi sea menor o igual que nma
        if (nmi > nma) {
            let temp = nmi;
            nmi = nma;
            nma = temp;
        }

       for (let i = nmi; i <= nma; i++) {
        if (i % 2 === 0) {
            arrR += i;
        }
    }
   alert(`La suma de los números pares entre ${nmi} y ${nma} es: ${arrR}`);
}

//Esta función solicita al usuario una cantidad N y luego suma los primeros N números pares, comenzando desde 0
//Al final, muestra la suma total en una alerta
function ocho() {
    let cantidad = parseInt(prompt("¿Cuántos números pares desea sumar?"));
    let suma = 0;
    let contador = 0;
    let numero = 0;

    while (contador < cantidad) {
        suma += numero;
        numero += 2; // El siguiente número par
        contador++;
    }

    alert(`La suma de los primeros ${cantidad} números pares es: ${suma}`);
}

function nueve(){
    let Numi = parseInt(prompt("ingrese un numero : "));
    let Numa = parseInt(prompt("ingrese otro numero para sumar: "));
    let ArrRes = 0; 

        // Aseguramos que Numi sea menor que Numa
        if (Numi > Numa) {
            let tempe = Numi;
            Numi = Numa;
            Numa = tempe;
        }
    
    // Recorremos los números entre Numi y Numa
    for (let i = Numi; i <= Numa; i++) {
        if (i % 2 !== 0) { // Verificamos si el número es impar
            ArrRes += i; // Sumamos los números impares
        }
    }
    alert(`La suma de los números impares entre ${Numi} y ${Numa} es: ${ArrRes}`);
}

//Esta función solicita al usuario cuántos números impares quiere sumar y luego realiza la suma de esos primeros N números impares, comenzando desde 1
//Al final, muestra el resultado en una alerta
function diez(){
    let cantidadIm = parseInt(prompt("¿Cuántos números impares desea sumar?"));
    let sumaIm = 0;
    let contadorIm = 0;
    let numeroIm = 1;

    while (contadorIm < cantidadIm) {
        sumaIm += numeroIm;
        numeroIm += 2; // El siguiente número par
        contadorIm++;
    }

    alert(`La suma de los primeros ${cantidadIm} números impares es: ${sumaIm}`);
}

function once() {
    let numeroIngresado = parseInt(prompt("Ingrese cuántos múltiplos de 3 quiere sumar"));

    // Validación, si isNaN(si no es un numero) o si es un numero menor igual a 0, pide al usuario ingresar un valor valido.
    if (isNaN(numeroIngresado) || numeroIngresado <= 0) {
        alert("Por favor, ingrese un número válido mayor que 0.");
        return;
    }

    let ArrayOnce = [];
    let Resultado = 0;

    for (let i = 1; i <= numeroIngresado; i++) {
        let multiplo = i * 3;
        ArrayOnce.push(multiplo);
        Resultado += multiplo;
    }

    alert(`Los ${numeroIngresado} primeros múltiplos de 3 son:\n${ArrayOnce.join(" - ")}\n\nLa suma de estos es: ${Resultado}`);
}
//Esta función calcula el factorial de un número ingresado por el usuario.
function doce() {
    let numeroDoceIngresado = parseInt(prompt("Ingrese el numero para calcular su factorial"))
    let resultadoDoce = 1;

    for (let i = 1; i <= numeroDoceIngresado; i++){
        resultadoDoce *= i
    }
    alert(`El factorial del numero ingresado es: ${resultadoDoce}`)
}

//Esta funcion convierte una temperatura de grados Celsius a Fahrenheit.
function trece() {
    let celsius = parseInt(prompt("Ingrese una temperatura en grados celsius"))
    let fahrenheit = 0 + ((celsius * (9/5)) + 32)

    alert(`la temperatura de que usted ingreso es ${celsius}° grados Celsius
lo cual equivale a ${fahrenheit}° grados Fahrenheit`)
}

//Lo que hace esta funcion es identificar la palabra más larga dentro de una frase que el usuario ingresa.
function catorce() {
    let cadena = prompt("Ingrese una frase separada por espacios")
    let palabras = cadena.split(" ")
    let palabraMasLarga = ""

    for(let i = 0; i < palabras.length ; i++) {
        if (palabras[i].length > palabraMasLarga.length){
            palabraMasLarga = palabras[i]
        }
    }

    alert(`La frase que ingreso es: ${cadena}
La palabra más larga de la frase que ingreso es: ${palabraMasLarga}`)
}

//Esta funcion pide al usuario un número y luego encuentra todos los números primos desde el 2 hasta ese número. Finalmente, muestra esos números primos en una alerta.
function quince() {
    let limi = parseInt(prompt("Ingrese un numero limite para la impresión: "))
    let arrayPrimos = []

    if (limi === 0 || limi === 1 || limi < 0) {
        alert("Ingrese un valor valido")
    }

    for(let i = 2; i < limi + 1; i++) {
        if(esPrimo(i)) {
            arrayPrimos.push(i)
        }
    }

    function esPrimo(numeroQui) {
        for(let goku = 2; goku < numeroQui; j++) {
            if(numeroQui % goku === 0) {
                return false;
            }
        }
        return numeroQui !== 1;
    }

    if(limi === 0 || limi === 1 || limi < 0) {
        alert("No se genero nada")
    } else {
        alert(`Los numeros primos hasta el numero que ingresaste son: ${arrayPrimos.join(" - ")}`)
    }
}

// Función para identificar y mostrar los números pares ingresados por el usuario
function diecisiete() {
    let arrayNumer = prompt("Ingrese números separados por una coma: ");
    let arrayFin = arrayNumer.split(",");
    let arrayResult = [];

    // Filtrar los números pares
    for (let i = 0; i < arrayFin.length; i++) {
        if (arrayFin[i] % 2 === 0) {
            arrayResult.push(arrayFin[i]);
        }
    }

    alert(`Los números pares entre los ingresados son: ${arrayResult.join(" - ")}`);
}

