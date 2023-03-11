package com.example.calculatorspring.operation.allop;

import com.example.calculatorspring.operation.Result;

public class Sqr extends Op{
    @Override
    public Result run() {
        Result res=new Result();
        if(this.operand1 != null ) {
            res.setResult(operand1.pow(2));
            res.setError(Boolean.FALSE);
        }

        return res;
    }
}
