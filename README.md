# schoolAPI

![/alunos](/public/img/1765690129638.jpg)
![/tokens](/public/img/jwt.png)
![/photos](/public/img/insomnia.png)


  Este é o projeto prático de uma API Rest que realiza o cadastro de alunos dentro do banco de dados de uma escola. Utilizando JWT, BCRYPT.JS e DotEnv, a APIREST conta com a segurança necessário para consumo e armazenamento de dados.

  a SchoolAPI utiliza Sequelize e MySQL2 para armazenamento no Banco de dados, que foi construido com a utilização de Migrations; que armazenam alunos, usuários e fotos do aluno utilizando a biblioteca Multer.

## Váriaveis de Ambiente .Env

``` env
  PORT=
  DB_HOST=
  DB_NAME=
  DB_PORT=
  DB_USER=
  DB_PASSWORD=
  TOKEN_SECRET=
  TOKEN_EXPIRATION=
```

## Modo de Inicialização:

  - Após configurar todas váriaveis de ambiente, digitar os seguintes códigos no terminal:

``` bash
  npm install
```

``` bash
  node app.js
```

 - Feito isso, a aplicação estará rodando no seu localhost:PORT.


## File Tree
``` files
├─ src/
│  ├─ config/
│  ├─ controllers/
│  ├─ database/
│  ├─ middlewares/
│  ├─ models/
│  └─ routes/
├─ uploads/
├─ .editorconfig
├─ .env
├─ .gitignore
├─ .sequelizerc
├─ app.js
├─ eslint.config.mjs
├─ nodemon.json
├─ package-lock.json
├─ package.json
├─ README.md
└─ server.js
```

## 🔒 Dependências:

``` json
  "devDependencies": {
    "@eslint/js": "^9.39.1",
    "eslint": "^9.39.1",
    "globals": "^16.5.0",
    "nodemon": "^3.1.11",
    "sequelize-cli": "^6.6.3",
    "sucrase": "^3.35.1"
  },
  "dependencies": {
    "bcryptjs": "^3.0.3",
    "dotenv": "^17.2.3",
    "express": "^5.1.0",
    "jsonwebtoken": "^9.0.3",
    "multer": "^2.0.2",
    "mysql2": "^3.15.3",
    "sequelize": "^6.37.7"
  }
```
