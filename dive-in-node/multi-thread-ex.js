const crypto = require('crypto');
const pdkdf2 = crypto.pbkdf2;

const start = Date.now();

pdkdf2('pass','salt',1000000,30,'sha256',()=>{
    console.log('task 1 take :',Date.now()-start,' ms');
});

pdkdf2('pass','salt',100000,30,'sha256',()=>{
    console.log('task 2 take :',Date.now()-start,' ms');
});