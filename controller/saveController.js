
import * as SAVE_SERVICE from '../service/saveService';
import * as API_DB from '../dao/api.dao';

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