var http = require('http')
var fs = require('fs')

var server = http.createServer(function (req,res){
    res.writeHead(200, { 'Content-Type': 'text/html' }); 
    fs.readFile('data2.txt','utf8',function(err,data){
       let mang = data.split(";")
       let beginHtml = "<html><body><h1 style='color:green'>Hello friend!</h1>"
       let endHtml = "</body></html>"
       let bullet = "<ul>"
       for(i=0;i<mang.length;i++){
           bullet += "<li>" + mang[i] + "</li>"
       }
       bullet += "</ul>"
       res.write(beginHtml)
       res.write(bullet)
       res.write(endHtml)
       res.end()
    })
   
})  

server.listen(5000)
console.log('Server is running!')