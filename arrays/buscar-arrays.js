const numbers = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9]

const tieneNumeroMayorA5 = numbers.some(number => {
    console.log(`Estoy iterando sobre el número ${number}`) // -> Imprime hasta el número 6
    return number > 5
})

console.log(tieneNumeroMayorA5) // -> true

const names = ['Leo', 'Isa', 'Ían', 'Lea']

const tieneNombreLargo = names.some(name => name.length > 3)
console.log(tieneNombreLargo) // -> false
const emojis = ['✨', '🥑', '😍']

const posicionCorazon = emojis.indexOf('😍')

console.log(posicionCorazon) // -> 2

const tieneCorazon = emojis.includes('😍')

console.log(tieneCorazon) // -> true

const todosSonFelices = emojis.every(emoji => emoji === '😀')
console.log(todosSonFelices) // -> false
const todosSonPares = numbers.every(number => number % 2 === 0)
console.log(todosSonPares) // -> false
const todosLosNombresSonLargos = names.every(name => name.length > 3)
console.log(todosLosNombresSonLargos) // -> false

//find retorna el primer elemento que cumple con la condicion si no encuentra devuelve undefined
//findIndex devuelve el indice del primer elemento que cumple con la condicion sino encuentra devuelve -1