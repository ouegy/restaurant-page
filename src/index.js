import './styles.css';
import loadHome from './home';
import loadMenu from './menu';
import loadContact from './contact';

function replaceChildren() {
    const content = document.getElementById('content');
    content.replaceChildren();
}

function createElement(tag, text, classes) {
    const heading = document.createElement(tag);
    heading.textContent = text;
    heading.classList.add(classes);
    return heading;
 }

window.onload = (event) => {
    loadHome();
    getTab();
}

function getTab() {
    const links = Array.from(document.getElementsByClassName('links'));
    console.log(links);
    links.forEach((item) => {
        item.addEventListener('click', function(e) {
            let tab = e.target.textContent;
            switchTab(tab);
        });
    });
}

function switchTab(tab) {
    switch (tab) {
        case 'Home':
            replaceChildren();
            loadHome();
            break;
        case 'Contact':
            replaceChildren();
            loadContact();
            break;
        case 'Menu':
            replaceChildren();
            loadMenu();
            break;
    
        default:
            loadHome();
            break;
    }
}

export default createElement;