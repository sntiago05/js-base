class Persona {
    constructor(nombre, edad) {
        this.nombre = nombre
        this.edad = edad
        console.log(`Nueva persona -> ${this.nombre} - ${this.edad}`);

    }
    saludar() {
        console.log(`Hola, soy ${this.nombre}`);
    }
}
const ana = new Persona("ana", 25)
const vale = new Persona("valery", 19)

class Matematicas {
    static Pi = 3.14159

    static sumar(a, b) {
        return a + b
    }
    static calcularArea(radio) {
        return this.Pi * radio ** 2
    }
    static esPar(n) {
        return n % 2 === 0
    }

}
// Se llaman en la clase, no en instancias
console.log(Matematicas.sumar(5, 3)) // 8
console.log(Matematicas.calcularArea(10)) // 314.159
console.log(Matematicas.esPar(4)) // true

// No funcionan en instancias
const mat = new Matematicas()
// mat.sumar(1, 2)  //  Error: mat.sumar is not a function

// atributos y metodos privados 

class CuentaBancaria {
    #saldo = 0 // Propiedad privada
    #numeroCuenta   // Propiedad privada

    constructor(numeroCuenta, saldoInicial = 0) {
        this.#numeroCuenta = numeroCuenta
        this.#saldo = saldoInicial
    }

    // Método privado
    #validarOperacion(cantidad) {
        return cantidad > 0 && cantidad <= this.#saldo
    }

    depositar(cantidad) {
        if (cantidad > 0) {
            this.#saldo += cantidad
            console.log(`Depositado: $${cantidad}`)
        }
    }

    retirar(cantidad) {
        // aquí sí podemos acceder a los métodos y propiedades privados
        if (this.#validarOperacion(cantidad)) {
            this.#saldo -= cantidad
            console.log(`Retirado: $${cantidad}`)
        } else {
            console.log('Operación no válida')
        }
    }

    get saldo() {
        return this.#saldo
    }
}

const cuenta = new CuentaBancaria('123456', 1000)
cuenta.depositar(500)
console.log(cuenta.saldo) // 1500

// No podemos acceder directamente a propiedades privadas
// console.log(cuenta.#saldo)    
// cuenta.#validarOperacion(100)  


// getters y setters 

class Temperatura {
  constructor(celsius = 0) {
    this._celsius = celsius 
  }

  // Getter - se usa como propiedad
  get fahrenheit() {
    return (this._celsius * 9) / 5 + 32
  }

  // Setter - se usa como asignación
  set fahrenheit(valor) {
    this._celsius = ((valor - 32) * 5) / 9
  }

  get celsius() {
    return this._celsius
  }

  set celsius(valor) {
    if (valor < -273.15) {
      throw new Error('Temperatura no puede ser menor a -273.15°C')
    }
    this._celsius = valor
  }
}

const temp = new Temperatura(25)

// usando los getters, fíjate que no usamos paréntesis
console.log(temp.celsius) // 25
console.log(temp.fahrenheit) // 77

// usando los setters, como si fuera una asignación
temp.fahrenheit = 100 // Usando el setter
console.log(temp.celsius) // 37.777...

// los setters ejecutan la lógica que hay dentro de ellos
//temp.celsius = -300 // Error: Temperatura no puede ser menor a -273.15°C


