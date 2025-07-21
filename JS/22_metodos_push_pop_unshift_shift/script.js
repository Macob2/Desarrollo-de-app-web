
//let resultado = document.getElementById("resultado"); //referencia UL

function hola(){
    let elemento = document.getElementById("lista").value; //valor input
    let hola1 = document.createElement("li"); //crear elemento HTML --createElement
    hola1.innerText = elemento; //<li>--innerText--</li>
    resultado.appendChild(hola1) //appendChild inserta un valor hijo en el padre
    //resultado(<ul>(item(<li></li>))</ul>)
}

let carrito = [];
function mostrarListaCompra(){
    const lista = document.getElementById("resultado2");
    lista.innerHTML = ""; //Limpiar antes de mostrar

    for (let i = 0; i < carrito.length; i++){
        const li = document.createElement("li");
        li.className ="list-group-item d-flex justify-content-between align-items-center mb-2";
        li.textContent = `- ${carrito[i]}`;
        lista.appendChild(li)
    }
}

function agregarElemento2() {
    const input = document.getElementById("lista2");
    const valor = input.value.trim(); //guardo valor sin espacios extras
    
    if (valor === "") return;
    carrito.push(valor); //Agregar valor al final
    
    input.value = "";
    input.focus(); // agregamos foco hacia el input

    mostrarListaCompra()
}

function eliminarUltimoElemento(){
    if (carrito.length > 0){
        carrito.pop();
    }
    mostrarListaCompra()
}

let colores = []

function mostrar_lista_colores(){
    const lista = document.getElementById("resultado3");
    lista.innerHTML =""; //Limpia antes de mostrar 

    for (let i = 0; i < colores.length; i++){
        const li = document.createElement("li");
        li.className ="list-group-item d-flex justify-content-between align-items-center mb-2";
        li.textContent = `- ${colores[i]}`;
        lista.appendChild(li)
    }
}

function agregar_inicio() {
    const input = document.getElementById("lista3");
    const valor = input.value.trim(); //guardo valor sin espacios extras
    
    if (valor === ""){
        return;
    };
     
    colores.unshift(valor) //Agregar valor al inicio
    input.value = "";
    input.focus(); // agregamos foco hacia el input

    mostrar_lista_colores()
}

let colores2 = []

function mostrar_lista_colores2(){
    const lista = document.getElementById("resultado4");
    lista.innerHTML =""; //Limpia antes de mostrar 

    for (let i = 0; i < colores2.length; i++){
        const li = document.createElement("li");
        li.className ="list-group-item d-flex justify-content-between align-items-center mb-2";
        li.textContent = `- ${colores2[i]}`;
        lista.appendChild(li)
    }
}

function agregar_inicio2() {
    const input = document.getElementById("lista4");
    const valor = input.value.trim(); //guardo valor sin espacios extras
    
    if (valor === ""){
        return;
    };
     
    colores2.unshift(valor) //Agregar valor al inicio
    input.value = "";
    input.focus(); // agregamos foco hacia el input

    mostrar_lista_colores2()
}

function eliminar_primer_elemento(){
    if (colores2.length > 0){
        colores2.shift();
    };

    mostrar_lista_colores2()
}

let numeros = [10, 20 ,30]

function mostrar_lista_numeros(){
    const lista = document.getElementById("resultado5");
    lista.innerHTML =""; //Limpia antes de mostrar 

    for (let i = 0; i < numeros.length; i++){
        const li = document.createElement("li");
        li.className ="list-group-item d-flex justify-content-between align-items-center mb-2";
        li.textContent = `- ${numeros[i]}`;
        lista.appendChild(li)
    }
}

function agregar_inicio3() {
    const input = document.getElementById("lista5");
    const valor = input.value.trim(); //guardo valor sin espacios extras
    
    if (valor === ""){
        return;
    };
     
    numeros.unshift(valor) //Agregar valor al inicio
    input.value = "";
    input.focus(); // agregamos foco hacia el input

    mostrar_lista_numeros()
}

