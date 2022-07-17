//set strict mode
'use strict';

// declaration
let input = document.getElementById("input");
let result = document.getElementById("result");

// isPalindrome function used to check string is palindrome or not
function isPalindrome(str){
    let len = str.length;

    for(let i = 0,j=len-1;i < len ;i++,j--){
        if(str[i] != str[j])
            return false;
    }
    return true;
}

// handleClick is function used to handle click event
function handleClick(){
    let str = input.value;
    let len = str.length;

    if(len == 0){
        // null
        result.innerText = 'you should enter a string';
        result.style.color = 'red';
    }else{
        // valid way
        if(isPalindrome(str)){
            result.innerText = 'yes this string is palindrome';
            result.style.color = 'green';

        }else{
            result.innerText = 'no this string is not palindrome';
            result.style.color = 'red';
        }
    }
}