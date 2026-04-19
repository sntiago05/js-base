// utils/formatear.js
// Una responsabilidad: funciones de formato

export function formatearFecha(fecha) {
  return fecha.toLocaleDateString('es-ES')
}

export function formatearMoneda(cantidad) {
  return cantidad.toFixed(2) + ' €'
}

export function formatearNombre(usuario) {
  return `${usuario.name} (${usuario.email})`
}
