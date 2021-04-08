
import * as SAVE_SERVICE from '../service/saveService';


module.exports.loadData = async (req, res, next) => {
    const userInfo = await SAVE_SERVICE.loadData();
    console.log("test : "+userInfo);
  
    res.send(JSON.stringify(userInfo)); // object를 리턴함
  };