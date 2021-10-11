import { Request, Response } from 'express';
import IRservice from "./IRservice";
import IIRData from "./model/IIRdata";

export default class IRController {
    createIr(req:Request, res:Response){
        try {
            const irData: IIRData = req.body;

            const ir_data = new IRservice(irData).calculateIR();
            
            res.send(ir_data);

        } catch (e: any) {
            res.status(500).send({"message": e.message});
        }
    }    
}