const burgerFunction = document.querySelector('.burger-button');
burgerFunction.addEventListener('click', function() {
    let container = document.querySelector('.container-responsive-menu');
    container.style.display = "flex";
    let body = document.querySelector('body');
    body.classList.add('overflow');
})

const closeFunction = document.querySelector('.close-burger');
closeFunction.addEventListener('click', function() {
    let container = document.querySelector('.container-responsive-menu');
    container.style.display = 'none';
    let body = document.querySelector('body');
    body.classList.remove('overflow');
})