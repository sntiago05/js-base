let numero = 123.456789

// toString - convierte a string
console.log(numero.toString()) // "123.456789"
console.log(numero.toString(2)) // "1111011.0111010..." (binario)
console.log(numero.toString(16)) // "7b.74bc6a7ef9db2" (hexadecimal)

// toFixed - fija decimales
console.log(numero.toFixed(2)) // "123.46"
console.log(numero.toFixed(0)) // "123"

// toPrecision - fija dígitos significativos
console.log(numero.toPrecision(4)) // "123.5"
console.log(numero.toPrecision(2)) // "1.2e+2"

// toExponential - notación científica
console.log(numero.toExponential()) // "1.23456789e+2"
console.log(numero.toExponential(2)) // "1.23e+2"

// isInteger - verifica si es entero
console.log(Number.isInteger(42)) // true
console.log(Number.isInteger(42.0)) // true
console.log(Number.isInteger(42.1)) // false

// isSafeInteger - verifica si está en rango seguro
console.log(Number.isSafeInteger(123)) // true
console.log(Number.isSafeInteger(Math.pow(2, 53))) // false

// isFinite - verifica si es finito
console.log(Number.isFinite(42)) // true
console.log(Number.isFinite(Infinity)) // false

// isNaN - verifica si es NaN
console.log(Number.isNaN(NaN)) // true
console.log(Number.isNaN('texto')) // false

// Problema clásico de punto flotante
console.log(0.1 + 0.2) // 0.30000000000000004
console.log(0.1 + 0.2 === 0.3) // false

// Soluciones
function sumarDecimales(a, b, decimales = 2) {
  return Number((a + b).toFixed(decimales))
}

console.log(sumarDecimales(0.1, 0.2)) // 0.3

// Usando Number.EPSILON para comparaciones
function sonIguales(a, b) {
  return Math.abs(a - b) < Number.EPSILON
}

console.log(sonIguales(0.1 + 0.2, 0.3)) // true

// Conversión implícita en operaciones
console.log('5' + 3) // "53" (concatenación)
console.log('5' - 3) // 2 (resta numérica)
console.log('5' * 3) // 15 (multiplicación)
console.log('5' / 3) // 1.6666... (división)

// Conversión con operador unario +
console.log(+'42') // 42
console.log(+true) // 1
console.log(+false) // 0
console.log(+'') // 0