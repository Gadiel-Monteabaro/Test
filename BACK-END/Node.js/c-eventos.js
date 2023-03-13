/*
    Un evento en JS, es una accion que se realiza en una aplicacion.
    Podemos definir eventos que se desencadenen y ejecuten internament del servidor
*/

// Emitters (Emisores)
// -> Objetos que emiten eventos nombrados y llaman afunciones especificas cuando ocurren.

const EventEmitter = require('events');
//console.log(EventEmitter);

// Creamos un nuevo objeto que nos va a permitir emitir eventos de la clase EventEmitter
const emisorProductos = new EventEmitter();

emisorProductos.on('Compra', (total, numProductos, tipoProducto) => {
    console.log(`Total de la compra: $${total}.`);
    console.log(`Numero de productos: ${numProductos}.`);
});

emisorProductos.emit('Compra', 500, 10);