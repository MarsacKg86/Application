var http = require('http');
var url = require('url');
var db = require('./db');

var server = http.createServer(function(req, res){
    var parsUrl = url.parse(req.url, true);

    if(parsUrl.pathname === ('/')){
        res.writeHead(200, {'Content-Type': 'text/plain'});
        res.end();
    }

    if (parsUrl.pathname === ('./index')){
        res.writeHead(200, {'Content-Type': 'text/plain'});
        res.end();
    }

    if (parsUrl.pathname === ('./listHouses')){
        res.writeHead(200, {'Content-Type': 'application/json', 'access-control-allow-origin': '*'});
        db.getResults().then(function(result){
            res.write(result);
            res.end();
        }).catch(console.log(error));
    }
 
});
server.listen(8080, function(){
    console.log('Listening on Port:' + 8080);
});