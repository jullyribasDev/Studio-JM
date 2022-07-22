const database = require('../database/models');
const sequelize = require('sequelize');
const op = sequelize.Op;
const bcrypt = require('bcrypt');

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
                },
                include: {
                    model: Profissional,
                    as: "profissional",
                    required: true
                },
                include: {
                    model: Agendamento,
                    as: "agendamento",
                    required: true
                }
            }
        });
        if (oneCliente == null) {
            return res.status(500).send("ERROR: Cliente não registrado em nosso Banco de Dados!")
        } else {
            return res.json(oneCliente);
        }
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

        if (await database.Cliente.findOne({ where: { email: email } })) {
            return res.status(400).json({ error: "Email ja existe" })
        };
        if (await database.Cliente.findOne({ where: { userName: userName } })) {
            return res.status(400).send({ error: "Usuário já existe" })
        };
        const hash = await bcrypt.hash(senha, 10);
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
            senha: hash
        });

        return res.json(Cliente);
    },
    login: async (req, res) => {
        const { userName, senha } = req.body;
        const user = await database.Cliente.findOne({ where: { userName: userName } })
        if (!user) { return res.status(400).json({ error: "Usuário não encontrado" }) }

        if (!await bcrypt.compare(senha, user.senha)) {
            return res.status(400).json({ error: "Senha inválida" })
        } else { return res.send({ user }) }
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
        const hash = await bcrypt.hash(senha, 10);

        await database.Cliente.update({
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
            senha: hash
        }, {
            where: {
                id_cliente: id
            }
        });

        return res.json(`Cliente ${id} atualizado`);
    },
    destroy: async (req, res) => {
        const { id } = req.params;
        await database.Cliente.destroy({
            where: {
                id_cliente: id
            }
        });

        return res.json(`Cliente ${id} deletado com sucesso!`);
    }
};

module.exports = clienteController;