// utils/index.js — Barrel File
// Re-exporta todo lo de la carpeta utils desde un solo punto.
//
// SIN barrel file (verboso):
//   import { formatearFecha } from './utils/formatear.js'
//   import { esEmailValido }  from './utils/validar.js'
//
// CON barrel file (limpio):
//   import { formatearFecha, esEmailValido } from './utils/index.js'
//
// ⚠️ Úsalo solo si la carpeta es pequeña y sin efectos secundarios.

export { formatearFecha, formatearMoneda, formatearNombre } from './formatear.js'
export { esEmailValido, esNumeroPositivo } from './validar.js'
