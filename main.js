const login = document.querySelector('.login-box');
const loginlink = document.querySelector('.login-link');
const registerlink = document.querySelector('.register-link');
const btnpop = document.querySelector('.login-btn');
const btnclose = document.querySelector('.icon-close');
const btnon = document.querySelector('.on');
const btnoff1 = document.querySelector('.temp-1');
const btnoff2 = document.querySelector('.temp-2');
const btnoff3 = document.querySelector('.temp-3');
const btnoff4 = document.querySelector('.temp-4');
const explore = document.querySelector('.explore');

registerlink.addEventListener('click',()=>{
    login.classList.add('active');
});


loginlink.addEventListener('click',()=>{
    login.classList.remove('active');
});


btnpop.addEventListener('click',()=>{
    login.classList.add('active-pop');
});


btnclose.addEventListener('click',()=>{
    login.classList.remove('active-pop');
});

btnon.addEventListener('click',()=>{
    explore.classList.add('pop');
});

btnoff1.addEventListener('click',()=>{
    explore.classList.remove('pop');
});

btnoff2.addEventListener('click',()=>{
    explore.classList.remove('pop');
});

btnoff3.addEventListener('click',()=>{
    explore.classList.remove('pop');
});

btnoff4.addEventListener('click',()=>{
    explore.classList.remove('pop');
});


const fcont=document.querySelectorAll(".f-cont");

fcont.forEach(fcont=>{
    fcont.addEventListener("click",()=>{
        fcont.classList.toggle("f-active");
    })
})