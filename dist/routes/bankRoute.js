"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const bankController_1 = require("../controller/bankController");
const bankRoutes = express_1.default.Router();
// Routes for Banks
bankRoutes.get('/banks', bankController_1.getBanks);
bankRoutes.get('/banks/:id', bankController_1.getBankById);
bankRoutes.post('/banks', bankController_1.createBank);
bankRoutes.put('/banks/:id', bankController_1.updateBank);
bankRoutes.delete('/banks/:id', bankController_1.deleteBank);
exports.default = bankRoutes;
//# sourceMappingURL=bankRoute.js.map