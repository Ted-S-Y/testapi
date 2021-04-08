
import CryptoDB from './db/crypto';
import * as DB from '../lib/sequelize.client';
import { Tables } from './db/table.enum';

const insertCryptoData = async (data) => {
  const newData = await DB.insert(Tables.Cryptoapi, data);
  return newData;
};

module.exports = { insertCryptoData };