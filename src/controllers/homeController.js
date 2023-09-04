const getHomepage = (req, res) => {
    res.send('Hello World! & 2222')
}

const getABC = (req, res) => {
    res.send('Hello World! & check abc')
}

const getTest = (req, res) => {
    res.render('sample.ejs')
}

module.exports = {
    getHomepage, getABC, getTest
}