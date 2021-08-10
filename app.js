const express = require('express');

const app = express();

app.set('views','./views')
app.set('view engine', 'ejs');





app.get('/',(req,res)=>{
res.render('index')

});

app.get('/done',(req,res)=>{
    res.render('done')
});
app.listen(8000,()=>console.log('server started...'));
