// Import Bootstrap CSS
import 'bootstrap/dist/css/bootstrap.min.css';
// Custom styles
import './stylesheets/main.css';


let form = document.getElementById("form");


form.addEventListener('submit', (e) => {
    e.preventDefault();
    let lignes = document.getElementById("lignes");
    let columns = document.getElementById("columns");
    let initial = document.getElementById("initial");
    if(initial.value === "") initial.value="CELL";
    for (let l = 0; l < lignes.value; l++) {
        let x = document.getElementById('myTable').insertRow(l);
        x.className="row";
        for (let c = 0; c < columns.value; c++) {
            let cell = x.insertCell(c);
            cell.className="col bg-warning";
            cell.innerHTML = initial.value +"["+l+"]["+c+"]";
        }
    }

});

