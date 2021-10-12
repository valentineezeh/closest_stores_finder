import { orderByDistance } from 'geolib';
import StoreService from '../services/index';

/**
 * @description Store controller class
 * @class StoreController
 */
export default class StoreController {
  /**
     * @description fetch store from the database
     * @param {Object} req - Http Request object
     * @param {Object} res - Http Request object
     * @returns {Object} returns list of stores
     */
  static async StoreList(req, res) {
    try {
      const resp = await StoreService.StoreList();
      return res.status(200).send({
        data: resp
      });
    } catch (error) {
      return res.status(500).send({
        message: 'Ooops Something went wrong, Please try again.'
      });
    }
  }

  /**
     * @description fetch 5 stores closer to a point
     * @param {Object} req - Http Request object
     * @param {Object} res - Http Request object
     * @returns {Object} returns list of stores
     */
  static async NearByStores(req, res) {
    try {
      const storePicked = req.body;
      const getAllStores = await StoreService.StoreList();

      const closest = orderByDistance(storePicked, getAllStores);
      const nearestFive = closest.slice(1, 6);

      return res.status(200).send({ data: nearestFive });
    } catch (error) {
      return res.status(500).send({
        message: 'Ooops Something went wrong, Please try again.'
      });
    }
  }
}
