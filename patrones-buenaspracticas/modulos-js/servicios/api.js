// servicios/api.js
// Una responsabilidad: comunicación con el servidor.
// Usa CONFIG para que si la URL cambia, solo se toque config.js.

import { API_URL } from '../config.js'

export async function obtenerUsuarios() {
  const respuesta = await fetch(`${API_URL}/users`)
  return respuesta.json()
}

export async function obtenerUsuario(id) {
  const respuesta = await fetch(`${API_URL}/users/${id}`)
  return respuesta.json()
}
