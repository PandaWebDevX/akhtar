const ham= document.querySelector('.ham');
const nav =document.querySelector('.navigation');
const logo =document.querySelector('.logo');
const tem =document.querySelector('.template');
const body =document.querySelector('.body');
ham.addEventListener('click',()=>{
    ham.classList.toggle('active');
    nav.classList.toggle('active');
    logo.classList.toggle('active');
    tem.classList.toggle('active');
    body.classList.toggle('active');

   

})