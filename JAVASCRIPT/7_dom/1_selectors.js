/*
    DOM - Document (application)
*/

document //seleccionamos todo el contenido del documento HTML.

document.firstElementChild //seleccionamos el primer elemento hijo de nuestro documento HTML.
document.lastElementChild //seleccionamos el ultimo elementio hijo de nuestro documento HTML.

document.getElementsByTagName("nameTag");
document.getElementsByClassName(".nameClass");
document.getElementById("#nameId");

// La forma mas utilizada para seleccionar elementos de un documento HTML, es .querySelecto
document.querySelector("ul li"); //acepta tanto clases, id , nameTag. Pero solo selecciona el primer elemento hijo.
document.querySelectorAll("ul li"); //para obtener todos los elemento hijos, por ejemplo de una lista desordenada "ul", usamos .querySelectorAll("ul li"), este ultimo nos devuelve en un array todos los elementos "li", que esten dentro del elemento "ul".

document.querySelectorAll("ul li")[0] //especificamos cual elemento "li", queremos llamar, de la misma forma que obteniamos un elemento en un array.

var element = document.querySelectorAll("ul li")[0]; //podemos guardar esta informacion dentro de una variable, y llamar a la variable cuando la necesitemos.