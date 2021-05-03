// Switch Theme with checkbox
const switcher = document.querySelector('input[name="theme-change"]');
const map = document.getElementById('map-img');


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



//карусель иконок в MAP

   
    const icoCor = document.querySelector('.animal-hiden-wrap');
    const icoRange = document.querySelector('input[name="ico-range"]');
   //const galItems = document.querySelectorAll('.favorite__animal');
   const firstCount = document.querySelector('.number');
    const galItems = icoCor.querySelectorAll('.ani-ico');
    
  
    icoCor.addEventListener('click', e =>  {
        for(let i = 0; i <galItems.length; i++) {
            galItems[i].classList.remove('activ-icon');
        };  
      if (e.target.dataset.index !== undefined) {
        let count = e.target.dataset.index;
        icoRange.value = e.target.dataset.index;
        firstCount.innerHTML = `0${count}/08`;
        e.target.classList.add('activ-icon');
        //if(e.target.dataset.index > 5) {
          //  setPosition(parseInt(e.target.dataset.index));
       // }
      }
    }); 
  
    icoRange.addEventListener('input', e =>  {
      let count = icoRange.value;
      firstCount.innerHTML = `0${count}/08`;
      //if(e.target.value > 5) {
        //setPosition(parseInt(e.target.value));
    //};
      //
      for(let i = 0; i <galItems.length-1; i++) {
        galItems[i].classList.remove('activ-icon');
    };galItems[count-1].classList.add('activ-icon');
    }); 
  
    function setPosition(index) { //функция перелистывания картинок
      galItems.forEach((ico) => {
        
        if (ico.classList.contains('active')) {
          ico.classList.remove('active');
        }
        const icoWidth = ico.offsetWidth + parseInt(getComputedStyle(ico).marginRight);//parseInt мжно вместо +
        
        ico.style.transform = `translateX(${-(index -2) * icoWidth}px)`;  
      }); //alert(galItems[0]); 
    };
   


const left = document.querySelector('.left');
const right = document.querySelector('.right');

right.addEventListener('click', e =>  {

    for(let i = 0; i <galItems.length-1; i++) {
        if(galItems[i].classList.contains('activ-icon')){
            galItems[i].classList.remove('activ-icon');
            galItems[i+1].classList.add('activ-icon');
            i++;
            if(i==8) {
                galItems[i].classList.remove('activ-icon');
                galItems[0].classList.add('activ-icon');
                continue;
                
            };  
            icoRange.value = i + 1;
            if(icoRange.value == 9) icoRange.value = 0;
            let count = icoRange.value;
            firstCount.innerHTML = `0${count}/08`;
        };   
    };  
}); 
left.addEventListener('click', e =>  {

    for(let i = galItems.length-1; i >0; i--) {
        if(galItems[i].classList.contains('activ-icon')){
            galItems[i].classList.remove('activ-icon');
            galItems[i-1].classList.add('activ-icon');
            i--;
            if(i<1) {
                galItems[i].classList.remove('activ-icon');
                galItems[0].classList.add('activ-icon');
                continue;
                
            };  
            icoRange.value = i + 1;
            if(i === 0) icoRange.value = 9;
            let count = icoRange.value;
            firstCount.innerHTML = `0${count}/08`;
        };   
    };  
}); 





//карусель иконок в MAP КОНЕЦ



