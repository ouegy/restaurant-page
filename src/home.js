import logo from './img/logo.png';
import hero from './img/hero.jpg';
import leaf from './img/leaf-circle.svg';
import createElement from './index.js';

function createHome() {
    const home = document.createElement('div');
    home.classList.add('home');

    const row_1 = createElement('div', '', 'row-1');
    const title = createElement('h1', 'Home', 'great-vibes-regular');
    const mainLogo = createImage(logo, 'text logo', 'logo');

    const row_2_col_1 = createElement('div', '', 'row-2-col-1');
    const homeHero = createImage(hero, 'Louise Forty', 'hero');
    row_2_col_1.appendChild(homeHero);

    const row_2_col_2 = createElement('div', '', 'row-2-col-2');
    const heading = createElement('h2', 'Welcome to Louise and Jim\'s');
    const lorem = 'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Voluptas, modi. Voluptatem dolorem quas earum consequatur, repellat temporibus beatae ab nobis eum? Corporis officia rerum repudiandae quaerat ut exercitationem itaque ullam.';
    const para = createElement('p', lorem);
    const para2 = createElement('p', lorem);
    const list = createElement('ul', '', 'home-list');
    list.innerHTML = `<li>Organic</li>
                        <li>Locally Sourced</li>
                        <li>Homemade</li>`;
    row_2_col_2.appendChild(heading);
    row_2_col_2.appendChild(para);
    row_2_col_2.appendChild(para2);
    row_2_col_2.appendChild(list);

    row_1.appendChild(title);
    row_1.appendChild(mainLogo);
    home.appendChild(row_1);
    home.appendChild(row_2_col_1);
    home.appendChild(row_2_col_2);

    return home;
 }

 function createImage(src, alt, classes) {
    const image = document.createElement('img');
    image.classList.add(classes);
    image.src = src;
    image.alt = alt;
    return image;
 }

 function loadHome() {
    const content = document.getElementById('content');
    content.appendChild(createHome());
 }
 
export default loadHome;