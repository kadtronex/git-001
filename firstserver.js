var http = require('http');


http.createServer(function(req,res)
{

res.writeHead(200,{'conent-type': 'text/html'});
res.end('Welcome to our internal Web technology services by Eng. KALS');

}).listen(8080);



