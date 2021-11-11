import Film from "../../Domain/Film.js";
import FilmLibrary from "../../Domain/FilmLibrary.js";

"use strict";

const MooviePage = async () => {

    const main = document.querySelector("main");
    main.innerHTML = "";

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
        const header0 = document.createElement("th");
        header0.innerText = "ID";
        const header1 = document.createElement("th");
        header1.innerText = "Title";
        const header2 = document.createElement("th");
        header2.innerText = "Duration(min)";
        const header3 = document.createElement("th");
        header3.innerText = "Budget(million)";
        header.appendChild(header0);
        header.appendChild(header1);
        header.appendChild(header2);
        header.appendChild(header3);
        table.appendChild(thead);
        // deal with data rows for tbody
        const tbody = document.createElement("tbody");
        films.forEach((film) => {
            const line = document.createElement("tr");
            const idCell = document.createElement("td");
            idCell.innerText = film.id;
            line.appendChild(idCell);
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