const equipeController = {
    index: (req, res) => {
        res.render('equipe')
    },
    viewPerfil: (req, res) => {
        res.render('perfilProfissional')
    }
}

module.exports = equipeController;