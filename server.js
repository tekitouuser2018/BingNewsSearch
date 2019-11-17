var http = require('http');
var sr = require('./search');

let re;

http.createServer(function (req, res) {
    res.writeHead(200, {
        'Content-Type': 'application/json',
        'Access-Control-Allow-Origin': 'http://localhost:8081'
    });
    re = JSON.stringify(sr.getNews());
    console.log("----------return from 8080-----------");
    console.log(re);
    res.end(re);
}).listen(8080);