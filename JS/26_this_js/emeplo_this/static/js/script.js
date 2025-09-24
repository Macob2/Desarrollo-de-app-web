function example(elemento){
    console.log("elemento clickeado", elemento);
}
//Creacion de funcion TurnOff
function TurnOff(element){
    if (element.innerText == "Login"){
        element.innerText = "Logout";
    }else{
        element.innerText = "Login"
    }
}

//Function para eliminar boton
function hide(element) {
    element.remove();
}

function 