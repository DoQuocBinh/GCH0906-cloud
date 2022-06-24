var express = require('express')
var app = express()
var session = require('express-session')
var mongoClient = require('mongodb').MongoClient

var url = 'mongodb://127.0.0.1/27017'

app.set('view engine', 'hbs')
app.use(session({
    secret: '##%@#$^^&**(###GHH##@D',
    resave: false
}))
app.use(express.urlencoded({ extended: true }))

app.post('/register', async (req, res) => {
    let name = req.body.txtName
    //req.session.userName = name
    let server = await mongoClient.connect(url)
    let dbo = server.db("ATNToys")
    let user = await dbo.collection("users").find({ 'name': name }).toArray()
    if (user.length > 0)
        req.session.userName = user[0].name
    res.redirect('/')
})

function isAuthenticated(req, res, next) {
    if (!req.session.userName)
        res.redirect('/')
    else
        next()
}
app.get('/profile',isAuthenticated, (req, res) => {
    res.render('profile', { name: req.session.userName })
})

app.get('/logout',isAuthenticated,(req,res)=>{
    req.session.userName = null
    req.session.save((err)=>{
        req.session.regenerate((err2)=>{
            res.redirect('/')
        })
    })
})

app.get('/', (req, res) => {
    var count = req.session.count || 0
    count++
    req.session.count = count
    res.render('home', { 'count': count, 'name': req.session.userName })
})

const PORT = process.env.PORT || 5000
app.listen(PORT)