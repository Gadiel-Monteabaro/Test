const http = require('http');
const { stringify } = require('querystring');
const cursos = require('./cursos');
const PORT = 3000;

// creamos el servidor.
const servidor = http.createServer((req, res) => {
    const { method } = req;

    switch (method) {
        case 'GET':
            return manejarSolicitudGET(req, res);
        case 'POST':
            return manejarSolicitudPOST(req, res);
        default:
            console.log(`El metodo no puede ser utilizado por el servidor.`);
    }

});

// De esta forma con node crearimos solicitudes 

function manejarSolicitudGET(req, res) {
    const path = req.url;

    if (path === "/") {
        res.end(`Bienvenidos a mi primer servidor`);
    } else if ("/cursos") {
        res.end(JSON.stringify(cursos.infoCursos));
    }
}

function manejarSolicitudPOST(req, res) {
    const path = req.url;
}


// Comenzamos a escuchar estas solicitudes HTTP.
servidor.listen(PORT, () => {
    console.log(`Server started on port: ${PORT}`);
});

