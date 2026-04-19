// almacenamiento.js
// Patrón Fachada (Facade)
//
// Simplifica la API de localStorage.
// Si mañana cambias de localStorage a IndexedDB u otra tecnología,
// solo modificas ESTE archivo. El resto del código no cambia.

export function guardar(clave, valor) {
  localStorage.setItem(clave, JSON.stringify(valor))
}

export function leer(clave) {
  const valor = localStorage.getItem(clave)
  return valor ? JSON.parse(valor) : null
}

export function eliminar(clave) {
  localStorage.removeItem(clave)
}

// Uso en app.js:
// import { guardar, leer } from './almacenamiento.js'
// guardar('usuario', { nombre: 'Ana', edad: 25 })
// const usuario = leer('usuario')
// console.log(usuario.nombre) // 'Ana'
