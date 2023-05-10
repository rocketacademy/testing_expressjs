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

    await queryInterface.bulkInsert("ordered_fruit", [
      { order_id: 1, fruit_id: 3, quantity: 10 },
      { order_id: 2, fruit_id: 2, quantity: 5 },
      { order_id: 2, fruit_id: 3, quantity: 2 },
    ]);

    await queryInterface.bulkInsert("current_cart", [
      { user_id: 1, fruit_id: 1, quantity: 10 },
      { user_id: 2, fruit_id: 3, quantity: 40 },
    ]);
  },

  async down(queryInterface, Sequelize) {
    /**
     * Add commands to revert seed here.
     *
     * Example:
     * await queryInterface.bulkDelete('People', null, {});
     */

    await queryInterface.bulkDelete("ordered_fruit");
    await queryInterface.bulkDelete("current_cart");
  },
};
