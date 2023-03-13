const express = require('express');
const bodyParser = require('body-parser');
const ejs = require('ejs');
const mongoose = require('mongoose');
const PORT = 3000;

const app = express();

app.set('view engine', 'ejs');
mongoose.set('strictQuery', false);

app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.static('public'));

// Setup Mongoose
mongoose.connect('mongodb://127.0.0.1:27017/wikiDB', { useNewUrlParser: true });

// Setup Schema
const articleSchema = new mongoose.Schema({
    title: {
        //validations
        type: String,
        require: [true, "Please insert a name."]
    },
    content: String
});

// Setup Model
const Article = mongoose.model('Article', articleSchema);

// HTTP
app.route('/articles')
    .get((req, res) => {
        Article.find({})
            .then((articles) => {
                res.send(articles);
            })
            .catch((err) => {
                res.send(err)
            });
    })

    .post((req, res) => {
        const newArticle = new Article({
            title: req.body.title,
            content: req.body.content
        })

        newArticle.save()
            .then(() => {
                res.send("Succesfully added a new article.");
            })
            .catch((err) => {
                res.send(err);
            });
    })

    .delete((req, res) => {
        Article.deleteMany({})
            .then(() => {
                res.send("Succesfully delete all articles.");
            })
            .catch((err) => {
                res.send(err);
            });
    })

app.route('/articles/:articleTitle')
    .get((req, res) => {
        Article.findOne({ title: req.params.articleTitle })
            .then((article) => {
                res.send(article);
            })
            .catch((err) => {
                res.send(err);
            });
    })

    .put((req, res) => {
        Article.replaceOne({ title: req.params.articleTitle }, { $set: { title: req.body.title, content: req.body.content } })
            .then(() => {
                res.send("Succesfully article updated.");
            })
            .catch((err) => {
                res.send(err);
            });
    })

    .patch((req, res) => {
        Article.updateOne({ title: req.params.articleTitle }, { $set: req.body })
            .then(() => {
                res.send("Succesfully article updated.");
            })
            .catch((err) => {
                res.send(err);
            })
    })

    .delete((req, res) => {
        Article.deleteOne({ title: req.params.articleTitle })
            .then(() => {
                res.send("Succesfully article deleted.");
            })
            .catch((err) => {
                res.send(err);
            })
    })
    

app.listen(PORT, () => {
    console.log(`Server started on port ${PORT}`);
})