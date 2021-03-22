const express = require('express');
const cors = require('cors');
const path = require('path');
const axios = require('axios');
const { response } = require('express');

const {json, urlencoded} = express;

const app = express();

const port = process.env.PORT  || 5050;

const corsOptions = {
    origin: '*',
    optionSuccessStatus: 200
}




app.use(cors(corsOptions));

app.get('/', (req, res) =>{
   res.status(200).send("Server up");
})

app.get('/restaurante/pedidoListo', async (req, res) =>{
    await axios.get('http://localhost:8080/restaurante/pedidoListo').then(resp => {
         respuesta = resp.data;
    });
    res.send(respuesta);
})

app.get('/restaurante/estadoPedido', async (req, res) =>{
    await axios.get('http://localhost:8080/restaurante/estadoPedido').then(resp => {
         respuesta = resp.data;
    });
    res.send(respuesta);
})

app.get('/restaurante/recibirPedido', async  (req, res) =>{
    await axios.get('http://localhost:8080/restaurante/recibirPedido').then(resp => {
        respuesta = resp.data;
   });
   res.send(respuesta);
})

app.get('/cliente/solicitarPedido', async  (req, res) =>{
    await axios.get('http://localhost:8081/cliente/solicitarPedido').then(resp => {
        respuesta = resp.data;
   });
   res.send(respuesta);
})

app.get('/cliente/verificarPedidoRestaurante', async  (req, res) =>{
    await axios.get('http://localhost:8081/cliente/verificarPedidoRestaurante').then(resp => {
        respuesta = resp.data;
   });
   res.send(respuesta);
})

app.get('/cliente/verificarPedidoRepartidor', async  (req, res) =>{
    await axios.get('http://localhost:8081/cliente/verificarPedidoRepartidor').then(resp => {
        respuesta = resp.data;
   });
   res.send(respuesta);
})


app.get('/repartidor/estadoPedido', async  (req, res) =>{
    await axios.get('http://localhost:8090/repartidor/estadoPedido').then(resp => {
        respuesta = resp.data;
   });
   res.send(respuesta);
})

app.get('/repartidor/pedidoEntregado', async  (req, res) =>{
    await axios.get('http://localhost:8090/repartidor/pedidoEntregado').then(resp => {
        respuesta = resp.data;
   });
   res.send(respuesta);
})

app.get('/repartidor/solicitarPedido', async  (req, res) =>{
    await axios.get('http://localhost:8090/repartidor/solicitarPedido').then(resp => {
        respuesta = resp.data;
   });
   res.send(respuesta);
})

var server = app.listen(port, () =>{
    console.log(`puerto ${port}`);
})


module.exports = server;