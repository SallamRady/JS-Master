let mongoose = require('mongoose');

let userSchema = mongoose.Schema({
    name:String,
    age:Number
});

let User = mongoose.model('user',userSchema);

module.exports = User;