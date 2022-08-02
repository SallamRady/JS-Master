const http = require('http');

// create server
const server = http.createServer((req,res)=>{
    res.setHeader('Content-Type', 'text/html; charset=UTF-8');
    if(req.url == '/'){
        res.write('Home page');
    }else if(req.url == '/about'){
        res.write('About page');
    }else if(req.url == '/msg'){
        if(req.method === 'GET'){
            res.write('<form action="/msg" method="post">')
            res.write('<input type="test" name="msg"/>');
            res.write('<input type="submit" value="Submit"/>');
            res.write('</form>')
            res.end();
        }else if(req.method === 'POST'){
            let body = [];
            req.on('data',(chunk)=>{
                body.push(chunk);
            });
            req.on('end',()=>{
                // convert body [chunks] to 
                body = Buffer.concat(body).toString().split('=');
                console.log(body[1]);
                res.end('done');
            })
        }
    }else{
        res.write('Not Found');
    }
});


// listen to comming requests
server.listen(3000,()=>console.log('Server is listenning....'));