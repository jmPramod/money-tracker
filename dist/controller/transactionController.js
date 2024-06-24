"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.deleteTransaction = exports.updateTransaction = exports.createTransaction = exports.getTransactionById = exports.getTransactions = void 0;
const cerate_Error_1 = __importDefault(require("./../utils/cerate.Error"));
const transaction_model_1 = __importDefault(require("../model/transaction.model"));
// GET all transactions
const getTransactions = async (req, res, next) => {
    try {
        const transactions = await transaction_model_1.default.find();
        res
            .json({
            Success: true,
            status: 200,
            message: 'All transition fetched',
            data: transactions,
        })
            .status(200);
    }
    catch (error) {
        next(error);
    }
};
exports.getTransactions = getTransactions;
// GET a transaction by ID
const getTransactionById = async (req, res, next) => {
    try {
        const transaction = await transaction_model_1.default.findById(req.params.id);
        if (!transaction) {
            return next((0, cerate_Error_1.default)(404, 'Transaction not found'));
        }
        res
            .json({
            Success: true,
            status: 200,
            message: 'All transition fetched',
            data: transaction,
        })
            .status(200);
    }
    catch (error) {
        next(error);
    }
};
exports.getTransactionById = getTransactionById;
// CREATE a new transaction
const createTransaction = async (req, res, next) => {
    try {
        const { type, amount, date, reason, note, bank, includedInMonthlyTotal } = req.body;
        const newTransaction = new transaction_model_1.default({
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
    }
    catch (error) {
        next(error);
    }
};
exports.createTransaction = createTransaction;
// UPDATE a transaction by ID
const updateTransaction = async (req, res, next) => {
    try {
        const { type, amount, date, reason, note, bank, includedInMonthlyTotal } = req.body;
        const updatedTransaction = await transaction_model_1.default.findByIdAndUpdate(req.params.id, { type, amount, date, reason, note, bank, includedInMonthlyTotal }, { new: true });
        if (!updatedTransaction) {
            return next((0, cerate_Error_1.default)(404, 'Transaction not found'));
        }
        res
            .json({
            Success: true,
            status: 200,
            message: ' transition updated',
            data: updatedTransaction,
        })
            .status(200);
    }
    catch (error) {
        next(error);
    }
};
exports.updateTransaction = updateTransaction;
// DELETE a transaction by ID
const deleteTransaction = async (req, res, next) => {
    try {
        const deletedTransaction = await transaction_model_1.default.findByIdAndDelete(req.params.id);
        if (!deletedTransaction) {
            return next((0, cerate_Error_1.default)(404, 'Transaction not found'));
        }
        res.json({
            Success: true,
            status: 200,
            message: ' transition deleted',
            data: deletedTransaction,
        });
    }
    catch (error) {
        next(error);
    }
};
exports.deleteTransaction = deleteTransaction;
//# sourceMappingURL=transactionController.js.map