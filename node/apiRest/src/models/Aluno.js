import Sequelize, { Model } from 'sequelize';

export default class Aluno extends Model {
  static init(sequelize) {
    super.init(
      {
        nome: {
          type: Sequelize.STRING,
          defaultValue: '',
          validate: {
            len: {
              args: [3, 255],
              msg: 'O nome precisa ser entre 5 a 255 caracter',
            },
          },
        },
        sobrenome: {
          type: Sequelize.STRING,
          defaultValue: '',
          validate: {
            len: {
              args: [5, 255],
              msg: 'O sobrenome precisa ser entre 5 a 255 caracter',
            },
          },
        },
        email: {
          type: Sequelize.STRING,
          defaultValue: '',
          unique: {
            msg: 'Email ja existe',
          },
          validate: {
            isEmail: {
              msg: 'E-mail invalido',
            },
          },
        },
        idade: {
          type: Sequelize.INTEGER,
          defaultValue: '',
          validate: {
            isInt: {
              msg: 'Idade precisa ser um numero inteiro',
            },
          },
        },
        peso: {
          type: Sequelize.FLOAT,
          defaultValue: '',
          validate: {
            isFloat: {
              msg: 'Peso precisa ser um numero inteiro ou ponto fluante',
            },
          },
        },
        altura: {
          type: Sequelize.FLOAT,
          defaultValue: '',
          validate: {
            isFloat: {
              msg: 'Altura precisa ser um numero inteiro ou ponto fluante',
            },
          },
        },
      },
      { sequelize },
    );
    return this;
  }
  static associate(models) {
    this.hasMany(models.Foto, { foreignKey: 'aluno_id' });
  }
}
