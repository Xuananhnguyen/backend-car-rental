const mysql = require('mysql');

// Tạo kết nối đến cơ sở dữ liệu MySQL
const db = createConnection({
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

// Dữ liệu người dùng mới
const newUser = {
    name: 'Nguyen Xuan Anh',
    email: 'xuananhnguyen0306@gmail.com',
    password: '123456',
    phone_number: '0366046334', 
    address: 'Ha Noi',
    date_of_birth: '2000-06-03'
};

// Thêm người dùng vào bảng Users
const query = 'INSERT INTO users (name, email, password, phone_number, address, date_of_birth) VALUES (?, ?, ?, ?)';
db.query(query, [newUser.name, newUser.email, newUser.password, newUser.phone_number, newUser.address, newUser.date_of_birth], (err, result) => {
    if (err) {
        throw err;
    }
    console.log('User added successfully:', result);
});

// Đóng kết nối đến cơ sở dữ liệu sau khi thêm dữ liệu
db.end();