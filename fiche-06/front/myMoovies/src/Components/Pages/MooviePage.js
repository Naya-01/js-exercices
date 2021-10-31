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


const MooviePage = async () => {

    const main = document.querySelector("main");
    main.innerHTML = form;
    let page = document.getElementById("page");

    //event form
    let formFilm = document.getElementById('form');
    formFilm.addEventListener('submit', onSubmit);

    //create new film
    async function onSubmit(e) {
        e.preventDefault();
        let nomFilm = document.getElementById('film');
        let dureeFilm = document.getElementById('duree');
        let budgetFilm = document.getElementById('budget');
        let lienFilm = document.getElementById('lien');

        try {
            const options = {
                method: "POST", // *GET, POST, PUT, DELETE, etc.
                body: JSON.stringify({
                    title: nomFilm.value,
                    duration: dureeFilm.value,
                    budget: budgetFilm.value,
                    link: lienFilm.value,
                }), // body data type must match "Content-Type" header
                headers: {
                    "Content-Type": "application/json",
                },
            }
            const response = await fetch("/api/films", options); // fetch return a promise => we wait for the response
        } catch (error) {
            console.error("MooviePage::error: ", error);
        }
    }//fin function


    try {
        const response = await fetch("/api/films"); // fetch return a promise => we wait for the response
        if (!response.ok) {
            // status code was not 200, error status code
            throw new Error(
                "fetch error : " + response.status + " : " + response.statusText
            );
        }
        const films = await response.json(); // json() returns a promise => we wait for the data
        // create a wrapper to provide a responsive table
        const tableWrapper = document.createElement("div");
        tableWrapper.className = "table-responsive pt-5";
        // create an HTMLTableElement dynamically, based on the pizzas data (Array of Objects)
        const table = document.createElement("table");
        table.className = "table table-bordered";
        tableWrapper.appendChild(table);
        // deal with header
        const thead = document.createElement("thead");
        const header = document.createElement("tr");
        thead.appendChild(header);
        const header1 = document.createElement("th");
        header1.innerText = "Title";
        const header2 = document.createElement("th");
        header2.innerText = "Duration(min)";
        const header3 = document.createElement("th");
        header3.innerText = "Budget(million)";
        header.appendChild(header1);
        header.appendChild(header2);
        header.appendChild(header3);
        table.appendChild(thead);
        // deal with data rows for tbody
        const tbody = document.createElement("tbody");
        films.forEach((film) => {
            const line = document.createElement("tr");
            const titleCell = document.createElement("td");
            titleCell.innerText = film.title;
            line.appendChild(titleCell);
            const durationCell = document.createElement("td");
            durationCell.innerText = film.duration;
            line.appendChild(durationCell);
            const budgetCell = document.createElement("td");
            budgetCell.innerText = film.budget;
            line.appendChild(budgetCell);
            // hide info within each row, the pizza id
            line.dataset.filmId = film.id;
            tbody.appendChild(line);
        });
        table.appendChild(tbody);
        // add the HTMLTableElement to the main, within the #page div
        main.appendChild(tableWrapper);
    } catch (error) {
        console.error("filmView::error: ", error);
    }

};

export default MooviePage;