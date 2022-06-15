const usuarioService = require("../service/usuariosService");
const database = require('../database/models');
const sequelize = require('sequelize');
const op = sequelize.Op;

const usuarioController = {
    allUsuarios: async(req, res) => {
        const allUsers = await usuarioService.allUsuario();

        return res.json(allUsers);
    },
    oneUsuario: async(req, res) => {
        const { key } = req.query;
        const oneUser = await database.Usuario.findAll({
            where: {
                nome: {
                    [op.like]: `%${key}%`
                }
            }
        });

        return res.json(oneUser);
    },
    create: async(req, res) => {
        const {
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
        } = req.body;

        const usuario = await usuarioService.createUser(
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
        );

        return res.json(usuario);
    },
    destroy: async(req, res) => {
        const { id } = req.params;
        await database.Usuario.destroy({
            where: {
                id_user: id
            }
        });

        return res.redirect("/users");
    }
};

module.exports = usuarioController;