
// menu button
let openBtn = document.querySelector('#open');
let closeBtn = document.querySelector('#close');

openBtn.addEventListener('click', (e)=>{
    if(e.target.id === "open"){
        openBtn.style.display = "none";
        closeBtn.style.display = "block";
    }
})
closeBtn.addEventListener('click', (e)=>{
    if(e.target.id === "close"){
        openBtn.style.display = "block";
        closeBtn.style.display = "none";
    }
})
