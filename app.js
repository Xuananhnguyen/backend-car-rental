const express = require('express');
const mysql = require('mysql');

const app = express();
const port = 3000;

// Tạo kết nối đến cơ sở dữ liệu MySQL
const db = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: '',
    database: 'db_car_rental_2'
});

// Kết nối đến cơ sở dữ liệu
db.connect((err) => {
    if (err) {
        throw err;
    }
    console.log('Connected to MySQL');
});

// Định nghĩa một route để truy vấn dữ liệu từ cơ sở dữ liệu
app.get('/api/carRental/users', (req, res) => {
    const query = 'SELECT * FROM users';

    db.query(query, (err, result) => {
        if (err) {
            throw err;
        }
        res.json(result);
    });
});

app.get('/api/carRental/vehicles', (req, res) => {
    const query = 'SELECT * FROM vehicles';

    db.query(query, (err, result) => {
        if (err) {
            throw err;
        }
        res.json(result);
    });
});




// Lắng nghe cổng và khởi động máy chủ
app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
});





