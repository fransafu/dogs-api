const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');

const { models: { User } } = require('../models');
const { compareHashPassword } = require('../utils/hash');

const userService = require('./user.service');

const login = async (username, password, salt = 0) => {
    const user = await User.findOne({
        where: {
            username,
        }
    });

    if (!user) {
        return null;
    }

    if (!compareHashPassword(password, user.password)) {
        return null;
    }

    return jwt.sign({
        username: user.get().username,
        email: user.get().email,
    }, process.env.SECRET_JWT, { expiresIn: '5h' });
};

const register = async (user) => {
    const newUser = await userService.create(user);
    return newUser;
}

module.exports = {
    login,
    register,
};
