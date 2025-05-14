import { Router } from 'express';
const router = Router();
import { createCar, getAllCars, getCarById, updateCar, deleteCar } from './controller.js';

router.post('/cars', createCar);
router.get('/cars', getAllCars);
router.get('/cars/:id', getCarById);
router.put('/cars/:id', updateCar);
router.delete('/cars/:id', deleteCar);

export default router;
