import Sequelize, { Model } from 'sequelize';

export default class Student extends Model {
  static init(sequelize) { // sequelize é a conexão com o banco de dados
    super.init({
      name: Sequelize.STRING,
      lastname: Sequelize.STRING,
      email: Sequelize.STRING,
      birthday: Sequelize.DATEONLY,
      weight: Sequelize.FLOAT,
      height: Sequelize.FLOAT,
    }, {
      sequelize
    });
    return this;
  }
}
