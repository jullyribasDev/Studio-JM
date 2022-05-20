const indexController = {
    index: (req, res) => {
        res.render('index')
    },
    login: (req, res) => {
        res.render('login')
    }
}

module.exports = indexController;