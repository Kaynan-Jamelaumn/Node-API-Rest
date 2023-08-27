import Sequelize, { Model } from 'sequelize';

export default class Student extends Model {
  static init(sequelize) { // sequelize é a conexão com o banco de dados
    super.init({
      name: {
        type: Sequelize.STRING,
        defaultValue: '',
        validate: {
          len: {
            args: [1, 255],
            msg: 'you need to give a proper name'
          }
        }
      },
      lastname: {
        type: Sequelize.STRING,
        defaultValue: '',
        validate: {
          len: {
            args: [1, 255],
            msg: 'you need to give a proper lastname'
          }
        }
      },
      email: {
        type: Sequelize.STRING,
        defaultValue: '',
        validate: {
          isEmail: {
            msg: 'You must provide an valid e-mail'
          }
        }
      },
      birthday: {
        type: Sequelize.DATEONLY,
        defaultValue: '',
        validate: {
          isDate: {
            msg: 'you need to give a proper date'
          }
        }
      },
      weight: {
        type: Sequelize.FLAOT,
        defaultValue: '',
        validate: {
          isFloat: {
            msg: 'you need to give a proper weight'
          }
        }
      },
      height: {
        type: Sequelize.FLAOT,
        defaultValue: '',
        validate: {
          isFloat: {
            msg: 'you need to give a proper height'
          }
        }
      },
    }, {
      sequelize
    });
    return this;
  }
}
