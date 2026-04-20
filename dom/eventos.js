//addEventListener() es el método moderno y recomendado para escuchar eventos
// elemento.addEventListener('tipoDeEvento', funcionQueSeEjecuta)

/*
Tipos de eventos comunes
click - Click del mouse
dblclick - Doble click
mouseenter y mouseleave - Entrar y salir con el mouse

Eventos de teclado
keydown - Cuando se presiona una tecla
keyup - Cuando se suelta una tecla:

input.addEventListener('keyup', (evento) => {
  console.log('Tecla soltada:', evento.key)
  console.log('Valor actual del input:', input.value)
})
Eventos de formulario
submit - Envío de formulario
input - Cambio en input (en tiempo real):
const input = document.querySelector('#busqueda')

input.addEventListener('input', () => {
  console.log('Usuario escribiendo:', input.value)
  // Ideal para búsquedas en tiempo real
})
change - Cambio en input (cuando pierde el foco)
const select = document.querySelector('#pais')

select.addEventListener('change', () => {
  console.log('País seleccionado:', select.value)
})
  eventos de ventana:
  load - Cuando la página termina de cargar
  resize - Cuando se redimensiona la ventana
*/
window.addEventListener('resize', () => {
    console.log('Ventana redimensionada')
    console.log('Nuevo ancho:', window.innerWidth)
    console.log('Nueva altura:', window.innerHeight)
})

// El objeto event lo crea js y contien info util
boton.addEventListener('click', (evento) => {
    console.log('Objeto evento:', evento)
    console.log('Tipo de evento:', evento.type)        // 'click'
    console.log('Elemento que disparó:', evento.target) // El botón
    console.log('Posición X:', evento.clientX)         // Posición del click
    console.log('Posición Y:', evento.clientY)
})
// Propiedades útiles del objeto Event
input.addEventListener('keydown', (evento) => {
    console.log('Tecla:', evento.key)           // Tecla presionada
    console.log('Código:', evento.code)         // Código físico de la tecla
    console.log('Ctrl presionado:', evento.ctrlKey)  // true/false
    console.log('Shift presionado:', evento.shiftKey) // true/false
    console.log('Alt presionado:', evento.altKey)     // true/false
})
/*
preventDefault() - Prevenir comportamiento por defecto
 const enlace = document.querySelector('#mi-enlace')

enlace.addEventListener('click', (evento) => {
  evento.preventDefault() // Evita que el enlace navegue
  console.log('Click en enlace, pero no navega')
})

const formulario = document.querySelector('#formulario')

formulario.addEventListener('submit', (evento) => {
  evento.preventDefault() // Evita que se recargue la página
  console.log('Formulario procesado sin recargar')
})

 */