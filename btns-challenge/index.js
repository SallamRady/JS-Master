// declaration
let btn1 = document.getElementById('btn1');
let btn2 = document.getElementById('btn2');
let btn3 = document.getElementById('btn3');
let btn4 = document.getElementById('btn4');
let btn5 = document.getElementById('btn5');
let btn6 = document.getElementById('btn6');
let btn7 = document.getElementById('btn7');
let btn8 = document.getElementById('btn8');
let btn9 = document.getElementById('btn9');

let grid = [1,2,3,6,9,8,7,4];
let ids =[btn1,btn2,btn3,btn6,btn9,btn8,btn7,btn4];

btn5.addEventListener('click',()=>{
    let last = grid.pop();
    grid.unshift(last);
    ids.forEach((element,index)=>{
        element.innerText = grid[index];
    })
})