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

    // async function delay(time) {
    //     await delay(time);
    // }

    // delay(8000);









    // funktion welche eine zufällige zahl zwischen min und max ergibt
    function getRandomNumber(min, max) {

        return Math.random() * (max - min) + min;

        frameRate(50)

    }




}


// function delay(milliseconds) {
//     return new Promise(resolve => {
//         setTimeout(resolve, milliseconds);
//     });
// }

// async function animation() {
//     const text = ['a', 'ni', 'ma', 'tion'];
//     let animatedText = '';
//     for (i = 0; i < text.length; i++) {
//         animatedText = animatedText + text[i];
//         await delay(1000);
//         document.getElementById('animation').innerHTML = animatedText;

//     }
// }

// animation();