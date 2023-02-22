//Detecting button Press
let numberOfDrumButtons = document.querySelectorAll("button.drum").length;

for (i = 0; i < numberOfDrumButtons; i++) {
    document.querySelectorAll("button")[i].addEventListener("click", function () {
        //this nos permite obtener o llamar a la identidad del boton que desencadeno el evento.
        var buttonInner = this.innerHTML;
        makesound(buttonInner);
        buttonAnimation(buttonInner);
    });
}

//Detecting Keyboard Press
// Obtenemos el evento que desencadena la funcion.
document.addEventListener("keydown", function (evt) {
    makesound(evt.key);
    buttonAnimation(evt.key);
})

//Function makesound
function makesound(key) {
    switch (key) {
        case "w":
            var tom1 = new Audio("./sounds/tom-1.mp3");
            tom1.play();
            break;
        case "a":
            var tom2 = new Audio("./sounds/tom-2.mp3");
            tom2.play();
            break;
        case "s":
            var tom3 = new Audio("./sounds/tom-3.mp3");
            tom3.play();
            break;
        case "d":
            var tom4 = new Audio("./sounds/tom-4.mp3");
            tom4.play();
            break;
        case "j":
            var snare = new Audio("./sounds/snare.mp3");
            snare.play();
            break;
        case "k":
            var crash = new Audio("./sounds/crash.mp3");
            crash.play();
            break;
        case "l":
            var kickBass = new Audio("./sounds/kick-bass.mp3");
            kickBass.play();
            break;
        default: console.log(key);
    }
}

function buttonAnimation(currentKey) {
    var activeButton = document.querySelector(`.${currentKey}`);
    activeButton.classList.add("pressed");

    setTimeout(function () {
        activeButton.classList.remove("pressed")
    }, 100)
}


//Minify Code -> minify.com
/*
    let numberOfDrumButtons=document.querySelectorAll("button.drum").length;for(i=0;i<numberOfDrumButtons;i++){document.querySelectorAll("button")[i].addEventListener("click",function(){var buttonInner=this.innerHTML;makesound(buttonInner);buttonAnimation(buttonInner);});}
    document.addEventListener("keydown",function(evt){makesound(evt.key);buttonAnimation(evt.key);})
    function makesound(key){switch(key){case"w":var tom1=new Audio("./sounds/tom-1.mp3");tom1.play();break;case"a":var tom2=new Audio("./sounds/tom-2.mp3");tom2.play();break;case"s":var tom3=new Audio("./sounds/tom-3.mp3");tom3.play();break;case"d":var tom4=new Audio("./sounds/tom-4.mp3");tom4.play();break;case"j":var snare=new Audio("./sounds/snare.mp3");snare.play();break;case"k":var crash=new Audio("./sounds/crash.mp3");crash.play();break;case"l":var kickBass=new Audio("./sounds/kick-bass.mp3");kickBass.play();break;default:console.log(key);}}
    function buttonAnimation(currentKey){var activeButton=document.querySelector(`.${currentKey}`);activeButton.classList.add("pressed");setTimeout(function(){activeButton.classList.remove("pressed")},100)}
*/