var express = require('express')
var fs = require('fs')
var app = express()

app.set('view engine','hbs')
app.use(express.urlencoded({extended:true}))

app.post('/registerLunch',function(req,res){
    //1.lay gia tri nguoi dung nhap o Form
    let name = req.body.txtName
    let food = req.body.food
    //2. Save vao file: name va food
    let data = name + ';' + food + '\n'
    fs.appendFile('data.txt',data,function(){})
    //3. Hien thi confirm da dang ky
    let user = {
        'name': name,
        'food': food
    }
    res.render('thank',{'user':user})

})

app.get('/',function (req,res){
    //ngay thang hien tai tren Server
    let now = new Date()
    let name = "Captain Jack"
    res.render('home',{'now':now,'name':name})
})

app.get('/student',function(req,res){
    let foods = ['my tom','pho','xoi ga']
    res.render('student',{'foods': foods})
})

app.listen(5000)
console.log("Server is running!")