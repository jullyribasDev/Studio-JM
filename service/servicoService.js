const databaseS = require('../database/models');

const servicoService = {
    // allServicos: async() => {
    //     const allServices = await databaseS.Servico.findAndCountAll();

    //     return allServices;
    // },
    createService: async(procedimento, description) => {
        const newService = await databaseS.Servico.create({
            procedimento,
            description
        });

        return newService;

    }
};

module.exports = servicoService;