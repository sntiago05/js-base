/*
El error fatal de intentar leer una propiedad de undefined
*/
const gamesystem = {
    name: 'PS5',
    price: 550,
    specs: {
        cpu: 'AMD Ryzen Zen 2',
        gpu: 'AMD Radeon RDNA 2',
    }
}
/*
console.log(gamesystem.name) // -> PS5

console.log(gamesystem.specifications) // -> undefined

console.log(gamesystem.specifications.ram) 
//Uncaught TypeError: Cannot read property 'ram' of undefined

//evitando el error con if
if (typeof gamesystem.specifications === 'object') {
  console.log(gamesystem.specifications.ram)
} else {
  console.log('No hay especificaciones')
}
//pero si especifications es null igual va entrar pq typeof null === object

// Operador in para comprobar si la propiedad existe 
console.log('name' in gamesystem) // -> true
console.log('specifications' in gamesystem) // -> false
console.log('specs' in gamesystem) // -> true

if ('specifications' in gamesystem) {
  console.log(gamesystem.specifications.ram)
} else {
  console.log('No hay especificaciones')
}
// pero si la propiedad existe pero es undenifed devuelve true igual!
// habreia que hacer una comprobacion mas fuerte
if (
  'specifications' in gamesystem &&
  gamesystem.specifications !== undefined &&
  gamesystem.specifications !== null) {
  console.log(gamesystem.specifications.ram)
} else {
  console.log('No hay especificaciones')
}
const user = {
  name: 'Peter',
  settings: {
    theme: 'dark',
    notifications: {
      email: true,
      push: false,
      marketing: undefined
    }
  }
}*/
const user = {
    name: 'Peter',
    settings: {
        theme: 'dark',
        notifications: {
            email: true,
            push: false,
            marketing: undefined
        }
    }
}
// la forma clásica de acceder a una propiedad anidada
// de forma segura
let email = undefined
if (user && user.settings &&
    user.settings.notifications &&
    user.settings.notifications.email) {
    email = user.settings.notifications.email
}

let o = { sand: { animal: "pulpo" } }

searchInOcean(o,"deep","treasure")

function searchInOcean(ocean, section, item) {
    console.log(ocean?.[section]?.[item]!= null," desde funcion");
    return ocean?.[section]?.[item] != null
}


/*console.log(email) // -> true

// con Optional Chaining Operator
const email2 = user?.settings?.notifications?.email
console.log(email2) // -> true*/