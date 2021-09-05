const express = require('express')
const app = express()
var path = require('path')
var bodyParser = require('body-parser')
app.use(express.static(path.join(__dirname, 'build')));

var dataController = require('./Controllers/dataController');
var posicaoController = require('./Controllers/posicaoController');

app.get('/api/data', dataController.getData);
app.get('/api/Posicoes', posicaoController.getData);


const port = 3002;

app.listen(process.env.PORT || port);
