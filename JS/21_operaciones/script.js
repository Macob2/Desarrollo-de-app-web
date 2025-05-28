function calcular_promedio(){
    let num_notas = parseInt(prompt("¿Cuantas notas desea ingresar para calcular su promedio?"))
    let notas = []
    let promedio = 0

    for (let i = 1; i <= num_notas; i++){
        let nota = parseInt(prompt(`Ingrese el ${i}° numero: `)) 
        notas.push(nota)
    }

    for (let i = 1; i <= num_notas; i++){
        promedio += notas[i - 1]
    }

    promedio /= num_notas
    
    if (promedio >= 40){
        alert(`Las notas ingresadas son: ${notas.join(" - ")}\n
Y su promedio es: ${promedio}\n
Usted esta aprobado`)
    } else {
        alert(`Las notas ingresadas son: ${notas.join(" - ")}\n
Y su promedio es: ${promedio}\n
Usted esta reprobado`)
    }
}

function separar_pares_impares(){
    let cantidad_num = parseInt(prompt("¿Cuantos numeros desea ingresar?"))
    let numeros = []
    let pares = []
    let impares = []

    for (let i = 1; i <= cantidad_num; i++){
        let num = parseInt(prompt(`Ingrese el ${i}° numero: `)) 
        numeros.push(num)
    }

    for (let i = 1; i <= cantidad_num; i++){
        if (numeros[i - 1] % 2 === 0 ){
            pares.push(numeros[i - 1])
        } else {
            impares.push(numeros[i - 1])
        }
    }

    alert(`Los numeros ingresados son: ${numeros.join(" - ")}\n
Los numeros pares de esa lista son: ${pares.join(" - ")}\n
Los numeros impares de esa lista son: ${impares.join(" - ")}`)
}