const authService = require('../services/auth.service');

const login = async (req, res) => {
    try {
        const { username, password } = req.body;

        const token = await authService.login(username, password);
        if (!token) {
            res.status(401).send('usuario no valido');
            return;
        }

        res.json({ token });
    } catch (err) {
        console.error(err);
        res.status(500).json({
            err: "server error",
        });
    }
}

const register = () => {
    try {

    } catch (err) {
        
    }
}

module.exports = {
    login,
    register,
};
