const express = require('express');
const bodyParser = require('body-parser');
const https = require('https'); // Libreria estandar de node, no requiere instalacion
const app = express();
const port = 3000;

// formato que nos permite la toma de informacion, en objetos anidados. para una mejor toma de datos.
app.use(bodyParser.urlencoded({ extended: true }));

app.get('/', (req, res) => {
    res.sendFile(__dirname + "/index.html");
})

app.post("/", (req, res) => {
    const query = req.body.cityName;
    const apiKey = "32eadeea91a150f1e56513b484e68c92";
    const unit = "metric"
    const url = `https://api.openweathermap.org/data/2.5/weather?q=${query}&units=${unit}&appid=${apiKey}`;


    // Node, contiene modulos integrados que incluyen http, https, http2. que proporcionan diferentes metodos para implementar con protocolos http.

    // Intentamos obtener los datos de una API pública e utilizarlos para nuestro sitio web.
    https.get(url, (response) => {
        console.log(response.statusCode);

        // obtenemos los datos en codigo hexadecimal. pasamos como parametro esos datos.
        response.on('data', (data) => {
            const weatherData = JSON.parse(data); // cambiamos el formato de la informacion a objeto js.
            // de objeto a json, usamos JSON.stringify(data);
            const temp = weatherData.main.temp; // obtenemos la temperatura de la información.
            const country = weatherData.sys.country; // obtenemos la descripción de la información.
            const city = weatherData.name;
            const icon = weatherData.weather[0].icon;
            const descripción = weatherData.weather[0].description;
            const imageUrl = `http://openweathermap.org/img/wn/${icon}@2x.png`;

            // Modificamos la codificacion de caracteres. !IMPORTANTE.
            res.writeHead(200, { "Content-Type": "text/html;charset=UTF-8" });
            // mostramos el resultado de los datos obtenidos en la pantallla.
            res.write(`<h1>${country}, ${city}: ${temp}° ${descripción}.</h1> <img src=${imageUrl}>`);
            // enviamos la informacion.
            res.send();
        })
    });
})
/*

*/
app.listen(port, () => {
    console.log(`Server started on port ${port}`);
})