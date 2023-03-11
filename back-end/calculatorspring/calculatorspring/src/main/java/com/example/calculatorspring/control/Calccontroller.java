package com.example.calculatorspring.control;

import com.example.calculatorspring.operation.Result;
import com.example.calculatorspring.operation.allop.*;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;
import java.math.BigDecimal;
@RestController
@RequestMapping("/api/v1")
@CrossOrigin
public class Calccontroller {

    @PostMapping("/sub")
    public Result sub(@RequestBody Sub operation) {
        Result result = new Result();
        if(operation != null) {
            result = this.doOperation(operation);
        }
        return result;
    }
    @PostMapping("/add")
    public Result add(@RequestBody Add operation) {
        Result result = new Result();
        if(operation != null) {
            result = this.doOperation(operation);
        }
        return result;
    }


    @PostMapping("/mult")
    public Result mult(@RequestBody Multiply operation) {
        Result result = new Result();
        if(operation != null) {
            result = this.doOperation(operation);
        }
        return result;
    }
    @PostMapping("/sqr")
    public Result sqr(@RequestBody Sqr operation) {
        Result result = new Result();
        if(operation != null) {
            result = this.doOperation(operation);
        }
        return result;
    }
    @PostMapping("/sqrt")
    public Result sqrt(@RequestBody Sqrt operation) {
        Result result = new Result();
        if(operation != null) {
            result = this.doOperation(operation);
        }
        return result;
    }

    @PostMapping("/trans")
    public Result trans(@RequestBody Transpose operation) {
        Result result = new Result();
        if(operation != null) {
            result = this.doOperation(operation);
        }
        return result;
    }
    @PostMapping("/precent")
    public Result precent(@RequestBody Precent operation) {
        Result result = new Result();
        if(operation != null) {
            result = this.doOperation(operation);
        }
        return result;
    }
    @PostMapping("/div")
    public Result div(@RequestBody Divide operation) {
        Result result = new Result();
        if(operation != null) {
            result = this.doOperation(operation);
        }
        return result;
    }


    private Result doOperation(Ioperation operation){
        Result result;
        result = operation.run();
        return result;
    }

}
