import { DataTypes } from 'sequelize';
import * as DB from '../../lib/sequelize.client';
import { Tables } from './table.enum';


const CryptoDB = DB.MariaDBClient.define(Tables.Cryptoapi, {
  // Model attributes are defined here
  seq: {
    type: DataTypes.BIGINT,
    autoIncrement: true,
    primaryKey: true,
  },
  time: {
    field: 'time',
    type: DataTypes.FLOAT,
  },
  high: {
    field: 'high',
    type: DataTypes.FLOAT,
  },
  low: {
    field: 'low',
    type: DataTypes.FLOAT,
  },
  open: {
    field: 'open',
    type: DataTypes.FLOAT,
  },
  volumefrom: {
    field: 'volumefrom',
    type: DataTypes.FLOAT,
  },
  volumeto: {
    field: 'volumeto',
    type: DataTypes.FLOAT,
  },
  close: {
    field: 'close',
    type: DataTypes.FLOAT,
  },
  conversionType: {
    field: 'conversionType',
    type: DataTypes.STRING,
  },
  conversionSymbol: {
    field: 'conversionSymbol',
    type: DataTypes.STRING,
  },
}, {
  // Other model options go here
  freezeTableName: true,
  tableName: Tables.Cryptoapi,
  timestamps: false,
});

module.exports = { CryptoDB };
