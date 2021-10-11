/* eslint-disable no-console */
import dotenv from 'dotenv';

const { MongoClient } = require('mongodb');

dotenv.config();

const urlMongo = process.env.DB_URL;

let db;

const connectDb = (callback) => {
  if (db) return callback();
  MongoClient.connect(urlMongo, { useNewUrlParser: true },
    (err, database) => {
      if (err) return console.error(err);
      db = database.db('jumbo');
      console.log('Database Connected');
      callback();
    });
};

const getDb = collectionToGet => db.collection(collectionToGet);

export { connectDb, getDb };
