const database = require("../database/models")

const contactController = {
    index: async(req, res) => {
        const contato = await database.Contato.findAndCountAll();

        return res.json(contato)
    },
    createContact: async(req, res) => {
        const { name, email, message } = req.body;

        const newContact = await database.Contato.create({
            name,
            email,
            message
        });

        return res.json(newContact)
    },
    update: async(req, res) => {
        const { id } = req.params;
        const { name, email, message } = req.body;

        await database.Contato.update({
            name,
            email,
            message
        }, {
            where: {
                id_contato: id
            }
        });

        return res.send(`Contato ${id} atualizado com sucesso: ${name}, ${email}, ${message}`)
    },
    destroy: async(req, res) => {
        const { id } = req.params;
        const { name } = req.body;

        await database.Contato.destroy({
            where: {
                id_contato: id
            }
        });

        return res.send(`Mensagem do usuario ${id}, apagada com Sucesso!`)
    }
};

module.exports = contactController;