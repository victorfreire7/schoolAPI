import Sequelize from 'sequelize';
import databaseConfig from '../config/database';
import Aluno from '../models/Aluno';

const models = [Aluno];
const connection = new Sequelize(databaseConfig); // estou apenas me conectando, enviando as informaçoes utilizadas em outros arquivos que necessitam

models.forEach((model) => model.init(connection));
