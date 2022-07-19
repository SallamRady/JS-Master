// declaration
let btn0 = document.getElementById('btn0');
let btn1 = document.getElementById('btn1');
let btnClr = document.getElementById('btnClr');
let btnEql = document.getElementById('btnEql');
let btnSum = document.getElementById('btnSum');
let btnSub = document.getElementById('btnSub');
let btnMul = document.getElementById('btnMul');
let btnDiv = document.getElementById('btnDiv');
let res = document.getElementById('res');
let number1Str = '';
let number2Str = '';
let toggle = true;
let operationType = '';

// functionality
btn0.addEventListener('click',()=>{
    if(toggle){
        number1Str += '0';
    }else{
        number2Str += '0';
    }
    res.innerText +='0';
});
btn1.addEventListener('click',()=>{
    if(toggle){
        number1Str += '1';
    }else{
        number2Str += '1';
    }
    res.innerText +='1';
});

btnSum.addEventListener('click',()=>{
    toggle = !toggle;
    operationType = 'sum';
    res.innerText += '+';
});
btnSub.addEventListener('click',()=>{
    toggle = !toggle;
    operationType = 'sub';
    res.innerText += '-';
});
btnMul.addEventListener('click',()=>{
    toggle = !toggle;
    operationType = 'mul';
    res.innerText += '*';
});
btnDiv.addEventListener('click',()=>{
    toggle = !toggle;
    operationType = 'div';
    res.innerText += '/';
});

btnClr.addEventListener('click',()=>{
    res.innerText = '';
    number1Str='';
    number2Str ='';
    operationType = ''
})

btnEql.addEventListener('click',()=>{
    let number1 = parseInt(number1Str, 2);
    let number2 = parseInt(number2Str, 2);
    let result = 0;
    switch(operationType){
        case 'sum':
            result = number1+number2;
            break;
        case 'sub':
            result = number1-number2;
            break;
        case 'mul':
            result = number1*number2;
            break;
        default:
            result = number1/number2;
            break;
    }
    res.innerText = parseInt(result).toString(2);
    number1Str ='';
    number2Str ='';
    operationType='';
    toggle = true;
});
