const { models: { User } } = require('../models');

const list = async () => {
    const users = await User.findAll();
    return users.map((user) => user.get());
};

const create = async (user) => {
    const newUser = await User.create(user)
    console.log(newUser);
    return newUser;
}

module.exports = {
    list,
    create,
};
