// set strict mode
'use strict';

function Person(name){
    this.name = name;
    console.log(name,this);
}

let p3 = new Person('Ahmed');//this refer to Object ['Ahmed]
//let p4 = Person('Ali');//this refer undefined ->error

