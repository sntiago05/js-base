//filter 
const numbers = [1, 2, 3, 4, 5, 6, 7]

const evenNumbers = numbers.filter(n => n %2 == 0)
console.log(evenNumbers);

const strings = ['hola', 'adiós', 'casa', 'coche', 'perro', 'gato']

const stringWithA = strings.filter(s =>
    s.includes("a")
)
console.log(stringWithA);


// map
const numbersSquare = numbers.map(n => n**2)
console.log(numbersSquare);

const stringLengths = strings.map(s=> s.length)
console.log(stringLengths);

// map + filter

const numsGreaterThanFive = numbers
  .map(number => number * 2) 
  .filter(number => number > 5) 

console.log(numsGreaterThanFive)

// reduce
// la funcion del primer parametro del reduce recibe 3 parametros
// el acumulador, el elemento actual, el indice del elemento actual
const sum =  numbers.reduce((acumulator,currentN) => acumulator + currentN,0)
console.log(sum);

// forma de hacer el doble de un numero y quedamer con los mayores a 5 con reduce
// y en un array
const doubleEvenNumbers = numbers.reduce((acc,element)=>{
    const isEven = element %2==0
    const double = element*2
    const isGreaterThanFive = double > 5
    if (isEven && isGreaterThanFive){
        return acc.concat(double)
    }else{
        return acc
    }
},[])

console.log(doubleEvenNumbers);
