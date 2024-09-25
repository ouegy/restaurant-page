import { createElement, createImage, createHeader } from "./index.js";

function createMenu() {
  const menu = createHeader("menu");
  const para = createElement("p", "The worlds laziest menu");
  menu.appendChild(para);
  return menu;
}

export default function loadMenu() {
  const content = document.getElementById("content");
  content.appendChild(createMenu());
}
