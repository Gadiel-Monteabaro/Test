// JSON -> JavaScript Object Notation
/*
    - Formato de texto usado para almacenar y transportar informacion.

    - JSON nos permite almacenar objetos de JS como texto.

    - Es independiente del lenguaje de programacion con el cual estas trabajando.

    - Los datos se representand con clave: valor
*/

let infoCurso = {
    "titulo": "Aprende Node.js",
    "numVistas": 45642,
    "numLikes": 21223,
    "temas": ["JavaScript", "Node.js"],
    "esPublico": true
};

// Cadena de caracteres en formato JSON
let infoCursoJSON = JSON.stringify(infoCurso);
console.log(infoCursoJSON);

// Cadena de caracteres -> Objeto
let infoCursoObjeto = JSON.parse(infoCursoJSON);
console.log(infoCursoObjeto);