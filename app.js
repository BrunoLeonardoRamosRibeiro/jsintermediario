// importar o express e o cors
const express = require('express');
var cors = require('cors')

// criamos o objeto express
const myApp = express();

myApp.use(cors());
myApp.use(express.json());

const porta = 3000;

myApp.listen(porta, ()=> {console.log('Servidor Rodando...')});
