function ordenarProducto(producto) {
    return new Promise((resolve, reject) => {
        console.log(`Ordenando: ${producto} de Amazon.`);
        setTimeout(() => {
            if (producto === "Celular") {
                resolve(`Este producto se encuentra disponible.`);
            } else {
                reject(`Este producto no esta disponible actualmente.`);
            }
        }, 3000);
    });
};

function procesarPedido(respuesta) {
    return new Promise((resolve, reject) => {
        console.log(`Procesando respuesta...`);
        console.log(`La respuesta fue: "${respuesta}"`);
        setTimeout(() => {
            resolve('Gracias por tu compra.');
        }, 3000);
    });
}

async function realizarPedido(producto) {
    try {
        const respuesta = await ordenarProducto(producto);
        console.log("Respuesta recibida");
        const respuestaProcesada = await procesarPedido(respuesta);
        console.log(respuestaProcesada);
    } catch (err) {
        console.log(err);
    }
}

realizarPedido('Celular');


/*
    ordenarProducto('Celular')
        .then(respuesta => {
            console.log('Respuesta recibida.');
            return procesarPedido(respuesta);
        })
        .then(respuestaProcesada => {
            console.log(respuestaProcesada);
        })
        .catch(err => {
            console.log(err);
        })
*/