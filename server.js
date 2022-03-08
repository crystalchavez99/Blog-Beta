const express = require("express");
const articleRouter = require('./routes/articles');
const { Pool } = require('pg');
const {Article} = require("./models");
const methodOverride = require("method-override");
const app = express();



app.set("view engine","pug");
app.use(express.urlencoded({extended:false}));
app.use(methodOverride('_method'));

const pool = new Pool({
    user: 'blog_author',
    password: 'blog',
  });
app.get('/', async(req,res)=>{
    const articles = await Article.findAll({
        order: [['createdAt', 'DESC']]
    });
    //console.log(articles)
    res.render('articles/index', {articles: articles})
})

app.use('/articles',articleRouter)


const port = 8081;
app.listen(port,()=>{console.log(`Port ${port}`)})
