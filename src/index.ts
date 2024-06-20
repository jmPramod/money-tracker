import express from 'express';
import cors from 'cors';
import swaggerUI from 'swagger-ui-express';
import { CSS_URL, swaggerSpec } from './config/swaggerFiles';
import { corsOption } from './config/optionsHelper';
import dotenv from 'dotenv';
import { connectMongooseDB } from './config/db.connect';
dotenv.config();
const app = express();

/* Middleware */
app.use(
  '/api-docs',
  swaggerUI.serve,
  swaggerUI.setup(swaggerSpec, { customCssUrl: CSS_URL })
);
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cors(corsOption));
/*Routes */
app.use('/', (req, res) => {
  res.send('hai');
});
// connectMongooseDB();
app.listen(process.env.PORT, () => {
  console.log(
    `server is running on port http://localhost:${process.env.PORT}/`
  );
});
