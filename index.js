const express = require('express');
const app = express();
const port = process.env.port || 5000;
// initialize cors
const cors = require('cors');
// importing categories data from the directory
const categories = require('./data/categories.json');
app.use(cors());

app.get('/',(req,res)=>{
    res.send('Taja hoye jaw');
})

app.get('/categories',(req,res)=>{
    res.send(categories)
})
app.listen(port,()=>{
    console.log('Taja hoye jaw');
})