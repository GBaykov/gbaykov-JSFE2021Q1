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








    const gap = 30;

const carousel = document.getElementById("carousel"),
  content = document.getElementById("content"),
  next = document.getElementById("next"),
  prev = document.getElementById("prev");

next.addEventListener("click", function(e)  {
  carousel.scrollBy(width  , 0);
  if (carousel.scrollWidth !== 0) {
    prev.style.display = "flex";
  }
  if (content.scrollWidth - width - gap <= carousel.scrollLeft + width) {
    //next.style.display = "none";
    carousel.scrollBy(-(width  )*3, 0);
  }
});
prev.addEventListener("click", function(e) {
  carousel.scrollBy(-(width  ), 0);
  if (carousel.scrollLeft - width - gap <= 0) {
    //prev.style.display = "none";
    carousel.scrollBy((width  )*3, 0);
  }
  if (!content.scrollWidth - width - gap <= carousel.scrollLeft + width) {
    next.style.display = "flex";
  }
});

let width = carousel.offsetWidth;
window.addEventListener("resize", e => (width = carousel.offsetWidth));
