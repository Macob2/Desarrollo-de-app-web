console.log("Vinculado correctamente.")

function Registrar_participantes(){
    let participantes = []
    let ingresar = prompt("¿Quiere ingresar nombres? (si/no)")

    while (ingresar != "no"){
        let nombre_nuevo = prompt("Ingrese el nombre que desea agregar.")
        participantes.push(nombre_nuevo)
        ingresar = prompt("¿Desea seguir ingresando nombres? (si/no)")
    }

    if (participantes.length < 5){
        console.log(participantes.length)
        console.log(participantes)
    } else {
        console.log(`Hay mas de 5 personas en la lista que son: ${participantes}`)
    }
    console.log(participantes.length)
    console.log(participantes)
}

function Simulacion_ventas(){
    let stock = ["Pan", "Leche", "Manzana"]

    for (let i = 1; i <= 5; i ++){
        if (stock.length > 0){
            producto_vendido = alert(`El producto vendido fue: ${stock[stock.length - 1]}`)
            stock.pop()
        } else {
            alert(`Sin stock.`)
        }
    }

    alert(`Todos los productos fueron vendidos`)

    let productos_nuevos = []
    let ingresar = prompt("¿Desea ingresar productos? (si/no)")


    while (ingresar != "no"){
        let nuevo = prompt("Ingrese el nombre: ")
        productos_nuevos.push(nuevo)
        ingresar = prompt("¿Desea seguir ingresando productos? (si/no)")
    }

    stock = productos_nuevos

    alert(`Productos agregados fueron: ${stock.join(" - ")}`)
}
