const ham= document.querySelector('.ham');
const nav =document.querySelector('.navigation');
const logo =document.querySelector('.logo');
ham.addEventListener('click',()=>{
    ham.classList.toggle('active');
    nav.classList.toggle('active');
    logo.classList.toggle('active');

   

})