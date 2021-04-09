
import CryptoListDB from './db/cryptolist';
import * as DB from '../lib/sequelize.client';
import { Tables } from './db/table.enum';

const insertCryptoListData = async (data) => {
  return await DB.insert(Tables.UpbitCryptolist, data, false);
};

module.exports = { insertCryptoListData };