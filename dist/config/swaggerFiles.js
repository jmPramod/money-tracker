"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.CSS_URL = exports.swaggerSpec = void 0;
const swagger_jsdoc_1 = __importDefault(require("swagger-jsdoc"));
require('dotenv').config();
const port = process.env.PORT;
const swaggerOption = {
    definition: {
        openapi: '3.0.0',
        info: {
            title: 'Documentation of E-commerce API',
            version: '1.0.0',
            description: 'E-com product API with authentication ',
            contact: {
                name: 'Shop More',
                url: 'https://shop-more-fe.netlify.app/',
            },
        },
        components: {
            securitySchemes: {
                JWTAuth: {
                    type: 'http',
                    scheme: 'bearer',
                    bearerFormat: 'JWT',
                },
            },
        },
        security: [
            {
                JWTAuth: [], // Explicitly define the type here
            },
        ],
        servers: [
            {
                url: 'https://shop-more.vercel.app',
                description: 'base url of this project',
            },
            { url: `http://localhost:${port}/`, description: ' local host' },
        ],
    },
    apis: ['./routes/*.ts'],
};
const CSS_URL = 'https://unpkg.com/swagger-ui-dist/swagger-ui.css';
exports.CSS_URL = CSS_URL;
const swaggerSpec = (0, swagger_jsdoc_1.default)(swaggerOption);
exports.swaggerSpec = swaggerSpec;
//# sourceMappingURL=swaggerFiles.js.map