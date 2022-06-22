const servicoService = require('../service/servicoService');
const databaseS = require('../database/models');


const serviceController = {
    // viewAddService: (req, res) => {
    //     res.render('adicionarService')
    // },
    allService: async(req, res) => {
        const allServices = await servicoService.allServicos();

        return res.json(allServices);
    },
    createServico: async(req, res) => {
        const {
            procedimento,
            description
        } = req.body;

        const newService = await servicoService.createService(
            procedimento,
            description
        );

        return res.json(newService);
    },
    update: async(req, res) => {
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
    destroy: async(req, res) => {
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