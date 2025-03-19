console.log("Vinculado correctamente...")
function Chequeo_clima(){
    let temperatura = prompt("ingrese una temperatura: ")

    if (temperatura < 0) {
        alert("la temperatura es: " + temperatura + "\nHace frio")
    }else if(temperatura < 25){
        alert("La temperatura es: " + temperatura + "\nEsta agradable")
    }
        else{
            alert("La temperatura es: " + temperatura + "\nHace calor")
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