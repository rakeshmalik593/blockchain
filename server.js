let fs = require("fs");
let http = require("http");
let server = http.createServer();
server.on("request", (req, res) => {
  let url = req.url;
  let myReadStream;
  switch (url) {
    case "/":
    case "/public/index.html":
      res.writeHead(200, { "Content-type": "text/html" });
      myReadStream = fs.createReadStream("./public/index.html", "utf-8");
      readAndWriteFile();
      break;
    case "/public/transfer.html":
      res.writeHead(200, { "Content-type": "text/html" });
      myReadStream = fs.createReadStream("./public/transfer.html", "utf-8");
      readAndWriteFile();
      break;
      case "/public/deposit.html":
      res.writeHead(200, { "Content-type": "text/html" });
      myReadStream = fs.createReadStream("./public/deposit.html", "utf-8");
      readAndWriteFile();
      break;
    case "/public/css/style.css":
      res.writeHead(200, { "Content-type": "text/css" });
      myReadStream = fs.createReadStream("./public/css/style.css", "utf-8");
      readAndWriteFile();
      break;
    case "/public/js/contract.js":
      res.writeHead(200, { "Content-type": "application/javascript" });
      myReadStream = fs.createReadStream("./public/js/contract.js", "utf-8");
      readAndWriteFile();
      break;
    case "/public/js/transfer.js":
      res.writeHead(200, { "Content-type": "application/javascript" });
      myReadStream = fs.createReadStream("./public/js/transfer.js", "utf-8");
      readAndWriteFile();
      break;
    }
//-------------------------------------------------------------
function readAndWriteFile(){
    myReadStream.on("data", (chunk) => {
        res.write(chunk);
      });
      myReadStream.on("end", () => {
        res.end();
        console.log("readstream finished writing to response object");
      });
}
  
});
server.listen(8080, "127.0.0.1");
console.log("server running on 8080");
// const express = require('express');
// const app = express();

// app.get(['/','/index.html'],function(req,res){
//   res.sendFile(__dirname + '/public/index.html');
// });
// app.get(['/','transfer.html'],function(req,res){
//   res.sendFile(__dirname + '/public/transfer.html');
// });
// app.get(['/','/css/style.css'],function(req,res){
//   res.sendFile(__dirname + '/public/css/style.css');
// });
// app.get(['/','js/contract.js'],function(req,res){
//   res.sendFile(__dirname + '/public/js/contract.js');
// });
// app.get(['/','js/transfer.js'],function(req,res){
//   res.sendFile(__dirname + '/public/js/transfer.js');
// });

// app.listen(8080,'127.0.0.1',function(){
//   console.log("app running on port 8080");
// })