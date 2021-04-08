
import PhotoDB from './db/photo';
import * as DB from '../lib/sequelize.client';
import { Tables } from './db/table.enum';

const Op = DB.operators;

const insertPhoto = async (photo) => {
  const newPhoto = await DB.insert(Tables.Photo, photo);
  return newPhoto;
};

const getPhotos = async (seq) => {
  const attributes = ['seq'];
  const where = {
    seq,
  };
  const newPhotos = await DB.findAll(Tables.Photo, attributes, where);
  console.log(newPhotos);
  return newPhotos;
};

module.exports = { insertPhoto, getPhotos };