//Cuando exportas una variable o función, puedes importarla en otro archivo y usarla sin tener que volver a escribir el código. 
const uppercaseString = (string) => {
    return string.toUpperCase();
}

export { uppercaseString };

const lowercaseString = (string) => {
    return string.toLowerCase()
}
//expoortamos la funcion lowecaseString, para poder usarla en otro archivo.
export { lowercaseString };

// de esta manera importamos al archivo donde queremos ejecutar estas funciones
import { uppercaseString, lowercaseString } from './string_functions.js';
uppercaseString("hello");
lowercaseString("WORLD!");

// creamos un objeto llamado stringFunctions. he importamos todo el contenido del archivo.
import * as stringFunctions from "./string_functions.js"
stringFunctions.uppercaseString("hello");
stringFunctions.lowercaseString("WORLD!");

// si es sólo un valor el que está siendo exportado desde un archivo
// esto se llama "fall back"
export default function add(x, y) {
    return x + y;
}
// importar un valor default
import add from "./math_functions.js";
