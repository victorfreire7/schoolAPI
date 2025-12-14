import Sequelize, { Model } from 'sequelize';
import config from '../config/app';

export default class Photo extends Model {
  static init(sequelize) {
    super.init({
      originalname: {
        type: Sequelize.STRING,
        defaultValue: '',
        validate: {
          notEmpty: true
        }
      },
      filename: {
        type: Sequelize.STRING,
        defaultValue: '',
        validate: {
          notEmpty: true
        }
      },
      url: {
        type: Sequelize.VIRTUAL,
        get() {
          return `${config.url}/${this.getDataValue('filename')}`
        }
      }
    }, {
      sequelize
    });
    return this;
  }

  static associate(models) {
    this.belongsTo(models.Aluno, { foreignKey: 'aluno_id' });
  }
}
