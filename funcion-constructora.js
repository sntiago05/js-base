// Función constructora (se escribe con mayúscula por convención)
function Persona(nombre, edad) {
    // 1. Crea un objeto vacío: this = {}
    // 2. Establece el prototipo: this.__proto__ = Persona.prototype
    // 3. Ejecuta el código de la función
    // 4. Retorna this automáticamente
    this.nombre = nombre
    this.edad = edad
}

// Creamos instancias
const ana = new Persona('Ana', 25)
const carlos = new Persona('Carlos', 30)

console.log(ana.nombre) // "Ana"
console.log(carlos.nombre) // "Carlos"
console.log(ana.edad) // 25
console.log(carlos.edad) // 30
function Coche(marca, modelo) {
    this.marca = marca
    this.modelo = modelo
}

// Añadimos métodos al prototype
Coche.prototype.acelerar = function () {
    console.log(`${this.marca} ${this.modelo} está acelerando`)
}

Coche.prototype.frenar = function () {
    console.log(`${this.marca} ${this.modelo} está frenando`)
}

// Creamos instancias
const coche1 = new Coche('Toyota', 'Corolla')
const coche2 = new Coche('Honda', 'Civic')

// Ambos pueden usar los métodos del prototype
coche1.acelerar() // "Toyota Corolla está acelerando"
coche2.frenar() // "Honda Civic está frenando"
console.log(coche1 instanceof Coche);
console.log(coche1 instanceof Array)
console.log(coche2.constructor === Coche);


//NOTE:  propiedades especificas en la funcion, metodos compartidos en el prototype



//Ineficiente - cada instancia tiene su propia función
function PersonaMala(nombre) {
    this.nombre = nombre
    this.saludar = function () {
        console.log(`Hola, soy ${this.nombre}`)
    }
}

// Eficiente - todas las instancias comparten la misma función
function PersonaBuena(nombre) {
    this.nombre = nombre
}

PersonaBuena.prototype.saludar = function () {
    console.log(`Hola, soy ${this.nombre}`)
}
/* PersonaMala (ineficiente)         PersonaBuena (eficiente)
┌─────────────────────────────┐   ┌─────────────────────────────┐
│ ana1: {                     │   │ ana2: {                     │
│   nombre: "Ana",            │   │   nombre: "Ana",            │
│   saludar: function() {...} │   │   __proto__: {              │
│ }                           │   │     saludar: function(){}  │
│                             │   │   }                         │
│ carlos1: {                  │   │ }                           │
│   nombre: "Carlos",         │   │                             │
│   saludar: function() {...} │   │ carlos2: {                  │
│ }                           │   │   nombre: "Carlos",         │
└─────────────────────────────┘   │   __proto__: ───────────────┼──┐
                                  │ }                           │  │
                                  └─────────────────────────────┘  │
                                    ↑_________________________________│
                                    Misma función compartida */


//Herencia con Constructor Functions 

function Animal(nombre) {
    this.nombre = nombre
}
Animal.prototype.respirar = function () {
    console.log(`${this.nombre} está respirando`);

}
function Perro(nombre, raza) {
    Animal.call(this, nombre)
    this.raza = raza
}
Perro.prototype = Object.create(Animal.prototype)
Perro.prototype.constructor = Perro
Perro.prototype.ladrar = function () {
    console.log(`${this.nombre} está ladrando: Guau!`);
}
const rex = new Perro('Rex', 'Labrador')

rex.respirar()
rex.ladrar() 
// rex → Perro.prototype → Animal.prototype → Object.prototype → null