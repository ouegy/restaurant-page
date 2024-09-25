import { createElement, createImage, createHeader } from "./index.js";

function createContact() {
  const contact = createHeader("contact");
  const para = createElement("p", "The worlds laziest contact page");
  contact.appendChild(para);
  return contact;
}

export default function loadContact() {
  const content = document.getElementById("content");
  content.appendChild(createContact());
}
