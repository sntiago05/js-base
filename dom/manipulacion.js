// textcontent  permite leer y modificar el texto
const titulo = document.querySelector('#titulo')

// Leer el contenido
console.log(titulo.textContent) // "¡Hola Mundo!"

// Modificar el contenido
titulo.textContent = "¡Hola JavaScript!"
titulo.textContent = "Contador: " + contador
titulo.textContent = `Usuario: ${nombreUsuario}`

// innerHTML leer y modificar el html completo
const contenedor = document.querySelector('#contenedor')

// Leer el HTML
console.log(contenedor.innerHTML)

// Modificar con HTML
contenedor.innerHTML = '<p>Nuevo párrafo con <strong>texto en negrita</strong></p>'
contenedor.innerHTML = `
  <div class="card">
    <h3>${titulo}</h3>
    <p>${descripcion}</p>
    <button>Ver más</button>
  </div>
`
// Modificar atributos 

const imagen = document.querySelector('#mi-imagen')
const enlace = document.querySelector('#mi-enlace')

// Leer atributos
console.log(imagen.getAttribute('src'))
console.log(imagen.getAttribute('alt'))
console.log(enlace.getAttribute('href'))

// Modificar atributos
imagen.setAttribute('src', 'nueva-imagen.jpg')
imagen.setAttribute('alt', 'Nueva descripción')
enlace.setAttribute('href', 'https://ejemplo.com')
enlace.setAttribute('target', '_blank')

//Note: propiedades directas
const input = document.querySelector('#email')
const checkbox = document.querySelector('#acepto-terminos')

// Propiedades comunes
input.value = 'nuevo@email.com'
input.placeholder = 'Introduce tu email'
checkbox.checked = true
enlace.href = 'https://nueva-url.com'

// Atributos booleanos
input.disabled = true
input.required = false
checkbox.checked = true

// Eliminar atributos
imagen.removeAttribute('width')
imagen.removeAttribute('height')

// Verificar si tiene un atributo
if (imagen.hasAttribute('data-id')) {
    console.log('La imagen tiene data-id')
}

// modificar estilos css
const caja = document.querySelector('#caja')

// Modificar estilos individuales
caja.style.backgroundColor = 'red'
caja.style.color = 'white'
caja.style.fontSize = '20px'
caja.style.margin = '10px'
caja.style.display = 'none' // Ocultar elemento

// Propiedades CSS con guiones se convierten a camelCase
caja.style.borderRadius = '10px' // border-radius
caja.style.textAlign = 'center'  // text-align
// son estilos inline por lo cual tienen alta prioridad

// NOTE: mejor practica usar clases css
const elemento = document.querySelector('#mi-elemento')

// Añadir clases
elemento.classList.add('destacado')
elemento.classList.add('activo', 'importante') // Múltiples clases

// Eliminar clases
elemento.classList.remove('oculto')
elemento.classList.remove('activo', 'destacado')

// Alternar clase (toggle)
elemento.classList.toggle('activo') // Si la tiene la quita, si no la tiene la pone

// Verificar si tiene una clase
if (elemento.classList.contains('activo')) {
    console.log('El elemento está activo')
}

// Reemplazar una clase por otra
elemento.classList.replace('viejo', 'nuevo')

// crear elementos
// Crear un nuevo elemento
const nuevoParrafo = document.createElement('p')
const nuevaImagen = document.createElement('img')
const nuevoBoton = document.createElement('button')

// Configurar el elemento
nuevoParrafo.textContent = 'Este es un párrafo creado con JavaScript'
nuevoParrafo.classList.add('parrafo-dinamico')

nuevaImagen.src = 'imagen.jpg'
nuevaImagen.alt = 'Descripción de la imagen'

nuevoBoton.textContent = 'Click me'
nuevoBoton.classList.add('btn', 'btn-primary')

// añadir elementos al dom
//appendChild() - Añadir al final
// insertBefore() - Insertar en posición específica
const lista = document.querySelector('#lista')
const primerItem = lista.querySelector('li')

const nuevoItem = document.createElement('li')
nuevoItem.textContent = 'Insertado al principio'

// Insertar antes del primer elemento
lista.insertBefore(nuevoItem, primerItem)

// Insertar antes de null = insertar al final (como appendChild)
lista.insertBefore(otroItem, null)

// insertAdjacentHTML() - Insertar HTML en posiciones específicas
const elemento2 = document.querySelector('#elemento')

// beforebegin: antes del elemento
elemento2.insertAdjacentHTML('beforebegin', '<p>Antes del elemento</p>')

// afterbegin: al principio del contenido del elemento
elemento2.insertAdjacentHTML('afterbegin', '<span>Al principio</span>')

// beforeend: al final del contenido del elemento
elemento2.insertAdjacentHTML('beforeend', '<span>Al final</span>')

// afterend: después del elemento
elemento2.insertAdjacentHTML('afterend', '<p>Después del elemento</p>')

// eliminar elemnto
elemento.remove()
// eliminar hijo
const contenedor = document.querySelector('#contenedor')
const elementoAEliminar = document.querySelector('#hijo-a-eliminar')

// Eliminar un hijo específico
contenedor.removeChild(elementoAEliminar)
