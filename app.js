import express from 'express';
import homeRoute from './src/routes/home.js';
import userRoute from './src/routes/user.js';
import tokenRoute from './src/routes/token.js';
import './src/database'


class App {
  constructor() {
    this.app = express();
    this.middlewares();
    this.routes();
  }

  middlewares() {
    this.app.use(express.urlencoded({ extended: true }));
    this.app.use(express.json());
  }

  routes() {
    this.app.use('/', homeRoute);
    this.app.use('/users/', userRoute);
    this.app.use('/tokens/', tokenRoute);
  }
}

export default new App().app;
