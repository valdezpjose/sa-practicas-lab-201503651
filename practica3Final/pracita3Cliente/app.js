const express = require('express');
const cors = require('cors');
const path = require('path');
const axios = require('axios');
const { response } = require('express');

const {json, urlencoded} = express;

const app = express();

const port = process.env.PORT  || 8081;

const corsOptions = {
    origin: '*',
    optionSuccessStatus: 200
}

app.use(cors(corsOptions));

app.get('/cliente/solicitarPedido', async  (req, res) =>{
    var respuesta;
    await axios.get('http://localhost:8080/restaurante/recibirPedido').then(resp => {
         respuesta = resp.data;
    });
    res.send(respuesta);
})

app.get('/cliente/verificarPedidoRestaurante', async  (req, res) =>{
    var respuesta;
    await axios.get('http://localhost:8080/restaurante/estadoPedido').then(resp => {
         respuesta = resp.data;
    });
    res.send(respuesta);
})

app.get('/cliente/verificarPedidoRepartidor', async  (req, res) =>{
    var respuesta;
    await axios.get('http://localhost:8090/repartidor/estadoPedido').then(resp => {
         respuesta = resp.data;
    });
    res.send(respuesta);
})



app.listen(port, () =>{
    console.log(`puerto ${port}`);
})

