// Switch Theme with checkbox
const switcher = document.querySelector('input[name="theme-change"]');

const body = document.querySelector('.body');
switcher.addEventListener('click', function(event) {
    if(!event.target.classList.contains('dark-mode')) {
        body.classList.add('dark-mode');
        event.target.classList.add('dark-mode');
    } else {
        body.classList.remove('dark-mode');
        event.target.classList.remove('dark-mode');
    }
    
    });








 //Карусель в блоке Pets in zoo 

    const gap = 30;
const carousel = document.getElementById("carousel"),
  content = document.getElementById("content"),
  next = document.getElementById("next"),
  prev = document.getElementById("prev");

let n = 0;

function nextSlide() { //изменение блока слайдов и сообщение значения в скролл вперед
  carousel.scrollBy(width  , 0);
  n = Math.floor(carousel.scrollLeft /width)+2; //ширина пролистанного на ширину одного шага пролистывания
  if(n==0) {n=8};
  if(n==9) {n=1};
  if(n==10) {n=2};
  console.log(n);
elem.value = n;
    var newValue = elem.value;
    target.innerHTML =`0${newValue}`;
  if (content.scrollWidth - width - gap <= carousel.scrollLeft ) { 
    carousel.scrollLeft = 0;
  }
};
function prevSlide() {//изменение блока слайдов и сообщение значения в скролл назад
  carousel.scrollBy(-(width  ), 0);
  n = Math.floor(carousel.scrollLeft /width);//ширина пролистанного на ширину одного шага пролистывания
  if(n==0) {n=8};
  if(n==9) {n=1};
  if(n==10) {n=2};
  console.log(n);
  elem.value = n;
    var newValue = elem.value; 
    target.innerHTML =`0${newValue}`;
  if (carousel.scrollLeft  - gap <= 0) {//- width
    carousel.scrollLeft = carousel.scrollWidth;
  }
};


next.addEventListener("click", nextSlide);

prev.addEventListener("click", prevSlide);

let width = carousel.offsetWidth;
window.addEventListener("resize", e => (width )); //width= carousel.offsetWidth было

//изменение значения счестчика в Pets in zoo
var elem = document.querySelector('input[name="pets-range"]');
var target = document.querySelector('.pets-number');

var rangeValue = function(){
  
  if(+target.innerHTML < elem.value) {
    var newValue = elem.value;
    target.innerHTML =`0${newValue}`;
    carousel.scrollBy((width*(elem.value / +target.innerHTML)), 0);
  }
  else if (+target.innerHTML > elem.value) {
    var newValue = elem.value;
    target.innerHTML =`0${newValue}`;
    carousel.scrollBy(-(width*(+target.innerHTML /elem.value)), 0);
  }
   //if(newValue<Math.floor(carousel.scrollLeft /width)) {
    //carousel.scrollBy((-width  ), 0);
  //}
};

elem.addEventListener("input", rangeValue);
elem.addEventListener("change", rangeValue);


