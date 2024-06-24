import { NextFunction, Request, Response } from 'express';
import Bank, { Bank as BankType } from '../model/bank.model';
import createError from './../utils/cerate.Error';

//! GET all banks
export const getBanks = async (
  req: Request,
  res: Response,
  next: NextFunction
): Promise<void> => {
  try {
    const banks = await Bank.find();
    res.json({
      Success: true,
      status: 200,
      message: 'All Bank fetched.',
      data: banks,
    });
    res.status(200).json(banks);
  } catch (error) {
    next(error);
  }
};

//! GET a bank by ID
export const getBankById = async (
  req: Request,
  res: Response,

  next: NextFunction
): Promise<void> => {
  try {
    const bank = await Bank.findById(req.params.id);
    if (!bank) {
      return next(createError(404, 'Bank not found'));
    }
    res.json({
      Success: true,
      status: 200,
      message: 'Single Bank fetched.',
      data: bank,
    });
  } catch (error) {
    next(error);
  }
};

//! CREATE a new bank
export const createBank = async (
  req: Request,
  res: Response,

  next: NextFunction
): Promise<void> => {
  try {
    const { name, accounts, passwords } = req.body;
    const newBank = new Bank({ name, accounts, passwords });
    const savedBank = await newBank.save();
    res.json({
      Success: true,
      status: 201,
      message: 'new Bank created',
      data: savedBank,
    });
  } catch (error) {
    next(error);
  }
};

//! UPDATE a bank by ID
export const updateBank = async (
  req: Request,
  res: Response,

  next: NextFunction
): Promise<void> => {
  try {
    const { name, accounts, passwords } = req.body;
    const updatedBank = await Bank.findByIdAndUpdate(
      req.params.id,
      { name, accounts, passwords },
      { new: true }
    );
    if (!updatedBank) {
      return next(createError(404, 'Bank not found'));
    }
    res
      .json({
        Success: true,
        status: 200,
        message: 'new Bank created',
        data: updatedBank,
      })
      .status(200);
  } catch (error) {
    next(error);
  }
};

//! DELETE a bank by ID
export const deleteBank = async (
  req: Request,
  res: Response,

  next: NextFunction
): Promise<void> => {
  try {
    const deletedBank = await Bank.findByIdAndDelete(req.params.id);
    if (!deletedBank) {
      return next(createError(404, 'Bank not found'));
    }
    res
      .json({
        Success: true,
        status: 200,
        message: 'new Bank created',
        data: deletedBank,
      })
      .status(200);
  } catch (error) {
    next(error);
  }
};
