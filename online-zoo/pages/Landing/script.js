// Switch Theme with checkbox
const switcher = document.querySelector('input[name="theme-change"]');
const map = document.querySelector('.map-img');


const body = document.querySelector('.body');

switcher.addEventListener('click', function(event) {
  
    if(!event.target.classList.contains('dark-mode')) {
        body.classList.add('dark-mode');
        event.target.classList.add('dark-mode');
        switcher.value = 2;
        map.src = '../../assets/images/MapWhite.png';
    } else {
        body.classList.remove('dark-mode');
        event.target.classList.remove('dark-mode');
        switcher.value = 1;
        map.src = '../../assets/images/Map.png';
    }
    });

//Карусель в блоке Watch your favorite

  
  const photoCor = document.querySelector('.favorite__photoes');
  const favRange = document.querySelector('input[name="galary"]');
 //const galItems = document.querySelectorAll('.favorite__animal');
 const firstCount = document.querySelector('.number-favorite');
 
  const galItems = photoCor.querySelectorAll('.favorite__animal');
  const galPhot = photoCor.querySelectorAll('.animals-gallery');

  photoCor.addEventListener('click', e =>  {
    if (e.target.dataset.index !== undefined) {
      //galPhot[e.target.dataset.index].classList.add('passive');
      let count = e.target.dataset.index;
      favRange.value = e.target.dataset.index;
      firstCount.innerHTML = `0${count}/08`;
      //alert(e.target.classList);
      e.target.classList.add('active');
      //alert(e.target.width);
      //if(e.target.classList.contains('passive')) {
       // e.target.classList.remove('passive');
      //};
      setPosition(parseInt(e.target.dataset.index));
    }
  }); 

  favRange.addEventListener('input', e =>  {
    let count = favRange.value;
    firstCount.innerHTML = `0${count}/08`;
    setPosition(parseInt(e.target.value));
  }); 

  function setPosition(index) { //функция перелистывания картинок
    galItems.forEach((div) => {
      if (div.classList.contains('active')) {
        div.classList.remove('active');
      }
      const divWidth = div.offsetWidth + parseInt(getComputedStyle(div).marginRight);//parseInt мжно вместо +
      
      div.style.transform = `translateX(${-(index -2) * divWidth}px)`;
      
    });
  };


//Карусель в блоке Watch your favorite КОНЕЦ































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





