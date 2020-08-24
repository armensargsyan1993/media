const menu = document.querySelector('.nav__burger')
const searchIcon = document.querySelector('.icon-search')
const search = document.querySelector('.nav__search')
const wrapper = document.querySelector('.wrapper')
const navItems = document.querySelector('.nav__items')
// searchIcon.addEventListener('click',e => {
//     console.log(`object`);
// })

menu.addEventListener('click',e => {
        menu.classList.toggle('menu-click')
        wrapper.classList.toggle('wrapper-click')
        navItems.classList.toggle('nav-items-hide')

})
searchIcon.addEventListener('click', e => {
    search.classList.toggle('search-click')
})
