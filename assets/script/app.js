
// menu button
let openBtn = document.querySelector('#open');
let closeBtn = document.querySelector('#close');
let navLinks = document.querySelector("#nav-links");

openBtn.addEventListener('click', (e)=>{
    if(e.target.id === "open"){
        openBtn.style.display = "none";
        closeBtn.style.display = "block";
        navLinks.style.opacity = '1';
        navLinks.style.transform = "scale(1)"
    }
})
closeBtn.addEventListener('click', (e)=>{
    if(e.target.id === "close"){
        openBtn.style.display = "block";
        closeBtn.style.display = "none";
        navLinks.style.opacity = "0";
        navLinks.style.transform = "scale(0)"
    }
})
