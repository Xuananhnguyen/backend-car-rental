require('dotenv').config()
const express = require('express'); //commonjs
const configViewEngine = require('./config/viewEngine')
const webRoutes = require('./routes/web');
const mysql = require('mysql2');


const app = express();// app express
const port = process.env.PORT || 8888; // port
const hostname = process.env.HOST_NAME;

//config template engine
configViewEngine(app)

// Khai báo route
app.use('/', webRoutes);

//test connection 
const connection = mysql.createConnection({
    host: 'localhost',
    port: 3307, //default: 3306
    user: 'root',
    password: '123456',
    database: 'hoidanit'
});

connection.query(
    'SELECT * FROM Users',
    function (err, results, fields) {
        console.log(">>> results=", results); // results contains rows returned by server
        console.log(">>> fields=", fields); // fields contains extra meta data about results, if available
    }
);

app.listen(port, hostname, () => {
    console.log(`Example app listening on port ${port}`)
})
