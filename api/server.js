var cors = require('cors')

const express = require('express');

const bodyParser = require('body-parser');

const rotas = require('./routes/rotas')


const app = express();

app.use(cors())
app.use(bodyParser.urlencoded({extended:true}))
app.use(bodyParser.json())
app.use(rotas);
app.listen(3000,()=>console.log('server is running'));