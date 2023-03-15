const { models: { Breed } } = require('../models');

const list = async () => {
    const breeds = await Breed.findAll();
    return breeds.map((breed) => breed.get());
};

module.exports = {
    list,
};
