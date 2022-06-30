const database = require('../database/models');
const sequelize = require('sequelize');
const op = sequelize.Op;

const clienteController = {
    allClientes: async (req, res) => {
        const allClientes = await database.Cliente.findAndCountAll();

        return res.json(allClientes);
    },
    oneCliente: async (req, res) => {
        const { key } = req.query;
        const oneCliente = await database.Cliente.findOne({
            where: {
                nome: {
                    [op.like]: `%${key}%`
                }
            }
        });

        return res.json(oneCliente);
    },
    create: async (req, res) => {
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
            senha
        } = req.body;

        const Cliente = await database.Cliente.create({
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
        });

        return res.json(Cliente);
    },
    update: async (req, res) => {
        const { id } = req.params;
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
            senha
        } = req.body;

        const atualizarCliente = await database.Cliente.update({
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
        }, {
            where: {
                id_cliente: id
            }
        });

        return res.json(atualizarCliente);
    },
    destroy: async (req, res) => {
        const { id } = req.params;
        await database.Cliente.destroy({
            where: {
                id_cliente: id
            }
        });

        return res.send("Deletado com Sucesso!");
    }
};

module.exports = clienteController;