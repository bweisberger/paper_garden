const express = require('express');
const bodyParser = require('body-parser');
const methodOverride = require('method-override');
const session = require('express-session');

const app = express();

require('.db/db')

const userController = require('./controllers/users')
const projectController = require('./controllers/projects')

app.use(session({
    secret: 'Kevin Spacey is Kaiser Soze.',
    resave: false,
    saveUninitialized: false
}))

app.use(bodyParser.urlencoded({extended: false}));

app.use(methodOverride('_method'));

app.use('/users', userController);
app.use('/projects', projectController);
app.get('/', async (req, res) =>{
    try{
      res.send("hi")
      console.log(req.session); 
    } catch(err){
        console.log(err)
        res.send(err)
    }
})

app.listen(3333, ()=>{
    console.log('express server listening on port 3333')
})