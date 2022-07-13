const database = require("../database/models")
const bcrypt = require('bcrypt');

const profissionalController = {
    index: async (req, res) => {
        const allProfissionais = await database.Profissional.findAll();

        return res.json(allProfissionais)
    },
    showPerfil: async (req, res) => {
        const showPerfil = await database.Profissional.findOne({
            include: {
                model: Servico,
                as: "PorfissionalServicos",
                required: true
            },
            include: {
                model: LocalService,
                as: "localService",
                required: true
            }
        });
        return res.json(showPerfil);
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
        const hash = await bcrypt.hash(senha, 10);

        const newProfissional = await database.Profissional.create({
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

        return res.json(newProfissional)
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
            services,
            localService,
            senha
        } = req.body;
        const hash = await bcrypt.hash(senha, 10);
        const updateProfissional = await database.Profissional.update({
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
            services,
            localService,
            senha: hash
        }, {
            where: {
                id_profissional: id
            }
        });
        return res.json(updateProfissional)
    },
    destroy: async (req, res) => {
        const { id } = req.params;
       const deleteProfissional = await database.Profissional.destroy({
            where: {
                id_profissional: id
            }
        });
        return res.json(deleteProfissional)
    }
};

module.exports = profissionalController;