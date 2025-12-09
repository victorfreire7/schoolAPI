import bcrypt from 'bcryptjs';
'use strict';

/** @type {import('sequelize-cli').Migration} */
export default {
  async up (queryInterface) {
    await queryInterface.bulkInsert(
      'users',
      [
        {
          nome: 'John Doe',
          email: 'John@email.com',
          password_hash: await bcrypt.hash('123456', 8),
          created_at: new Date(),
          updated_at: new Date()
        },
        {
          nome: 'Joanna Dart',
          email: 'Joanna@email.com',
          password_hash: await bcrypt.hash('123456', 8),
          created_at: new Date(),
          updated_at: new Date()
        },
        {
          nome: 'Don Casmurro',
          email: 'don@email.com',
          password_hash: await bcrypt.hash('123456', 8),
          created_at: new Date(),
          updated_at: new Date()
        },
      ],
      {}
    );
  },

  async down (queryInterface) {
     await queryInterface.bulkDelete('users', null, {});
  }
};
