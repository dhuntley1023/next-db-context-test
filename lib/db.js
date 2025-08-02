import { Sequelize, Model, DataTypes } from "sequelize";
import sqlite3 from 'sqlite3';

const sequelize = new Sequelize({
  dialect: 'sqlite',
  dialectModule: sqlite3,
  storage: '',
  logging: true
});

export class Account extends Model {
  static async initModel(sequelize) {
    console.log("Account:initModel started");
    Account.init(
      {
        Id: { type: DataTypes.INTEGER, allowNull: false, primaryKey: true },
        Name: { type: DataTypes.STRING, allowNull: false },
        Classification: { type: DataTypes.STRING, allowNull: true },
        AccountType: { type: DataTypes.STRING, allowNull: true },
        AccountSubType: { type: DataTypes.STRING, allowNull: true },
        CurrentBalance: { type: DataTypes.DECIMAL(10, 2), allowNull: true },
      },
      {
        sequelize: sequelize,
        modelName: "Account",
        tableName: "Accounts",
      }
    );
  }
}

export async function initDb() {
  try {
    await Account.initModel(sequelize);
    await Account.sync({force: true});
    await Account.create({Id: 1, Name: "Accounts Payable" });
    return "DB initialized"
  } catch (error) {
    return `DB not initialized: ${error.message}`
  }
}