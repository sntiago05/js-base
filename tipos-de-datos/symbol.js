//Un Symbol es un valor primitivo que representa un identificador único. 
// Cada símbolo es único, incluso si se crean con la misma descripción
// Cada Symbol es único
let sym1 = Symbol()
let sym2 = Symbol()
let sym3 = Symbol('descripcion')
let sym4 = Symbol('descripcion')

console.log(sym1 === sym2) // false
console.log(sym3 === sym4) // false (¡incluso con la misma descripción!)

console.log(typeof sym1) // "symbol"

//Con el método Symbol.for(key) puedes buscar símbolos ya creados en un registro global de símbolos.
// Si ya lo creaste, lo encontrará y te lo devolverá. 
// Si no lo encuentra, lo creará por ti, lo guardará en el registro global de símbolos y te lo devolverá.

// Symbol.for() usa un registro global
let global1 = Symbol.for('clave')
let global2 = Symbol.for('clave')

console.log(global1 === global2) // true (¡mismo símbolo!)

// Symbol.keyFor() obtiene la clave del registro
console.log(Symbol.keyFor(global1)) // "clave"

// Los símbolos locales no están en el registro
let local = Symbol('descripcion')
console.log(Symbol.keyFor(local)) // undefined

// Symbol() siempre crea uno nuevo
let a = Symbol('test')
let b = Symbol('test')
console.log(a === b) // false

// Symbol.for() reutiliza existentes
let c = Symbol.for('test')
let d = Symbol.for('test')
console.log(c === d) // true

// La descripción de Symbol() y la llave de Symbol.for()
// no tienen nada que ver
console.log(a === c) // false
// Símbolos como propiedades únicas
let id = Symbol('id')
let nombre = Symbol('nombre')

let usuario = {
  [id]: 12345,
  [nombre]: 'Juan',
  edad: 30
}

console.log(usuario[id]) // 12345
console.log(usuario[nombre]) // 'Juan'
console.log(usuario.edad) // 30

// No hay conflictos con propiedades string
usuario.id = 'string-id'
usuario.nombre = 'string-nombre'

console.log(usuario[id]) // 12345 (símbolo)
console.log(usuario.id) // 'string-id' (string)
console.log(usuario[nombre]) // 'Juan' (símbolo)
console.log(usuario.nombre) // 'string-nombre' (string)