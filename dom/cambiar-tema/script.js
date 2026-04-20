const btnToggleTheme = document.querySelector('#toggle-theme')
const body = document.body
let temaOscuro = false

btnToggleTheme.addEventListener('click', () => {
    temaOscuro = !temaOscuro
    if (temaOscuro) {
        body.classList.add('dark-theme')
        btnToggleTheme.textContent = '☀️ Modo Claro'
    } else {
        body.classList.remove('dark-theme')
        btnToggleTheme.textContent = '🌙 Modo Oscuro'
    }
})