import loadContact from "./contact";

console.log('Happy developing ✨')
import loadHome from './home.js';
import loadMenu from "./menu";
import "./styles.css";
function createNavbar() {
    const nav = document.createElement('nav');
    const ul = document.createElement('ul');
    const pizzeriaName = document.createElement('li');
    pizzeriaName.textContent = "La Bella Vita Pizzeria";
    pizzeriaName.classList.add('pizzeria-name');
    ul.appendChild(pizzeriaName);
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

    const menuItem = document.createElement('li');
    const menuLink = document.createElement('a');
    menuLink.textContent = 'Menu';
    menuLink.href = '#';
    menuLink.style.cursor = 'pointer';

    menuLink.addEventListener('click', (event) => {
        event.preventDefault(); // Prevents the page from jumping
        loadPage(loadMenu);
    });
    menuItem.appendChild(menuLink);
    ul.appendChild(menuItem);
    const contactItem = document.createElement('li');
    const contactLink = document.createElement('a');
    contactLink.textContent = 'Contact';
    contactLink.href = '#';
    contactLink.style.cursor = 'pointer';
    contactLink.addEventListener('click', (event) => {
        event.preventDefault(); // Prevents the page from jumping
        loadPage(loadContact);
    });
    contactItem.appendChild(contactLink);
    ul.appendChild(contactItem);
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