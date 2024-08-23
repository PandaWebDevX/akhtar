const ham =document.querySelector('.ham');
const barf = document.querySelector('.bar-1');
const barm = document.querySelector('.bar-2');
const barl = document.querySelector('.bar-3');
const nav =document.querySelector('.nav');
const slide =document.querySelector('.slide');

ham.addEventListener('click',()=>{
    barf.classList.toggle('active');
    barm.classList.toggle('active');
    barl.classList.toggle('active');
    ham.classList.toggle('active');
    nav.classList.toggle('active');
    slide.classList.toggle('active');

})