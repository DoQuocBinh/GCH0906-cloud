var express = require('express')
var fs = require('fs')
var app = express()

app.set('view engine','hbs')
app.use(express.static('public'))
app.use(express.urlencoded({extended:true}))

app.get('/', (req,res)=>{
    let name = "Pirate Jack"
    console.log("MyAPP: Ok")
    res.render('home',{'name': name})
})

app.get('/home',(req,res)=>{
    let content = fs.readFileSync('data.txt','utf-8')
    //products la 1 array, vd phan tu dau tien co gia tri "Ipad;ipad.jpg"
    let products = content.trim().split('\n')
    let productElements = [] // mang empty
    for(i=0;i<products.length;i++){
        let element = {
            'name' : products[i].trim().split(';')[0],
            'picture' : products[i].trim().split(';')[1]
        }
        productElements.push(element)
    }
    res.render('home',{'products':productElements})
})

//Port dong hoac 5000
const PORT = process.env.PORT || 5000
app.listen(PORT)
console.log("Server is runn on Port:" + PORT)