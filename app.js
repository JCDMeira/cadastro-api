import dotenv from 'dotenv';
dotenv.config();

import express from 'express';
import homeRoutes from './src/routes/homeRoutes';

class App {
  constructor() {
    this.app = express();
    this.middlewares();
    this.routes();
  }

  middlewares() {
    /*
      -Boa noite.
      -A opção "extended" diz para o express qual biblioteca ele deve utilizar para fazer o parsing
      - do conteúdo das requisições que ele recebe.
      -Quando extended : true vai utilizar a biblioteca qs e quando for false ele vai utilizar a
      - biblioteca querystring.

      -A diferença entre elas é que a biblioteca qs permite o aninhamento de objetos (nested objects),
      -que é praticamente como o JSON trabalha:

      ? {"animal":{"tipo":"cachorro","raca":"vira-lata","idade":3}}
      -E a biblioteca querystring não suporta nested objects.

      - Na verdade o middleware é o body-parser, você instala ele como modulo do express para dar a
      - habilidade ao express de analisar o conteúdo das solicitações antes de fazermos alguma manipulação.
      - (em poucas palavras ele deixa o conteúdo do body das requisições tudo bonitinho pra gente trabalhar
      - mais fácil esses dados) e o urlencoded é um método desse middleware que pode receber parâmetros,
      - como o extended
    */
    this.app.use(express.urlencoded({ extended: true }));

    this.app.use(express.json());
  }

  routes() {
    this.app.use('/', homeRoutes);
  }
}

export default new App().app;
