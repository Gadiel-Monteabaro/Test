/*
    addEventListener() Registra un evento a un objeto en específico. El Objeto especifico (en-US) puede ser un simple elemento en un archivo, el mismo documento , una ventana o un XMLHttpRequest.

    Para registrar más de un eventListener, puedes llamar addEventListener() para el mismo elemento pero con diferentes tipos de eventos o parámetros de captura.
*/

// Eventos de teclado
document.addEventListener("keypress", getEvtType, false); //[second] //No se suele usar

document.addEventListener("keydown", getEvtType, false); //first
document.addEventListener("keyup", getEvtType, false); //third

// Eventos de ratón
document.addEventListener("click", getEvtType, false); // third

document.addEventListener("mousedown", getEvtType, false); //first
document.addEventListener("mouseup", getEvtType, false); //second


//El siguiente ejemplo es una representacion de lo que hace la funcion addEventListener
function eventListener(type, callBack) {
    //Detected event code...
    var eventType = {
        type: "keypress",
        key: "q",
        durationOfKeyPress: 2
    }

    if (eventType.type === type) {
        callBack(eventType)
    }
}

eventListener("keypress", (evt) => console.log(evt));