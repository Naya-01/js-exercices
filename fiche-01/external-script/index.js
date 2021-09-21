// function addDateTime(message="Bonjour"){
//     const dateTimeNow = new Date();
//     console.log(dateTimeNow.toLocaleDateString()); // 17/08/2020
//     console.log(dateTimeNow.toLocaleTimeString()); // 13:26:15
//     return message + ", nous sommes le "+dateTimeNow.toLocaleDateString() + " et il est " + dateTimeNow.toLocaleTimeString();
// }
//
// alert(addDateTime());


const btn = document.getElementById('clique');
const nbClique = document.getElementById('nbClique');
const reset = document.getElementById('reset');
let number=0;
let bouge=0;

//version 1
btn.onclick = function (){
    number++;
    nbClique.innerHTML = number;
    nbClique.style.color = 'blue';
}
// version 2
// btn.addEventListener('click', () =>{
//     number++;
//      nbClique.innerHTML = number;
// })

reset.onclick = function (){
    number=0;
    bouge +=10;
    nbClique.innerHTML = number;
    nbClique.style.color = 'red';
    reset.style.marginLeft = `${bouge}px`;
}
reset.onmouseover = function (){
    nbClique.style.color = 'black';
}
// exo horloge
let compteur=0;
let date=document.getElementById("dateHeure");
let btnClock=document.getElementById("ClockClick");
function currentDate(){
    let dateNow = new Date();
    date.innerHTML = dateNow.toDateString() + " "+dateNow.getHours()+"h "+dateNow.getMinutes()+'m '+dateNow.getSeconds()+"s";
}
let mydate =setInterval(currentDate,1000);
btnClock.addEventListener('click',()=>{
    compteur++;
    if(compteur%2===0){
        mydate =setInterval(currentDate,500);
    }else{
        clearInterval(mydate);
    }
})