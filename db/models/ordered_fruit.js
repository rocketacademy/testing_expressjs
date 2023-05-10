const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class Ordered_fruit extends Model {
    static associate(models) {
      this.belongsTo(models.order, { foreignKey: "orderId" });
      this.belongsTo(models.fruit, { foreignKey: "fruitId" });
    }
  }
  Ordered_fruit.init(
    {
      quantity: DataTypes.INTEGER,
      orderId: {
        type: DataTypes.INTEGER,
        references: {
          model: "order",
          key: "id",
        },
      },
      fruitId: {
        type: DataTypes.INTEGER,
        references: {
          model: "fruit",
          key: "id",
        },
      },
    },
    {
      sequelize,
      modelName: "ordered_fruit",
      underscored: true,
    }
  );
  return Ordered_fruit;
};
