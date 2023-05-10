const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class Users_address extends Model {
    static associate(models) {
      this.belongsTo(models.user, { foreignKey: "usersId" });
    }
  }
  Users_address.init(
    {
      users_address: DataTypes.STRING,
      usersId: {
        type: DataTypes.INTEGER,
        references: {
          model: "users",
          key: "id",
        },
      },
    },
    {
      sequelize,
      modelName: "users_address",
      underscored: true,
    }
  );
  return Users_address;
};
