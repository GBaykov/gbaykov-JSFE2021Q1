
//Приминение CSS фильтра, код из видео,но с input
const inputs = document.querySelectorAll('input');
function handleUpdate() {
  const suffix = this.dataset.sizing || '';
  document.documentElement.style.setProperty(`--${this.name}`, this.value + suffix); 
}

inputs.forEach(input => input.addEventListener('input', handleUpdate)); //на событие инпут применяются фильтры


//Передача в output-ы числовых свойств input-ов
// const outputs = document.querySelectorAll('output');//пока не пригодилось
inputs.forEach(input => input.addEventListener('input', ()=> { 
  input.nextElementSibling.value = input.value;//присвоение
}));



//СМЕНА КАРТИНКИ

const base = 'https://raw.githubusercontent.com/rolling-scopes-school/stage1-tasks/assets/images/';
const images = ['01.jpg', '02.jpg', '03.jpg', '05.jpg', '06.jpg', '07.jpg', '08.jpg', '09.jpg', '10.jpg', '11.jpg', '12.jpg', '13.jpg', '14.jpg', '15.jpg', '16.jpg', '17.jpg', '18.jpg', '19.jpg', '20.jpg'];
let i = 0;
const body = document.querySelector('body');
const btn = document.querySelector('.btn-next');
let image = document.getElementById("main-img");


let partOfDay = '' //функция определения части дня
let partOfDayF = function() {
let date = new Date();
if(date.getHours() >= 6 && date.getHours() < 12) {
return partOfDay ='morning';
}
else if(date.getHours() >= 12 && date.getHours() < 18) {
return partOfDay ='day';
}
else if(date.getHours() >= 18 && date.getHours() < 24) {
return partOfDay ='evening';
}
else if(date.getHours() >= 0 && date.getHours() < 6) {
return partOfDay ='night';
}
}


function viewBgImage(src) {  
const img = new Image();
img.src = src;
img.onload = () => {   
image.src = '';   
image.src =  `${src}`
}; 
}

function getImage() {
const index = i % images.length;
const imageSrc = base + `${partOfDayF()}/`+ images[index];
viewBgImage(imageSrc);
i++;
btn.disabled = true;
setTimeout(function() { btn.disabled = false }, 1000);
} 

btn.addEventListener('click', getImage);




//ЗАГРУЗКА IMG С КОМПА
const fileInput = document.querySelector('input[type="file"]');
const imageContainer = document.querySelector('.image-container');


fileInput.addEventListener('change', function(e) {
const file = fileInput.files[0];
const reader = new FileReader();
reader.onload = () => {
//const imgIm = new Image();
//imgIm.src = reader.result;
image.src = '';  
image.src =  reader.result;
//image.innerHTML = "";
//image.append(imgIm);
}
reader.readAsDataURL(file);

});





//работа с RESET

const btnRes = document.querySelector('.btn-reset');
btnRes.addEventListener('click', resFilters);

function resFilters() {
inputs.forEach(input => {
// img.style.cssText = ""; совет в чате (не получилось)


//if(input.name == 'saturate'){
 // input.value = 100;
//} else {
 // input.value = 0;
//};    то же самое, что и следующая строка, но длиннее
input.value = input.dataset.def;
input.nextElementSibling.value = input.value;

const suffix = this.dataset.sizing || '';
document.documentElement.style.setProperty(`--${input.name}`, 0 + suffix); 

if(input.name === 'saturate') {
  const suffix = this.dataset.sizing || '';
document.documentElement.style.setProperty(`--${input.name}`, 1 + suffix); // костыль, потому что saturate ведет себя странно. При 0 - все чернобелое(как 0), при нужных 100 - все слишком неадекватно. Возможно 1 = 100%
}
});
}


//  добавление fullscreen  через запрос как в virtual-piano, KISS
let toggleScreen = function () {
if (document.fullscreenElement === null) {
  document.documentElement.requestFullscreen()
} else if (document.fullscreenEnabled )  document.exitFullscreen();
}
document.querySelector('.fullscreen').addEventListener('click',toggleScreen);



//СОХРАНЕНИЕ, СКАЧИВАНИЕ
const canvas = document.querySelector('canvas');
const download = document.getElementById('btn-save');

function drawImage() {
const imgCont = document.querySelector('img');
const img = new Image();
img.setAttribute('crossOrigin', 'anonymous'); 
img.src = imgCont.src;
img.onload = function() {
  let cof = 0;
 
  canvas.width = img.width;
  canvas.height = img.height;
  const ctx = canvas.getContext("2d");
  
const blur = document.querySelector('input[name="blur"]');

if(canvas.width>canvas.height) {
  cof = canvas.width / imgCont.width;
} else {
  cof = canvas.height / imgCont.height;
}

let blurVal = blur.value * (cof); //до этого был *3 
//  Math.floor делает размытие слабее!

const invert = document.querySelector('input[name="invert"]');
  let invertVal = invert.value;
const sepia = document.querySelector('input[name="sepia"]');
  let sepiaVal = sepia.value;
const saturate = document.querySelector('input[name="saturate"]');
  let saturateVal = saturate.value;
const hue = document.querySelector('input[name="hue"]');
  let hueVal = hue.value;
let filterForCanvas = `blur(${blurVal}px) invert(${invertVal}%) sepia(${sepiaVal}%) saturate(${saturateVal}%) hue-rotate(${hueVal}deg)`;

ctx.filter = filterForCanvas;


  console.log(`${filterForCanvas}`); console.log(ctx.filter);
  
  ctx.drawImage(img, 0, 0);

  var link = document.createElement('a');
  link.download = 'download.png';
  link.href = canvas.toDataURL();
  link.click();
  link.delete;
};    
}
download.addEventListener('click', function(e) {
drawImage();
//console.log(canvas.toDataURL());

});