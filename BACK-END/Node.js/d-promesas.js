// Una promesa es un objeto que representa el eventual resultado o error de una operacion asyncrona.

// Ese objeto se asocia a un callback function.

// Las promesas tienen un metodo  .then, con el cual podemos decidir que va a ocurrir cuando se completa la promesa

const promesaCumplida = false;

const myPromise = new Promise((resolve, reject) => {
    setTimeout(() => {
        if (promesaCumplida) {
            resolve(`¡Promesa Cumplida!`);
        } else {
            reject(`Promesa Rechazada`);
        }
    }, 3000);
});

myPromise.then((valor) => {
    console.log(valor);             // Encadenamiento de Metodos (Method Chaining)
}).catch((err) => {
    console.log(err);
});