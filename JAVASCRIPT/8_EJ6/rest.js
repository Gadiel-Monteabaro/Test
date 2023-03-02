// Podemos crear funciones que tomen un número variable de argumentos.
// Estos argumentos se almacenan en un arreglo al que se puede acceder más tarde desde dentro de la función.

function howMany(...args) {
    return "You have passed " + args.length + " arguments.";
}
console.log(howMany(0, 1, 2));