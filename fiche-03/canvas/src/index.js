// Import Bootstrap CSS
import 'bootstrap/dist/css/bootstrap.min.css';
// Custom styles
import './stylesheets/main.css';

const RECT_NUMBER = 101;

let myCanvas = document.querySelector("canvas");
let myContext = myCanvas.getContext("2d");
let page = document.querySelector("#page");
// set the canvas dimensions
let pageWidth = page.clientWidth;
let pageHeight = page.clientHeight;
myCanvas.width = pageWidth - 20;
myCanvas.height = pageHeight;
let largeur=20;
let longueur=20;
// call the callback to draw our animation when the browser is ready
//let myAnimation=requestAnimationFrame(drawOneFrame);
function drawOneFrame() {
    // Reset everything done in the previous frame
    // We could force the width or height of canvas to force a redraw myCanvas.width = pageWidth;myCanvas.height = pageHeight;
    // however that would not be optimized.
    myContext.clearRect(0, 0, pageWidth, pageHeight);
    myAnimation=undefined;
    myContext.fillStyle = randomColor(); //'rgba(255,0,0,0.5)';//'blue';

    //draw dynamically the rectangles at random locations
    for (let i = 0; i < RECT_NUMBER; i++) {
        myContext.fillRect(
            Math.floor(Math.random() * pageWidth),
            Math.floor(Math.random() * pageHeight),
            largeur,
            longueur
        );
    }


    // Refresh automatically the animation via this recursive call :
    startStop();
    // Slow the animation down via setTimeout
    //requestAnimationFrame(() => setTimeout(drawOneFrame,1000));
}
let myAnimation;
function startStop(){
    if(!myAnimation){
        myAnimation = requestAnimationFrame(drawOneFrame);
    }else{
        cancelAnimationFrame(myAnimation);
        myAnimation=undefined;
    }
}
page.addEventListener('click', startStop);

// Clique droit : Changement du background
function random(number) {
    return Math.floor(Math.random() * number);
}

function randomColor() {
    return `rgb(${random(255)}, ${random(255)}, ${random(255)})`;
}
page.onauxclick = function(e) {
    e.preventDefault();
    page.style.backgroundColor = randomColor();
};
page.oncontextmenu = function(e) {
    e.preventDefault();
}


// lecture du clavier
document.addEventListener('keydown', (e) =>{
    if(e.code==='NumpadAdd'){
        largeur++;
        longueur++;
    }else if(e.code==='NumpadSubtract'){
        largeur--;
        longueur--;
    }
});