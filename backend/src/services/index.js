/* eslint-disable no-return-assign */
import { connectDb, getDb } from '../config/index';

let db;
connectDb(() => db = getDb('stores'));


/**
 * @description Store service class
 * @class StoreService
 */
export default class StoreService {
  /**
     * @description This service gets all stores
     * @returns {Object} returns list
     */
  static async StoreList() {
    const resp = await db.find().toArray();
    return resp;
  }
}
