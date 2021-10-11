import express from "express";
import * as bodyParser from 'body-parser';
 
const port = process.env.PORT || 3000;

const server = express();
server.use(bodyParser.json());

server.post('/', (req, res) => {
    //console.log(req)
    const { nome_cliente, id } = req.body;    
    res.send(`${nome_cliente} tem id : ${id}`);
})

server.listen(port, () => console.log(`servidor startado na porta ${port}`))