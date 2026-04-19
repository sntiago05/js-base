//importaciones dinámicas: cargan módulos bajo demanda, cuando realmente los necesitas.
/*
Características del import dinámico:
    Se puede usar en cualquier parte del código (dentro de funciones, condicionales, etc.).
    Devuelve una Promesa que se resuelve con el módulo.
    El módulo se carga solo cuando se ejecuta esa línea.
    Perfecto para cargar código bajo demanda.

*/
// Note: const { default: Usuario } = await import('./Usuario.js') destrucuracion de default
// Se carga solo cuando ejecutas esta línea
const modulo = await import('./export.js')
console.log(modulo.sumar(2, 3));

// import devuelve una promesa asi que sirve tanto con .then como con async/await

// async
async function cargarModulo() {
    const { sumar, restar } = await import('./export.js')
    console.log(sumar(2, 3))  // 5
    console.log(restar(10, 4)) // 6
}

cargarModulo()
// .then
import('./export.js').then(modulo => {
    console.log(modulo.sumar(2, 3))  // 5
    console.log(modulo.restar(10, 4)) // 6
})

// importar default 
const modulo2 = await import('./export.js')
const Usuario = modulo.default
const user = new Usuario('Ana')
console.log(user.saludar());


// casos de uso practico

/*
carga el modulo si se cumple una condicion
const idioma = navigator.language

if (idioma.startsWith('es')) {
  const { saludos } = await import('./i18n/es.js')
  console.log(saludos.bienvenida) // '¡Hola!'
} else {
  const { saludos } = await import('./i18n/en.js')
  console.log(saludos.bienvenida) // 'Hello!'
} */

/*
Cargar funcionalidad pesada solo cuando el usuario la necesita:
// Solo cargamos el editor cuando el usuario hace clic
const boton = document.querySelector('#abrir-editor')

boton.addEventListener('click', async () => {
const { crearEditor } = await import('./editor.js')
crearEditor()
})
*/

/*
Construir la ruta del módulo con variables. Esto no es posible con import estático:
async function cargarPagina(nombrePagina) {
  const modulo = await import(`./paginas/${nombrePagina}.js`)
  modulo.renderizar()
}

cargarPagina('inicio')    // carga ./paginas/inicio.js
cargarPagina('contacto')  // carga ./paginas/contacto.js
*/

/*
modulos opcionales
async function cargarAnalytics() {
  try {
    const { iniciar } = await import('./analytics.js')
    iniciar()
  } catch (error) {
    console.warn('Analytics no disponible:', error.message)
    // La aplicación sigue funcionando sin analytics
  }
}
*/

// import dinamico y rendimiento
/*
in code splitting:
┌──────────────────────────────────┐
│  bundle.js (500 KB)              │
│  ┌────┐ ┌────┐ ┌────┐ ┌──────┐  │
│  │App │ │Edit│ │Graf│ │Admin │  │
│  └────┘ └────┘ └────┘ └──────┘  │
└──────────────────────────────────┘
→ El usuario descarga TODO aunque solo use App

Con code splitting:
┌──────────────┐
│ app.js (50KB)│  ← Se carga siempre
└──────────────┘
  ┌──────────────┐
  │ editor.js    │  ← Solo cuando abre editor
  └──────────────┘
  ┌──────────────┐
  │ graficas.js  │  ← Solo cuando ve gráficas
  └──────────────┘
  ┌──────────────┐
  │ admin.js     │  ← Solo si es administrador
  └──────────────┘
→ Carga inicial mucho más rápida
*/