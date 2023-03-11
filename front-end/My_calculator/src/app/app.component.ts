import { Component, OnInit } from '@angular/core';
import { ApiserveService } from './apiserve.service';
import { HttpClient } from '@angular/common/http';
import { result } from './result';
import { environment } from 'src/environments/environment';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent  {
  

  constructor(private calc : ApiserveService,private http: HttpClient) { }
  firstValue : boolean= false;
  
  pointInsertedOperator1 : boolean = false;
  pointInsertedOperator2 : boolean = false;
  respress : boolean = false;
  disall: boolean = false;
  operationSelected : boolean = false;
  displayedValue : string = '0';
  displayedValue1 : string = '';
  errorMessage: string='';
  nsign:boolean = true;
  psy: String=''
  operator1 : string = '0';
  operator2 : string = '';
  operation : string='';
  soperation :string="";
  ngOnInit() {
  }
  
  
  click(numberInput: string){

    if(this.firstValue==false){
      this .firstValue=true;
      this.displayedValue=this.displayedValue.substring(0,0);
    }
    if(this.displayedValue!='0')this.displayedValue = this.displayedValue.concat(numberInput);
  }
  sign(){
    
      if(this.displayedValue[0]!='-')
      this.displayedValue='-'+this.displayedValue;
      else  this.displayedValue=this.displayedValue.substring(1,this.displayedValue.length);
  }
  del(){
    if(this.displayedValue[this.displayedValue.length-1]=='.'){
      this.pointInsertedOperator1 = false;
    this.pointInsertedOperator2 = false;
    }
    if(this.displayedValue.length>1){
    this.displayedValue=this.displayedValue.substring(0,this.displayedValue.length-1);}
    else if(this.displayedValue.length>0){this.displayedValue='0';
    this.firstValue=false;}
  }

 setOperation(operation: string, symbol: string){
    this.psy=operation; 
    if(this.respress==true){
      this.soperation=symbol;
      this.operation = operation;
      this.displayedValue1=this.displayedValue+symbol;
      this.operator1=this.displayedValue;
      this.displayedValue='';
      this.operationSelected = true;
      this.respress=false;

    }
    if(this.soperation!=symbol&&this.soperation!=''){
      this.soperation=symbol;
      this.operation = operation;
      this.displayedValue1=this.displayedValue1.substring(0,this.displayedValue1.length-1)+symbol;
      this.operator1=this.operator1;
      this.displayedValue='';
      this.operationSelected = true;
      console.log('not equal')
      console.log(this.operator1)
      console.log(this.operator2)
    }
    else if(this.soperation=='') {
      this.soperation=symbol;
      this.operation = operation;
      this.displayedValue1=this.displayedValue+symbol;
      this.operator1=this.displayedValue;
      this.displayedValue='';
      this.operationSelected = true;
      console.log(this.operator1)
      console.log(this.operator2) 
    }
    else{
      this.operation = operation;
      this.displayedValue1=this.displayedValue1;
      this.operator1=this.operator1;
      this.displayedValue='';
      this.operationSelected = true;
      console.log(this.operator1)
      console.log(this.operator2)
    }
  }

  delete(){
    this.operator1 = '0';
    this.operator2 = '';
    this.firstValue = false;
    this.respress= false;
    this.operation = '';
    this.errorMessage = '';
    this.displayedValue = '0';
    this.displayedValue1='';
    this.pointInsertedOperator1 = false;
    this.pointInsertedOperator2 = false;
    this.operationSelected = false;
    this.soperation=''
  }

  insertPoint(){
    if(this.operation == ''){
      this.pointInsertedOperator1 = true;
      this.displayedValue = this.displayedValue.concat('.');
      this.operator1 = this.operator1.concat('.');
    }else{
      this.pointInsertedOperator2 = true;
      this.displayedValue = this.displayedValue.concat('.');
      this.operator2 = this.operator2.concat('.');
    }
  }
  unioperation(operation: string, symbol: string){
    this.respress=true;
    this.soperation=symbol;
    this.operation = operation;
    this.operator1=this.displayedValue;
    this.operationSelected = true;
    if(this.operation=='trans'){
      this.displayedValue1='1'+this.soperation+this.displayedValue;
    }
    else if(this.operation=='sqrt'){
      this.displayedValue1=this.soperation+this.displayedValue;
    }
    else{
      this.displayedValue1=this.displayedValue+this.soperation;
    }
    this.calc.doOperation(Number.parseFloat(this.operator1),Number.parseFloat(this.operator2),this.operation).subscribe(
           res=>{
            if(!res.error)
            this.displayedValue=res.result.toString();
            else{
              this.displayedValue="ERROR";
              this.errorMessage=res.message
            }
          });

  }
  result(){
    if(this.respress==false){
      this.respress=true;
    if(this.operation!=''){
    this.operator2=this.displayedValue;
    this.displayedValue1=this.displayedValue1+this.displayedValue+'=';
    this.calc.doOperation(Number.parseFloat(this.operator1),Number.parseFloat(this.operator2),this.operation).subscribe(
      res=>{
        if(!res.error)
        this.displayedValue=res.result.toString();
        else{
          this.displayedValue="ERROR";
          this.errorMessage=res.message
          
        }
      }
      );}
      else{this.displayedValue=this.displayedValue;}
      }
  }

  pointDisable(){
    if(this.operation == ''){
      
      return this.pointInsertedOperator1;}
    else{
      
      return this.pointInsertedOperator2;
    }
  }
  disableall(){
    if(this.errorMessage!=''){
      this.respress=true;
      this.pointInsertedOperator1=true;
      this.pointInsertedOperator2=true;
      return true;
    }
    return false;
  }
}
