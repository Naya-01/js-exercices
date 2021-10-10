import Film from "../../Domain/Film.js";
import FilmLibrary from "../../Domain/FilmLibrary.js";
"use strict";

let form = `<div id="page"><form id="form">
        <div class="form-group align-content-center">
          <label>Nom du film</label> <br>
          <input type="text" class="form-control-lg" placeholder="Nom du film" id="film" required>
        </div>
        <div class="form-group">
          <label>durée du film en minutes</label> <br>
          <input type="text" class="form-control-lg" placeholder="durée du film en minutes" id="duree" required>
        </div>
        <div class="form-group">
          <label>Budget du film</label> <br>
          <input type="text" class="form-control-lg" placeholder="Budget" id="budget" required>
        </div> 
        <div class="form-group">
          <label>Lien</label> <br>
          <input type="text" class="form-control-lg" placeholder="lien vers la description" id="lien" required>
        </div> <br>
        <button type="submit" class="btn btn-primary" id="btn">Create table</button>
      </form>

      </form> <br></div>`;



const MooviePage = () => {

    const main = document.querySelector("main");
    main.innerHTML=form;
    let page = document.getElementById("page");


//event form
    let formFilm=document.getElementById('form');
    formFilm.addEventListener('submit',addFilmTable);


// div to add table
    let divTable= document.createElement("div");
    let arrayFilm = new FilmLibrary();
    function addFilmTable(e){
        e.preventDefault();
        let nomFilm=document.getElementById('film').value;
        let dureeFilm=document.getElementById('duree').value;
        let budgetFilm=document.getElementById('budget').value;
        let lienFilm=document.getElementById('lien').value;
        let film = new Film(nomFilm,dureeFilm,budgetFilm,lienFilm);
        arrayFilm.addFilm(film);
        divTable.innerHTML=arrayFilm.getHtmlTable();
    };


    page.appendChild(divTable);

};

export default MooviePage;