const express = require('express');
const app = express();
const path = require('path');
const dir = path.join(__dirname);
const mongoose = require('mongoose');
var bodyParser = require('body-parser');
let urlencoded = bodyParser.urlencoded({ extended: false });

// mongodb & monoose connectivity

const URI = 'mongodb://localhost/portfolioQuery'

mongoose .connect(URI, {
        useNewUrlParser: true,
        useUnifiedTopology: true  })   
 .then(() => console.log("Database connected!"))
 .catch(err => console.log(err));


const querySchema = new mongoose.Schema({
  name: String,
  email: String,
  subject: String,
  message: String
});

const queryModel = mongoose.model('Query', querySchema);

// server creation

app.set('port', (process.env.PORT || 80));
app.set('view engine', 'pug');
app.use("/static", express.static('./static/'));
app.use(express.static("./views"));

app.get('/' , (req , res)=>{
    params = {'title': 'mudit website'}
    res.render(dir+'/views/homepage.pug',params);
});

app.post('/' ,urlencoded, (req , res)=>{
    const query = new queryModel({ name: req.body.name,email: req.body.email,subject:req.body.subject,message:req.body.message });
    console.log(query);
    query.save((err)=>{
    if(err) return console.log(err);
    });
    params = {'title': 'mudit website'}
    res.render(dir+'/views/homepage.pug',params);
});

app.get('/about' , (req , res)=>{
    params = {'title': '|ABOUT| @ Mudit'}
    res.render(dir+'/views/about.pug',params);
});

app.post('/about' ,urlencoded, (req , res)=>{
    const query = new queryModel({ name: req.body.name,email: req.body.email,subject:req.body.subject,message:req.body.message });
    console.log(query);
    query.save((err)=>{
    if(err) return console.log(err);
    });
    params = {'title': 'mudit website'}
    res.render(dir+'/views/homepage.pug',params);
});

app.get('/portfolio' , (req , res)=>{
    params = {'title': '|PORTFOLIO| @ Mudit'}
    res.render(dir+'/views/portfolio.pug',params);
});

app.post('/portfolio' ,urlencoded, (req , res)=>{
    const query = new queryModel({ name: req.body.name,email: req.body.email,subject:req.body.subject,message:req.body.message });
    console.log(query);
    query.save((err)=>{
    if(err) return console.log(err);
    });
    params = {'title': 'mudit website'}
    res.render(dir+'/views/homepage.pug',params);
});

app.get('/contact' , (req , res)=>{
    params = {'title': '|CONTACT| @ Mudit'}
    res.render(dir+'/views/contact.pug',params);
});

app.post('/contact' ,urlencoded, (req , res)=>{
    const query = new queryModel({ name: req.body.name,email: req.body.email,subject:req.body.subject,message:req.body.message });
    console.log(query);
    query.save((err)=>{
    if(err) return console.log(err);
    });
    params = {'title': 'mudit website'}
    res.render(dir+'/views/homepage.pug',params);
});

app.listen(app.get('port'),()=>{
    console.log('Node app is running on port', app.get('port'));
    console.log(dir);
})
