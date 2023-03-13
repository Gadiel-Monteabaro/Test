const express = require('express');
const { infoCursos } = require('./cursos');
const PORT = process.env.PORT || 3000;
const app = express();

// Routing
app.get('/', (req, res) => {
    res.send('Servidor web con express.')
});

//Path
app.get('/api/cursos', (req, res) => {
    res.send(infoCursos);
});

// Routers
const routerProgramacion = express.Router();
app.use('/api/cursos/programacion', routerProgramacion);

// Parameters
routerProgramacion.get('/:lenguaje', (req, res) => {
    const lenguaje = req.params.lenguaje;
    const resultados = infoCursos.programacion.filter(curso => curso.lenguaje === lenguaje);

    if (req.query.ordenar === "vistas") {
        res.send(resultados.sort((a, b) => b.vistas - a.vistas));
    }

    res.send(resultados);
});


app.listen(PORT, () => {
    console.log(`Server started on port: ${PORT}.`);
})