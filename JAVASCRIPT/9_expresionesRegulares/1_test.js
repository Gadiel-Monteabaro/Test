/*
    Methodo test
    Las expresiones regulares se utilizan en lenguajes de programación para coincidir con partes de cadenas. Creas patrones para ayudarte a hacer esa coincidencia.
    Una forma de encontrar una expresion regular es con el metodo .test()
*/
let testStr = "freeCodeCamp";
let testRegex = /Code/; // true
console.log(testRegex.test(testStr)); x

//  También puedes buscar más de dos patrones.  /yes|no|maybe/
let petString = "James has a pet cat.";
let petRegex = /dog|cat|bird|fish/;
let result = petRegex.test(petString); // true

//  La capitalización (o también llamada capitalización de letra) es la diferencia entre mayúsculas y minúsculas. Puedes coincidir ambos casos utilizando algo llamado bandera.
let myString = "freeCodeCamp";
let fccRegex = /freeCodeCamp/i; // agregamos la i, lo cual ignora la capitalizacion "ignorecase, igNoreCase e IgnoreCase"
let resultado = fccRegex.test(myString); // true

// podemos usar ^, para encontrar coincidencias al principio de una cadena.
let rickyAndCal = "Cal and Ricky both like racing.";
let calRegex = /^Cal/; // Cambia esta línea
let result1 = calRegex.test(rickyAndCal); // true

// usamos $, para encontrar coincidencias al final de una cadena.
let caboose = "The last car on a train is the caboose";
let lastRegex = /caboose$/; // Cambia esta línea
let result2 = lastRegex.test(caboose);