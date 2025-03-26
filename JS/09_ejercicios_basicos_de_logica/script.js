console.log("Vinculado correctamente...");

function impar(){
let numero = parseInt(prompt("ingrese un numero: "))
if (numero % 2 === 0){
    alert("Su numero es par")
} else {
    alert("Su numero es impar")
    }
}

function peso(){
let imcPeso = parseInt(prompt("ingrese su peso en kilogramos: "))
let imcaltura = parseInt(prompt("ingrese su altura en centimetros: ")) / 100
let imc = imcPeso / (imcaltura ** 2)

imc = Number(imc.toFixed(2))
if (imc < 18.5){
    alert ("su peso es " + imcPeso + " kilogramos\nSu altura es: " + imcaltura + " Metros\n Su imc es: " + imc + "\nUsted esta bajo en peso.")
} else if (imc >= 18.5 && imc < 25){
    alert ("su peso es " + imcPeso + " kilogramos\nSu altura es: " + imcaltura + " Metros\n Su imc es: " + imc + "\nUsted tiene un peso normal.")  
} else {
    alert ("su peso es " + imcPeso + " kilogramos\nSu altura es: " + imcaltura + " Metros\n Su imc es: " + imc + "\nUsted tiene sobrepeso.")
    }
}

function calcular(){
    let nota1 = parseInt(prompt("Ingrese su primer nota entre 1 y 7: "))
    let nota2 = parseInt(prompt("Ingrese su primer nota entre 1 y 7: "))
    let nota3 = parseInt(prompt("Ingrese su primer nota entre 1 y 7: "))

    let promedio = (nota1 + nota2 + nota3) / 3

    promedio = Number(imc.toFixed(2))

if (promedio < 1){
    alert("ingrese valores validos")
}else if (promedio >= 1 && promedio < 4){
    alert("Su nota es: " + promedio + "\nUsted a reprobado.")
}else if (promedio >= 4 && promedio <=7){
    alert("Su promedio es: " + promedio + "\nUsted a aprobado.")
}else {
    alert ("Ingrese valores validos.")
}
}