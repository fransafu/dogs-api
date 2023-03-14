const userService = require('../services/user.service');

const list = async (req, res) => {
    try {
        const users = await userService.list()
        res.json(users);
    } catch (err) {
        console.error(err);
        res.status(500).json({
            "err": "server error",
        });
    }
}

const create = async (req, res) => {
    try {
        console.log("req.body", req.body);
        const newUser = await userService.create(req.body)
        res.json(newUser);
    } catch (err) {
        console.error(err);
        res.status(500).json({
            "err": "server error",
        });
    }
}

module.exports = {
    list,
    create,
};
