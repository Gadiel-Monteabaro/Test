const express = require("express");
const bodyParser = require("body-parser");
const { urlencoded } = require("body-parser");
const app = express();
const date = require(__dirname + "/date.js");

const items = ["Cocinar"];
const workItems = ["App.js"];


// utilizamos ejs como motor de visualizacion.
app.set('view engine', 'ejs');

app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.static("public"));

app.get("/", (req, res) => {
    // representamos una pagina en particular.
    // renderizamos el archivo list, y le pasaremnos una variable kinfOfDay.
    // clave   //valor
    const day = date.getDate();
    res.render("list", { listTitle: day, newItems: items });
});

app.post("/", (req, res) => {
    const item = req.body.newItem;
    const listName = req.body.list;
    console.log(listName)
    if (listName === "Work List") {
        workItems.push(item)
        res.redirect('/work');
    } else {
        items.push(item);
        res.redirect('/');
    }
})

app.get("/work", (req, res) => {
    res.render("list", { listTitle: "Work List", newItems: workItems });
})

app.listen(3000, () => console.log("Server started on port 3000."));