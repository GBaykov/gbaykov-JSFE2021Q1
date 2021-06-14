import { getCar, getCars, getCarsCount } from "../../api";
import store from "../../store";

import { renderWinners } from "../winners-page/winners";
let car:any;

export const renderCarImage = (color:string) => `
<svg version="1.1" id="Capa_1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink " x="0px" y="0px"
	 viewBox="0 0 32 32" style="enable-background:new 0 0 32 32;" xml:space="preserve">
<g>
	<g>
		<path style="fill:${color}" d="M28,13l-4-4H12l-2,4L0,15v6h4c0,0,0-4,4-4c0,0,4,0,4,4h9c0,0,0-4,4-4c0,0,4,0,4,4h3v-6L28,13z"/>
		<circle style="fill:#010002;" cx="8" cy="21" r="2"/>
		<circle style="fill:#010002;" cx="25" cy="21" r="2"/>
	</g>
</g>
<g>
</g>
<g>
</g>
<g>
</g>
<g>
</g>
<g>
</g>
<g>
</g>
<g>
</g>
<g>
</g>
<g>
</g>
<g>
</g>
<g>
</g>
<g>
</g>
<g>
</g>
<g>
</g>
<g>
</g>
</svg>
`;
// style="fill:${color}"



export const renderCar = ({
  id, name, color, isEngineStarted,
}:{id:number, name:string, color:string, isEngineStarted:boolean}) => `
<div class ="general-buttons">
    <button class = "button select-button" id="select-car-${id}">Select</button>
    <button class = "button remove-button" id="remove-car-${id}">Remove</button>
    <span class="car-name">${name}</span>
    </div>

<div class ="road">
  <div class ="launch-pad">
    <div class = "control-panel">
      <button class = "icon start-engine-button" id="start-engine-car-${id}" ${isEngineStarted ? 'disbled' : ''}>Start</button>
      <button class = "icon stop-engine-button" id="stop-engine-car-${id}" ${!isEngineStarted ? 'disbled' : ''}>Stop</button>
    </div>
    <div class ="car" id="car-${id}">
    ${renderCarImage(color)}
    </div>
  </div>
  <div class="flag" id="flag-${id}">T</div>
</div>
`;



export const carDef = {
  id: 1, name: 'Car', color: 'rgb(43, 231, 115)', isEngineStarted: false,
};
let li = `<li>${renderCar(carDef)}</li>`

export const renderGarage = async () => `
  <p>Garage (${await getCarsCount(1)})</p>
  <p>Page #</p>
  <ul class="garage">
  ${await getCars(1).then((res) => res.map((car) =>
    `<li>${renderCar(car)}</li>`
    ).join(''))}
  </ul>
`;

// TO DO: MAKE WINNERS PAGE(renderWinners)


export const render = async () => {
  const html = `
    <div class="menu">
      <button class="button garage-menu-button" id="garage-menu">To garage</bytton>
      <button class="button winners-menu-button" id="winners-menu">To winners</bytton>
    </div>
    <div id="garage-view">
      <div>
        <form class="form" id="create">
          <input class="input" id="create-name" name="name" type="text">
          <input class="color" id="create-color" name="color" type="color" value="#ffffff">
          <button class="button" type="submit">Create</button>
        </form>
        <form class="form" id="update">
          <input class="input" id="update-name" name="name" type="text" disabled>
          <input class="color" id="update-color" name="color" type="color" value="#ffffff" disabled>
          <button class="button" type="update-submit" >Update</button>
        </form>
      </div>
      <div class="race-controls">
        <button class="button race-button" id="race">Race</button>
        <button class="button reset-button" id="reset">Reset</button>
        <button class="button generator-button" id="generator">Generate</button>
      </div>
      <div id="garage">
      ${await renderGarage()}
      </div>
      <div>
        <p class="message" id="message"></p>
      </div>
    </div>
    <div id="winners-view" class="displayNone">
    ${renderWinners()}
    </div>
    <div class="pagination">
      <button class="button prev-button" disabled id="prev">Prev</button>
      <button class="button next-button" disabled id="next">Next</button>
    </div>
    `;
  const root = document.createElement('div');
  root.innerHTML = html;
  document.body.appendChild(root);
};
