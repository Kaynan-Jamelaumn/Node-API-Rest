import Sequelize, { Model } from 'sequelize';
import bcryptjs from 'bcryptjs';
export default class User extends Model {
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
      email: {
        type: Sequelize.STRING,
        defaultValue: '',
        unique: {
          msg: 'Email is already registred'
        },
        validate: {
          isEmail: {
            msg: 'You need to provide a proper e-mail'
          }
        }

      },
      password_hash: {
        type: Sequelize.STRING,
        defaultValue: '',
      },
      password: {
        type: Sequelize.VIRTUAL,
        defaultValue: '',
        validate: {
          len: {
            args: [6, 255],
            msg: 'Password must contain at least 7 caracters'
          }
        }

      },
    }, {
      sequelize
    });
    this.addHook('beforeSave', async user => {
      if (user.password) {
        user.password_hash = await bcryptjs.hash(user.password, 8);
      }
    })

    return this;
  }
}
