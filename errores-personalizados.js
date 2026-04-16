function validarEdad(edad) {
    if (edad < 0) {
        throw new Error("La edad no puede ser negativa")
    }

    if (edad > 150) {
        throw new Error("La edad parece incorrecta")
    }

    return edad
}

try {
    console.log(validarEdad(25))  // 25
    console.log(validarEdad(-5))  // ❌ Error: La edad no puede ser negativa
    console.log(validarEdad(200)) // Esta línea nunca se ejecuta
} catch (error) {
    console.log("Error:", error.message)
}

// tipos de errores personalizados
/*// Error genérico
throw new Error("Error general")

// TypeError para errores de tipos
throw new TypeError("Se esperaba un string, se recibió un number")

// RangeError para valores fuera de rango
throw new RangeError("El valor debe estar entre 1 y 100")

// ReferenceError para referencias inválidas
throw new ReferenceError("La variable no está definida") */

// creando clase con errores personalizados
class ErrorValidacion extends Error {
    constructor(campo, valor) {
        super(`Error de validación en el campo '${campo}': ${valor}`)
        this.name = "ErrorValidacion"
        this.campo = campo
        this.valor = valor
    }
}

class ErrorAutenticacion extends Error {
    constructor(mensaje) {
        super(mensaje)
        this.name = "ErrorAutenticacion"
    }
}

// Uso
function validarUsuario(datos) {
    if (!datos.email) {
        throw new ErrorValidacion("email", "es requerido")
    }

    if (!datos.password) {
        throw new ErrorValidacion("password", "es requerido")
    }
}

function autenticarUsuario(email, password) {
    if (password !== "123456") {
        throw new ErrorAutenticacion("Credenciales incorrectas")
    }
}
// Manejo específico por tipo de error
try {
    validarUsuario({ email: "", password: "123" })
    autenticarUsuario("user@test.com", "wrong")
} catch (error) {
    if (error instanceof ErrorValidacion) {
        console.log(`Error de validación en ${error.campo}: ${error.valor}`)
    } else if (error instanceof ErrorAutenticacion) {
        console.log(`Error de autenticación: ${error.message}`)
    } else {
        console.log(`Error desconocido: ${error.message}`)
    }
}