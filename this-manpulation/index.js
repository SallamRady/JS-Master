// sloppy mode

let x = 101;

console.log('global scope ',this);//window

// normal function
function f1(){
    console.log('function f1',this.x,this);//window
}
f1();

let BMW = {
    model:'BMW 2022',
    color:'gray',
    price:300000,
    display:function(){
        console.log('from BMW Object',this);//refer to object
        console.log(this.model);
        console.log(this.color);
        console.log(this.price);
    }
}
BMW.display();

function Person(name){
    this.name = name;
    console.log(name,this);
}

let p1 = Person('Ali');//this refer to window
let p2 = new Person('Ahmed');//this refer to Object ['Ahmed]
