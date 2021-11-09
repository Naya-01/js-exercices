"use strict";

class FilmLibrary {
    array;

    constructor() {
         this.array = [];
    }

    addFilm(film) {
        if (this.array.includes(film)) {
            return "no possible to add the object is null";
        } else {
            this.array.push(film);
        }
    };

    getHtmlTable() {
        let table = `<table class="table-bordered">
                <thead>
                  <tr>
                    <th>Title</th>
                    <th>Duration(min)</th>
                    <th>Budget(million)</th>
                  </tr>
                  </thead>
        `;

        for (let index = 0; index < this.array.length; index++) {
            table += `<tr>
                        <td><a href="${this.array[index].getLien()}">${this.array[index].getNom()} </a></td>
                        <td>${this.array[index].getDuree()}</td>
                        <td>${this.array[index].getBudget()}</td>
                    </tr>`;
        }
        table += `</table>`;
        return table;
    };
}
export default FilmLibrary;