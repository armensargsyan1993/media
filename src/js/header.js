const menu = document.querySelector('.nav__menu')
const search = document.querySelector('.search')
menu.addEventListener('click',e => {
    console.log(`object`);
    menu.classList.toggle('menu-hover')
})