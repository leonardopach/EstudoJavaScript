import dotenv from 'dotenv';

dotenv.config();

import express from 'express';
import homeRoutes from './src/routes/homeRoutes';

class App {
  constructor() {
    this.app = express();
    this.middlawares();
    this.routes();
  }

  middlawares() {
    this.app.use(express.urlencoded({ extended: true }));
    this.app.use(express.json());
  }

  routes() {
    this.app.use('/', homeRoutes);
  }
}

export default new App().app;
