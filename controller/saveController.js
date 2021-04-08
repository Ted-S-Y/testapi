
import * as SAVE_SERVICE from '../service/saveService';
import * as API_DB from '../dao/api.dao';

module.exports.loadData = async (req, res, next) => {
    const userInfo = await SAVE_SERVICE.loadData();
    // console.log("test : "+userInfo);
    let cryptoData = userInfo.Data.Data;

  // console.log("isarray : " + Array.isArray(cryptoData));
  // console.log("array length : " + cryptoData.length);

  cryptoData.map(
    d=> API_DB.insertCryptoData(d)
  );

  //   cryptoData.forEach(e => {
  //     // console.log("time : " + e.map(d=>d.time));
  // var newNumbers = Array.isArray(e);
  // console.log(newNumbers);
  //   });
    // console.log(cryptoData);

    // const r = await API_DB.insertCryptoData(cryptoData);
  
    res.send(cryptoData); // object를 리턴함
  };