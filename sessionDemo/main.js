var express = require('express')
var app = express()
var session = require('express-session')

app.set('view engine','hbs')
app.use(session({
    secret : '##%@#$^^&**(###GHH##@D',
    resave: false
}))
app.use(express.urlencoded({extended:true}))

app.post('/register',(req,res)=>{
    let name = req.body.txtName
    req.session.userName = name
    res.redirect('/')
})

app.get('/',(req,res)=>{
    var count = req.session.count || 0
    count++
    req.session.count = count
    res.render('home',{'count':count,'name': req.session.userName})
})

const PORT = process.env.PORT || 5000
app.listen(PORT)