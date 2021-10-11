import { Router } from 'express';
import IRController from './IRController';
const  irController = new IRController();

const router = Router();

const welcomeMsg  = (req:any, res:any) => res.send({"message": "bem vindo a IR API, para criar um IR envie um post com os dados corretos para '/'"});
const notFoundMsg = (req:any, res:any) => res.send({"message": "Rota nao encontrada!"});

router.post("/", irController.createIr)
router.get ("/"   , welcomeMsg)
router.all ("*"   , notFoundMsg)

export default router;