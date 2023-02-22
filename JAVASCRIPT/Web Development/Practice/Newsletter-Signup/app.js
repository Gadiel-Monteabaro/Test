const express = require('express');
const bodyParser = require('body-parser');
const request = require('request'); // esta esta en desuso, investigar nueva actualizacionl.
const https = require('https');
const app = express();
const port = 3000;

app.use(bodyParser.urlencoded({ extended: true }));
// especifica una carpeta estatica, donde alamacenamos todos los archivos de estilo e img.
app.use(express.static("public"));

app.get('/', (req, res) => {
    res.sendFile(__dirname + "/signup.html");
})

app.post('/failure', (req, res) => {
    res.redirect('/'); // redireccionamos a un ruta especificada.
})

app.post('/', (req, res) => {

    const firstName = req.body.firstName;
    const lastName = req.body.lastName;
    const email = req.body.email;

    const data = {
        members: [
            {
                email_address: email,
                status: "subscribed",
                merge_fields: {
                    FNAME: firstName,
                    LNAME: lastName,
                }
            }
        ]
    }

    const jsonData = JSON.stringify(data);
    //46d57ffdc2 audience ID.
    const url = "https://us10.api.mailchimp.com/3.0/lists/46d57ffdc2"

    const options = {
        method: "POST",
        //93b785c37ef306dc1e17cf91bf1982e0-us10 -> key mailchimp.
        auth: "gadiel:93b785c37ef306dc1e17cf91bf1982e0-us10"
    };

    const request = https.request(url, options, (response) => {
        const status = response.statusCode;
        if (status === 200) {
            res.sendFile(__dirname + "/success.html");
        } else {
            res.sendFile(__dirname + "/failure.html");
        }
        response.on("data", (data) => {
            console.log(JSON.parse(data));
        })
    })

    request.write(jsonData);
    request.end();
})

app.listen(port, () => {
    console.log(`Server is running on port ${port}`)
})