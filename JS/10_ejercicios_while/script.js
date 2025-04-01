console.log("Vinculado correctamente...");

// Función que usa un bucle `for` para imprimir los números del 1 al 5 en la consola
function fo() {
// Bucle `for` que itera desde 1 hasta 5
for (let i = 1; i <= 5; ++i) {
    // Muestra el número actual en la consola
    console.log(i);
    }
}

// Función que usa un bucle `while` para imprimir los números del 1 al 5 en la consola
function whi() {
// Variable contador inicia en 1
let contador = 1;

// Bucle `while` que sigue ejecutándose mientras contador sea menor o igual a 5
while (contador <= 5) {
    // Muestra el valor de contador en la consola
    console.log(contador);
        
    // Incrementa contador en cada iteración
    contador++;
    }
}

// Función que crea un array con los números del 1 al 5 y los muestra en un alert
function ejercicio1() {
// Inicializa la variable `hola` en 1
let hola = 1;
    
// Array vacío para almacenar los números
let goku = [];
    
// Bucle `while` que agrega números del 1 al 5 al array `goku`
while (hola <= 5) {
    // Agrega el valor de `hola` al array `goku`
    goku.push(hola);
        
    // Incrementa el valor de `hola` en cada iteración
    hola++;
}
    
    // Muestra un `alert` con los números del array `goku` separados por guiones
    alert(`los numeros son: ${goku.join(" - ")}`);
}

// Función que crea un array con los números del 10 al 1 y los muestra en un alert
function ejercicio2() {
// Inicializa la variable `adios` en 10
let adios = 10;
    
// Array vacío para almacenar los números
let array = [];
    
// Bucle `while` que agrega números del 10 al 1 al array `array`
while (adios >= 1) {
     // Agrega el valor de `adios` al array `array`
    array.push(adios);
        
    // Decrementa el valor de `adios` en cada iteración
    adios--;
    }
    
    // Muestra un `alert` con los números del array `array` separados por guiones
    alert(`los numeros son: ${array.join(" - ")}`);
}

// Función que crea un array con las sumas acumuladas de los números del 1 al 5 y las muestra en un alert
function ejercicio3() {
// Array vacío para almacenar las sumas acumuladas
let arrn = [];
    
// Número hasta el cual se va a sumar
let num = 5;
    
// Variable para almacenar la suma acumulada
let suma = 0;
    
// Bucle `for` que calcula las sumas acumuladas del 1 al 5
for (let i = 1; i <= num; i++) {
    // Suma el número actual al total acumulado
    suma += i;
        
    // Agrega el resultado de la suma acumulada al array `arrn`
    arrn.push(suma);
    }
    
    // Muestra un `alert` con las sumas acumuladas separadas por guiones
    alert(`la suma de los numeros es: ${arrn.join(" - ")}`);
}

// Función que encuentra los números pares entre 1 y 10 y los muestra en un alert
function ejercicio4() {
// Array vacío para almacenar los números pares
let array = [];
    
// Bucle `for` que recorre los números del 1 al 10
for (let i = 1; i <= 10; i++) {
    // Si el número es par, lo agrega al array
    if (i % 2 === 0) {
        array.push(i);
    }
}
    
    // Muestra un `alert` con los números pares separados por guiones
    alert(`los numeros pares son: ${array.join(" - ")}`);
}