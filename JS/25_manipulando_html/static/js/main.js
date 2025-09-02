// Arreglo para almacenar los registros de estudiantes
const registros = [];

// Función para capitalizar la primera letra de cada palabra
function capitalizarNombre(nombre) {
    return nombre.trim()
        .split(' ')
        .map(palabra => palabra.charAt(0).toUpperCase() + palabra.slice(1).toLowerCase())
        .join(' ');
}

// Función para validar todos los campos
function validarCampos(datos) {
    let esValido = true;
    
    // Validar nombre
    if (!datos.nombre || datos.nombre.trim().length < 2) {
        document.getElementById('nombreError').textContent = 'El nombre debe tener al menos 2 caracteres.';
        esValido = false;
    } else {
        document.getElementById('nombreError').textContent = '';
    }
    
    // Validar edad
    if (!datos.edad || datos.edad < 14 || datos.edad > 100) {
        document.getElementById('edadError').textContent = 'La edad debe estar entre 14 y 100 años.';
        esValido = false;
    } else {
        document.getElementById('edadError').textContent = '';
    }
    
    // Validar curso
    if (!datos.curso) {
        document.getElementById('cursoError').textContent = 'Debe seleccionar un curso.';
        esValido = false;
    } else {
        document.getElementById('cursoError').textContent = '';
    }
    
    // Validar jornada
    if (!datos.jornada) {
        document.getElementById('jornadaError').textContent = 'Debe seleccionar una jornada.';
        esValido = false;
    } else {
        document.getElementById('jornadaError').textContent = '';
    }
    
    // Validar reglamento
    if (!datos.aceptaReglamento) {
        document.getElementById('reglamentoError').textContent = 'Debe aceptar el reglamento.';
        esValido = false;
    } else {
        document.getElementById('reglamentoError').textContent = '';
    }
    
    return esValido;
}

// Función para contar estudiantes por jornada
function contarPorJornada() {
    const conteo = {
        'Mañana': 0,
        'Tarde': 0
    };
    
    registros.forEach(estudiante => {
        conteo[estudiante.jornada]++;
    });
    
    return `Registrados: ${conteo.Mañana} en Mañana, ${conteo.Tarde} en Tarde`;
}

// Función para mostrar registros en la tabla
function mostrarRegistros() {
    const tbody = document.querySelector("#tablaRegistros tbody");
    tbody.innerHTML = ""; // limpiar antes de volver a renderizar

    registros.forEach(est => {
        const fila = document.createElement("tr");
        fila.innerHTML = `
            <td>${est.nombre}</td>
            <td>${est.edad}</td>
            <td>${est.curso}</td>
            <td>${est.jornada}</td>
        `;
        tbody.appendChild(fila);
    });
}

// Función para manejar el envío del formulario
function manejarEnvio(event) {
    event.preventDefault();
    
    // Obtener valores del formulario
    const datos = {
        nombre: document.getElementById('nombre').value,
        edad: parseInt(document.getElementById('edad').value),
        curso: document.getElementById('curso').value,
        jornada: document.querySelector('input[name="jornada"]:checked')?.value,
        aceptaReglamento: document.getElementById('aceptaReglamento').checked
    };
    
    // Limpiar mensajes anteriores
    document.getElementById('saludo').textContent = '';
    document.getElementById('errorMsg').textContent = '';
    
    // Validar campos
    if (!validarCampos(datos)) {
        document.getElementById('errorMsg').textContent = 'Por favor, complete todos los campos correctamente.';
        return;
    }
    
    // Normalizar nombre
    datos.nombre = capitalizarNombre(datos.nombre);
    
    // Agregar al arreglo de registros
    registros.push(datos);
    
    // Mostrar saludo
    document.getElementById('saludo').textContent = 
        `Hola ${datos.nombre}, de ${datos.edad} años. Bienvenido(a) al ${datos.curso} en la jornada de ${datos.jornada}.`;
    
    // Mostrar resumen de jornadas
    document.getElementById('resumenJornadas').textContent = contarPorJornada();

    // Mostrar lista de registros
    mostrarRegistros();
}

// Función para limpiar el formulario
function limpiarFormulario() {
    document.getElementById('registroForm').reset();
    document.getElementById('saludo').textContent = '';
    document.getElementById('errorMsg').textContent = '';
    document.getElementById('resumenJornadas').textContent = '';
    document.querySelector("#tablaRegistros tbody").innerHTML = '';
    registros.length = 0; // vaciar el arreglo también
    
    // Limpiar mensajes de error
    document.querySelectorAll('.error-message').forEach(elemento => {
        elemento.textContent = '';
    });
}

// Event listeners
document.getElementById('registroForm').addEventListener('submit', manejarEnvio);
document.getElementById('limpiarBtn').addEventListener('click', limpiarFormulario);