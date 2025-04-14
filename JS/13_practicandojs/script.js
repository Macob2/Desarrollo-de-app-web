console.log("Vinculado correctamente...");
function uno(){
    let nu = parseInt(prompt("ingrese un numero"))
    let n_arr = []
    let res = 0

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
alert(`la suma de los numeros es ${resulta}`)
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

function once(){
    let numeroIngresado = parseInt(prompt("Ingrese cuantos multiplos de tres quiere sumar"));
    let ArrayOnce = [];
    let multiPlo = 1;
    let Resultado = 0;
    let multiploTres = 0;

    for (let i = 0; i <= numeroIngresado * 3; i += 3){
        ArrayOnce.push(multiploTres)
        multiploTres += 3;
    }

    for (let i = 1; i <= numeroIngresado; i++){
        let Numero = i * 3;
        multiPlo ++
        Resultado += Numero
}
    alert(`los ${numeroIngresado} primeros multiplos de 3 son: ${ArrayOnce.join(" - ")}
    Y la suma de estos son: ${Resultado}`)
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

