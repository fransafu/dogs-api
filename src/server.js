require('dotenv').config()

const app = require('./app');
const { sequelize } = require('./models');

const PORT = process.env.PORT || 3000;

sequelize
    .sync()
    .then((resp) => {
        app.listen(PORT, () => {
            console.log('Listen on port ', PORT);
        })
    })
    .catch((err) => {
        console.log(err);
    });
