/*
    Una promesa en JavaScript es exactamente como suena, se utiliza para hacer una promesa de que harás algo, habitualmente de forma asíncrona.

    Promise es una función constructora, así que tu necesitas usar la palabra clave new para crear una. 
*/
const myPromise = new Promise((resolve, reject) => {

}); // esta promesa esta en modo pending.

// Una promesa tiene tres estados: pending, fulfilled, y rejected
const makeServerRequest = new Promise((resolve, reject) => {
    // responseFromServer representa una respuesta de un servidor
    let responseFromServer;

    if (responseFromServer) {
        resolve("We got the data");
    } else {
        reject("Data not received");
    }
});

/*
    Las promesas son muy útiles, cuando tu tienes un proceso que toma una cantidad de tiempo desconocida en tu código (algo asíncrono por ejemplo), a menudo una petición de servidor. Cuando tu haces una petición a un servidor, toma algo de tiempo, después de que termina, normalmente quieres hacer algo con la respuesta del servidor. Esto se puede lograr utilizando el método then.
*/
myPromise.then(result => {
    //then es el metodo utilizado cuando tu promesa ha sido aceptada.
}).catch(err => {
    //catch es el método utilizado cuando tu promesa ha sido rechazada.
});