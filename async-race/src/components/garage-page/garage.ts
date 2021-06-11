
export const renderCarImage = (color:string) => `
<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><defs>
<style>.cls-1{fill:#fff;opacity:0;}.cls-2{fill:#231f20;}</style></defs><title>car</title><g id="Layer_2" data-name="Layer 2"><g id="car"><g id="car-2" data-name="car"><rect class="cls-1" width="24" height="24"/>
<path class="cls-2" d="M21.6,11.22,17,7.52V5a1.91,1.91,0,0,0-1.81-2H3.79A1.91,1.91,0,0,0,2,5V15A2,2,0,0,0,3.2,16.88,3,3,0,1,0,8.8,17h6.36a3,3,0,1,0,5.64,0H21a1,1,0,0,0,1-1V12A1,1,0,0,0,21.6,11.22ZM20,12.48V15H17V10.08ZM7,18a1,1,0,1,1-1-1A1,1,0,0,1,7,18Zm12,0a1,1,0,1,1-1-1A1,1,0,0,1,19,18Z"/></g></g></g></svg>
`;

export const renderCar = ({id, name, color, isEngineStarted}:{id:number, name:string, color:string, isEngineStarted:boolean}) => `
<div class ="general-buttons">
    <button class = "button select-button" id="select-car-${id}">Select</button>
    <button class = "button remove-button" id="remove-car-${id}">Remove</button>
</div>

<div class ="road">
  <div class ="launch-pad">
    <div class = "control-panel">
      <button class = "icon start-engine-button" id="start-engine-car-${id}" ${!isEngineStarted? 'disbled': ''}>A</button>
      <button class = "button stop-engine-button" id="stop-engine-car-${id}" ${!isEngineStarted? 'disbled': ''}>B</button>
    </div>
    <div class ="car" id="car-${id}">
        ${renderCarImage(color)}
    </div>
  </div>
  <div class="flag" id="flag-${id}">T</div>
</div>
`;

