var mysql = require('mysql2');
var connection = mysql.createConnection({
    host: 'localhost',
    database: 'hotelsmanager',
    user: 'root',
    password: 'root123'
});
connection.connect(function (err) {
    if (err) {
        console.error(`Error connecting: + err.stack`)
        return
    }

})
// connection.query('SELECT * FROM users', function (error, results, fields) {
//     if (error)
//         throw error;
//     results.forEach(result => {
//     });
// });

module.exports = connection;