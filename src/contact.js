import createElement from './index.js';

function createContact() {
    const contact = document.createElement('div');
    contact.classList.add('contact');

    const para = createElement('p', 'The worlds laziest contact page');
    menu.appendChild(para);

    contact.appendChild(para);

    return contact;
}

function loadContact() {
    const content = document.getElementById('content');
    content.appendChild(createContact());
}

export default loadContact;