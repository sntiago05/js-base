// Promise.resolve() y Promise.reject()
//Estas son funciones de conveniencia para crear Promises que se resuelven o rechazan inmediatamente.
//Son muy útiles cuando necesitas convertir valores normales en Promises o crear Promises para testing.
// Promise que se resuelve inmediatamente
const promesaExitosa = Promise.resolve('¡Éxito inmediato!')

promesaExitosa.then(resultado => {
    console.log(resultado) // "¡Éxito inmediato!"
})

// Promise que se rechaza inmediatamente
const promesaFallida = Promise.reject('Error inmediato')

promesaFallida.catch(error => {
    console.log('Error:', error) // "Error: Error inmediato"
})

// Útil para normalizar valores
function procesarDatos(datos) {
    // Si ya tienes los datos, los conviertes en Promise
    if (datos) {
        return Promise.resolve(datos)
    }

    // Si no, haces una llamada asíncrona
    return fetch('/api/datos').then(response => response.json())
}

//Metodos de Promise
// Promises all 
// cuando necesitas que todas las operaciones se completen exitosamente
function descargarArchivo(nombre, tiempo) {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            console.log(`📁 ${nombre} descargado`);
            resolve(`Contenido de ${nombre}`)
        }, tiempo)
    })
}
const promesas = [
    descargarArchivo("img1.jpg", 1000),
    descargarArchivo("img2.jpg", 1500),
    descargarArchivo("img3.jpg", 800)
]

Promise.all(promesas).then((resultado) => {
    console.log("Todas las descargas completas");
    console.log(resultado);
}).catch((error) => {
    console.log("Alguna de las descargas falló:", error);
})

// Promise.race
// se usa cuando nos interesa el resultado mas rapido
/*
1. se resuelve con la primera promise que termine sea exitosa o fallida
2. los demas resultados se ignoran pero las promises siguen ejecutandose */

function servidor(nombre, tiempo) {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve(`Respuesta del ${nombre}`)
        }, tiempo)
    })
}

const servidores = [
    servidor("Servidor A", 2000),
    servidor("Servidor B", 1000),
    servidor("Servidor C", 3000)
]
Promise.race(servidores).then((respuesta) => {
    console.log("Primer servidor en responder:", respuesta);
})

// ejemplo practico
function operacionConTimeout(promesa, tiempoLimite) {
    const timeout = new Promise((resolve, reject) => {
        setTimeout(() => {
            reject("Operacion expirada")
        }, tiempoLimite)
    })
    return Promise.race([promesa, timeout])
}

// Promise.allSettled 
// se usa cuando queremos todos los resultados no importa si algunos fallam
// nunca se rechaza, devuelve un array de objetos {status, value/reason}
function operacion(nombre, exito, tiempo) {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            if (exito) {
                resolve(`${nombre} exitoso`)
            } else {
                reject(`${nombre} falló`)
            }
        }, tiempo)
    })
}

const operaciones = [
    operacion('Operación A', true, 1000),
    operacion('Operación B', false, 800),  // Esta falla
    operacion('Operación C', true, 1200)
]

Promise.allSettled(operaciones)
    .then((resultados) => {
        console.log('📊 Resultados de todas las operaciones:')
        resultados.forEach((resultado, indice) => {
            if (resultado.status === 'fulfilled') {
                console.log(`${indice + 1}: ${resultado.value}`)
            } else {
                console.log(`${indice + 1}: ${resultado.reason}`)
            }
        })
        // ✅ 1: Operación A exitoso
        // ❌ 2: Operación B falló  
        // ✅ 3: Operación C exitoso
    })

// .finally()
function operacionImportante(exito) {
    return new Promise((resolve, reject) => {
        console.log('🔄 Iniciando operación...')

        setTimeout(() => {
            if (exito) {
                resolve('Operación completada')
            } else {
                reject('Operación falló')
            }
        }, 2000)
    })
}

// Ejemplo práctico: Mostrar/ocultar loader
function mostrarLoader() {
    console.log('Mostrando loader...')
}

function ocultarLoader() {
    console.log('Ocultando loader...')
}

mostrarLoader()

operacionImportante(true)
    .then((resultado) => {
        console.log('Éxito:', resultado)
    })
    .catch((error) => {
        console.log('Error:', error)
    })
    .finally(() => {
        ocultarLoader() // Siempre se ejecuta
        console.log('Operación terminada')
    })

// multiples catch manejo granular de errores
// catch se ejecuta cuando se rechaza la promesa y acaba la cadena
// pero si catch atrapa el error y devuelve algo la cadena se recupera
function paso1() {
    return Promise.reject('Error específico del paso 1')
}

function paso2() {
    return Promise.resolve('Paso 2 OK')
}

paso1()
    .catch((error) => {
        console.log('Recuperándose del error:', error)
        return 'Valor de recuperación' // Continuamos la cadena
    })
    .then((resultado) => {
        console.log('Continuando con:', resultado)
        return paso2()
    })
    .then((resultado) => {
        console.log('Final exitoso:', resultado)
    })
    .catch((error) => {
        console.log('Error no recuperable:', error)
    })