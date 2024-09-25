import createElement from './index.js';

function createMenu() {
    const menu = document.createElement('div');
    menu.classList.add('menu');

    const para = createElement('p', 'The worlds laziest menu');
    menu.appendChild(para);

    return menu;
}

function loadMenu() {
    const content = document.getElementById('content');
    content.appendChild(createMenu());
}

export default loadMenu;