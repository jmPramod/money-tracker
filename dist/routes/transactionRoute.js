"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const transactionController_1 = require("../controller/transactionController");
const transactionRoute = express_1.default.Router();
// Routes for Transactions
transactionRoute.get('/transactions', transactionController_1.getTransactions);
transactionRoute.get('/transactions/:id', transactionController_1.getTransactionById);
transactionRoute.post('/transactions', transactionController_1.createTransaction);
transactionRoute.put('/transactions/:id', transactionController_1.updateTransaction);
transactionRoute.delete('/transactions/:id', transactionController_1.deleteTransaction);
exports.default = transactionRoute;
//# sourceMappingURL=transactionRoute.js.map