"use strict";

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    /**
     * Add altering commands here.
     *
     * Example:
     * await queryInterface.createTable('users', { id: Sequelize.INTEGER });
     */

    await queryInterface.removeColumn("users_addresses", "users_addresses");
    await queryInterface.addColumn("users_addresses", "users_address", {
      type: Sequelize.STRING,
      allowNull: false,
    });

    await queryInterface.removeColumn("fruits", "taste");
    await queryInterface.addColumn("fruits", "description", {
      type: Sequelize.STRING,
      allowNull: false,
    });

    await queryInterface.addColumn("fruits", "image_url", {
      type: Sequelize.STRING,
      allowNull: false,
    });
  },

  async down(queryInterface, Sequelize) {
    /**
     * Add reverting commands here.
     *
     * Example:
     * await queryInterface.dropTable('users');
     */

    await queryInterface.addColumn("users_addresses", "users_addresses", {
      type: Sequelize.STRING,
      allowNull: false,
    });
    await queryInterface.removeColumn("users_addresses", "users_address");

    await queryInterface.addColumn("fruits", "taste", {
      type: Sequelize.STRING,
      allowNull: false,
    });
    await queryInterface.removeColumn("fruits", "description");

    await queryInterface.removeColumn("fruits", "image_url");
  },
};
