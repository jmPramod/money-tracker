import express from 'express';
import cors from 'cors';
import swaggerUI from 'swagger-ui-express';
import { CSS_URL, swaggerSpec } from './config/swaggerFiles';
import { ErrorHandelingMiddlewear, corsOption } from './config/optionsHelper';
import dotenv from 'dotenv';
import { connectMongooseDB } from './config/db.connect';
import transactionRoute from './routes/transactionRoute';
import bankRoutes from './routes/bankRoute';
import { SwaggerUIBundle, SwaggerUIStandalonePreset } from 'swagger-ui-dist';

import * as swaggerDocument from '../src/config/swagger.json';
dotenv.config();
const app = express();
// import a from "./""
//! Middleware
// app.use(
//   '/api-docs',
//   swaggerUI.serve,
//   swaggerUI.setup(swaggerSpec, { customCssUrl: CSS_URL })
// );
app.use('/api-docs', swaggerUI.serve, swaggerUI.setup(swaggerDocument));
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cors(corsOption));
//!  Routes
app.use((req, res, next) => {
  res.send('Api Working fine');
});
app.use('/', bankRoutes);
app.use('/', transactionRoute);

app.use(ErrorHandelingMiddlewear);
connectMongooseDB();
app.listen(process.env.PORT, () => {
  console.log(
    `server is running on port http://localhost:${process.env.PORT}/`
  );
});
