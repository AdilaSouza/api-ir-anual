import express from "express";
import routes from "./router";

const port = process.env.PORT || 3000;

const server = express();
server.use(express.json());
server.use(routes);

server.listen(port, () => console.log(`servidor iniciado na porta ${port}`))