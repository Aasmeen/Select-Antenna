const express = require('express');
const path = require('path');
const hbs = require('hbs');
const app = express();
const {sendEmail} = require('./emails/emails');

const port = process.env.PORT;

const public_dir_path = path.join(__dirname,'../public');
const viewsPath=path.join(__dirname,'../templates/views');
const partialsPath = path.join(__dirname,'../templates/partials');

app.set('view engine','hbs');
app.set('views',viewsPath);
hbs.registerPartials(partialsPath);

app.use(express.static(public_dir_path));

app.get('',(req,res)=>{
    res.render('index');
})

app.get('/index',(req,res)=>{
    res.render('index');
})

app.get('/about',(req,res)=>{
    res.render('about');
})

app.get('/products',(req,res)=>{
    res.render('products');
})

app.get('/mission',(req,res)=>{
    res.render('mission');
})

app.get('/contact',(req,res)=>{
    res.render('contact');
    if(req.query.email&&req.query.text){
        sendEmail(req.query.email, req.query.text);
    }
})

app.get('*',(req,res)=>{
    res.render('404');
})

app.listen(port,()=>{
    console.log('Server up on port '+port);
});