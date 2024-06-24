import express from 'express';
import {
  createBank,
  getBanks,
  getBankById,
  updateBank,
  deleteBank,
} from '../controller/bankController';
const bankRoutes = express.Router();

// Routes for Banks
bankRoutes.get('/banks', getBanks);
bankRoutes.get('/banks/:id', getBankById);
bankRoutes.post('/banks', createBank);
bankRoutes.put('/banks/:id', updateBank);
bankRoutes.delete('/banks/:id', deleteBank);

export default bankRoutes;
