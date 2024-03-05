import dotenv from 'dotenv';

dotenv.config();

<<<<<<< HEAD
import './src/database';
import express from 'express';
import homeRoutes from './src/routes/homeRoutes';
import userRoutes from './src/routes/userRoutes';
=======
import express from 'express';
import homeRoutes from './src/routes/homeRoutes';
>>>>>>> 8a489c392e8da5a2345f192d646798670dd2b6e6

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
<<<<<<< HEAD
    this.app.use('/users', userRoutes);
=======
>>>>>>> 8a489c392e8da5a2345f192d646798670dd2b6e6
  }
}

export default new App().app;
