const database = require("../database/models")

const localServiceController = {
    index: async(req, res) => {
        const local = await database.LocalService.findAndCountAll();

        return res.json(local);
    },
    createlocal: async(req, res) => {
        const { localName } = req.body;

        const createLocal = await database.LocalService.create({
            localName
        });

        return res.json(createLocal)
    },
    detroy: async(req, res) => {
        const { id } = req.params;

        await database.LocalService.destroy({
            where: {
                id_local: id
            }
        });

        return res.redirect("/servicos");
    }
};

module.exports = localServiceController;