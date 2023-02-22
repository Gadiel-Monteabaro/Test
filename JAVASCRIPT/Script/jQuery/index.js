/* 
    ¡¡¡ATENCIÓN!!!
    Con este codigo, esperamos que la biblioteca jQuery, termine de cargarse para ejecutar nuestro codigo.

    $(document).ready(function () {
        $("h1").css("color", "red");
    })

    Este codigo es innecesario si establecemos nuestro script como ultimo elemento de nuestro body.
*/
$("h1").css("color"); // Obtenemos el valor de la propiedad.

$("h1").removeClass("big-title"); // Removemos la clase al elemento.
$("h1").addClass("big-title box"); // Agregamos la clase al elemento.
$("h1").hasClass("box"); // Revisamos si el elemento contiene una clase en particular. Devuelve un booleano.

$("h1").text("Hola"); // Modifica el texto contenido del elemento.
$("h1").html("<i>Hola</i>"); // Modificar texto y agregar contenido html al elemento 

$("a").attr("href"); // Obtenemos el valor del atributo.
$("a").attr("href", "https://twitter.com/home"); // Seteamos el valor del atributo.


$("button").click(function () { // Agregamos el detector de eventos.
    $("h1").css("color", "#f72585");
    setTimeout(function () {
        $("h1").css("color", "#adb5bd");
    }, 500)
})

$("h1").on("click", function () { // Agregamos uno o mas evt para los elementos seleccionados.
    $("h1").css("color", "#f72585");
    setTimeout(function () {
        $("h1").css("color", "#adb5bd");
    }, 500)
})

//$("h1").before("<button>Send</button>"); // Creamos un elemento html, antes del elemento seleccionado.
//$("h1").after("<button>Send</button>"); // Creamos un elemento html, despues del elemento seleccionado.

$("h1").prepend("<button>Send</button>"); // Agregamos un elemento, dentro de nuestro elemento html izq.
$("h1").append("<button>Send</button>"); // Agregamos un elemento, dentro de nuestro elemento html der.


$("h2").addClass("big-title box");
$("h2").remove(); // Eliminamos un elemento html.

// Animaciones con jQuery.
// ¡Atención! para probar cada función, realizazr cada uno por su cuenta.
$("button").on("click", function () { // Agregamos uno o mas evt para los elementos seleccionados.
    $("h1").hide(); // Ocultamos un elemento.
    setTimeout(function () {
        $("h1").show(); // Mostramos un elemento.
    }, 1000)
})

$("button").on("click", function () {
    $("h1").toggle(); // Alternamos entre Ocultar y Mostrar un elemento.
})

$("button").on("click", function () {
    $("h1").fadeOut(); // // Ocultamos un elemento de forma progresiva.
    setTimeout(function () {
        $("h1").fadeIn(); // Mostramos un elemento de forma progresiva.
    }, 1000)
})

$("button").on("click", function () {
    $("h1").fadeToggle(); // Alternamos entre Ocultar y Mostrar un elemento.
})

$("button").on("click", function () {
    $("h1").slideUp(); // Colapsa los elementos de abajo hacia arriba.
})

$("button").on("click", function () {
    $("h1").slideDown(); // Despliega los elementos de arriba hacia abajo.
})

$("button").on("click", function () {
    $("h1").slideToggle(); // Alternamos entre colapsar y desplegar.
})

$("button").on("click", function () {
    $("h1").animate({ margin: "20px" }); // Animamos propiedades css, solamente numericas.
})

$("button").on("click", function () {
    $("h1").slideUp().slideDown().animate({ opacity: "0.5" }) // Forma de anidar animaciones jQuery.
})