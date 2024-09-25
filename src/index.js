import "./styles.css";
import logo from "./img/logo.png";
import loadHome from "./home";
import loadMenu from "./menu";
import loadContact from "./contact";

function replaceChildren() {
  const content = document.getElementById("content");
  content.replaceChildren();
}

function createHeader(pageName) {
  const home = document.createElement("div");
  home.classList.add(pageName);

  const row_1 = createElement("div", "", "row-1");
  const title = createElement("h1", pageName, "great-vibes-regular");
  const mainLogo = createImage(logo, "text logo", "logo");

  row_1.appendChild(title);
  row_1.appendChild(mainLogo);
  home.appendChild(row_1);

  return home;
}

function createElement(tag, text, classes) {
  const heading = document.createElement(tag);
  heading.textContent = text;
  heading.classList.add(classes);
  return heading;
}

function createImage(src, alt, classes) {
  const image = document.createElement("img");
  image.classList.add(classes);
  image.src = src;
  image.alt = alt;
  return image;
}

window.onload = (event) => {
  loadHome();
  getTab();
};

function getTab() {
  const links = Array.from(document.getElementsByClassName("links"));
  console.log(links);
  links.forEach((item) => {
    item.addEventListener("click", function (e) {
      let tab = e.target.textContent;
      switchTab(tab);
    });
  });
}

function switchTab(tab) {
  switch (tab) {
    case "Home":
      replaceChildren();
      loadHome();
      break;
    case "Contact":
      replaceChildren();
      loadContact();
      break;
    case "Menu":
      replaceChildren();
      loadMenu();
      break;

    default:
      loadHome();
      break;
  }
}

export { createElement, createImage, createHeader };
