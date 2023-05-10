const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class Fruit extends Model {}
  Fruit.init(
    {
      name: DataTypes.STRING,
      description: DataTypes.STRING,
      colour: DataTypes.STRING,
      stock: DataTypes.INTEGER,
      price: DataTypes.INTEGER,
      image_url: DataTypes.STRING,
    },
    {
      sequelize,
      modelName: "fruit",
      underscored: true,
    }
  );
  return Fruit;
};
