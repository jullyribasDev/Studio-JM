const database = require('../database/models');

const usuarioService = {
    allUsuario: async() => {
        const allUsuarios = await database.Usuario.findAndCountAll();

        return allUsuarios;
    },
    /*allOneUsuario: async(nameUser) => {
        const oneUsuario = await database.Usuario.findAll((usu) => { usu == nameUser });

        return oneUsuario;
    },*/
    createUser: async(
        nome,
        userName,
        email,
        endereco,
        complement,
        cidade,
        bairro,
        cep,
        dataNascimento,
        genero,
        senha,
        isProfissional
    ) => {
        const newUsuario = await database.Usuario.create({
            nome,
            userName,
            email,
            endereco,
            complement,
            cidade,
            bairro,
            cep,
            dataNascimento,
            genero,
            senha,
            isProfissional
        });

        return newUsuario;
    }
};

module.exports = usuarioService;