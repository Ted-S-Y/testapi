/**
 * @ class : http.client.js
 * @ create at :
 * @ create user : sym221@cashwalk.io
 */
import axios from 'axios';
import http from 'http';
import https from 'https';

const instanceMap = {};

export const loadInstance = (name) => {
  let httpClient = instanceMap[name];
  if (!httpClient) {
    httpClient = axios.create({
      httpAgent: new http.Agent({ keepAlive: true }),
      httpsAgent: new https.Agent({ keepAlive: true }),
    });

    httpClient.interceptors.response.use(response => response, (error) => {
      // Do something with response error
      if (error.response) {
        // // 요청이 이루어졌으며 서버가 2xx의 범위를 벗어나는 상태 코드로 응답했습니다.
        // console.log(error.response.data);
        // console.log(error.response.status);
        // console.log(error.response.headers);
        const { status, data } = error.response;
        const errorRes = { status, data };
        return errorRes;
      } if (error.request) {
        // 요청이 이루어 졌으나 응답을 받지 못했습니다.
        // `error.request`는 브라우저의 XMLHttpRequest 인스턴스 또는
        // Node.js의 http.ClientRequest 인스턴스입니다.
        // console.log(error.request);
        return { status: 500, data: null };
      }
      // 오류를 발생시킨 요청을 설정하는 중에 문제가 발생했습니다.
      // console.log('Error', error.message);
      return { status: 500, data: error.message };
    }
      
    );
  }

  return httpClient;
};

export const cancelToken = () => axios.CancelToken.source();

export const METHOD = {
  GET: 'get',
  POST: 'post',
};
