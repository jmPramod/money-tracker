"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ErrorHandelingMiddlewear = exports.corsOption = void 0;
const corsOption = {
    origin: '*',
    credentials: true,
};
exports.corsOption = corsOption;
const ErrorHandelingMiddlewear = (err, req, res, next) => {
    const status = err.status || 500;
    const errorMessage = err.message || 'Something went wrong!!!!';
    return res.status(500).json({
        Success: false,
        status: status,
        message: errorMessage,
        data: null,
    });
};
exports.ErrorHandelingMiddlewear = ErrorHandelingMiddlewear;
//# sourceMappingURL=optionsHelper.js.map