import { Redirect } from "../Router/Router";
import { getSessionObject } from "../../utils/session";

let form = `<div id="page"><form id="form">
        <div class="form-group align-content-center">
          <label>ID du film</label> <br>
          <input type="text" class="form-control-lg" placeholder="ID du film" id="film" required>
        </div>
        <button type="submit" class="btn btn-primary" id="btn">Delete film</button>
      </form>

      </form> <br></div>`;

function DeleteFilmPage() {
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
        let idFilm = document.getElementById('film');

        try {
            const options = {
                method: "DELETE", // *GET, POST, PUT, DELETE, etc.
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
            console.log("film DELETE : ", user);
            Redirect("/");
        } catch (error) {
            console.error("DeleteFilmPage::error: ", error);
        }
    }//fin function


}

export default DeleteFilmPage;