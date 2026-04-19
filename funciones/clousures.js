/*
Un closure (clausura) es cuando una función "recuerda" 
las variables de su scope padre, incluso después de que esa 
función padre haya terminado de ejecutarse.
*/

function contar() {
    let contador = 0

    return () => ++contador
}
const contador = contar()
const contador2 = contar()
console.log("Contador independiente 1 -> " + contador());
console.log("Contador independiente 2 ->" + contador2());
console.log("Contador independiente 2 ->" + contador2());
console.log("Contador independiente 1 -> " + contador());
console.log("Contador independiente 2 ->" + contador2());

// Closures con parametros

function crearSaludador(saludo) {
    return function (nombre) {
        return saludo + ", " + nombre + "!"
    }
}
const saludarEspanol = crearSaludador("Hola")
const saludarIngles = crearSaludador("Hello")
const saludarFrances = crearSaludador("Bonjour")
console.log(saludarEspanol("Santiago"));
console.log(saludarIngles("Kerlys"));
console.log(saludarFrances("Annie"));
console.log(saludarEspanol("Santiago otalora"));



// variables privadas - simulacion de encapsulacion

function crearPersona(nombreInicial) {
    let nombre = nombreInicial
    let edad = 0

    return {
        getnombre: () => nombre,
        setNombre: nuevoNombre => nombre = nuevoNombre,
        getEdad: () => edad,
        setEdad: nuevaEdad => edad = nuevaEdad,
        cumplirAnos: function () {
            edad++
            return edad
        }

    }
}
const persona =  crearPersona("juan")

console.log(persona.getnombre());
persona.setNombre("santiago")
console.log(persona.getnombre());
console.log(persona.getEdad());
persona.setEdad(18)
console.log(persona.getEdad())
console.log(persona.cumplirAnos());
;




