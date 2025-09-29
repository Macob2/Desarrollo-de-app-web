function example(elemento){
    console.log("elemento clickeado", elemento);
}
//Creacion de funcion TurnOff
function TurnOff(element){
    if (element.innerText == "Login"){
        element.innerText = "Log out";
    }else{
        element.innerText = "Login"
    }
}

//Function para eliminar boton
function hide(element) {
    element.remove();
}

let like_1 = 13
let like_2 = 37

function Like(element){
    like_1++;
    document.getElementById('like_container1').textContent = like_1 + " Like(s)";
}

function Like_2(element){
    like_2++;
    document.getElementById('like_container2').textContent = like_2 + " Like(s)";
}