// Tambien se puede exportar directamente en cada funcion variable clase 
// named export
function sumar(a, b) {
    return a + b
}

function restar(a, b) {
    return a - b
}

export function multiplicar(a, b) {
    return a * b
}

const PI = 3.14159
//

//Cada módulo puede tener una sola exportación por defecto.
//Se usa cuando el módulo tiene un elemento principal que quieres exportar
export default class Usuario {
    constructor(nombre) {
        this.nombre = nombre
    }

    saludar() {
        return `Hola, soy ${this.nombre}`
    }
}
function formatearInterno(texto) {
    return texto.toUpperCase()
}
// tambien se puede renombrar desde export
export { sumar, restar, PI, formatearInterno as formatear }

/*
export function foo()	Named export
export default function()	Default export (solo 1 por módulo)
export { a, b }	Named exports al final
import { a, b } from './mod.js'	Importar named exports
import Foo from './mod.js'	Importar default export
import { a as b } from './mod.js'	Importar y renombrar
import * as Mod from './mod.js'	Importar todo
export { a } from './otro.js'	Re-exportar
*/