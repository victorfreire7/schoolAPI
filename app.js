import express from 'express';
import { resolve } from 'path';
import homeRoute from './src/routes/home.js';
import userRoute from './src/routes/user.js';
import tokenRoute from './src/routes/token.js';
import alunoRoute from './src/routes/aluno.js';
import photoRoute from './src/routes/photo.js';
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
    this.app.use(express.static(resolve(__dirname, 'uploads')));
  }

  routes() {
    this.app.use('/', homeRoute);
    this.app.use('/users/', userRoute);
    this.app.use('/tokens/', tokenRoute);
    this.app.use('/alunos/', alunoRoute);
    this.app.use('/photos/', photoRoute);
  }
}

export default new App().app;
