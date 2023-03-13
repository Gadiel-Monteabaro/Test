// BBDD -> Una base de datos es un conjunto de datos estructurados, sobre un mismo contexto que se pueden consultar.

// Protocolo -> Reglas que permiten que dos entidades de una red se comuniquen (Cliente - Servidor)

// Node.js -> es un entorno de ejecucion JavaScript.
/*  es usado para:
    -> Desarrollo Back-End

    -> Desarrollar Apis; una  api (Interfaz de programacion de aplicaciones), permite conectar la aplicacion que se ejecuta en el navegador y pedir informacion a nuestra base de datos.
    Node.js, permite desarrollar aplicaciones escalables (scalable) y de tiempo real (real-time)

    - Escalable -> Su rendimiento se puede adaptar a medida que crece el uso de la aplicacion y recibe mas solicitudes.

    - Tiempo real -> Establece una conexion bidireccional y dinamica entre el servidor y el cliente. Analiza los eventos que ocurren y reacciona de forma inmediata.
*/

// Modulos Node.js -> Funcionalidad organizada en uno o mas archivos "js" que puede ser reutilizada en una aplicacion.
/*  
    - Importar -> Darle acceso a funciones y elementos definidos en otros modulos.
    - Exportar -> Permitir a otros modulos utilizar su modulo.
*/

// Exportar modulos
console.log(module.exports); // {} -> objeto vacio

function saludar(name) {
    return `Hola ${name}`;
}

module.exports.saludar = saludar; // .saludar puede llevar cualquier nombre independientemente del nombre de la funcion.

console.log(module.exports); // { saludar: [Function: saludar] }

// Importar Modulos
const saludo = require('./a-node.js'); // importamos el objeto y lo guardamos en una variable saludo.

const { saludar } = require('./a-node.js'); // importamos simplemente la funcion saludar.

console.log(saludo.saludar("Gadiel"));

// Modulos Built-In (Incorporados) -> Modulos que podemos usar directamente al trabajar con Node.js (sin instalar). Algunos modulos built-in son: HTTP, HTTPS, fs(file System), os(operating system), PATH . 
/*
    - Console -> Modulo Built-In que implementa funcionalidad similar a la consola de una navegador web.
        _ console.log('Hola Mundo');
        _ console.warn('Ocurrio un error');
        _ console.error('¡Ocurrio un error!')
        _ console.error(new Error('¡Ocurrio un error!'))

    - Process -> Modulo Built-In que provee informacion sobre el proceso de node.js que se esta ejecutando, y tener cierto contro sobre ese proceso.
        _ console.log(process)
        _ console.log(process.env) -> environment(ambiente), describre el ambiente de ejecucion del programa.
        _ console.log(process.argv) -> devuelve la ubicacion de node(primer argumento) y la ubicacion del archivo ejecutado(segundo argumento) 
        
        Podemos acceder a acada arguemento mediante el ciclo for.
        for (let i = 0; i < process.argv.length; i++) {
            console.log(process.argv[i]);
        }
        _ process.memoryUsage() -> permite saber cuanta memoria estamos utilizando para realizar el proceso.

    - OS(Operating System) -> Modulo Built-In que permite obtener informacion sobre el sistema operativo en el cual se ejecuta la aplicacion.
        _ const os = require('os'); // para utilizar este built-in, necesitamos importarlo.
        _ os.type() -> nos permite obtener acceso al tipo de sistema operativo en el cual se esta ejecutando nuestra app de node.js.
        _ os.homedir() -> nos permite ingresar al directorio princial de nuestro sistema operativo.
        _ os.uptime() -> nos permite mostrar el tiempo en que se ha estado ejecutando el sistema operativo.
        _ os.userInfo() -> nos permite mostrar informacion sobre el usuario.

    - Timer -> Modulo Built-In que contiene funciones que ejecutan el codigo luego de un cierto periodo de tiempo
        _setTimeout() -> ejecuta el codigo luego de unos milisegundos. 1s = 1000 ms
            function mostrarTema(tema) {
                console.log(`Estoy aprendiendo ${tema}`);
            }            
            setTimeout(mostrarTema, 1000, 'Node.js');

        _setImmediate() -> ejecuta codigo asicrono en la proxima iteracion lo mas pronto posible. Pero el codigo sincrono tiene prioridad.
            function mostrarTema(tema) {
                console.log(`Estoy aprendiendo ${tema}`);
            }
            setImmediate(mostrarTema, 'Node.js');

        _setInterval() -| ejecuta codigo un numero infinito de veces con un retraso especifico.
            function mostrarTema(tema) {
                console.log(`Estoy aprendiendo ${tema}`);
            }
            setInterval(mostrarTema, 1000, 'Node.js');

    - fs(File System) - Modulo Built-In contiene funcionalidad muy util para trabajar con el sistema de archivos. Todos los metodos de este modulo son asincronos por defecto. Podemos cambiar esto agregando Sync.
        _ const fs = require('fs'); // para utilizar este built-in, necesitamos importarlo.
        _ fs.readFile('node.js', 'utf-8', (err, contenido) => {
            if (!err) {
                console.log(contenido);
            } else {
                throw (err); // detiene la ejecucion del programa y brinda informacion sobre el err.
            }
        });

        _ fs.rename('index.html', 'main.html', (err)=>{
            if(!err){
                console.log(`Nombre cambiado exitosamente.`);
            } else {
                console.log(err);
            }            
        });

        _ fs.appendFile('index.html', 'agregar', (err)=>{
            if(!err){
                console.log(`Contenido agregado exitosamente`);
            } else {
                console.log(err);
            }
        });

        _ fs.writeFile('index.html', 'Contenido Nuevo', ()=>{  // todo el contenido del archivo index.html, es reemplazado con el "Contenido Nuevo"
             if(!err){
                console.log(`Contenido agregado exitosamente`);
            } else {
                console.log(err);
            }
        });

        _ fs.unlink('index.html', (err)=>{
             if(!err){
                console.log(`Archivo eliminado exitosamente`);
            } else {
                console.log(err);
            }
        })
*/


