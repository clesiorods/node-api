const express = require('express');
const mongoose = require('mongoose');
const requireDir = require('require-dir');


//INICIANDO O APP
const app = express();

// INICIANDO O BANCO DE DADOS
mongoose.connect('mongodb://localhost:27017/node-api', { useUnifiedTopology: true, useNewUrlParser: true } );


requireDir('./src/models');



//ROTAS
app.use('/api', require("./src/routes"));

app.listen(3001);