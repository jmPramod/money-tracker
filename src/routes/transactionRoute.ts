import express from 'express';
import {
  createTransaction,
  getTransactions,
  getTransactionById,
  updateTransaction,
  deleteTransaction,
} from '../controller/transactionController';

const transactionRoute = express.Router();

// Routes for Transactions
transactionRoute.get('/transactions', getTransactions);
transactionRoute.get('/transactions/:id', getTransactionById);
transactionRoute.post('/transactions', createTransaction);
transactionRoute.put('/transactions/:id', updateTransaction);
transactionRoute.delete('/transactions/:id', deleteTransaction);

export default transactionRoute;
