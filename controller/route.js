import express from "express";
import axios from "axios";
import * as SAVE_CTRL from "./saveController";

export const router = express.Router();

function wrapAsync(fn) {
  return function (req, res, next) {
    fn(req, res, next).catch(next);
  };
}

router.get("/loadData", SAVE_CTRL.loadData);

// router.get("/test", async (req, res, next) => {
//   axios({
//     method: "get",
//     url: "https://min-api.cryptocompare.com/data/v2/histoday",
//     params: { fsym: "BTC", tsym: "USD", limit: 2 },
//   }).then(function (response) {
//     const { status, data } = response;
    
//     console.log("res1 : " + JSON.stringify(data));
//   });
// });
