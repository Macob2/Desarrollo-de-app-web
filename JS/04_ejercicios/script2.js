console.log("Vinculado correctamente...")
// Ejercicio 1: Declaración de variables
// Instrucciones: Declara dos variables numéricas llamadas 'ahora' y 'fecha_nac'.
// Luego, calcula y muestra en un mensaje la edad actual basada en el año de nacimiento.

function declararVariables() {
    let fecha_nac = parseInt(prompt ("ingrese fecha de nacimiento: "));
    let ahora = 2025;
    let edad = ahora - fecha_nac;
    alert("tu edad es:" + edad + "años");
    // Tu código aquí
    }
    // Ejercicio 2: Asignación de valores
    // Instrucciones: Completa la función para asignar el valor de 'var1' a 'var2' y luego muestra el valor de 'var2'.
    function asignarValores() {
    // Tu código aquí
    let var1 = parseInt(prompt ("ingrese un valor: "));
    let var2 = var1 ;
        alert("el valor de var2 es: " + var2);
    }
    // Ejercicio 3: Operaciones matemáticas
    // Instrucciones: Completa la función para realizar las siguientes operaciones:
    // Suma 'num1','num2' y 'num3', resta 'num1' de 'num3', multiplica 'num2' por 'num3', y divide 'num1' entre '120'.
    // Muestra los resultados en un mensaje.
    function realizarOperaciones() {
        let num1 = parseInt(prompt ("ingrese un valor: "));
        let num2 = parseInt(prompt ("ingrese un segundo valor: "));
        let num3 = parseInt(prompt ("ingrese un tercer valor: "));
        let resultado = [num1 - num3, num2 * num3, num1 / 120];
    alert(resultado);
    
    // Tu código aquí
    }

    // Ejercicio 4: Manipulación de cadenas
    // Instrucciones: Completa la función para construir un mensaje utilizando las variables 'direccion' y 'n_casa'.
    // Luego, muestra la longitud del mensaje y el antepenultimo en el mensaje. (.length)
    function manipularCadenas() {
        let direccion = prompt("Ingrese direccion: ");
        let nCasa = prompt("Ingresar numero de Casa");
        let mensaje = direccion + " " + nCasa;

    alert("La direccion es: " + mensaje + "\n Cantidad de caracteres: " + mensaje.length + "\n Y el antepenultimo es: " + mensaje[mensaje.length - 3]);
    // Tu código aquí
    }