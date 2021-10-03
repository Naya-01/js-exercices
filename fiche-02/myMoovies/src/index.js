// Import Bootstrap CSS
import 'bootstrap/dist/css/bootstrap.min.css';
// Custom styles
import './stylesheets/main.css';


import logo1 from "./img/426983.jpg";
import logo2 from "./img/affiche_370x0.jpg";

let page = document.getElementById("page");
let image1 = document.createElement("img");
image1.src=logo1;
let image2 = document.createElement("img");
image2.src=logo2;
let txt = document.createElement("p");
txt.innerText = "Ei Sei le futur roi de chine !!!"

page.appendChild(txt);
page.appendChild(image1);
page.appendChild(image2);