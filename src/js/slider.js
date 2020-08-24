let sliderContainer = document.querySelector('.slider-container')
document.querySelector('.slider').addEventListener('click', e => {
     if(e.target.classList.contains('arrow-top')){
         sliderContainer.style.cssText = `transform:translateY(-100px)`
     }
})