function agregar_final(){
    const input = document.getElementById("lista5");
    const valor = input.value.trim(); //guardo valor sin espacios extras
    
    if (valor === "") return;
    numeros.push(valor); //Agregar valor al final
    
    input.value = "";
    input.focus(); // agregamos foco hacia el input

    mostrar_lista_numeros()
}

function eliminar_primer_elemento2(){
    if (numeros.length > 0){
        numeros.shift();
    }

    mostrar_lista_numeros()
}

function eliminar_ultimo_elemento(){
    if (numeros.length > 0){
        numeros.pop();
    }
    mostrar_lista_numeros()
}

let orden = []

function mostrar_lista_orden(){
    const lista = document.getElementById("resultado6");
    lista.innerHTML =""; //Limpia antes de mostrar 

    for (let i = 0; i < orden.length; i++){
        const li = document.createElement("li");
        li.className ="list-group-item d-flex justify-content-between align-items-center mb-2";
        li.textContent = `- ${orden[i]}`;
        lista.appendChild(li)
    }
}

function agregar_inicio_ej6(){
    const input = document.getElementById("lista6");
    const valor = input.value.trim(); //guardo valor sin espacios extras
    
    if (valor === ""){
        return;
    };
     
    orden.unshift(valor) //Agregar valor al inicio
    input.value = "";
    input.focus(); // agregamos foco hacia el input

    mostrar_lista_orden()
}

// Se crea un arreglo vacío para almacenar los mensajes que el usuario agregue
let historial = [];

// Esta función se ejecuta cuando el usuario quiere agregar un mensaje al historial
function agregar_mensaje_Historial_ej7() {
    // Se obtiene el elemento del input con el ID "lista7"
    const input = document.getElementById("lista7");

    // Se obtiene el valor del input, eliminando espacios al inicio y final
    const valor = input.value.trim();

    // Si el valor está vacío, no hace nada y termina la función
    if (valor === "") return;

    // Se agrega el valor al final del arreglo historial
    historial.push(valor);

    // Se limpia el input después de agregar el mensaje
    input.value = "";

    // Se vuelve a enfocar el cursor en el input para seguir escribiendo
    input.focus();

    // Se actualiza la lista visual de mensajes en la interfaz
    mostrarHistorial();
}

// Esta función elimina el último mensaje agregado al historial
function eliminar_Ultimo_Mensaje_ej7() {
    // Si el historial está vacío, no hace nada
    if (historial.length === 0) return;

    // Se elimina el último elemento del arreglo historial y se guarda en la variable eliminado
    const eliminado = historial.pop();

    // Se muestra un mensaje indicando qué mensaje fue eliminado
    const alerta = document.getElementById("mensajeEliminado7");
    alerta.textContent = `Mensaje eliminado: "${eliminado}"`;

    // Se asegura de que el mensaje de alerta sea visible (por si estaba oculto con "d-none")
    alerta.classList.remove("d-none");

    // Se actualiza la lista visual del historial
    mostrarHistorial();
}

// Esta función muestra todos los mensajes actuales del historial en pantalla
function mostrarHistorial() {
    // Se obtiene el elemento donde se mostrará la lista de mensajes
    const lista = document.getElementById("resultado7");

    // Se limpia la lista para evitar duplicados al volver a mostrarla
    lista.innerHTML = "";

    // Se recorre todo el historial
    for (let i = 0; i < historial.length; i++) {
        // Se crea un nuevo elemento <li> para cada mensaje
        const li = document.createElement("li");

        // Se le agrega la clase de Bootstrap para estilo visual
        li.className = "list-group-item";

        // Se asigna el texto del mensaje a ese elemento
        li.textContent = historial[i];

        // Se agrega el <li> a la lista en el HTML
        lista.appendChild(li);
    }
}

let cola = ["Cliente1", "Cliente2", "Cliente3"]

