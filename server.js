const express = require('express');
const app = express();
const path = require('path');
const dir = path.join(__dirname);

app.set('port', (process.env.PORT || 80));

app.set('view engine', 'pug')
app.use("/static", express.static('./static/'));
app.use(express.static("./views"));

app.get('/' , (req , res)=>{
    params = {'title': 'mudit website'}
    res.render(dir+'/views/homepage.pug',params);
});
app.get('/about' , (req , res)=>{
    params = {'title': '|ABOUT| @ Mudit'}
    res.render(dir+'/views/about.pug',params);
});
app.get('/portfolio' , (req , res)=>{
    params = {'title': '|PORTFOLIO| @ Mudit'}
    res.render(dir+'/views/portfolio.pug',params);
});
app.get('/contact' , (req , res)=>{
    params = {'title': '|CONTACT| @ Mudit'}
    res.render(dir+'/views/contact.pug',params);
});

app.listen(app.get('port'),()=>{
    console.log('Node app is running on port', app.get('port'));
    console.log(dir);
})



