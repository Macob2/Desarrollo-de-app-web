console.log("Vinculado correctamente...");
    function aceptar(){
    let aceptaTerminos = false;
}

function acceso(){
    let edad = prompt("ingrese su edad: ");

    if (edad < 18 && aceptaTerminos === false) {
        alert("Acceso denegado.");
    } else { (edad >= 18 && aceptaTerminos === true) 
        alert("Acceso concedido.");
    }
}

function Ver_usuario(){
    let nombreUsuario = prompt("ingrese su usuario: ")
    let contraseña = prompt("ingrese su contraseña: ")

    if (nombreUsuario === "usuario1234" && contraseña === "secreto"){
        alert("Su usuario es: " + nombreUsuario + "\nSu contraseña es: " + contraseña + "\nAcceso concedido") 
    } else {
        alert("Su usuario es: " + nombreUsuario + "\nSu contraseña es: " + contraseña + "\nAcceso denegado") 
    }
}

function Valor_signo(){
    let numero = prompt("ingresar un numero: ")

    if (numero < 0) {
        alert("el numero es: " + numero + " es negativo")
    } else if (numero == 0){
        alert("el numero es: " + numero + " el numero es cero")
    } else {
        alert("el numero es: " + numero + " el numero es positivo")
    }
}

function Puntaje_juego(){
    let puntuacion = prompt("ingrese su puntuacion: ")

    if (puntuacion >= 90){
        alert("Su puntuacion es: " + puntuacion + ", Excelente!")
    } else if (puntuacion > 70){
        alert("Su puntuacion es: " + puntuacion + ", Buen trabajo")
    } else {
        alert("Su puntuacion es: " + puntuacion + ", Necesitas mejorar")
    }
}