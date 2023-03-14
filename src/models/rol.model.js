const rol = (sequelize, DataTypes) => {
    const Rol = sequelize.define('rol', {
        id: {
            type: DataTypes.INTEGER,
            allowNull: false,
            autoIncrement: true,
            primaryKey: true
        },
        type: {
            type: DataTypes.STRING,
            allowNull: false
        }
    });

    Rol.associate = models => {
        Rol.hasMany(models.User)
    }

    return Rol;
}

module.exports = rol;
