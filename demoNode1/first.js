var x = 20
x = x * 5
// console.log("Gia tri cua x: " + x)

// function display(x){
//     console.log("display function: " + x)
// }
// display(x)
// display("Hello world")

// var fs = require('fs')
// // fs.readFile('data.txt','utf-8',function (error,data){
// //     console.log("du lieu tu file")
// //     console.log(data)
// // })
// var content = fs.readFileSync("data.txt","utf8")
// console.log("du lieu tu file")
// console.log(content)
// console.log("The last???")

var names = "Hoang;Linh;Trang;Mai"
var mang = names.split(";")
for(i=0;i<mang.length;i++){
    console.log(mang[i].toUpperCase())
}