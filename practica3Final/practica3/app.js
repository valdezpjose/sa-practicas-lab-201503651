const express = require('express');
const cors = require('cors');
const path = require('path');
const axios = require('axios');
const { response } = require('express');

const {json, urlencoded} = express;

const app = express();

const port = process.env.PORT  || 8080;

const corsOptions = {
    origin: '*',
    optionSuccessStatus: 200
}

app.use(cors(corsOptions));

app.get('/restaurante/pedidoListo', (req, res) =>{
    res.send('El pedido esta listo');
})

app.get('/restaurante/estadoPedido', (req, res) =>{
    res.send('El pedido se esta preparando');
})

app.get('/restaurante/recibirPedido', async  (req, res) =>{
    res.send('El pedido se recibio');
})


app.listen(port, () =>{
    console.log(`puerto ${port}`);
})

