"use strict";

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    /**
     * Add seed commands here.
     *
     * Example:
     * await queryInterface.bulkInsert('People', [{
     *   name: 'John Doe',
     *   isBetaMember: false
     * }], {});
     */

    await queryInterface.bulkInsert("users_addresses", [
      { users_address: "331 Crown Plaza, Central", users_id: 1 },
      { users_address: "8080 Local Lane, Central", users_id: 2 },
      { users_address: "4 Grasslane, Island 12", users_id: 1 },
    ]);

    await queryInterface.bulkInsert("orders", [
      { users_id: 1, total: 100 },
      { users_id: 2, total: 120 },
    ]);
  },

  async down(queryInterface, Sequelize) {
    /**
     * Add commands to revert seed here.
     *
     * Example:
     * await queryInterface.bulkDelete('People', null, {});
     */

    await queryInterface.bulkDelete("users_addresses", null, {});
    await queryInterface.bulkDelete("orders", null, {});
  },
};
