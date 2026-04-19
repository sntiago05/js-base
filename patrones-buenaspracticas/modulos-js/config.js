// config.js
// Patrón: Módulo de Configuración
// Centraliza toda la configuración en un solo lugar.
// Si cambia la URL de la API, solo tocas este archivo.

export const CONFIG = {
  apiUrl: 'https://jsonplaceholder.typicode.com',
  maxIntentos: 3,
  timeout: 5000,
  idioma: 'es'
}

// Constantes con SCREAMING_SNAKE_CASE
export const MAX_INTENTOS = 3
export const API_URL = 'https://jsonplaceholder.typicode.com'
