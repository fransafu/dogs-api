const breed = (sequelize, DataTypes) => {
  const Breed = sequelize.define('breed', {
    id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      autoIncrement: true,
      primaryKey: true
    },
    breed: {
      type: DataTypes.STRING,
      allowNull: false
    },
    obey: {
      type: DataTypes.STRING,
      allowNull: true
    }
  })

  return Breed
}

module.exports = breed
