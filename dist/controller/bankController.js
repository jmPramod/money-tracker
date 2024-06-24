"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.deleteBank = exports.updateBank = exports.createBank = exports.getBankById = exports.getBanks = void 0;
const bank_model_1 = __importDefault(require("../model/bank.model"));
const cerate_Error_1 = __importDefault(require("./../utils/cerate.Error"));
//! GET all banks
const getBanks = async (req, res, next) => {
    try {
        const banks = await bank_model_1.default.find();
        res.json({
            Success: true,
            status: 200,
            message: 'All Bank fetched.',
            data: banks,
        });
        res.status(200).json(banks);
    }
    catch (error) {
        next(error);
    }
};
exports.getBanks = getBanks;
//! GET a bank by ID
const getBankById = async (req, res, next) => {
    try {
        const bank = await bank_model_1.default.findById(req.params.id);
        if (!bank) {
            return next((0, cerate_Error_1.default)(404, 'Bank not found'));
        }
        res.json({
            Success: true,
            status: 200,
            message: 'Single Bank fetched.',
            data: bank,
        });
    }
    catch (error) {
        next(error);
    }
};
exports.getBankById = getBankById;
//! CREATE a new bank
const createBank = async (req, res, next) => {
    try {
        const { name, accounts, passwords } = req.body;
        const newBank = new bank_model_1.default({ name, accounts, passwords });
        const savedBank = await newBank.save();
        res.json({
            Success: true,
            status: 201,
            message: 'new Bank created',
            data: savedBank,
        });
    }
    catch (error) {
        next(error);
    }
};
exports.createBank = createBank;
//! UPDATE a bank by ID
const updateBank = async (req, res, next) => {
    try {
        const { name, accounts, passwords } = req.body;
        const updatedBank = await bank_model_1.default.findByIdAndUpdate(req.params.id, { name, accounts, passwords }, { new: true });
        if (!updatedBank) {
            return next((0, cerate_Error_1.default)(404, 'Bank not found'));
        }
        res
            .json({
            Success: true,
            status: 200,
            message: 'new Bank created',
            data: updatedBank,
        })
            .status(200);
    }
    catch (error) {
        next(error);
    }
};
exports.updateBank = updateBank;
//! DELETE a bank by ID
const deleteBank = async (req, res, next) => {
    try {
        const deletedBank = await bank_model_1.default.findByIdAndDelete(req.params.id);
        if (!deletedBank) {
            return next((0, cerate_Error_1.default)(404, 'Bank not found'));
        }
        res
            .json({
            Success: true,
            status: 200,
            message: 'new Bank created',
            data: deletedBank,
        })
            .status(200);
    }
    catch (error) {
        next(error);
    }
};
exports.deleteBank = deleteBank;
//# sourceMappingURL=bankController.js.map