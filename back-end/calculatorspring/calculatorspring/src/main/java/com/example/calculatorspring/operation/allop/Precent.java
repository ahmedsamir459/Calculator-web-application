package com.example.calculatorspring.operation.allop;

import com.example.calculatorspring.operation.Result;

import java.math.BigDecimal;

public class Precent extends Op {

    @Override
    public Result run() {
        this.operand2=new BigDecimal(100);
        Result res=new Result();
        if(this.operand1 != null ) {
                res.setResult(operand1.divide(operand2));
                res.setError(Boolean.FALSE);}
                return res;
    }
}
