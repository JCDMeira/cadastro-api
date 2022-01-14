import Sequelize, { Model } from 'sequelize';

export default class Aluno extends Model {
  static init(sequelize) {
    super.init(
      {
        nome: {
          type: Sequelize.STRING,
          defaultValue: '',
          validade: {
            len: {
              args: [4, 40],
              msg: 'Nome precisa ter entre 4 e 80 caracteres',
            },
          },
        },
        sobrenome: {
          type: Sequelize.STRING,
          defaultValue: '',
          validade: {
            len: {
              args: [4, 40],
              msg: 'Sobrenome precisa ter entre 4 e 80 caracteres',
            },
          },
        },
        email: {
          type: Sequelize.STRING,
          defaultValue: '',
          unique: {
            msg: 'E-mail já existe',
          },
          validade: {
            isEmail: {
              msg: 'E-mail inválido',
            },
          },
        },
        idade: {
          type: Sequelize.INTEGER,
          defaultValue: '',
          validade: {
            isInt: {
              msg: 'Idade precisa ser um número inteiro',
            },
          },
        },
        peso: {
          type: Sequelize.FLOAT,
          defaultValue: '',
          validade: {
            isFloat: {
              msg: 'Peso precisa ser um número',
            },
          },
        },
        altura: {
          type: Sequelize.FLOAT,
          defaultValue: '',
          validade: {
            isFloat: {
              msg: 'Altura precisa ser um número',
            },
          },
        },
      },
      {
        sequelize,
      },
    );
    return this;
  }
}
