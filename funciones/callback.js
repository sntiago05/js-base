// funcion que se le pasa como parametro a otra funcion, para ser ejecutada en 
// un momento especifico, normalmente cuando algo termine de ejecutarse

function saludar(nombre) {
    console.log("Hola " + nombre + "!");
}

function despedir(nombre) {
    console.log("Adios " + nombre + "!");
}

function procesarUsuario(nombre, callback) {
    console.log("Procesando usuario");
    callback(nombre)
}

procesarUsuario("annie", saludar)
procesarUsuario("kerlys", despedir)

console.log("Inicio antes del callback");

setTimeout(() => {
    console.log("Han pasado 3 segundos");
}, 3000)
console.log("aeiou");


function esperarUnsegundo(callback) {
    setTimeout(() => {
        const mensaje = "Han pasado un segundo"
        callback(mensaje)
    }, 1000)
}
function mostrarMensaje(mensaje) {
    console.log(mensaje);
}
esperarUnsegundo(mostrarMensaje)

let segundos = 0

const intervalo = setInterval(() => {
    segundos++
    console.log(`Han pasado ${segundos} segundos`);
    if (segundos >= 5) {
        clearInterval(intervalo)
    }
}, 1000)
