
import * as SAVE_SERVICE from '../service/saveService';
import * as API_DB from '../dao/api.dao';
import * as UPBIT_API_DB from '../dao/upbit.list.dao';
import { Exchange } from 'upbit-api-node';

module.exports.loadUpbitListData = async (req, res, next) => {
  // const userInfo = await SAVE_SERVICE.loadListData();
  // let cryptoListData = userInfo;
  let cryptoListData = Exchange.getMarketList();
  console.log("test : "+cryptoListData);

  for(const d of cryptoListData) {
    const {
      market, korean_name, english_name
    } = d;
    
    const cryptolist = {
      market: market,
      korean_name: korean_name,
      english_name: english_name,
    };

    await UPBIT_API_DB.insertCryptoListData(cryptolist);
  }

    res.send(cryptoListData); // object를 리턴함
  };

module.exports.loadData = async (req, res, next) => {
  const userInfo = await SAVE_SERVICE.loadData();
  // console.log("test : "+userInfo);
  let cryptoData = userInfo.Data.Data;

  for(const d of cryptoData) {
    const {
      time, high, low, open, volumefrom, volumeto, close, conversionType, conversionSymbol
    } = d;
    
    const crypto = {
      time: time,
      high: high,
      low: low,
      open: open, 
      volumefrom: volumefrom, 
      volumeto: volumeto, 
      close: close, 
      conversionType: conversionType, 
      conversionSymbol: conversionSymbol,
    };
    await API_DB.insertCryptoData(crypto);
  }

    res.send(cryptoData); // object를 리턴함
  };