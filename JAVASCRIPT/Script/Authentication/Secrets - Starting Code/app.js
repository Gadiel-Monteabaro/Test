require('dotenv').config();
const express = require('express');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');
const _ = require('lodash');
const ejs = require('ejs');
const PORT = process.env.PORT || 3000;
const session = require('express-session');
const passport = require('passport');
const passportLocalMongoose = require('passport-local-mongoose');

const app = express();

app.use(express.static('public'));
app.use(bodyParser.urlencoded({ extended: true }));
app.set('view engine', 'ejs');

// Express-Session
app.use(session({
    secret: "Our Little Secret.",
    resave: false, // Obliga a que la sesión se guarde de nuevo en el almacén de sesiones
    saveUninitialized: true // Obliga a que una sesión "no inicializada" se guarde en la tienda.
}))

app.use(passport.initialize());
app.use(passport.session());


mongoose.connect('mongodb://127.0.0.1:27017/userDB', { useNewUrlParser: true });

const userSchema = new mongoose.Schema({
    email: String,
    password: String
});

// hash and salting nuestras contraseñas.
userSchema.plugin(passportLocalMongoose)

const User = mongoose.model('User', userSchema);

// Creamos la estrategia usando passport-local-mongoose
passport.use(User.createStrategy());

passport.serializeUser(User.serializeUser());
passport.deserializeUser(User.deserializeUser());

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

app.get('/secrets', (req, res) => {
    if (req.isAuthenticated()) {
        res.render('secrets');
    } else {
        res.redirect('/login');
    }
});

app.get('/logout', (req, res) => {

    req.logout((err) => {
        if (err) { return next(err); }
        res.redirect('/');
    });

});

// POST
app.post('/register', (req, res) => {
    User.register({ username: req.body.username }, req.body.password, (err, user) => {
        if (err) {
            console.log(err);
            res.redirect('/register');
        } else {
            passport.authenticate('local')(req, res, () => {
                res.redirect('/secrets');
            });
        }
    });
});

app.post('/login', (req, res) => {
    const user = new User({
        username: req.body.username,
        password: req.body.password
    })

    req.login(user, (err) => {
        if (err) {
            console.log(err);
        } else {
            passport.authenticate('local')(req, res, () => {
                res.redirect('/secrets');
            });
        }
    });

});

app.listen(PORT, () => {
    console.log(`Server started on port: ${PORT}.`);
});