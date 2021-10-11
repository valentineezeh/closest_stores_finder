const { MongoClient } = require('mongodb');
require('dotenv').config();
const jsonObject = require('./store.json');

const mongodbUrl = process.env.DB_URL;

const client = new MongoClient(
  mongodbUrl,
  { useUnifiedTopology: true, useNewUrlParser: true }
);

// This function insert the stores from the store.json file
const insertStores = async () => {
  try {
    const { stores } = jsonObject;
    client.connect(
      async (err) => {
        // if error occurs throw an error
        if (err) return console.error(err);
        console.log('Done Connecting to the db...');
        // initialize a new db
        const db = client.db(process.env.DB);
        const Stores = db.collection('stores');
        let bulk = Stores.initializeUnorderedBulkOp();

        //  Preload reviews json object collection
        console.time('time');
        console.log('Start inserting documents');
        // prepare doc to bulk insert using a for loop in batches
        for (let i = 1; i < stores.length; ++i) {
          const doc = stores[i];
          bulk.insert(doc);
        }
        // execute bulk insert
        bulk.execute(
          () => {
            bulk = Stores.initializeUnorderedBulkOp();
          }
        );

        console.log('done inserting data');
        console.timeEnd('time');
      }
    );
  } catch (error) {
    console.error(error);
  }
};

insertStores();
