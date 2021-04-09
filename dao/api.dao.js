
import CryptoDB from './db/crypto';
import * as DB from '../lib/sequelize.client';
import { Tables } from './db/table.enum';

const insertCryptoData = async (data) => {
  return await DB.insert(Tables.Cryptoapi, data, false);
};

module.exports = { insertCryptoData };