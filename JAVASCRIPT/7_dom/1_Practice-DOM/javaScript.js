// Funcionamiento del innerHTML
var thirdLi = document.querySelectorAll("#list li")[2];
thirdLi.innerHTML = ("<strong>Test Control - innerHTML.</strong>");// acepta codigo html.
thirdLi.style.color = ("black");

//Funcionamiento del textContent
var secondLi = document.querySelectorAll("#list li")[1];
secondLi.textContent = "Test Control - textContent.";// no acepta codigo html.

//querySelector
var firstLi = document.querySelector(".list a");
firstLi.style.color = ("red");

document.querySelector("button").style.backgroundColor = ("yellow");

const list = document.querySelector("h1");
list.classList.add("huge");0

//Atributes
var anchor = document.querySelector("a").attributes;// obtiene todos los atributos del elemento especificado.
var anchor = document.querySelector("a").getAttribute("href"); // obtiene el valor del atributo "href".
document.querySelector("a").setAttribute("href", "https://www.youtube.com/")// seteamos el valor del atributo a "https://www.youtube.com/"
document.querySelector("a").setAttribute("target", "_blank");// seteamos el valor del atributo con un target _blanck.