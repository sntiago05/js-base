let frase = 'JavaScript es genial y JavaScript es potente'
const numeros = '0123456789 11 13';
console.log(numeros.slice(1));

// indexOf - encuentra la primera ocurrencia
console.log(frase.indexOf('JavaScript')) // 0
// -> significa que encontró la primera ocurrencia de 'JavaScript'
//    en la posición 0

console.log(frase.indexOf('a')) // 1
// -> significa que encontró la primera ocurrencia de 'a'
//    en la posición 1

console.log(frase.indexOf('Python')) // -1 (no encontrado)
// -> cuando no encuentra la cadena de texto, devuelve -1

// lastIndexOf - encuentra la última ocurrencia
console.log(frase.lastIndexOf('JavaScript')) // 23
// -> significa que encontró la última ocurrencia de 'JavaScript'
//    en la posición 23 de la cadena

// includes - verifica si contiene un substring
console.log(frase.includes('genial')) // true
console.log(frase.includes('Python')) // false

// startsWith y endsWith
console.log(frase.startsWith('JavaScript')) // true
console.log(frase.endsWith('potente')) // true

console.log(frase.startsWith('Python')) // false
// -> significa que la cadena de texto NO comienza con 'Python'

// NOTE: Metodos de transformacion
let texto = '  JavaScript Programming  '

// Cambio de caso
console.log(texto.toLowerCase()) // "  javascript programming  "
console.log(texto.toUpperCase()) // "  JAVASCRIPT PROGRAMMING  "

// Eliminación de espacios
console.log(texto.trim()) // "JavaScript Programming"
console.log(texto.trimStart()) // "JavaScript Programming  "
console.log(texto.trimEnd()) // "  JavaScript Programming"

// Reemplazo
frase = 'Me gusta Python y Python es genial'
console.log(frase.replace('Python', 'JavaScript'))
// "Me gusta JavaScript y Python es genial"

// replaceAll - reemplaza todas las ocurrencias
console.log(frase.replaceAll('Python', 'JavaScript'))
// "Me gusta JavaScript y JavaScript es genial"

//note: division y union
// split - convierte string en array
let lenguajes = 'JavaScript,Python,Java,C++'
let arrayLenguajes = lenguajes.split(',')
console.log(arrayLenguajes) // ["JavaScript", "Python", "Java", "C++"]

frase = 'Hola mundo JavaScript'
let palabras = frase.split(' ')
console.log(palabras) // ["Hola", "mundo", "JavaScript"]

// repeat - repite el string
let risa = 'ja'
console.log(risa.repeat(3)) // "jajaja"

// padStart y padEnd - rellena el string
let numero = '5'
console.log(numero.padStart(3, '0')) // "005"
console.log(numero.padEnd(3, '0')) // "500"

//note: verificacion
let codigo = 'ABC123'

// charAt - obtiene el carácter en una posición
console.log(codigo.charAt(0)) // "A"
console.log(codigo.charAt(3)) // "1"

// charCodeAt - obtiene el código Unicode
console.log(codigo.charCodeAt(0)) // 65 (código de 'A')

// match - busca coincidencias con expresiones regulares
let email = 'usuario@example.com'
let resultado = email.match(/@(.+)\./)
console.log(resultado[1]) // "example"

// Caracteres de escape
let comillas = "Él dijo: \"Hola mundo\""
let comillasSimples = 'It\'s a beautiful day'

console.log(comillas) // "Él dijo: "Hola mundo""
console.log(comillasSimples) // "It's a beautiful day"
// Caracteres especiales
let barra = 'C:\\Users\\Documents'
console.log(barra) // "C:\Users\Documents"

// Unicode
let emoji = '❤️' // ❤️
let emojiUnicode = '\u2764\uFE0F' // ❤️

let simbolo = '\u00A9' // ©

// procesamiento de datos
// Limpiar y procesar datos CSV
let csvData = 'nombre,edad,ciudad\nJuan,25,Madrid\nAna,30,Barcelona'
let lineas = csvData.split('\n')
let headers = lineas[0].split(',')
let datos = lineas.slice(1).map((linea) => linea.split(','))

console.log(headers) // ["nombre", "edad", "ciudad"]
console.log(datos) // [["Juan", "25", "Madrid"], ["Ana", "30", "Barcelona"]]