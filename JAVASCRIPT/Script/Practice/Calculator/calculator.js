const express = require('express');
const bodyParser = require('body-parser')
const app = express();
const port = 3000;

// instalamos npm install body-parser.
// obtenemos información del servidor.
// true -> nos permite publicar objetos anidados.
// extended:true -> formato que permite la toma de informacion.
app.use(bodyParser.urlencoded({ extended: true }));

app.get('/', (req, res) => {
    res.sendFile(__dirname + "/index.html");
})

// bodyParser, permite obtener informacion de las rutas.
app.post('/', (req, res) => {
    // analizamos la solicitud HTTP.
    // urlencoded, obtenemos acceso a los datos del formulario.
    let name = req.body.name
    let n1 = Number(req.body.n1);
    let n2 = Number(req.body.n2);
    let result = (n1 + n2) / 2;

    res.send(`${name}: your average grade is equal to  ${result}.`);
})

// Ejercicio de BMI Calculator.
app.get('/bmiCalculator', (req, res) => {
    res.sendFile(__dirname + '/bmiCalculator.html');
})

app.post('/bmiCalculator', (req, res) => {
    let w = Number(req.body.weight);
    let h = Number(req.body.height);
    let bmi = w / Math.pow(h, 2);

    if (bmi >= 16.5 && bmi < 18.5) {
        res.send(`Your BMI is: ${bmi.toFixed(2)}. You are UnderWeight.`);
    } else if (bmi >= 18.5 && bmi < 25) {
        res.send(`Your BMI is: ${bmi.toFixed(2)}. You are Normal.`);
    } else if (bmi >= 25 && bmi < 30) {
        res.send(`Your BMI is: ${bmi.toFixed(2)}. You are OverWeight.`);
    } else if (bmi >= 30 && bmi < 40) {
        res.send(`Your BMI is: ${bmi.toFixed(2)}. You are Obesity.`);
    }
})

app.listen(port, () => {
    console.log(`Server started on port ${port}`);
})