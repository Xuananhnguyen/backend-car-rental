const connection = require('../config/database')
const { getAllUsers } = require('../services/CRUDService');

const getHomepage = async (req, res) => {
    let results = await getAllUsers();
    return res.render('home.ejs', { listUsers: results })
}

const getABC = (req, res) => {
    res.send('Hello World! & check abc')
}

const getTest = (req, res) => {
    res.render('sample.ejs')
}

const postCreateUser = async (req, res) => {

    let email = req.body.email;
    let name = req.body.myname;
    let city = req.body.city;

    let [results, fields] = await connection.query(
        `INSERT INTO Users (email, name, city) VALUES (?, ?, ?) `, [email, name, city]
    );

    res.send("Created user succeed")
}

const getCreatePage = (req, res) => {
    res.render('create.ejs')
}

const getUpdatePage = (req, res) => {
    const userId = req.params.id;
    console.log(">>>> req.params: ", req.params, userId)
    res.render('edit.ejs')
}
module.exports = {
    getHomepage, getABC, getTest, postCreateUser, getCreatePage, getUpdatePage
}