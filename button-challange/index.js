let btn = document.getElementById('btn');

btn.addEventListener('click',(e)=>{
    let val = parseInt(btn.innerText);
    btn.innerText = (val+1)
})