"use strict";

const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class Current_Cart extends Model {
    static associate(models) {
      this.belongsTo(models.user, { foreignKey: "userId" });
      this.belongsTo(models.fruit, { foreignKey: "fruitId" });
    }
  }
  Current_Cart.init(
    {
      quantity: DataTypes.INTEGER,
      userId: {
        type: DataTypes.INTEGER,
        references: {
          model: "users",
          key: "id",
        },
      },
      fruitId: {
        type: DataTypes.INTEGER,
        references: {
          model: "fruits",
          key: "id",
        },
      },
    },
    {
      sequelize,
      modelName: "current_cart",
      underscored: true,
    }
  );
  return Current_Cart;
};
