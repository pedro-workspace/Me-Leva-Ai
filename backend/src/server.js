const express = require('express');
const mongoose = require('mongoose'); // irá nos apoiar a manipular o mongoDB
const requireDir = require('require-dir');

// INICIANDO O SERVIDOR
const app = express();
const port = 3000

// determinar que o uso do JSON
app.use(express.json());

// Conectar no bando de dados
mongoose.connect(
  "mongodb+srv://pedro:hvk4RLhY1JtJYjoo@cluster0.xwauf.mongodb.net/test",
  {
    useNewUrlParser: true,
    useUnifiedTopology: true
  }
);

// Fazer a junção dos meus Schema de Banco de Dados
requireDir('./models');

// consumindo a rota
app.use('/api', require('./routers/index.Routes'));

//chamada web


console.log(`Ouvindo porta ${port}\nhttp://localhost:${port}`)
app.listen(port);
