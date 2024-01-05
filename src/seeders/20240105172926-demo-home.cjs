'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    return queryInterface.bulkInsert('Homes', [{
      host_name: 'Alicia',
      latitude: 49.28086,
      longitude: -123.12375,
      createdAt: new Date(),
      updatedAt: new Date()
    }], {});
  },

  async down (queryInterface, Sequelize) {
    return queryInterface.bulkDelete('Homes', null, {});
  }
};
