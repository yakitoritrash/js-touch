import pimage from "./2025-07-03-201925_hyprshot.png"
import "./styles.css"

export function homepage()  {
  const content = document.getElementById("content");
  const image = document.createElement("img");
  image.src = pimage;
  const headline = document.createElement("h2");
  headline.textContent = "hello shamans";
  const sometext = document.createElement("p");
  sometext.textContent = "this is a page";
  content.appendChild(image);
  content.appendChild(headline);
  content.appendChild(sometext);
}
