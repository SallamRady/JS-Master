// set strict mode
'use strict';
// declaration
const POSTS_URL = 'https://jsonplaceholder.typicode.com/posts/1';

function getDate(method,url,body = null){
    return new Promise((resolve,reject)=>{
        const xml = new XMLHttpRequest();
        xml.open(method,url);
        xml.send(body);

        xml.onreadystatechange = ()=>{
            
            if(xml.readyState == 4 && xml.status == 200){
                resolve(JSON.parse(xml.response))
            }
        }
    });
}

getDate('GET',POSTS_URL).then(data=>console.log(data));