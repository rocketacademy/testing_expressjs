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

    await queryInterface.bulkInsert("fruits", [
      {
        name: "Apple",
        description: "This apple is crisp and sweet",
        colour: "Red",
        stock: 140,
        price: 15,
        image_url:
          "https://images.unsplash.com/photo-1570913149827-d2ac84ab3f9a?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1770&q=80",
      },
      {
        name: "Kiwi",
        description: "Sweet",
        colour: "The kiwis have a nice balaence of sweet and sour",
        stock: 120,
        price: 20,
        image_url:
          "https://images.unsplash.com/photo-1585059895524-72359e06133a?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1770&q=80",
      },
      {
        name: "Banana",
        description: "Unbruised Banana good for potassium",
        colour: "Yellow",
        stock: 140,
        price: 10,
        image_url:
          "https://images.unsplash.com/photo-1528825871115-3581a5387919?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=830&q=80",
      },
    ]);

    await queryInterface.bulkInsert("users", [
      { email: "sam@sam.com", password: "12345" },
      { email: "foong@foong.com", password: "password" },
    ]);
  },

  async down(queryInterface, Sequelize) {
    /**
     * Add commands to revert seed here.
     *
     * Example:
     * await queryInterface.bulkDelete('People', null, {});
     */

    await queryInterface.bulkDelete("fruits");
    await queryInterface.bulkDelete("users");
  },
};
