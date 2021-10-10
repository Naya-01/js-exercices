// Import Bootstrap CSS
import 'bootstrap/dist/css/bootstrap.min.css';
// Custom styles
import './stylesheets/main.css';


import logo1 from "./img/426983.jpg";
import logo2 from "./img/affiche_370x0.jpg";

"use strict";

let page = document.getElementById("page");
let image1 = document.createElement("img");
image1.src=logo1;
let image2 = document.createElement("img");
image2.src=logo2;
let txt = document.createElement("p");
txt.innerText = "Ei Sei le futur roi de chine !!!"
let form = `<form id="form">
        <div class="form-group align-content-center">
          <label>Nom du film</label> <br>
          <input type="text" class="form-control-lg" placeholder="Nom du film" id="film">
        </div>
        <div class="form-group">
          <label>durée du film en minutes</label> <br>
          <input type="text" class="form-control-lg" placeholder="durée du film en minutes" id="duree">
        </div>
        <div class="form-group">
          <label>Budget du film</label> <br>
          <input type="text" class="form-control-lg" placeholder="Budget" id="budget">
        </div> 
        <div class="form-group">
          <label>Lien</label> <br>
          <input type="text" class="form-control-lg" placeholder="lien vers la description" id="lien">
        </div> <br>
        <button type="submit" class="btn btn-primary" id="btn">Create table</button>
      </form>

      </form> <br>`;
let myDiv = document.createElement('div');
let divForm = document.createElement('dev');
divForm.innerHTML=form;
myDiv.appendChild(txt);
myDiv.appendChild(image1);
myDiv.appendChild(image2);
page.appendChild(myDiv);
page.appendChild(divForm);