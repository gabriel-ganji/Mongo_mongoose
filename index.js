const mongoose = require("mongoose");
const articleModel = require("./article");

mongoose.connect("mongodb://localhost:27017/learningMongo");

const Article = mongoose.model("Article", articleModel);

//Update
Article.findByIdAndUpdate("67e469857fb20956a5d64486", {
    title: "Vue do zero!",
    author: "Gabriel",
    body: "Vue.js do zero!"
}).then(() => {
    console.log("Atualizado com sucesso!")
}).catch(error => {
    console.log(error);
});

//=============================================
//Deleting data
// Article.findByIdAndDelete("67e46851130595eb5e88604b").then(() => {
//     console.log("Dado removido!");
// }).catch(error => {
//     console.log(error);
// })

//=============================================
//Data search
// Article.find({'_id': "67e468eff300c33886edb8e2"}).then(articles => {
//     console.log(articles);
// }).catch(error => {
//     console.log(error);
// });

// Article.find({}).then(articles => {
//     console.log(articles);
// }).catch(error => {
//     console.log(error);
// });

//=============================================
//Data register
// const newArticle = new Article({
//     title: "O homem mais rico da babilônia", 
//     author: "George Samuel Clason", 
//     special: true,
//     body: "...body...",
//     resume: {
//         content: "...resume content...",
//         author: "Author of resume"
//     }
// });

// newArticle.save().then(() => {
//     console.log("Artigo salvo!");
// }).catch(error => {
//     console.log(error);
// });