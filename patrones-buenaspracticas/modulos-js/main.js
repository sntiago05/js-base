// main.js — Punto de entrada del proyecto
// Aquí se orquesta la aplicación usando todos los módulos.

import { obtenerUsuarios } from './servicios/api.js'
import { formatearNombre } from './utils/formatear.js'
// O con barrel file:
// import { formatearNombre } from './utils/index.js'

async function main() {
  const usuarios = await obtenerUsuarios()

  // Cada función hace una sola cosa (responsabilidad única)
  usuarios
    .map(formatearNombre)
    .forEach(nombre => console.log(nombre))
}

main()
