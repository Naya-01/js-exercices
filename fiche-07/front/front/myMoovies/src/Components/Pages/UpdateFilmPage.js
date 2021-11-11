import { Redirect } from "../Router/Router";
import { getSessionObject } from "../../utils/session";

/**
 * Form to add a pizza :
 * Anonymous users shall be redirected to "/login" Page
 */

let form = `<div id="page"><form id="form">
        <div class="form-group align-content-center">
          <label>ID du film</label> <br>
          <input type="text" class="form-control-lg" placeholder="ID du film" id="id" required>
        </div>
        <div class="form-group align-content-center">
          <label>Nom du film</label> <br>
          <input type="text" class="form-control-lg" placeholder="Nom du film" id="film" >
        </div>
        <div class="form-group">
          <label>durée du film en minutes</label> <br>
          <input type="text" class="form-control-lg" placeholder="durée du film en minutes" id="duree" >
        </div>
        <div class="form-group">
          <label>Budget du film</label> <br>
          <input type="text" class="form-control-lg" placeholder="Budget" id="budget" >
        </div> 
        <div class="form-group">
          <label>Lien</label> <br>
          <input type="text" class="form-control-lg" placeholder="lien vers la description" id="lien" >
        </div> <br>
        <button type="submit" class="btn btn-primary" id="btn">update film</button>
      </form>

      </form> <br></div>`;


function UpdateFilmPage() {
    let user = getSessionObject("user");
    if (!user) return Redirect("/login");

    // reset main div
    const main = document.querySelector("main");
    main.innerHTML = form;

    //event form
    let formFilm = document.getElementById('form');
    formFilm.addEventListener('submit', onSubmit);

    //create new film
    async function onSubmit(e) {
        e.preventDefault();
        let idFilm = document.getElementById('id');
        let nomFilm = document.getElementById('film');
        let dureeFilm = document.getElementById('duree');
        let budgetFilm = document.getElementById('budget');
        let lienFilm = document.getElementById('lien');

        try {
            const options = {
                method: "PUT", // *GET, POST, PUT, DELETE, etc.
                body: JSON.stringify({
                    title: nomFilm.value,
                    duration: dureeFilm.value,
                    budget: budgetFilm.value,
                    link: lienFilm.value,
                }), // body data type must match "Content-Type" header
                headers: {
                    "Content-Type": "application/json",
                    Authorization: user.token,
                },
            }
            const response = await fetch(`/api/films/${idFilm.value}`, options); // fetch return a promise => we wait for the response
            if (!response.ok) {
                throw new Error(
                    "fetch error : " + response.status + " : " + response.statusText
                );
            }
            const film = await response.json(); // json() returns a promise => we wait for the data
            console.log("film Updated : ", user);
            Redirect("/");
        } catch (error) {
            console.error("UpdatePizzaPage::error: ", error);
        }
    }//fin function


}

export default UpdateFilmPage;