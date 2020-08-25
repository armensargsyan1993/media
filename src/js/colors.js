

let leftAside = document.querySelector('.left-aside')

leftAside.addEventListener('click', e => {
    let bigSlide = document.querySelector('.big__slide svg')
    if(e.target.tagName != 'SPAN') return
    bigSlide.style.fill = getComputedStyle(e.target).backgroundColor
    console.log(getComputedStyle(e.target).backgroundColor);
})
