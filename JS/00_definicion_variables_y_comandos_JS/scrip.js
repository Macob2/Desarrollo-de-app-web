console.log("Vinculado correctamente...")
function Suma_indices(){

    let indice = [1,2,3,4,5,6,7]
    let suma = indice[0] + indice[1] +
    indice[5] + indice[6]; 
    indice[2] + indice[3] + indice[4] +

    alert(`EL arreglo es ${indice.join(" - ")}:\nResultado: ${suma}`);
    
}

// alert(`EL arreglo es ${indice.join(" - ")}:\nResultado: ${suma}`); esta funcion hace que al ser llamada la funcion pone una alerta en la pagina, el join llama a partes especificas de la variable indice para agregar un guion en medio de cada una mostrando sus valores asi "1 - 2" para luego sumar dichos numeros
    