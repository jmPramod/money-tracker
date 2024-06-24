"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const cors_1 = __importDefault(require("cors"));
const swagger_ui_express_1 = __importDefault(require("swagger-ui-express"));
const optionsHelper_1 = require("./config/optionsHelper");
const dotenv_1 = __importDefault(require("dotenv"));
const db_connect_1 = require("./config/db.connect");
const transactionRoute_1 = __importDefault(require("./routes/transactionRoute"));
const bankRoute_1 = __importDefault(require("./routes/bankRoute"));
const swaggerDocument = __importStar(require("../src/config/swagger.json"));
dotenv_1.default.config();
const app = (0, express_1.default)();
// import a from "./""
//! Middleware
// app.use(
//   '/api-docs',
//   swaggerUI.serve,
//   swaggerUI.setup(swaggerSpec, { customCssUrl: CSS_URL })
// );
app.use('/api-docs', swagger_ui_express_1.default.serve, swagger_ui_express_1.default.setup(swaggerDocument));
app.use(express_1.default.json());
app.use(express_1.default.urlencoded({ extended: true }));
app.use((0, cors_1.default)(optionsHelper_1.corsOption));
//!  Routes
app.use((req, res, next) => {
    res.send('Api Working fine');
});
app.use('/', bankRoute_1.default);
app.use('/', transactionRoute_1.default);
app.use(optionsHelper_1.ErrorHandelingMiddlewear);
(0, db_connect_1.connectMongooseDB)();
app.listen(process.env.PORT, () => {
    console.log(`server is running on port http://localhost:${process.env.PORT}/`);
});
//# sourceMappingURL=index.js.map