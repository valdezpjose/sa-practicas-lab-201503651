const express = require('express');
const cors = require('cors');
const path = require('path');
const axios = require('axios');
const { response } = require('express');

const {json, urlencoded} = express;

const app = express();

const port = process.env.PORT  || 8090;

const corsOptions = {
    origin: '*',
    optionSuccessStatus: 200
}

app.use(cors(corsOptions));

app.get('/repartidor/estadoPedido', (req, res) =>{
    res.send('El pedido se esta entregando');
})

app.get('/repartidor/pedidoEntregado', (req, res) =>{
    res.send('El pedido se entrego');
})

app.get('/repartidor/solicitarPedido', async  (req, res) =>{
    var respuesta;
    await axios.get('http://localhost:8080/restaurante/pedidoListo').then(resp => {
         respuesta = resp.data;
    });
    res.send(respuesta);
})



app.listen(port, () =>{
    console.log(`puerto ${port}`);
})

