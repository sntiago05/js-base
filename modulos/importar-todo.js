import * as Operaciones from './export.js'

console.log(Operaciones.sumar(2, 3))  
console.log(Operaciones.restar(10, 4)) 
console.log(Operaciones.PI)            

const persona = new Operaciones.default("santiago")
console.log(persona.saludar());
