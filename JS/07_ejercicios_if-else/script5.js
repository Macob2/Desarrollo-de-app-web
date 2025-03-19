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

