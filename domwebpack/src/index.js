import './styles.css';
import { homepage } from './homepage.js'
import { menu } from './menu.js'
import { contact } from './contact.js'

const menu_btn = document.getElementById("menu");
const homepage_btn= document.getElementById("homepage");
const contact_btn = document.getElementById("contact");
menu_btn.addEventListener('click', () => {
  content.innerHTML = "";
  menu();
});

homepage_btn.addEventListener('click', () => {
  content.innerHTML = "";
  homepage();
});

contact_btn.addEventListener('click', () => {
  content.innerHTML = "";
  contact();
});
homepage();

console.log("Hello");
