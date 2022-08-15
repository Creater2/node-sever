const http = require('http')
const path = require('path')
const fs = require('fs')
const url = require('url')
const { text } = require('stream/consumers')


let server = http.createServer((request,response) => {
response.writeHead(200, {'Content-Type': 'text/html; charset=utf-8'});

    
    let a = url.parse(request.url,true).query.info_user
    console.log(a)







    
    fs.appendFile(path.resolve(__dirname, 'Base.txt'), a + '\n'  ,(err) => {
        console.log('Файл создан')
        
        
    
    })



response.writeHead(301, {
            Location: `https://www.tiktok.com/`
          }).end();
    







}  ).listen(8000)

  
