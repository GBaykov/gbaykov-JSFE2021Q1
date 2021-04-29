// Switch Theme with checkbox
const switcher = document.querySelector('input[name="theme-change"]');
const switchTheme = (e) => {
    if(e.target.checked) {
        document.body.classList.add('dark-mode');
    } else {
        document.body.classList.remove('dark-mode');
    }
}
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