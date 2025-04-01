console.log("Vinculado correctamente...");

// Función para realizar la multiplicación de un número ingresado por el usuario con los múltiplos del 1 al 10
function multiplicar(){
    // Solicita un número al usuario y lo convierte en entero
    let n = parseInt(prompt("ingrese un numero"))
    // Array para almacenar los resultados de las multiplicaciones
    let n_array = []
    // Variable para llevar el control del múltiplo
    let multipl = 1

    // Bucle que itera del 1 al 10
    for (let i = 1; i <= 10; i++){
        // Agrega al array el resultado de la multiplicación como un string formateado
        n_array.push(`${n} x ${multipl} \n es igual a ` + n * multipl)
        // Aumenta el múltiplo en cada iteración
        multipl ++
    }
    // Muestra el resultado de todas las multiplicaciones en una alerta
    alert(`la multiplicacion de los numeros y los multiplos es:  ${n_array.join(" , ")}`);
}

// Función para sumar un número determinado de valores ingresados por el usuario
function sumar(){
    // Solicita al usuario cuántos números quiere sumar
    let nu = parseInt(prompt("ingrese cuantos numeros quiere sumar"))
    // Array para almacenar los números que el usuario ingrese
    let n_arr = []
    // Variable para almacenar el resultado de la suma
    let res = 0

    // Bucle que solicita al usuario los números a sumar
    for(let i = 1; i <= nu; i++){
    // Agrega cada número ingresado al array
    n_arr.push(parseInt(prompt(`Ingrese que numeros quiere sumar: `)))
    }

    // Bucle para sumar todos los números en el array
    for(let i = 0; i < nu; i++){
    res += n_arr[i]
    }
// Muestra el resultado de la suma en una alerta
alert(`la suma de los numeros es ${res}`)
}

// Función para mostrar los números pares entre un número inicial y un número final
function pares(){
 // Array para almacenar los números pares
 let arey = []
 // Solicita el número inicial y el número final para calcular los números pares
 let nmi = parseInt(prompt("ingrese un numero inicial: "))
 let nma = parseInt(prompt("ingrese el numero final para calcular los pares: "))

    // Bucle que recorre los números entre el inicial y el final
    for (nmi; nmi <= nma; nmi++) {
    // Si el número es par, lo agrega al array
    if (nmi % 2 === 0){
        arey.push(nmi);
} 
    }
// Muestra los números pares encontrados en una alerta
alert(`los numeros pares entre el numero inicial y el numero final son: ${arey.join(" - ")}`);
}
    