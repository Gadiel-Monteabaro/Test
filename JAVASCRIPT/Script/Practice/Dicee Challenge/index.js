let randomNumber1 = Math.ceil(Math.random() * 6);

let name1 = `./images/dice${randomNumber1}.png`; // porbando

document.querySelector(".img1").setAttribute("src", `${name1}`);

let randomNumber2 = Math.ceil(Math.random() * 6);

let name2 = `./images/dice${randomNumber2}.png`;

document.querySelector(".img2").setAttribute("src", `${name2}`);


if (randomNumber1 > randomNumber2) {
    document.querySelector("h1").innerHTML = "Player 1 wins!";
} else if (randomNumber2 > randomNumber1) {
    document.querySelector("h1").innerHTML = "Player 2 wins!";
} else {
    document.querySelector("h1").innerHTML = "Draw!";
}


