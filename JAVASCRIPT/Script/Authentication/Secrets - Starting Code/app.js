require('dotenv').config();
const express = require('express');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');
const _ = require('lodash');
const ejs = require('ejs');
const PORT = process.env.PORT || 3000;
const app = express();

// Salt Round.
const bcrypt = require('bcrypt');
const saltRounds = 10;


app.use(express.static('public'));
app.use(bodyParser.urlencoded({ extended: true }));
app.set('view engine', 'ejs');

mongoose.connect('mongodb://127.0.0.1:27017/userDB', { useNewUrlParser: true });

const userSchema = new mongoose.Schema({
    email: String,
    password: String
});

const User = mongoose.model('User', userSchema);

//  GET
app.get('/', (req, res) => {
    res.render('home');
});

app.get('/login', (req, res) => {
    res.render('login');
});

app.get('/register', (req, res) => {
    res.render('register');
});

// POST
app.post('/register', (req, res) => {
    bcrypt.hash(req.body.password, saltRounds, function (err, hash) {
        const newUser = new User({
            email: req.body.username,
            password: hash
        });
        newUser.save()
            .then(() => {
                res.render('secrets');
            }).catch(err => {
                console.log(err);
            })
    });
});

app.post('/login', (req, res) => {
    const username = req.body.username;
    const password = req.body.password;

    User.findOne({ email: username })
        .then((user) => {
            // Load hash from your password DB.
            bcrypt.compare(password, user.password, function (err, result) {
                // result == true
                if (result === true) {
                    res.render('secrets');
                } else {
                    res.redirect('login');
                }
            });
        }).catch(err => {
            console.log(err);
        })
});

app.listen(PORT, () => {
    console.log(`Server started on port: ${PORT}.`);
});