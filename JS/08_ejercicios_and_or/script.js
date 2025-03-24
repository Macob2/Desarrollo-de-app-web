console.log("Vinculado correctamente...");
//Variables globales

let terminos_condiciones = false;
let esEstudiante = false;
let energiaSuficiente  = false;
let interruptorEncendido  = false;
let bloqueado = false;
let tieneCredenciales = false;

//Primer ejercicio

function terminos() {
    if (terminos_condiciones == false) {
        terminos_condiciones = true;
        alert(terminos_condiciones)
    } else {
        terminos_condiciones = false;
        alert(terminos_condiciones);
    }
    return terminos_condiciones;
}

function verificacion_de_cuenta() {
    let edad = parseInt(prompt("Ingrese su edad"));
    if (edad >= 18 && terminos_condiciones == true) {
        alert("Acceso concedido")
    } else {
        alert("Acceso denegado")
    }
}

//Segundo ejercicio

function estudiante() {
    if (esEstudiante == false) {
        esEstudiante = true;
        alert(esEstudiante)
    } else {
        esEstudiante = false;
        alert(esEstudiante);
    }
    return esEstudiante;

}

function descuento() {
    let edad = "";
    edad = parseInt(prompt("Ingrese su edad: "));
    if (edad >= 60 || esEstudiante == true){
        alert("Descuento aplicado")
    } else {
        alert("No tienes descuento")
    }

}

//Tercer Ejercicio

function validar_usuario_contrsena() {
    
    let usuario = "";
    let contrasena = "";

    usuario = prompt("Ingrese su usuario: ");
    contrasena = prompt("Ingrese su contrseña")

    if (usuario != "" && contrasena != ""){
        alert("Inicio de sesion exitoso")
    } else {
        alert("Error: Debes ingresar usuario y contraseña")
    }

}


//Cuarto ejercicio 

function suministrar_energia() {
    if (energiaSuficiente  == false) {
        energiaSuficiente  = true;
        alert(energiaSuficiente )
    } else {
        energiaSuficiente  = false;
        alert(energiaSuficiente );
    }
    return energiaSuficiente ;
}

function encender_interruptor() {
    if (interruptorEncendido  == false) {
        interruptorEncendido  = true;
        alert(interruptorEncendido )
    } else {
        interruptorEncendido  = false;
        alert(interruptorEncendido );
    }
    return interruptorEncendido;
}


function encender_maquina() {
    if (interruptorEncendido == true && energiaSuficiente == true){
        alert("Máquina encendida")
    } else {
        alert("No se puede encender la máquina")
    }
}

//Quinto ejercicio

function bloquear_zona() {
    if (bloqueado  == false) {
        bloqueado  = true;
        alert(bloqueado )
    } else {
        bloqueado  = false;
        alert(bloqueado );
    }
    return bloqueado ;
}

function tiene_acceso() {
    if (tieneCredenciales  == false) {
        tieneCredenciales  = true;
        alert(tieneCredenciales )
    } else {
        tieneCredenciales  = false;
        alert(tieneCredenciales );
    }
    return tieneCredenciales;
}

function encender_maquina() {
    if (tieneCredenciales != false || bloqueado != false){
        alert("Acceso permitido")
    } else if (tieneCredenciales != true ||bloqueado != false){
        alert("Acceso permitido")
    } else (
        alert("Acceso denegado")
    )
}