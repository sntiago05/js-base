const persona = {
    name: 'Dani',
    age: 30,
    isWorking: true,
    family: ['Miguel', 'Maria'], // array
    address: { // otro objeto
        street: 'Calle de la piruleta',
        number: 13,
        city: 'Barcelona'
    },
    walk: () => "estoy caminando"

}
// acceder a las propiedades y metodos
console.log(persona.address.city);
let title = document.querySelector(".title")
title.textContent = persona.address.city

// acceder por variable
const property = 'name'
console.log(persona[property]);
let title2 = document.createElement("h1")
// metodos
title2.innerText = persona.walk()
document.querySelector("body").appendChild(title2)
console.log(persona["walk"]() + " desde corchetes")

//añadir y eliminar propiedades

persona.work = () => "estoy trabajando"
console.log(persona.work());
console.log(persona);

delete persona.work
console.log(persona);

/*function createObject(name, subs) {
  return {
    name,
    subscribers: subs,
    getStatus() {
      return `El canal de ${this.name} tiene ${this.subscribers} suscriptores`
    }
  }
} */
//destructuracion
const spiderman = {
  name: 'Spidey',
  universe: 42,
  powers: ['web', 'invisibility', 'spider-sense'],
  partner: {
    name: 'Mary Jane',
    universe: 42,
    powers: ['red hair', 'blue eyes']
  }
}

const {universe} = spiderman
console.log(universe) 
const {name:name_obj, universe:universe2, powers} = spiderman
console.log(name_obj);
console.log(universe2);
console.log(powers);

const {name:nombre2, isAvenger = false} = spiderman
console.log(nombre2);
console.log(isAvenger);

const {partner:{name}} = spiderman
/*
const {partner} = spiderman
const {name} = partner
*/