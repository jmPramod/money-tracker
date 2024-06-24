import { NextFunction, Request, Response } from 'express';
import createError from './../utils/cerate.Error';
import Transaction, {
  Transaction as TransactionType,
} from '../model/transaction.model';

// GET all transactions
export const getTransactions = async (
  req: Request,
  res: Response,
  next: NextFunction
): Promise<void> => {
  try {
    const transactions = await Transaction.find();
    res
      .json({
        Success: true,
        status: 200,
        message: 'All transition fetched',
        data: transactions,
      })
      .status(200);
  } catch (error) {
    next(error);
  }
};

// GET a transaction by ID
export const getTransactionById = async (
  req: Request,
  res: Response,
  next: NextFunction
): Promise<void> => {
  try {
    const transaction = await Transaction.findById(req.params.id);
    if (!transaction) {
      return next(createError(404, 'Transaction not found'));
    }

    res
      .json({
        Success: true,
        status: 200,
        message: 'All transition fetched',
        data: transaction,
      })
      .status(200);
  } catch (error) {
    next(error);
  }
};

// CREATE a new transaction
export const createTransaction = async (
  req: Request,
  res: Response,
  next: NextFunction
): Promise<void> => {
  try {
    const { type, amount, date, reason, note, bank, includedInMonthlyTotal } =
      req.body;
    const newTransaction = new Transaction({
      type,
      amount,
      date,
      reason,
      note,
      bank,
      includedInMonthlyTotal,
    });
    const savedTransaction = await newTransaction.save();
    res
      .json({
        Success: true,
        status: 201,
        message: 'new transaction created',
        data: savedTransaction,
      })
      .status(201);
  } catch (error) {
    next(error);
  }
};

// UPDATE a transaction by ID
export const updateTransaction = async (
  req: Request,
  res: Response,

  next: NextFunction
): Promise<void> => {
  try {
    const { type, amount, date, reason, note, bank, includedInMonthlyTotal } =
      req.body;
    const updatedTransaction = await Transaction.findByIdAndUpdate(
      req.params.id,
      { type, amount, date, reason, note, bank, includedInMonthlyTotal },
      { new: true }
    );
    if (!updatedTransaction) {
      return next(createError(404, 'Transaction not found'));
    }
    res
      .json({
        Success: true,
        status: 200,
        message: ' transition updated',
        data: updatedTransaction,
      })
      .status(200);
  } catch (error) {
    next(error);
  }
};

// DELETE a transaction by ID
export const deleteTransaction = async (
  req: Request,
  res: Response,
  next: NextFunction
): Promise<void> => {
  try {
    const deletedTransaction = await Transaction.findByIdAndDelete(
      req.params.id
    );
    if (!deletedTransaction) {
      return next(createError(404, 'Transaction not found'));
    }
    res.json({
      Success: true,
      status: 200,
      message: ' transition deleted',
      data: deletedTransaction,
    });
  } catch (error) {
    next(error);
  }
};
