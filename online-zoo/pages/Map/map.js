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
