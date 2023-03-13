// Protocolo -> Conjunto de reglas que permiten transmitir informacion entre dispositivos de una red.

// HTTP -> HyperText Transfer Protocol (Protocolo de transferencia de hipertexto.)

// Metodos HTTP -> Indica la intencion de la solicitud, que es lo que quiere el navegador.

// GET -> Verbo para solicitar un recurso especifico.
// POST -> Verbo para crear un recurso.
// PUT -> Verbo para modificar un recurso.
// PATH -> Verbo para modificar un recurso.
// DELETE -> Verbo para eliminar un recurso.

// Codigos de estado. nos indica si se han completado satisfactoriamente una solcitud HTTP especifica.
// Con node.js y express podemos especificar el codigo de estado, de la respuesta HTTP.
/*
    Respuestas informativas (100 - 199).
    Respuestas satisfactorias (200 - 299).
    Redirecciones (300 - 399).
    Errores del cliente (400 - 499).
    Errores del servidor (500 - 599).
*/

// Modulo HTTP -> Este modulo le permite a Node.js transmitir informacion con el protocolo HTTP.
// Nos permite escuchar cuando le solicitemos informacion. y nos envie una respuesta
const http = require('http'); // tenemos que importarlo.

// utilizamos el metodo createServer
const servidor = http.createServer((req, res) => {
    //req -> request, que significa solicitud
    //res -> response, que significa respuesta

    // las solicitudes mas importantes (request)
    console.log(req.url);
    console.log(req.method);
    console.log(req.headers);

    // las respuestas mas importantes (response)
    console.log(req.statusCode);
    res.setHeader('content-type', 'aplication/json');
    console.log(res.getHeaders());
});

// Puerto -> Ubicacion virtual del sistema operativo en el cual se puede acceder a una aplicacion o a un proceso especifico que se este ejecutando.

// REST Cliest -> Extension que nos permite hacer solicitudes HTTP a nuestro servidor. Sin necesidad de tener la parte Front-End realizada.




