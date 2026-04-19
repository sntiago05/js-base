# 📦 Patrones y Buenas Prácticas con Módulos JS

Fuente: https://www.aprendejavascript.dev/clase/modulos/patrones-y-buenas-practicas

---

## 1. Estructura de un proyecto con módulos

Organiza el código por **responsabilidad**. Cada archivo hace una sola cosa:

```
mi-proyecto/
├── index.html
├── main.js              ← Punto de entrada
├── config.js            ← Configuración centralizada
├── utils/
│   ├── index.js         ← Barrel file
│   ├── formatear.js
│   ├── validar.js
│   └── calcular.js
├── servicios/
│   ├── index.js
│   ├── api.js
│   └── auth.js
└── componentes/
    ├── index.js
    ├── header.js
    └── footer.js
```

---

## 2. Barrel Files (archivos barril)

Un `index.js` que **agrupa y re-exporta** todo lo de una carpeta.

**Ventajas:**
- ✅ Imports más limpios (una sola ruta)
- ✅ Refactorización fácil
- ✅ Define la API pública de la carpeta

**Cuándo NO usarlos:**
- ❌ Carpeta con un solo archivo
- ❌ Carpetas muy grandes (puede romper el tree shaking)

**⚠️ Peligros:**
1. **Destrozan el tree shaking** — el bundler puede cargar todo el barrel aunque solo necesites una función
2. **Compilación más lenta** — en proyectos grandes con barrel files anidados
3. **Facilitan dependencias circulares**
4. **Dificultan rastrear el origen del código**

> 💡 Úsalos solo en carpetas pequeñas con pocos módulos y sin efectos secundarios.

---

## 3. Un módulo, una responsabilidad

```
❌ mega-utils.js          →   todo mezclado
✅ utils/formatear.js     →   solo formato
✅ utils/validar.js       →   solo validación
✅ utils/calcular.js      →   solo cálculo
✅ servicios/api.js       →   solo llamadas al servidor
```

---

## 4. Convenciones de nombrado

| Tipo              | Convención           | Ejemplo                    |
|-------------------|----------------------|----------------------------|
| Archivos utilidad | kebab-case           | `mi-funcion.js`            |
| Archivos de clase | PascalCase           | `MiClase.js`               |
| Funciones/vars    | camelCase            | `calcularTotal()`          |
| Clases            | PascalCase           | `CarritoCompra`            |
| Constantes fijas  | SCREAMING_SNAKE_CASE | `MAX_INTENTOS`, `API_URL`  |

---

## 5. Patrón: Módulo de Configuración

Centraliza la configuración en un solo archivo (`config.js`). Si cambia algo (URL, timeout…), solo tocas ese archivo.

---

## 6. Patrón: Fachada (Facade)

Simplifica una API compleja creando un módulo intermediario. Si cambias la tecnología interna (ej. de `localStorage` a otra), solo cambias la fachada, no todo el proyecto.

---

## 7. Errores Habituales

### Dependencia circular
```
❌ a.js importa de b.js → b.js importa de a.js → 💥 undefined
✅ Solución: extraer lo compartido a un tercer archivo (compartido.js)
```

### Olvidar la extensión `.js`
```
❌ import { sumar } from './operaciones'       // Error en navegador
✅ import { sumar } from './operaciones.js'    // Correcto
```
> Con bundlers (Vite, Webpack) puedes omitir la extensión.

### Importar sin usar
```
❌ import { sumar, restar, multiplicar } from './operaciones.js'
✅ import { sumar } from './operaciones.js'   // Solo lo que necesitas
```
