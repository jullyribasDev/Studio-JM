const database = require('../database/models')

const agendamentoController = {
    index: async (req, res) => {
        const listAgendProfissional = await database.Agendamento.findAndCountAll({
            include: {
                model: Cliente,
                as: "cliente",
                required: true
            },
            include:{
                model: Servico,
                as: "servico",
                required: true
            }
        });

        return res.json(listAgendProfissional);
    }
};

module.exports = agendamentoController;