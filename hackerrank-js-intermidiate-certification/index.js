// -------------------Activity----------
function Activity(amount) {
    this.amount = amount;
}

Activity.prototype.getAmount = function(){
    return this.amount;
}

Activity.prototype.setAmount = function(amount){
    if(amount <= 0)
        return false;
    
    this.amount = amount;
    return true;
}


// -------------payment----------------
function Payment(amount, receiver) {
    Activity.call(this,amount);
    this.receiver = receiver;
}
Payment.prototype = Object.create(Activity.prototype);

Payment.prototype.setReceiver = function(s){
    this.receiver = s;
}
Payment.prototype.getReceiver = function(){
    return this.receiver;
}


// ----------------Refund---------------
function Refund(amount, sender) {
    Activity.call(this,amount);
    this.sender =sender;
}
Payment.prototype = Object.create(Activity.prototype);

Refund.prototype.setSender = function(s){
    this.sender = s;
}
Refund.prototype.getSender = function(){
    return this.sender;
}

console.log('tttttttt--TEST--ttttttt')
let p = new Payment(190,'test');
console.log(p.getAmount());