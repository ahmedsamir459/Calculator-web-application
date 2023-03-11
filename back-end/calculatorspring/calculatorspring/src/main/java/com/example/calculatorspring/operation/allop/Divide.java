package com.example.calculatorspring.operation.allop;

import com.example.calculatorspring.operation.Result;

import java.math.BigDecimal;

public class Divide extends Op{
    @Override
    public Result run() {
        Result res=new Result();
        if(this.operand1 != null && this.operand2 != null) {
            if(this.operand2.equals(new BigDecimal(0))){
                res.setError(Boolean.TRUE);
                res.setMessage("Error division by zero");

            }
            else{
            res.setResult(operand1.divide(operand2));
            res.setError(Boolean.FALSE);}
        }

        return res;
    }
}
