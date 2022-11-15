// alle divs sammeln
var divs = document.getElementsByClassName('pattern');
// window grösse und breite ermitteln
var winWidth = window.innerWidth;
var winHeight = window.innerHeight;


for (var i = 0; i < divs.length; i++) {

    // aktuelles div in der Liste
    var thisDiv = divs[i];

    // random Nummer aus der Liste
    randomTop = getRandomNumber(0, winHeight);
    randomLeft = getRandomNumber(0, winWidth);

    // update obere und linke position 
    thisDiv.style.top = randomTop + "px";
    thisDiv.style.left = randomLeft + "px";

}

// funktion welche eine zufällige zahl zwischen min und max ergibt
function getRandomNumber(min, max) {

    return Math.random() * (max - min) + min;

}