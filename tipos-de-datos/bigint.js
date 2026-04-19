// Con BigInt mantenemos la precisión
let numeroGrandeBigInt = 1234567890123456789n
console.log(numeroGrandeBigInt) // 1234567890123456789n (¡exacto!)
console.log(numeroGrandeBigInt + 1n) // 1234567890123456790n (¡exacto!)
// Desde número (si está en rango seguro)
let desdeEntero = BigInt(123) // 123n
let desdeEnteroGrande = BigInt(9007199254740991) // 9007199254740991n

// Desde string
let desdeString = BigInt('123456789012345678901234567890')
// 123456789012345678901234567890n

// Desde string hexadecimal
let desdeHex = BigInt('0x1fffffffffffff') // 9007199254740991n

// Desde string binaria
let desdeBin = BigInt('0b11111111111111111111111111111111')

// Desde una variable
let numeroGrandeEnString = '123456789012345678901234567890'
let desdeVariable = BigInt(numeroGrandeEnString) // 123456789012345678901234567890n

//Comparaciones

let x = 100n
let y = 200n

// Comparaciones funcionan normalmente
console.log(x < y) // true
console.log(x > y) // false
console.log(x === 100n) // true
console.log(x !== y) // true

// Comparación con números regulares
console.log(100n == 100) // true (coerción)
console.log(100n === 100) // false (tipos diferentes)
console.log(100n < 101) // true
console.log(100n > 99) // true

// no se pueden mezclar con number sin hacer conversion explicita
// no funcionan con math

// no se puede usar con json
let objeto = {
  numero: 42,
  grande: 123n
}

// SON.stringify no maneja BigInt
// JSON.stringify(objeto) // TypeError: Do not know how to serialize a BigInt

// Solución: convertir a string
let objetoSerializable = {
  numero: objeto.numero,
  grande: objeto.grande.toString()
}

console.log(JSON.stringify(objetoSerializable))
// {"numero":42,"grande":"123"}

// conversiones 
let grande = 123456789n

// A Number (cuidado con la precisión)
let comoNumber = Number(grande) // 123456789
console.log(typeof comoNumber) // "number"

// A String
let comoString = String(grande) // "123456789"
let comoStringDirect = grande.toString() // "123456789"

// A Boolean
let comoBoolean = Boolean(grande) // true
console.log(Boolean(0n)) // false
// Desde Number (solo enteros en rango seguro)
let desdeNumber = BigInt(42) // 42n

// Desde String
desdeString = BigInt('123456789012345678901234567890')

// Desde Boolean
let desdeTrue = BigInt(true) // 1n
let desdeFalse = BigInt(false) // 0n