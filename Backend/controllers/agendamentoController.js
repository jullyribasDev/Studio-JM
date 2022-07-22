const database = require('../database/models')

const agendamentoController = {
    index: async (req, res) => {
        const listAgendProfissional = await database.Agendamento.findAll({
            include: [
                {
                    model: database.Cliente,
                    as: "cliente",
                    required: true
                },
                {
                    model: database.Profissional,
                    as: "profissional",
                    required: true
                }
            ]
        });
        return res.json(listAgendProfissional);
    },
    create: async (req, res) => {
        const {
            fk_profissional,
            fk_cliente
        } = req.body;

        const newAgendamento = await database.Agendamento.create({
            fk_profissional,
            fk_cliente
        })
        return res.json(newAgendamento)
    },
    delete: async(req, res) =>{
        const {id} = req.params;
         await database.Agendamento.destroy({
            where:{
                id_agendamento: id
            }
        })
        return res.json(`Agendamento ${id} deletado`)
    }
};

module.exports = agendamentoController;