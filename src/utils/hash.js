const bcrypt = require('bcrypt');

const generateHashFromPassword = async (password, hash = 10) => {
    return await bcrypt.hash(password, salt);
}

const compareHashPassword = async (passwordTextPlain, hash) => {
    return await bcrypt.compare(passwordTextPlain, hash);
}

module.exports = {
    generateHashFromPassword,
    compareHashPassword,
};
