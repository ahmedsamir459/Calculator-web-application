package com.example.calculatorspring.operation.allop;

import java.math.BigDecimal;

public abstract class Op implements Ioperation {
    protected BigDecimal operand1;
    protected BigDecimal operand2;
    Op(){}

    public BigDecimal getOperand1() {
        return operand1;
    }

    public void setOperand1(BigDecimal operand1) {
        this.operand1 = operand1;
    }

    public BigDecimal getOperand2() {
        return operand2;
    }

    public void setOperand2(BigDecimal operand2) {
        this.operand2 = operand2;
    }

}
