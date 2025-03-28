const observerHidden = new  IntersectionObserver((entries) => {
    entries.forEach((entry)=>{
        if(entry.isIntersecting){
            entry.target.classList.add('show');
        } else {
            entry.target.classList.remove('hidden');
        }
    })
})

const observerTiny = new  IntersectionObserver((entries) => {
    entries.forEach((entry)=>{
        if(entry.isIntersecting){
            entry.target.classList.add('tiny', 'show');
        } 
    })
})

const observerSlide = new  IntersectionObserver((entries) => {
    entries.forEach((entry)=>{
        if(entry.isIntersecting){
            entry.target.classList.add('slideInRight');
        }
    })
})

const hiddenElements = document.querySelectorAll('.hidden');
const tinyElements = document.querySelectorAll('.tiny');
const slideElements = document.querySelectorAll('.slide');

hiddenElements.forEach((el) => observerHidden.observe(el))
slideElements.forEach((el) => observerSlide.observe(el))
tinyElements.forEach((el) => observerTiny.observe(el))