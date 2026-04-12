class Animal {
    constructor(nombre) {
        this.nombre = nombre
    }
    dormir() {
        console.log(`${this.nombre} está durmiendo`);
    }
}
class Perro extends Animal {
    constructor(nombre, raza) {
        super(nombre)
        this.raza = raza
    }
    ladrar() {
        console.log(`${this.nombre} dice : Guau!`);
    }

}
const rex = new Perro("rex", "labrador")
rex.dormir()
rex.ladrar()

class Vehiculo {
    acelerar() {
        console.log('Acelerando...')
    }
}

class Moto extends Vehiculo {
    acelerar() {
        super.acelerar()
        console.log('¡Haciendo caballito!')
    }
}

const moto = new Moto()
moto.acelerar()

class Empleado {
    constructor(nombre, salario) {
        this.nombre = nombre
        this.salario = salario
    }

    trabajar() {
        console.log(`${this.nombre} está trabajando`)
    }

    cobrar() {
        console.log(`${this.nombre} cobra ${this.salario}€`)
    }
}

class Programador extends Empleado {
    constructor(nombre, salario, lenguaje) {
        super(nombre, salario) // Llama al constructor padre
        this.lenguaje = lenguaje
    }

    // Sobrescribe el método del padre
    trabajar() {
        super.trabajar() // Llama al método padre
        console.log(`Programando en ${this.lenguaje}`)
    }

    // Método propio
    programar() {
        console.log(`${this.nombre} está programando en ${this.lenguaje}`)
    }
}

class Manager extends Empleado {
    constructor(nombre, salario, equipo) {
        super(nombre, salario)
        this.equipo = equipo
    }

    trabajar() {
        super.trabajar()
        console.log(`Gestionando un equipo de ${this.equipo.length} personas`)
    }

    dirigir() {
        console.log(`${this.nombre} está dirigiendo el equipo`)
    }
}

const dev = new Programador('Ana', 45000, 'JavaScript')
const jefe = new Manager('Carlos', 60000, ['Ana', 'Luis', 'María'])

dev.trabajar()
// "Ana está trabajando"
// "Programando en JavaScript"

jefe.trabajar()
// "Carlos está trabajando"
// "Gestionando un equipo de 3 personas"

dev.cobrar() // "Ana cobra 45000€" (heredado)
jefe.dirigir() // "Carlos está dirigiendo el equipo" (propio)

//note: cadena de herencia

class SerVivo {
    constructor(nombre) {
        this.nombre = nombre
        this.vivo = true
    }

    respirar() {
        console.log(`${this.nombre} está respirando`)
    }
}

class Animal extends SerVivo {
    constructor(nombre, especie) {
        super(nombre)
        this.especie = especie
    }

    moverse() {
        console.log(`${this.nombre} se está moviendo`)
    }
}

class Mamifero extends Animal {
    constructor(nombre, especie, pelaje) {
        super(nombre, especie)
        this.pelaje = pelaje
    }

    amamantar() {
        console.log(`${this.nombre} está amamantando`)
    }
}

class Gato extends Mamifero {
    constructor(nombre, raza) {
        super(nombre, 'Felino', true)
        this.raza = raza
    }

    maullar() {
        console.log(`${this.nombre} dice: ¡Miau!`)
    }
}

const michi = new Gato('Michi', 'Persa')

// Puede usar métodos de todas las clases padre
michi.respirar()    // De SerVivo
michi.moverse()     // De Animal
michi.amamantar()   // De Mamifero
michi.maullar()     // Propio de Gato