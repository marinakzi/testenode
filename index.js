var http: require('http');

var fs = require('fs');

var teste = fs.readFileSync('teste.html')

http.createServer(function(req, res){

res.end(teste);

}).listen(3000);


console.log('okok');