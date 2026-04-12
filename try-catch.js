try {
    // Código que podría generar un error
    console.log("Intentando ejecutar código...")
    console.log(variableQueNoExiste) // ReferenceError: variableQueNoExiste is not defined
} catch (error) {
    // Código que se ejecuta si hay un error
    console.log("¡Ocurrió un error!", error.message)
}

console.log("El programa continúa ejecutándose") // Esta línea sí se ejecuta


// Objeto error
try {
    let resultado = variableInexistente + 5
} catch (error) {
    console.log("Nombre del error:", error.name)  // "ReferenceError"
    console.log("Mensaje:", error.message)        // "variableInexistente is not defined"
    console.log("Stack trace:", error.stack)      // Información de dónde ocurrió
}
/*
sintaxis completa
try {
  // Código a intentar ejecutar
} catch (error) {
  // Manejo de errores (opcional)
} finally {
  // Código que siempre se ejecuta (opcional)
}
*/

// ejempplo practico manejo de recursos
function procesarArchivo(archivo) {
    let recurso = null

    try {
        console.log("Abriendo archivo...")
        recurso = abrirArchivo(archivo)

        console.log("Procesando datos...")
        let datos = procesarDatos(recurso)

        return datos
    } catch (error) {
        console.log("Error procesando archivo:", error.message)
        return null
    } finally {
        // Siempre cerrar el archivo, haya error o no
        if (recurso) {
            console.log("Cerrando archivo...")
            cerrarArchivo(recurso)
        }
    }
}

//finally se ejecuta incluso cuando hay un return
function conReturn() {
    try {
        console.log("1. En try")
        return "Desde try"
    } finally {
        console.log("2. En finally")
    }
    console.log("3. Después de try/finally") //  Nunca se ejecuta
}

console.log("Resultado:", conReturn())
// Salida:
// "1. En try"
// "2. En finally"
// "Resultado: Desde try"

// finally sin catch
// Si ocurre un error, finally se ejecuta pero el error se propaga


function soloFinally() {
  try {
    console.log("Ejecutando operación...")
    operacionRiesgosa()
  } finally {
    console.log("Limpieza ejecutada")
  }
}
