// Una funcion callback, es aquella que nos permite utilizar una función, como argumento de otra funcións.

function greeting(name) {
    alert(`Hello, ${name}`);
}

function processUserInput(callback) {
    const name = prompt("Please enter your name.");
    callback(name);
}

processUserInput(greeting);

//Una devolución de llamada es una función que se pasa como argumento a otra función.
function myDisplayer(some) {
    document.getElementById("demo").innerHTML = some;
}
//Nota: Cuando llamos a la funcion como parametro, no debemos utilizar parentesis.
function myCalculator(num1, num2, myCallback) {
    let sum = num1 + num2;
    myCallback(sum);
}

myCalculator(5, 5, myDisplayer);

//Ejemplo mas complejo.
// Create an Array
const myNumbers = [4, 1, -20, -7, 5, 9, -6];

// Call removeNeg with a callback
const posNumbers = removeNeg(myNumbers, (x) => x >= 0);

// Display Result
document.getElementById("demo").innerHTML = posNumbers;

// Keep only positive numbers
function removeNeg(numbers, callback) {
    const myArray = [];
    for (const x of numbers) {
        if (callback(x)) {
            myArray.push(x);
        }
    }
    return myArray;
}

