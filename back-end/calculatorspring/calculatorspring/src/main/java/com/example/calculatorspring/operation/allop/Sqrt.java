package com.example.calculatorspring.operation.allop;

import com.example.calculatorspring.operation.Result;

import java.math.BigDecimal;
import java.math.MathContext;

public class Sqrt extends Op{
    @Override
    public Result run() {
        Result res=new Result();
        if(this.operand1 != null) {
            if(this.operand1.compareTo(BigDecimal.ZERO)==-1){
                res.setError(Boolean.TRUE);
                res.setMessage("Error sqrt negative");
            }
            else{
            res.setResult(operand1.sqrt(new MathContext(10)));
            res.setError(Boolean.FALSE);}
        }

        return res;
    }
}
