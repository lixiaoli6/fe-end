var http = require('http');
http
    .createServer((req,res)=>{
        res.writeHead(200,{'content-Type':'text/html'});
        res.write('<h1>node.js</h1>');
        res.end('<p>hello world</p>')
    })
    .listen(3000);
console.log('HTTP')