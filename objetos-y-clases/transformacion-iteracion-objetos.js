const spiderman = {
    name: 'Spidey',
    universe: 42,
    powers: ['web', 'invisibility', 'spider-sense']
}
let list = document.createElement("ul")
for (const property in spiderman) {
    let item = document.createElement("li")
    item.innerText = `${property}: ${spiderman[property]}`
    list.appendChild(item)
}
document.querySelector("body").appendChild(list)

// array con propiedades enumerables de un objeto 

const properties = Object.keys(spiderman)
properties.forEach(p => console.log(p));

// array con valores

const values = Object.values(spiderman)
values.forEach(v => console.log(v));
// entries array de arrays donde cad sub array es un par
const entries = Object.entries(spiderman)
entries.forEach(e => console.log(e))

let uwu = false;
console.log(typeof uwu === "boolean");

const mock = { a: true, b: 42, c: false }
/*
function getKeysOfBooleanValues(obj) {
    let arr = []
    for (let pair of Object.entries(obj)) {
        console.log(typeof pair[1] === "boolean");

        if (typeof pair[1] === "boolean") {

            arr = arr.concat(pair[0])
        }
    }
    return arr
}*
/*
function getKeysOfBooleanValues(obj){
    return Object.entries(obj).filter(([k,v])=>{
        return typeof v == "boolean"
    }).map(([key])=>key)
}*/

function getKeysOfBooleanValues(obj){
    return Object.entries(obj).reduce((acc,[k,v])=>{
        if (typeof v === "boolean"){
            acc.push(k)
        }
        return acc
    },[])
}