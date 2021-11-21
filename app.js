const express = require("express")
const path = require("path");
const mysql = require("mysql")
const app = express()
const hbs = require("hbs")
// const port = process.env.PORT || 5000

//db connection
const conn = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: '',
    database: 'bookingtable'
});

const publicDir = path.join(__dirname, './public');
app.use(express.static(publicDir));

app.use(express.urlencoded({extended:false}));
//Parse JSON bodies (as sent by API clients)
app.use(express.json());

app.set('view engine', 'hbs')

conn.connect((error) =>{
    if(error){
        console.log('err in connection')
    }
    else{
        console.log('mysql connected')
    }

});

app.get('/', function(req, res){
    res.render('../view/index');
});

app.get('/ui-cards',(req,res)=>{
    res.render('../view/ui-cards');
});

app.use('/auth', require('./routes/auth'));

 
//listen on env poert or 5000
app.listen(3000, () =>{
    console.log("Listen on port"+3000)
});



