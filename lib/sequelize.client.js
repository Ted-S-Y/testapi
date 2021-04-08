import * as CONFIG from '../config';
import { Tables } from '../dao/db/table.enum';

const Sequelize = require('sequelize');
const { Op } = require('sequelize');

const {
  host, database, user, password, logging, pool,
} = CONFIG.mariadb;

const MariaDBClient = new Sequelize(database, user, password, {
  host,
  dialect: 'mariadb',
  logging,
});

const operators = Op;


const loadTable = (tableName) => {
  if (!Object.values(Tables).includes(tableName)) {
    throw new Error(`not found tableName => ${tableName}`);
  }
  return MariaDBClient.models[tableName];
};

const findAll = async (tableName, attributes, where, order, group) => {
  const table = await loadTable(tableName);
  const result = await table.findAll({
    attributes, where, order, group,
  });
  return result;
};

const insert = async (tableName, row, t) => {
  console.log(tableName, row);
  const table = await loadTable(tableName);

  if (row instanceof Object) {
    const result = await table.create(row, { transaction: t });
    return result;
  }

  if (row instanceof Array) {
    const result = await table.bulkCreate(row, { transaction: t });
    return result;
  }

  throw new Error(`row type error => ${row}`);
};

const update = async (tableName, values, where, t) => {
  const table = await loadTable(tableName);
  const result = await table.update(values, { where }, { transaction: t });
  return result;
};

const destroy = async (tableName, where, t) => {
  const table = await loadTable(tableName);
  const result = await table.destroy({ where }, { transaction: t });
  return result;
};

const initTransaction = async () => {
  const transaction = await MariaDBClient.transaction();
  return transaction;
};

module.exports = {
  MariaDBClient, insert, findAll, update, destroy, operators, initTransaction,
};
