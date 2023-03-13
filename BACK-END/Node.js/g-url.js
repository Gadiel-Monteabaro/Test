// URL (Uniform Resource Locator) -> Localizador Uniforme de Recuursos.

// Estructura de la URL
// https://www.freecodecamp.org/espanol/

// https -> protocolo, para acceder a este recurso especifico.
// www. -> subdominio, informacion adicional agregada al inicio del dominio de una pagina web, permite organizar y separar la informacion para distinto propositos.
// freecodecamp -> dominio, el nombre de la pagina, referencia unica a un sitio web.
// .org -> dominio de nivel superior, TLD (Top-Level Domain);
// /espanol/ -> archivo o directorio de un recurso, pueden tener parametros.


// parametro de ruta
// https://www.ejemplo.com/usuarios/14

// parametros query -> consulta, se utilizan para obtener contenido dinamico, query string.
// https://google.com/search?q=cursos+de+node

const url = new URL('https://www.ejemplo.org/cursos/programacion?ordenar=vistas&nivel=1');

console.log(url.hostname); // www.ejemplo.org
console.log(url.pathname); // /cursos/programacion
console.log(url.searchParams); // URLSearchParams { 'ordenar' => 'vistas', 'nivel' => '1' }
console.log(url.searchParams.get('ordenar')); // vistas