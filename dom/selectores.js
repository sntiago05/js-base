/*
querySelector()	Primer elemento o null	Media
querySelectorAll()	NodeList	Media
getElementById()	Elemento o null	Rápida	
getElementsByClassName()	HTMLCollection	Rápida	
getElementsByTagName()	HTMLCollection	Rápida
*/
const elementoQueNoExiste = document.querySelector('#no-existe')
console.log(elementoQueNoExiste) // null

// Siempre verificar antes de usar
if (elementoQueNoExiste) {
    // Solo se ejecuta si el elemento existe
    console.log(elementoQueNoExiste.textContent)
} else {
    console.log('El elemento no fue encontrado')
}

// Forma más concisa
const titulo = document.querySelector('#titulo')
titulo?.classList.add('activo')

// consejos para debugging
// Ver qué elementos has seleccionado
const elementos = document.querySelectorAll('.mi-clase')
console.log('Elementos encontrados:', elementos.length)
console.log('Elementos:', elementos)

// Inspeccionar un elemento específico
const boton = document.querySelector('#mi-boton')
console.log('Botón:', boton)
console.log('Texto del botón:', boton?.textContent)
console.log('Clases del botón:', boton?.className)