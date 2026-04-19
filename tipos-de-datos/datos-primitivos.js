/*
1. string
2. number
3. undefined
4. big int
5. boolean
6. symbol
7. null

son tipos de datos que no son objetos y no poseen metodos
*/
// Estos son todos tipos primitivos
let texto = 'Hola mundo'
let numero = 42
let grande = 123n
let verdadero = true
let indefinido = undefined
let simbolo = Symbol('id')
let nulo = null

// objetos wrappers
texto = 'JavaScript'

// Cuando escribes texto.toUpperCase(), JavaScript hace esto internamente:
// 1. Crea: new String("JavaScript")
// 2. Llama al método: new String("JavaScript").toUpperCase()
// 3. Devuelve el resultado: "JAVASCRIPT"
// 4. Destruye el objeto temporal
console.log(texto.toUpperCase());

// Demostrando que los primitivos siguen siendo primitivos
// 1. Usando typeof
texto = 'Hola'
console.log(typeof texto) // "string" (no "object")

// 2. Intentando asignar propiedades
texto.nuevaPropiedad = 'valor'
console.log(texto.nuevaPropiedad) // undefined (¡no se guardó!)

// 3. Comparando con objetos reales
let textoObjeto = new String('Hola')
console.log(typeof textoObjeto) // "object"
console.log(texto === textoObjeto) // false


