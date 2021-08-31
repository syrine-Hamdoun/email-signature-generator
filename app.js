const express = require('express');

const app = express();

app.set('views','./views')
app.set('view engine', 'ejs');


app.get('/index',(req,res)=>{
    res.render('index')
    
    });

app.get('/',(req,res)=>{
res.render('basic')

});

app.get('/views/basic.ejs',(req,res)=>{
    res.render('basic')
    
    });


app.get('/views/template.ejs',(req,res)=>{
    res.render('template')
    
    });

    app.get('/views/template.ejs',(req,res)=>{
        res.render('template')
        
        });

        app.get('/views/social.ejs',(req,res)=>{
            res.render('social')
            
            });


app.listen(8000,()=>console.log('server started...'));
