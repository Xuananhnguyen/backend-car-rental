const connection = require('../config/database')
const { getAllUsers, getUserById, updateUserById } = require('../services/CRUDService');

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

const getUpdatePage = async (req, res) => {
    const userId = req.params.id;
    let user = await getUserById(userId);
    res.render('edit.ejs', { userEidt: user }) // x <- y
}

const postUpdateUser = async (req, res) => {
    let email = req.body.email;
    let name = req.body.myname;
    let city = req.body.city;
    let userId = req.body.userId;
    await updateUserById(email, name, city, userId);
    res.redirect('/')
}

module.exports = {
    getHomepage, getABC, getTest, postCreateUser, getCreatePage, getUpdatePage, postUpdateUser
}