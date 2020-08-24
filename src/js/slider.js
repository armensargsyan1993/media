let sliderContainer = document.querySelector('.slider-container')
let bigSlide = document.querySelector('.big__slide')
/*
надо создать массив
добавить в него firstChild перед удалением
и когда нажымаем стрелку вверх добавить обратно
и удалить из массива
*/

document.querySelector('.slider').addEventListener('click', e => {
    bigSlide.innerHTML = ''
    const count = 100;
    const slides = document.querySelectorAll('.custom-class')
    bigSlide.append(slides[0])
     if(e.target.classList.contains('arrow-top')){
         sliderContainer.style.cssText = `transform:translateY(${parseInt(getComputedStyle(sliderContainer).transform.split(',')[5]) - count}px)`
         bigSlide.append(sliderContainer.firstElementChild)
         sliderContainer.firstElementChild.remove()
         console.log(document.querySelectorAll('.custom-class').length);
     }
     if(e.target.classList.contains('arrow-bottom')){
         if(parseInt(getComputedStyle(sliderContainer).transform.split(',')[5]) >= 0){
             return
         }
        sliderContainer.style.cssText = `transform:translateY(${parseInt(getComputedStyle(sliderContainer).transform.split(',')[5]) + count}px)`
    }
})


// for(let i = 0; i < 100; i++){
//     let elem = document.createElement('div')
//     let color = `#${Math.round(Math.random()*10000)}`
//     elem.style.backgroundColor = color
//     elem.classList.add('custom-class')
//     sliderContainer.append(elem)
// }
