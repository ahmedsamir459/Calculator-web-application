package com.example.calculatorspring.operation.allop;

import com.example.calculatorspring.operation.Result;

public class Sub extends Op {

    @Override
    public Result run() {
        Result res=new Result();
        if(this.operand1 != null && this.operand2 != null) {
            res.setResult(operand1.subtract(operand2));
            res.setError(Boolean.FALSE);
        }

        return res;
    }
}
