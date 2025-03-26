const mongoose = require("mongoose");
const articleModel = require("./article");

mongoose.connect("mongodb://localhost:27017/learningMongo");

const Article = mongoose.model("Article", articleModel);

const newArticle = new Article({title: "O homem mais rico da babilônia", author: "George Samuel Clason", body: "..."});

newArticle.save().then(() => {
    console.log("Artigo salvo!");
}).catch(error => {
    console.log(error);
});