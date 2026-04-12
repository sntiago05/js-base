// Objeto padre (prototipo)
const animal = {
  tipo: 'Mamífero',
  respirar() {
    console.log('Respirando...')
  }
}

// Creamos un objeto que hereda de animal
const perro = Object.create(animal)
perro.raza = 'Labrador'
perro.ladrar = function () {
  console.log('¡Guau!')
}

// Propiedades propias vs heredadas
console.log(perro.raza) // "Labrador" (propio)
console.log(perro.tipo) // "Mamífero" (heredado)

perro.ladrar() // "¡Guau!" (propio)
perro.respirar() // "Respirando..." (heredado)

const vehiculo = {
  acelerar() {
    console.log('Acelerando...')
  }
}

// Herencia con Object.create()
const coche = Object.create(vehiculo)
coche.ruedas = 4
coche.arrancar = function () {
  console.log('Motor encendido')
}

const moto = Object.create(vehiculo)
moto.ruedas = 2

// Ambos heredan de vehiculo
coche.acelerar() // "Acelerando..." (heredado)
moto.acelerar() // "Acelerando..." (heredado)

