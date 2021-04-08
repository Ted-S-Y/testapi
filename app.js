import { port } from './config';
import express from 'express';
import { router } from './controller/route';


require('dotenv').config();

const app = express();

app.use(router);

app.use((req, res, next) => {
  res.sendStatus(404);
});

process.env.NODE_TLS_REJECT_UNAUTHORIZED = "0";


// Global Error Handler
app.use((err, req, res, next) => {
  if (err) {
    console.log(err);
    const resBody = { message: err.message };
    res.status(500).send(resBody);
  } else {
    next();
  }
});

app.listen(port, () => {
  console.info(`[${process.env.NODE_ENV}]  API Server at http://localhost:${port} / `);
});
