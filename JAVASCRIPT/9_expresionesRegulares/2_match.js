//También puedes extraer las coincidencias encontradas con el método .match().
"Hello, World!".match(/Hello/);
let ourStr = "Regular expressions";
let ourRegex = /expressions/;
ourStr.match(ourRegex)

// Para buscar o extraer un patrón más de una vez, puedes utilizar la bandera g.
let repeatRegex = /Repeat/gi; // utilizamos multiples banderas. g, bandera global.F
testStr.match(repeatRegex);

// podemos usar el comodin que coincidirá con cualquier carácter único.
let exampleStr = "Let's have fun with regular expressions!";
let unRegex = /run.|sun.|fun.|pun.|nun.|bun./; // Cambia esta línea
let result = unRegex.test(exampleStr);

// podemos utilizar -, para asignar un rango.
let quoteSample = "The quick brown fox jumps over the lazy dog.";
let alphabetRegex = /[a-z]/gi; // nos devuelve las coincidencias desde la a hasta la z.
let result1 = quoteSample.match(alphabetRegex);

// tambien podemos utilizar -, para coincidir con un rango de numeros.
let Sample = "Blueberry 3.141592653s are delicious.";
let myRegex = /[h-s2-6]/gi; // Cambia esta línea
let result2 = quoteSample.match(myRegex);

// conjunto de caracteres negados ^
let quote = "3 blind mice.";
let myRegex1 = /[^aeiou0-9]/gi; // nos devuelve todos los caracteres que no coinciden
let result3 = quoteSample.match(myRegex); // ., !, [, @, / tambien pueden ser coincididos.

// carácter (o grupo de caracteres) que aparezca una o más veces seguidas.
let difficultSpelling = "Mississippi";
let myRegex2 = /s+/gi; // Cambia esta línea
let result4 = difficultSpelling.match(myRegex);

// coincidimos con Aaaaaaaaaaaaaaaaaaaaahhh!
let chewieRegex = /Aa*/ // devuelve Aaaaaaaaaaaaaaaaaaa


// \w => [A-Za-z0-9_]
let quoteSample2 = "The five boxing wizards jump quickly.";
let alphabetRegexV2 = /\w/g;
let result5 = quoteSample.match(alphabetRegexV2);
console.log(result)

// \W => para valores no alfanumericos.
let quoteSample3 = "The five boxing wizards jump quickly.";
let nonAlphabetRegex = /\W/g;
let result6 = quoteSample.match(nonAlphabetRegex).length;