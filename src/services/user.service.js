const bcrypt = require('bcrypt');

const { models: { User, Rol } } = require('../models');
const { generateHashFromPassword } = require('../utils/hash');

const list = async () => {
    const users = await User.findAll({
        attributes: ['username', 'email'],
        include: {
            attributes: ['type'],
            model: Rol, as: 'rol'
        }
    });
    return users.map((user) => user.get());
};

const create = async (user, salt = 10) => {
    return await User.create({
        ...user,
        password: generateHashFromPassword(user.password) });
}

module.exports = {
    list,
    create,
};
