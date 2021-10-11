import IRBase from "./IRBase";

//primeira aliquota
export default class IRSecondAliquote extends IRBase  {
    constructor(baseCalc:number) {
        super(baseCalc);
        super.basePercentage = 0.15;
        super.deductionAmount = 4257.57;
    }
}