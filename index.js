const express = require('express');
const mongoose = require('mongoose');
const usuarioRoutes = require('./src/routes/usuario');
const app = express();

app.use(express.json()); 

app.use(
  express.urlencoded({
    extended: true,
  })
);

mongoose
  .connect('mongodb+srv://gabriel:projeto123@cluster0.oqp4np6.mongodb.net/?retryWrites=true&w=majority')
  .then(() => {
    console.log('Conectado ao MongoDB');
    // Iniciando o Node
    app.listen(3000, () => {
      console.log('Rodando na porta 3000');
    });
  })
  .catch((error) => {
    console.log(error);
  });

// API ROTAS
app.use('/usuarios', usuarioRoutes);
