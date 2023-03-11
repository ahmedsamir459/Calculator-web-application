package com.example.calculatorspring.operation.allop;
import  com.example.calculatorspring.operation.Result;

public class Add extends Op {

    @Override
    public Result run() {
        Result res=new Result();
        if(this.operand1 != null && this.operand2 != null) {
            res.setResult(operand1.add(operand2));
            res.setError(Boolean.FALSE);
        }

        return res;
    }
}
