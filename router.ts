import { Router } from 'express';
import IRController from './IRController';
const  irController = new IRController();

const router = Router();

const welcomeMsg  = (req:any, res:any) => res.send({"message": "welcome to IR API, to create a ir send the correct data to '/:id'"});
const notFoundMsg = (req:any, res:any) => res.send({"message": "Route not found!"});

router.post("/", irController.createIr)
router.get ("/"   , welcomeMsg)
router.all ("*"   , notFoundMsg)

export default router;