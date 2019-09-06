const express = require('express');
const app = express();

app.get('/', async (req, res) =>{
    try{
      res.send("hi")  
    } catch(err){
        console.log(err)
        res.send(err)
    }
})

app.listen(3333, ()=>{
    console.log('express server listening on port 3333')
})