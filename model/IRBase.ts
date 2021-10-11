import IIR from "./IIR";
import IIRData from "./IIRdata";

// classe abstrata base com regra do IR e metodos do calculos a serem implementados pelos decoradores
export default class IRBase implements IIR {

    //dados do decorador
    basePercentage:number = 0;
    deductionAmount: number = 0;
    irAliquote: number = 0;
    baseVal: number = 0;

    constructor(baseVal: number){
        this.baseVal = baseVal;
    }

    getIr() {
        return this.getBaseCalc() * this.getPercentage() - this.getDeductionAmount();
    }
    getBaseCalc(): number {
        return this.baseVal;
    }
    getPercentage(): number {
        return this.basePercentage;
    }
    getDeductionAmount(): number {
        return this.deductionAmount;
    }
}