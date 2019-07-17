
/* Need this top half to create server and 
then talk to DB via mysql
DB will have the addresses and then further tags to sort based
on School Ranking, Price and find Homes by searching City, State & zip code
This top half breaks the bottom half so be sure to comment it out
if you just want to run the on click show array*/

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
    database: 'homeDB',
});

connect.connect(function(error){
    if (error){
        console.log('Error');
    } else {
        console.log('Connected');
    }
});

mysql.get('/', function(req, res){
    connection.query("SELECT * FROM homeDB", function(error, rows, fields){
        if (error){
            console.log('Error in the query');
        } else {
            console.log('Successful Query');
        }
    });
})

mysql.listen(8080);*/


/*From here down will have the on click load the array*/

var btn = document.getElementById("btn");
var list = document.getElementById("addressList");

var addresses = ['614 Mockingbird Lane', '88 James Drive', '112 13th Street'];

btn.addEventListener("click", function(){
    for (i=0; i<addresses.length; i++){
        var node = document.createElement("LI");
        var address = document.createTextNode(addresses[i]);
        node.appendChild(address);
        list.appendChild(node);
    }
});




