import IRBase from "./IRBase";

//primeira aliquota
export default class IRFirstAliquote extends IRBase {
    constructor(baseCalc:number) {
        super(baseCalc);
        super.basePercentage = 0.075;
        super.deductionAmount = 1713.58;
    }
}