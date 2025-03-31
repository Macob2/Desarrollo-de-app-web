console.log("Vinculado correctamente...");

function multiplicar(){
    let n = parseInt(prompt("ingrese un numero"))
    let n_array = []
    let multipl = 1

    for (let i = 1; i <= 10; i++){
        n_array.push(`${n} x ${multipl} \n es igual a ` + n * multipl)
        multipl ++
    }
    alert(`la multiplicacion de los numeros y los multiplos es:  ${n_array.join(" , ")}`);
}

function sumar(){
    let nu = parseInt(prompt("ingrese cuantos numeros quiere sumar"))
    let n_array = []
    let res = 0


}