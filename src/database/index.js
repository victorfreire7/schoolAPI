import Sequelize from 'sequelize';
import databaseConfig from '../config/database';
import Aluno from '../models/Aluno';
import User from '../models/User';

const models = [Aluno, User];
const connection = new Sequelize(databaseConfig); // estou apenas me conectando, enviando as informaçoes utilizadas em outros arquivos que necessitam

models.forEach((model) => model.init(connection));
