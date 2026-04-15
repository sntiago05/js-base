// es un objeto que representa la eventual finalizacion o falla de una operacion asincrona
// y su valor resultante
//NOTE: estados y ciclo de vida de una promise
// pending: estado inical, aun no se ha completado la operacion
//fulfilled: la operacion se completo exitosamente
// rejected: La operacion falló

const promise = new Promise((resolve, reject) => {
    console.log("Promise pendiente...");
    setTimeout(() => {
        const exito = false
        if (exito) {
            console.log("resuelta con exito");
            resolve("Operacion exitosa")
        } else {
            console.log("promise rechazada");
            reject("Algo salio mal")
        }
    }, 5000)
})

promise.then(resultado => console.log(resultado)
).catch(reject => console.log(reject)
)

function crearPromesa(exito) {
    return new Promise((resolve, reject) => {
        console.log("Procesando");
        if (exito) {
            resolve("Promesa resuelta con exito")
        } else {
            reject("Promesa rechazada")
        }
    }, 1000)
}

crearPromesa(true).then(result => {
    console.log("exito", result);
    return result.toUpperCase()
}).then(resultCaps => {
    console.log("Resultado en mayusculas", resultCaps);

}).catch(console.log("Rechazado")
)

crearPromesa(false).then(result => console.log(result).catch((error) => {
    console.log("Algo salio mal: ", error);
})
)