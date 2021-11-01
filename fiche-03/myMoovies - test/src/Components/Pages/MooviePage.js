import Film from "../../Domain/Film.js";
import FilmLibrary from "../../Domain/FilmLibrary.js";
import ProgressBar from "progressbar.js";
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

      </form> <br></div>
      <div id="container"></div>
      <div id="pgr-bar"></div>
      <button id="dimi">reduire</button>
`;



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





    let container = document.getElementById("container")
    var bar = new ProgressBar.Line(container, {
        strokeWidth: 4,
        easing: 'linear',
        duration: 3000,
        color: '#FFEA82',
        trailColor: '#eee',
        trailWidth: 1,
        svgStyle: {width: '100%', height: '100%'},
        text: {
            style: {
                // Text color.
                // Default: same as stroke color (options.color)
                color: '#999',
                position: 'absolute',
                right: '0',
                top: '30px',
                padding: 0,
                margin: 0,
                transform: null
            },
            autoStyleContainer: true
        },
        from: {color: '#FFEA82'},
        to: {color: '#ED6A5A'},
        step: (state, bar) => {
            bar.setText(Math.round(bar.value() * 100) + ' %');
        }
    });
    let btn = document.getElementById('dimi');
    btn.addEventListener('click',reduce);
    let pc =1;
    bar.set(pc);  // Number from 0.0 to 1.0
    bar.animate(0);

    function reduce(){
         pc-=0.1;
         bar.set(pc);
    }

    let pgr = document.getElementById('pgr-bar');
    let newBar = new ProgressBar.Line(pgr,{});
    newBar.animate(1, {
        duration: 3000
    }, function() {
        console.log('Animation has finished');
    });


};

export default MooviePage;