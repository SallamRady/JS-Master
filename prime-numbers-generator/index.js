// set strict mode
'use strict';

// declaration...
let input = document.getElementById("input");
let result = document.getElementById("result");
let span = document.createElement("span");

// isPrime function check if number is prime or not
function isPrime(number){
    if(number == 1) return false;

    for(let i = 2;i*i <= number;i++){
        if(number%i == 0)
            return false;
    }
    return true;
}
// function used to generate 
function generatePrimes(){
    let number = input.value;
    if(!number){
        // null
        result.innerText = "You should Enter a number";
        result.style.color = 'red';
    }else{
        //valid way
        let primeCounter = 0,count = 2;
        result.innerText = "";
        result.style.color = 'green';
        while(primeCounter != number){
            if(isPrime(count)){
                primeCounter++;
                result.innerText +=count;
                result.innerText +="-";
            }
            count++;
        }
    }
}
