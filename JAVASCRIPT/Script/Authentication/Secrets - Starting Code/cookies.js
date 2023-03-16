// las cookies y sessiones, nos brinda informacion sobre las paginas que estamos utilizando, la diferencia es que las cookies guardan informacion del lado del cliente y las sessiones guardan informacion del lado del servidor.
const express = require('express');
const session = require('express-session');

const app = express();

app.use(session({
    secret: 'Hola como andas',// creamos una clave cualquira, con un generador por ejemplo
    resave: true, // ambos fuerzan a la informacion para almacenarlas, una cuando no esta inicializada la session y otra cuando si esta inicializada.
    saveUninitialized: true
}));

app.get("/", (req, res) => {
    req.session.usuario = "Juan Perez";
    req.session.rol = "Admin";
    req.session.visitas = req.session.visitas ? ++req.session.visitas : 1;
    res.send(`El usuario ${req.session.usuario}, con rol ${req.session.rol}, ha visitado la pagina ${req.session.visitas} veces.`);
});

app.listen(3000, () => {
    console.log("Server started on port: test");
})

