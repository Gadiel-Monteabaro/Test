// get
app.get(function (req, res) {
    // Se relaciona con READ -> modelo CRUD
    // ejecutamos cada vez que queremos que nuestro servidor, ofrezca algun recurso.
    // si nuestra solicitud, encontro la informacion dentro de la base de datos, la podemos devolver.
});

// post
app.post(function (req, res) {
    // Se relaciona con CREATE -> modelo CRUD
    // enviamos informacion atravez de formularios que nos permiten almancenar informacion ingresada por el cliente hacia nuestra base de datos
    //  lo cual la respuesta simplemente sera si fue exitoso o si hubo algun fallo.
});

// put -> enviamos una entrada completa para reemplazar la anterior. 
// patch -> solo enviamos la parte que debe ser actualizada.
app.put(function (req, res) {
    // Se realcionan con UPDATE -> modelo CRUD
    // informacion que se dirige a nuestra base de datos para ser actualizada.
})

// delete
app.delete(function (req, res) {
    // se relaciona con DELETE -> modele CRYD
    // nos permite borrar informacion de nuestra base de datos.
})