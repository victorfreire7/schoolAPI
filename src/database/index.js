import Sequelize from 'sequelize';
import databaseConfig from '../config/database';
import Aluno from '../models/Aluno';
import User from '../models/User';
import Photo from '../models/Photo';

const models = [Aluno, User, Photo];

const connection = new Sequelize(databaseConfig); // estou apenas me conectando, enviando as informaçoes utilizadas em outros arquivos que necessitam

models.forEach((model) => model.init(connection));
models.forEach((model) => model.associate && model.associate(connection.models)); // caso o método 'associate' for verdadeiro (método esse que existe apenas em photo.js), eu executo a associaçao dele com os demais models
