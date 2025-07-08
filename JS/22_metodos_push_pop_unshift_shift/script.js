
let compras = []
let colores = ["rojo", "azul"]
let resultado = document.getElementById("resultado"); //referencia UL
function supermercado(){
    compras.push("pan","leche" ,"huevos")

    alert(`Se a añadido al carrito: ${compras.join("-")}`)
}

function eliminarUltimo(){
    compras.push("pan","leche" ,"huevos")

    let compras_nuevas = compras.pop()
    alert(`Los items que fueron eliminados fueron: ${compras_nuevas}`)
}

function agregarAlInicio(){
    colores.unshift("Amarillo")

    alert(`Los colores son: ${colores.join("-")}`)
}

function hola(){
    let elemento = document.getElementById("lista").value; //valor input
    let hola1 = document.createElement("li"); //crear elemento HTML --createElement
    hola1.innerText = elemento; //<li>--innerText--</li>
    resultado.appendChild(hola1) //appendChild inserta un valor hijo en el padre
    //resultado(<ul>(item(<li></li>))</ul>)
}