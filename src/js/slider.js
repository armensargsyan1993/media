let sliderContainer = document.querySelector('.slider-container')
let bigSlide = document.querySelector('.big__slide')
let slideArr = []
/*
надо создать массив
добавить в него firstChild перед удалением
и когда нажымаем стрелку вверх добавить обратно
и удалить из массива
*/
document.querySelector('.slider').onmousedown= ()=>{
    return false
}
document.querySelector('.slider').addEventListener('click', e => {
    // const count = 100;
     if(e.target.classList.contains('arrow-top')){
         
        //  sliderContainer.style.cssText = `transform:translateY(${parseInt(getComputedStyle(sliderContainer).transform.split(',')[5]) - count}px)`
        if(sliderContainer.children.length > 1){
            bigSlide.innerHTML = ''
            slideArr.push(sliderContainer.firstElementChild)
            bigSlide.append(sliderContainer.firstElementChild.nextElementSibling.cloneNode(true))
            sliderContainer.firstElementChild.remove()
            // console.log(slideArr);
            // console.log(slideArr);
            // console.log(slideArr.length);
            // console.log(document.querySelectorAll('.custom-class').length);
        }
     }
     if(e.target.classList.contains('arrow-bottom')){
        //  if(parseInt(getComputedStyle(sliderContainer).transform.split(',')[5]) >= 0){
        //      return
        //  }
        if(slideArr.length){
            bigSlide.innerHTML = ''
            let res = slideArr.pop()
            sliderContainer.prepend(res)
            bigSlide.append(res.cloneNode(true))
            // bigSlide.innerHTML = ''
            // let res = slideArr.pop()
            // console.log(res);
            
            // bigSlide.append(res)
            // sliderContainer.style.cssText = `transform:translateY(${parseInt(getComputedStyle(sliderContainer).transform.split(',')[5]) + count}px)`
            // console.log(slideArr.length);
            // console.log(document.querySelectorAll('.custom-class').length);
        }
    }
})


// for(let i = 0; i < 5; i++){
//     let elem = document.createElement('div')
//     let h = document.createElement('h1')
//     h.innerHTML = i
//     let color = `#${Math.round(Math.random()*10000)}`
//     elem.style.backgroundColor = color
//     elem.append(h)
//     elem.classList.add('custom-class')
//     sliderContainer.append(elem)
// }


