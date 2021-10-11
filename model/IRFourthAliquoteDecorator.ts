import IRBase from "./IRBase";

//primeira aliquota
export default class IRFourthAliquote extends IRBase  {
    constructor(baseCalc:number) {
        super(baseCalc);
        super.basePercentage = 0.275;
        super.deductionAmount = 10432.32;
    }
}