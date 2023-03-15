const breedService = require('../services/breed.service');

module.exports = {
    list: async (req, res) => {
        try {
            const breeds = await breedService.list();
            res.json(breeds);
        } catch (err) {
            res.status(error.code || 500).send(error)
        }
    },
    findById: async (req, res) => {
        try {
            const breed = await breedService.findById(req.params.id);
            res.json(breed);
        } catch (err) {
            res.status(error.code || 500).send(error)
        }
    }
};
