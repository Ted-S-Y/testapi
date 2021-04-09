import { DataTypes } from 'sequelize';
import * as DB from '../../lib/sequelize.client';
import { Tables } from './table.enum';


const UpbitCryptolistDB = DB.MariaDBClient.define(Tables.UpbitCryptolist, {
  // Model attributes are defined here
  seq: {
    type: DataTypes.BIGINT,
    autoIncrement: true,
    primaryKey: true,
  },
  market: {
    field: 'market',
    type: DataTypes.STRING,
  },
  korean_name: {
    field: 'korean_name',
    type: DataTypes.STRING,
  },
  english_name: {
    field: 'english_name',
    type: DataTypes.STRING,
  },
}, {
  // Other model options go here
  freezeTableName: true,
  tableName: Tables.UpbitCryptolist,
  timestamps: false,
});

module.exports = { UpbitCryptolistDB };

