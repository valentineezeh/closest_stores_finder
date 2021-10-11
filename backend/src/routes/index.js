import express from 'express';
import StoreController from '../handlers';

const router = express.Router();

router.get('/', (req, res) => {
  res.status(200).json({
    message: 'Welcome to Jumbo API.'
  });
});

// endpoint to get all stores from the db
router.get('/stores', StoreController.StoreList);

router.post('/closest/stores', StoreController.NearByStores);

export default router;
