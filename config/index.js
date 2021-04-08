 import apis from './third.party.api.config';
 import mariadb from './consts';

 module.exports = {
   port: process.env.PORT || 4000,
   mariadb,
   apis,
 };
 