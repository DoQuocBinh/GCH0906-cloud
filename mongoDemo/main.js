var express = require('express')
const async = require('hbs/lib/async')
var app = express()

app.set('view engine','hbs')
app.use(express.urlencoded({extended:true}))

app.get('/',(req,res)=>{
    res.render('home')
})
//duong dan den database
var url = 'mongodb://localhost:27017';
//import thu vien MongoDB
var MongoClient = require('mongodb').MongoClient;

app.post('/createProduct',async (req,res)=>{
    let name = req.body.txtName
    let price =req.body.txtPrice
    let picURL = req.body.txtPicture
    let product = {
        'name':name,
        'price': price,
        'picURL':picURL
    }
    //insert product vao database
    //1.ket noi den database server voi dia chi la url
    let client= await MongoClient.connect(url);
    //2.truy cap database ATNToys
    let dbo = client.db("ATNToys");
    //3.insert product vao database ATNToys, trong table product
    await dbo.collection("product").insertOne(product);
    //goi lai trang home
    res.redirect('/')
})

app.get('/create',(req,res)=>{
    res.render('createProduct')
})

const PORT = process.env.PORT || 5000
app.listen(PORT)
console.log("Server is running!")