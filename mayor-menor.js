
/*
En una biblioteca queremos saber qué libro es el que menos páginas tiene y el que más páginas. Por suerte, no hay dos libros con el mismo número de páginas.
Necesitamos que la función reciba un array de números, sin ordenar, y que devuelva un array de dos posiciones con el índice del libro con menos páginas 
y el índice del libro con más páginas.*/


function minAndMaxWord(words) {
    let max = words[0]
    let min = words[0]
    let maxIdx = 0
    let minIdx = 0
    words.forEach((element,idx) => {
        if (element< min){
            min = n
            minIdx = idx
        }
        if (element> max){
            max = n
            maxIdx = idx
        }
    });
    return [minIdx, maxIdx]
}