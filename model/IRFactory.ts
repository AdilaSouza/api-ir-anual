import IIR from "./IIR";
import IIRData from "./IIRdata";
import IRBase from "./IRBase";
import IRFirstAliquote from "./IRFirstAliquoteDecorator";
import IRFourthAliquote from "./IRFourthAliquoteDecorator";
import IRSecondAliquote from "./IRSecondAliquoteDecorator";
import IRThirdAliquote from "./IRThirdAliquoteDecorator";

export default class IRFactory {
    irDt: any;
    baseCalc: number;

    constructor(irData: IIRData){
        this.irDt = irData;
        this.baseCalc = this.getBaseCalc();
    }

    //base do calculo
    getBaseCalc(): number{
        const {
            salarioBrutoAnual,
            irRetido,
            inss,
            dependentes
        } = this.irDt;

        return salarioBrutoAnual - irRetido - inss - dependentes * 189.59 * 12;
    }

    getIRObject(): IIR {
        if (this.baseCalc <= 22847.76) {
            //insento retorna 0
            return new IRBase(this.baseCalc);
          } else if (this.baseCalc >= 22847.77 && this.baseCalc <= 33919.8) {
            return new IRFirstAliquote(this.baseCalc);
          } else if (this.baseCalc >= 33919.81 && this.baseCalc <= 45012.6) {
            return new IRSecondAliquote(this.baseCalc);
          } else if (this.baseCalc >= 45012.61 && this.baseCalc <= 55976.16) {
            return new IRThirdAliquote(this.baseCalc);
          } else {
            return new IRFourthAliquote(this.baseCalc);
          }
      
    }
    
}