'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface) {

    await queryInterface.bulkInsert('alunos', [
        {
          nome: 'John',
          sobrenome: 'Doe',
          email: 'Johndoe@email.com',
          idade: 14,
          peso: 55.4,
          altura: 1.62,
          created_at: new Date(),
          updated_at: new Date()
        },
        {
          nome: 'Victor',
          sobrenome: 'Freire',
          email: 'victorfreire@email.com',
          idade: 17,
          peso: 79.4,
          altura: 1.82,
          created_at: new Date(),
          updated_at: new Date()
        }
      ], {});

  },

  async down (queryInterface) {
    await queryInterface.bulkDelete('alunos', null, {});
  }
};
