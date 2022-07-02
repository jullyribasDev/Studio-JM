const databaseS = require('../database/models');

const serviceController = {
    allService: async (req, res) => {
        const allServices = await databaseS.Servico.findAndCountAll();

        return res.render('services', { allServices });

    },
    viewAddService: (req, res) => {
        res.render('adicionarService')
    },
    createServico: async (req, res) => {
        const { procedimento, description } = req.body;

        await databaseS.Servico.create({
            procedimento,
            description
        });

        return res.redirect("/servicos");
    },
    update: async (req, res) => {
        const { id } = req.params;
        const {
            procedimento,
            description
        } = req.body;

        const updateService = await databaseS.Servico.update({
            procedimento,
            description
        }, {
            where: {
                id_service: id
            }
        });
        return res.json(updateService);
    },
    destroy: async (req, res) => {
        const { id } = req.params;

        await databaseS.Servico.destroy({
            where: {
                id_service: id
            }
        });

        return res.redirect("/servicos")
    }
}

module.exports = serviceController;