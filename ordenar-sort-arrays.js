/*
Para personalizar cómo sort() ordena los elementos, puedes pasar una función de comparación como argumento. La función de comparación debe devolver:

    Un valor negativo si el primer argumento debe aparecer antes que el segundo.
    Un valor positivo si el segundo argumento debe aparecer antes que el primero.
    Cero si ambos argumentos son iguales.
*/
let numeros = [5, 10, 2, 25, 7]

numeros.sort(function (a, b) {
    return a - b
})

console.log(numeros) // [2, 5, 7, 10, 25]
// numeros.sort((a, b) => a - b)
// toSorted() devuelve un array nuevo