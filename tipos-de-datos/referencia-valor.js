function increaseScore(currentScore) {
  currentScore = currentScore + 10 // Modificamos la copia local de la función
  console.log('Dentro de la función:', currentScore) // -> 110
}

// Creamos el valor original
let initialScore = 100

// Pasamos el valor original a la función y, al ser primitivo
// se crea una copia de ese valor
increaseScore(initialScore)

// El valor original no ha cambiado
console.log('Fuera de la función:', initialScore) // -> 100

// Cuando trabajamos con objetos (incluyendo arrays), 
// la asignación o el paso como argumento no crea una 
// copia del objeto. En su lugar, se copia la referencia
//  (la dirección en memoria donde está almacenado el objeto).
//  Esto significa que ambas variables (la original y la nueva, 
// o el parámetro de la función y la variable original) apuntan al mismo objeto en memoria.
// Ejemplo de asignación con objetos
let player1 = { name: 'midu', hp: 100 }
let player2 = player1 // player2 ahora apunta al *mismo* objeto que player1

player2.hp = 50 // Modificamos el objeto a través de player2

console.log(player1.hp) // -> 50 (¡El objeto original ha cambiado!)
console.log(player2.hp) // -> 50

function addMember(teamArray, member) {
  teamArray.push(member) // Modificamos el array original a través de su referencia
  console.log('Dentro de la función:', teamArray)
}

let myTeam = ['SpiderMan', 'IronMan']

addMember(myTeam, 'Hulk') // ['SpiderMan', 'IronMan', 'Hulk']

console.log('Fuera de la función:', myTeam)
// -> ['SpiderMan', 'IronMan', 'Hulk'] (¡El array original ha cambiado!)