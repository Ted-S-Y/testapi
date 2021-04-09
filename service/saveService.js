import * as CONFIG from '../config';
import * as HTTP_CLIENT from '../lib/http.client';

const { METHOD } = HTTP_CLIENT;


const sendRequest = async (name, method, url, query, params, token) => {
    const instance = HTTP_CLIENT.loadInstance(name);
    const source = HTTP_CLIENT.cancelToken();
    const timeoutId = setTimeout(() => source.cancel(), 1000);

    let response = {};
    try {
      const options = {
        method,
        headers: {
          Authorization: token
        },
        params: params,
        url,
      };
  
      response = await instance(options);
      clearTimeout(timeoutId);
    } catch (e) {
      console.log(`error : ${e}`);
      return null;
      }

    return response;
  };


const loadData = async () => {

    const { cryptoApi } = CONFIG.apis;
    const {name, host, key} = cryptoApi;

    const params = {
        fsym:"BTC",
        tsym:"USD",
        limit:2
    };
    const response = await sendRequest(name, METHOD.GET, `${host}`, null, params, key);
    const { status, data } = response;

    if (data) {
        // console.log(data);
        return data;
    }
    return [];
  };


  
const loadListData = async () => {

  const { upbitListApi } = CONFIG.apis;
  const {name, host} = upbitListApi;

  const response = await sendRequest(name, METHOD.GET, `${host}`, null, null, null);
  console.log("response : " + response.data);
  console.log("response : " + response.item);
  console.log("response : " + response.statusCode);
  console.log("response : " + response.body);
  console.log("response : " + response);


  const { status, data } = response;

  if (data) {
      console.log("data : " + data);
      return data;
  }
  return [];
};
  
  module.exports = { loadData, loadListData };