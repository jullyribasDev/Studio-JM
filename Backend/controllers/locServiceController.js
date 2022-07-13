const database = require("../database/models")

const localServiceController = {
    index: async (req, res) => {
        const local = await database.LocalService.findAll();
        return res.json(local);
    },
    createlocal: async (req, res) => {
        const { localService } = req.body;
        const createLocal = await database.LocalService.create({
            localService
        });
        return res.json(createLocal)
    },
    update: async (req, res) => {
        const { id } = req.params;
        const { localService } = req.body;

        const atualizarLocal = await database.LocalService.update({
            localService
        }, {
            where: {
                id_local: id
            }
        });

        return res.json(atualizarLocal);
    },
    detroy: async (req, res) => {
        const { id } = req.params;

        const deleteLocal = await database.LocalService.destroy({
            where: {
                id_local: id
            }
        });

        return res.json(deleteLocal);
    }
};

module.exports = localServiceController;