console.log('Happy developing ✨')
import "./styles.css";

console.log('Happy developing ✨')
import loadHome from './home.js';
import "./styles.css";
function createNavbar() {
    const nav = document.createElement('nav');

    const homeBtn = document.createElement('button');
    homeBtn.textContent = 'Inicio';
    homeBtn.addEventListener('click', () => loadPage(loadHome));
    nav.append(homeBtn);
    return nav;

}

function loadPage(loadFunction) {
    const content = document.getElementById('content');
    content.innerHTML = ''; // 🔥 Limpiar contenido anterior
    content.appendChild(loadFunction()); // 🔥 Cargar nueva sección
}

// Cargar la página inicial
document.addEventListener('DOMContentLoaded', () => {
    const content = document.getElementById('content');
    document.body.insertBefore(createNavbar(), content);
    loadPage(loadHome);
});