package com.example.calculatorspring.operation.allop;
import com.example.calculatorspring.operation.Result;

import java.math.BigDecimal;
import java.math.RoundingMode;

public class Transpose extends Op {
    @Override
    public Result run() {
        Result res = new Result();
        if (this.operand1 != null) {
            if (this.operand1.equals(new BigDecimal(0))) {
                res.setError(Boolean.TRUE);
                res.setMessage("Error division by zero");
            } else {
                res.setResult(BigDecimal.ONE.divide(operand1,15, RoundingMode.HALF_DOWN));
                res.setError(Boolean.FALSE);
            }}
        return res;
    }
}