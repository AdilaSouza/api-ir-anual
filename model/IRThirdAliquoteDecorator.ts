import IRBase from "./IRBase";

//primeira aliquota
export default class IRThirdAliquote extends IRBase  {
    constructor(baseCalc:number) {
        super(baseCalc);
        super.basePercentage = 0.225;
        super.deductionAmount = 7633.51;
    }
}