console.log('Happy developing ✨')
import "./styles.css";

console.log('Happy developing ✨')
import loadHome from './home.js';
import "./styles.css";
function createNavbar() {
    const nav = document.createElement('nav');
    const ul = document.createElement('ul');

    const homeItem = document.createElement('li');
    const homeLink = document.createElement('a');
    homeLink.textContent = 'Home';
    homeLink.href = '#';
    homeLink.style.cursor = 'pointer';

    homeLink.addEventListener('click', (event) => {
        event.preventDefault(); // Prevents the page from jumping
        loadPage(loadHome);
    });

    homeItem.appendChild(homeLink);
    ul.appendChild(homeItem);
    nav.appendChild(ul);

    return nav;
}

function loadPage(loadFunction) {
    const content = document.getElementById('content');
    content.innerHTML = ''; // 🔥 Limpiar contenido anterior
    content.appendChild(loadFunction()); // 🔥 Cargar nueva sección
}

document.addEventListener('DOMContentLoaded', () => {
    const content = document.getElementById('content');
    document.body.insertBefore(createNavbar(), content);
    loadPage(loadHome);
});