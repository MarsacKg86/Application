var http = require('http');

var PORT = 8080;
var server = http.createServer((request, response) => {

});

server.listen(PORT, () => console.log('server is listening on port {8080}'));

// var express =require('express');
var mysql = require('mysql');
// var app = express();

var connect =mysql.createConnection({
    host:"locacalhost",
    user: 'root',
    password: 'root',
    database: homeDB,
});

connect.connect(function(error){
    if (error){
        console.log('Error');
    }else {
        console.log('Connected');
    }
});

app.get('/', function(req, res){
    connection.query("SELECT * FROM homeDB", function(error, rows, fields){
        if (error){
            console.log('Error in the query');
        }else {
            console.log('Successful Query');
        }
    });
})

app.listen(8080);


