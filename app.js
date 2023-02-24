const calculrator={
    plus:function(a, b){
       console.log("hello");
        return a+b;
        console.log("byebye");
    },
    minus:function(a, b){
       return a-b;
    },
    times:function(a, b){
       return a*b;
    },
    divide:function(a, b){
       return a/b;
    },
    super:function(a, b){
       return a**b;
    }
}

const plusResult = calculrator.plus(2, 3);
const minusResult = calculrator.minus(plusResult, 10);
const timesResult = calculrator.times(10, minusResult);
const divideResult = calculrator.divide(timesResult, plusResult);
const superResult = calculrator.super(divideResult, minusResult);
