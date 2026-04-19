// utils/validar.js
// Una responsabilidad: funciones de validación

export function esEmailValido(email) {
  return email.includes('@') && email.includes('.')
}

export function esNumeroPositivo(n) {
  return typeof n === 'number' && n > 0
}
