var target = document.querySelector('#target');
var burger = document.querySelector('#burger');

burger.addEventListener('click',()=>{
    target.classList.toggle('is-active');
})

