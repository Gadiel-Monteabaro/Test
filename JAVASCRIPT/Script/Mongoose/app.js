const mongoose = require('mongoose');

mongoose.connect('mongodb://127.0.0.1:27017/fruitsDB', { useNewUrlParser: true });

// Creamos Una colleccion en mongoose.
const fruitSchema = new mongoose.Schema({
    name: {
        //validaciones
        type: String,
        require: [true, "Please insert a name."]
    },
    rating: {
        // Validaciones
        type: Number,
        min: 1,
        max: 10
    },
    review: String
});

const Fruit = mongoose.model("Fruit", fruitSchema);

const pineapple = new Fruit({
    name: "Pineapple",
    rating: 7,
    review: "Great Fruit"
});

pineapple.save();

// Esquema de Personas
const personSchema = new mongoose.Schema({
    name: {
        //validaciones
        type: String,
        require: [true, "Please insert a name."]
    },
    age: Number,
    favouriteFruit: fruitSchema
});

const Person = mongoose.model("Person", personSchema);

const person = new Person({
    name: "Gadiel",
    age: 26,
    favouriteFruit: pineapple
});

person.save();

//fruit.save()
// actualizacion
/*
    Fruit.updateOne({ _id: ['6403fb22f3957957b64ba175'] },
        { name: "Kiwi" }).then(result => {
            console.log(result)
        });
*/
// Eliminar
/*
    Fruit.deleteOne({ _id: "640422b4731bea671e3be0ae" }).then(result => {
     console.log(result);
    });
*/

// Leer una coleccion en mongoose.
Fruit.find()
    .then((fruits) => {
        mongoose.connection.close();
        fruits.forEach(element => {
            console.log(element.name)
        });
    }).catch((err) => {
        console.log(err);
    });

// como generar varias inserciones.
/*
    Fruit.insertMany([kiwi, banana, orange])
        .then(() => { // si se ejecuta la promesa.
            console.log("Successfully saved defult items to DB"); // hacer esto.
        }).catch((err) => { // si se rechaza la promesa.
            console.log(err); // hacer esto.
        });
*/