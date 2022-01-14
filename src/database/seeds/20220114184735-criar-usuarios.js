const bcrypt = require('bcryptjs');

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.bulkInsert(
      'users',
      [
        {
          nome: 'John Doe',
          email: 'john1@teste.com',
          password_hash: await bcrypt.hash('123456', 10),
          created_at: new Date(),
          updated_at: new Date(),
        },
        {
          nome: 'John Doe 2',
          email: 'john2@teste.com',
          password_hash: await bcrypt.hash('123456', 10),
          created_at: new Date(),
          updated_at: new Date(),
        },
        {
          nome: 'John Doe 3',
          email: 'john3@teste.com',
          password_hash: await bcrypt.hash('123456', 10),
          created_at: new Date(),
          updated_at: new Date(),
        },
      ],
      {},
    );
  },

  down: async (queryInterface, Sequelize) => {
    /**
     * Add commands to revert seed here.
     *
     * Example:
     * await queryInterface.bulkDelete('People', null, {});
     */
  },
};
