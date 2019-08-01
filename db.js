/* Need this top half to create server and 
then talk to DB via mysql
DB will have the addresses and then further tags to sort based
on School Ranking, Price and find Homes by searching City, State & zip code
This top half breaks the bottom half so be sure to comment it out
if you just want to run the on click show array*/

var mysql = require('mysql');
var connect = mysql.createConnection({
    host:"locacalhost",
    user: 'root',
    password: 'root',
    database: 'homeDB',
});

// connect.connect(function(error){
//     if (error){
//         console.log('Error');
//     } else {
//         console.log('Connected');
//     }
// });

function getResults(){
    return new Promise((resolve, reject) => {
        connect.query('SELECT * FROM homeDB', function (error, result){
            if (error) reject (error);
            resolve(JSON.stringify(result));
        })
    });
}
getResults().then(result => {console.log(result)});

module.exports.getResults = getResults;

// mysql.get('/', function(req, res){
//     connection.query("SELECT * FROM homeDB", function(error, rows, fields){
//         if (error){
//             console.log('Error in the query');
//         } else {
//             console.log('Successful Query');
//         }
//     });
// })

// mysql.listen(8080);

// var server = http.createServer((request, response) => {

// });

// server.listen(PORT, () => console.log('server is listening on port {8080}'));

