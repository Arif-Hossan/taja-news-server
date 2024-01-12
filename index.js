const express = require('express');
const app = express();
const port = process.env.port || 5000;
// initialize cors
const cors = require('cors');
// importing categories data from the directory
const categories = require('./data/categories.json');
// importing all news data from the directory
const news = require('./data/news.json');
app.use(cors());

app.get('/',(req,res)=>{
    res.send('Taja hoye jaw');
})

app.get('/categories',(req,res)=>{
    res.send(categories)
})
// all news load
app.get('/news',(req,res)=>{
    res.send(news);
})
// category wise news data load
app.get('/category/:id',(req,res)=>{
    const id = req.params.id;
    // console.log( id);
    const categoryNews = news.filter(n => n.category_id === id);
    res.send(categoryNews);
})
// id wise single news load
app.get('/news/:id',(req,res)=>{
    const id = req.params.id;
    // console.log(typeof id);
    // as id is a string thats why we need to convert it in a number here
    // as we compare it using triple equal
    const singleNews = news.find(n=> parseInt(n._id) === parseInt(id));
    res.send(singleNews);
})

app.listen(port,()=>{
    console.log('Taja hoye jaw');
})