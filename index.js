const mongoose = require("mongoose");
const articleModel = require("./article");

mongoose.connect("mongodb://localhost:27017/learningMongo");

const Article = mongoose.model("Article", articleModel);

Article.find({'_id': "67e468eff300c33886edb8e2"}).then(articles => {
    console.log(articles);
}).catch(error => {
    console.log(error);
});

// Article.find({}).then(articles => {
//     console.log(articles);
// }).catch(error => {
//     console.log(error);
// });

const newArticle = new Article({
    title: "O homem mais rico da babilônia", 
    author: "George Samuel Clason", 
    special: true,
    body: "...body...",
    resume: {
        content: "...resume content...",
        author: "Author of resume"
    }
});

newArticle.save().then(() => {
    console.log("Artigo salvo!");
}).catch(error => {
    console.log(error);
});