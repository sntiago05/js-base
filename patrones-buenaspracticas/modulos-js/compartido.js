// ❌ PROBLEMA: Dependencia Circular
// ──────────────────────────────────
// a.js importa de b.js, y b.js importa de a.js → 'a' puede ser undefined

// a.js (PROBLEMA)
// import { b } from './b.js'
// export const a = 'A usa ' + b   // 💥 b puede no estar listo aún

// b.js (PROBLEMA)
// import { a } from './a.js'
// export const b = 'B usa ' + a   // 💥 a puede ser undefined


// ✅ SOLUCIÓN: Extraer lo compartido a un tercer módulo
// ──────────────────────────────────────────────────────

// compartido.js
export const valorBase = 'base'

// a.js (CORRECTO)
// import { valorBase } from './compartido.js'
// export const a = 'A: ' + valorBase   ✅

// b.js (CORRECTO)
// import { valorBase } from './compartido.js'
// export const b = 'B: ' + valorBase   ✅