function mostrar_cola(){
    const lista = document.getElementById("resultado8");
    lista.innerHTML =""; //Limpia antes de mostrar 

    for (let i = 0; i < cola.length; i++){
        const li = document.createElement("li");
        li.className ="list-group-item d-flex justify-content-between align-items-center mb-2";
        li.textContent = `- ${cola[i]}`;
        lista.appendChild(li)
    }
}

function eliminar_primer_cliente(){
    if (cola.length > 0){
        cola.shift();
    }

    mostrar_cola()
}

function agregar_cliente_al_final(){
    const input = document.getElementById("lista8");
    const valor = input.value.trim(); //guardo valor sin espacios extras
    
    if (valor === "") return;
    cola.push(valor); //Agregar valor al final
    
    input.value = "";
    input.focus(); // agregamos foco hacia el input

    mostrar_cola()
}

let nombres = ["Pedro", "Juan", "Luis"]

function mostrar_nombres(){
    const lista = document.getElementById("resultado9");
    lista.innerHTML =""; //Limpia antes de mostrar 

    for (let i = 0; i < nombres.length; i++){
        const li = document.createElement("li");
        li.className ="list-group-item d-flex justify-content-between align-items-center mb-2";
        li.textContent = `- ${nombres[i]}`;
        lista.appendChild(li)
    }
}

function eliminar_ultimo_nombre(){
    if (nombres.length > 0){
        nombres.pop();
    }
    mostrar_nombres()
}

function agregar_nombre_inicio() {
    const input = document.getElementById("lista9");
    const valor = input.value.trim(); //guardo valor sin espacios extras
    
    if (valor === ""){
        return;
    };
     
    nombres.unshift(valor) //Agregar valor al inicio
    input.value = "";
    input.focus(); // agregamos foco hacia el input

    mostrar_nombres()
}

function agregar_nombre_final(){
    const input = document.getElementById("lista9");
    const valor = input.value.trim(); //guardo valor sin espacios extras
    
    if (valor === "") return;
    nombres.push(valor); //Agregar valor al final
    
    input.value = "";
    input.focus(); // agregamos foco hacia el input

    mostrar_nombres()
}

let pila = []

function mostrar_pila(){
    const lista = document.getElementById("resultado10");
    lista.innerHTML =""; //Limpia antes de mostrar 

    for (let i = 0; i < pila.length; i++){
        const li = document.createElement("li");
        li.className ="list-group-item d-flex justify-content-between align-items-center mb-2";
        li.textContent = `- ${pila[i]}`;
        lista.appendChild(li)
    }
}

function agregar_elemento_ej10(){
    const input = document.getElementById("lista10");
    const valor = input.value.trim(); //guardo valor sin espacios extras
    
    if (valor === "") return;
    pila.push(valor); //Agregar valor al final
    
    input.value = "";
    input.focus(); // agregamos foco hacia el input

    mostrar_pila()
}

function eliminar_ultimo_elemento_ej10(){
    if (pila.length > 0){
        pila.pop();
    }
    mostrar_pila()
}

let colaNueva = []

function mostrar_colaNueva(){
    const lista = document.getElementById("resultado10.2");
    lista.innerHTML =""; //Limpia antes de mostrar 

    for (let i = 0; i < colaNueva.length; i++){
        const li = document.createElement("li");
        li.className ="list-group-item d-flex justify-content-between align-items-center mb-2";
        li.textContent = `- ${colaNueva[i]}`;
        lista.appendChild(li)
    }
}

function agregar_elemento_colaNueva(){
    const input = document.getElementById("lista10.2");
    const valor = input.value.trim(); //guardo valor sin espacios extras
    
    if (valor === "") return;
    colaNueva.push(valor); //Agregar valor al final
    
    input.value = "";
    input.focus(); // agregamos foco hacia el input

    mostrar_colaNueva()
}

function eliminar_ultimo_elemento_colaNueva(){
    if (colaNueva.length > 0){
        colaNueva.pop();
    }
    mostrar_colaNueva()
}
