<?php
/*
Hashing => existen diversos algoritmos de encriptacion en PHP, como md5(),sha1() o hash().
Sin embargo la libreria hash de contraseñas PHP crea un password muiy complejo siendo muy facil su utilizacion.
*/
//Definicion
//password_hash($password, $algoritmo); // la contraseña que queremos encriptar y el algoritmo de encriptacion
/*
Vamos a utilizar PASSWORD_DEFAULT, es la mejor opcion de encriptacion dado que se actualiza siemrpe que se añada un algoritmo nuevo mas fuerte.
por lo que se recomienda almacenar dentro de una columna de base de datos de unos 60 caracteres (255 caracteres es una buena opcion)
*/
/*
Vamos a utilizar PASSWORD_BCRYPT, usar el algoritmo CRYPT_BLOWFISH para crear el hash. producira un hash estandar compatible con crypt()
*/

//Uso
$claveEncriptada = password_hash("admin123", PASSWORD_DEFAULT); // ejemplo de lo que se genera => $2y$10$OeKP8bRa1BgnC0cM.pTraOcgBJsfTj4.vt50/WqWsqqGv92XyzPNq, cada vez que actualizamos nuestro sitio web, una nueva encriptacion se genera.

/*
Verificar la encriptacion
*/
//Definicion
password_verify($password, $hash);
//uso
password_verify("admin123", $claveEncriptada); // esto nos lanzara un booleano, en este caso si el hash pertenece dara true, sino lanzara false.

$this->clave = isset($request["txtClave"]) && $request["txtClave"] != "" ? password_hash($request["txtClave"], PASSWORD_DEFAULT) : "";

if ($entidadUsuario->usuario == $nombreUsuario && password_verify($clave, $entidadUsuario->clave)) {
    //Crear una variable de session con tu nombre
    $_SESSION["nombre"] = $entidadUsuario->nombre;
    //Redireccionar a index.php
    header("Location: index.php");
} else {
    //sino
    //$msg = "Usuario o clave incorrecto";
    $msg = "Usuario o clave incorrecto";
}
