require('dotenv').config();

module.exports = {
  dialect: 'mariadb',
  database: process.env.DB_NAME,
  host: process.env.DB_HOST,
  port: process.env.DB_PORT,
  username: process.env.DB_USER,
  password: process.env.DB_PASSWORD,
  define: {
    timestamps: true,
    underscored: true,
    underscoredAll: true,
    'createdAt': 'created_at', // para contrariar o erro comum no underscored do sequelize
    'updatedAt': 'updated_at'
  },
  dialectOption: {
    timezone: 'America/Sao_Paulo'
  },
  timezone: 'America/Sao_Paulo'
}
