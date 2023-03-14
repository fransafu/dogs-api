// importar los modelos
const Sequelize = require('sequelize');

const User = require('./user.model');
const Rol = require('./rol.model');
const Breed = require('./breed.model');

// crear conexión con la base de datos
const sequelize = new Sequelize(
    process.env.PGDATABASE,
    process.env.PGUSER,
    process.env.PGPASSWORD,
    {
      host: process.env.PGHOST,
      dialect: 'postgres',
      pool: {
        max: 5,
        min: 0,
        idle: 20000,
        acquire: 30000
      }
    }
  )

// crear objeto con modelos
const models = {
    User: User(sequelize, Sequelize.DataTypes),
    Rol: Rol(sequelize, Sequelize.DataTypes),
    Breed: Breed(sequelize, Sequelize.DataTypes)
};

// crear las relaciones entre los modelos
Object.keys(models).forEach(key => {
    if ('associate' in models[key]) {
      models[key].associate(models)
    }
});

// exportamos
module.exports = {
    sequelize,
    models,
};
