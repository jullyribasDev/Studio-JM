const database = require("../database/models")

const profissionalController = {
    index: async (req, res) => {
        const allProfissionais = await database.Profissional.findAndCountAll();

        return res.json(allProfissionais)
    },
    showPerfil: async (req, res) => {
        const { id } = req.params;
        const showPerfil = await database.Profissional.findOne({
            where: {
                id_profissional: id
            },
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
            services,
            localService,
            senha
        } = req.body;

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
            services,
            localService,
            senha
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
        await database.Profissional.update({
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
        }, {
            where: {
                id_profissional: id
            }
        });

        return res.send(`Profissional "${nome}", de ID: "${id}", atualizado com Sucesso!`)
    },
    destroy: async (req, res) => {
        const { id } = req.params;

        await database.Profissional.destroy({
            where: {
                id_profissional: id
            }
        });

        return res.send(`Usuario "${id}"`)
    }
};

module.exports = profissionalController;