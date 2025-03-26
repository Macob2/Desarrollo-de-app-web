console.log("Vinculado correctamente...");

function fo(){

for (let i = 1; i <= 5; ++i){
    console.log(i);
    }
}

function whi(){

let contador = 1
while (contador <= 5){
    console.log(contador);
    contador++;
    }
}

function ejercicio1(){

let hola = 1
let goku =[]
while(hola <= 5){
    goku.push(hola);
    hola++;
    }
    alert(`los numeros son: ${goku.join(" ")}`);
}

function ejercicio2(){

let adios = 10
let array = []
while(adios >= 1){
    array.push(adios);
    adios--;
    }
alert(`los numeros son: ${array.join(" ")}`);
}


function ejercicio3(){

let num = 5
let suma = 0    
for (let i = 1; i <= num; ++i){
    suma += i
    }
    alert(suma);
}
