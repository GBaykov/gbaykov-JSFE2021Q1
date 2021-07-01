// <div class="game-switcher">
//     <input type="range">

import { createElement } from "../../shared/add-element";

//   </div>
export const makeHeader = () => {
  const html = `
  <div clas="header-wrapper">
    <div class="menu-bar">
        <span class="menu-bar-span"></span>
    </div>
    <div class="game-switcher mode">
      <label  class="toggleSwitch large mode">
      <input class="mode" id="but" type="checkbox" checked >
      <span class="mode">
        <span class="mode">PLAY</span>
        <span class="mode">TRAIN</span>
      </span>
      <a></a>
</label>
    </div>
  </div>
  `;
  createElement('header', 'header', html, 'body')
}
