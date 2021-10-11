import IIR from "./model/IIR";
import IIRData from "./model/IIRdata";
import IRFactory from "./model/IRFactory";

export default class IRService {
    
    irObj: IIR;
    constructor(irData: IIRData){
        this._verifyMissingData(irData);
        this.irObj = new IRFactory(irData).getIRObject();
    }
    calculateIR(){
        return { "IR": this.irObj.getIr(), "aliquota": this.irObj.getPercentage() }
    }

    _verifyMissingData({ salarioBrutoAnual, irRetido, inss, dependentes } :IIRData){
        const validData = (salarioBrutoAnual || irRetido || inss || dependentes);
        if(!validData){
            throw new Error("Dados incompletos ou inválidos!")
        }
    }
}