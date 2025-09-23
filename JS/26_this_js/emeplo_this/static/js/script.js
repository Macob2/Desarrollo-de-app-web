function example(elemento){
    console.log("elemento clickeado", elemento);
}
//Creacion de funcion TurnOff
function TurnOff(element){
    if (element.innerText == "On"){
        element.innerText = "Off";
    }else{
        element.innerText = "On"
    }
}

//Function para eliminar boton
function hide(element) {
    element.remove();
}