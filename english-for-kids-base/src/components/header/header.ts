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
    <div class="game-switcher">
      <label  class="toggleSwitch large" onclick="setColor()">
      <input id="but" type="checkbox" checked >
      <span>
        <span>PLAY</span>
        <span>TRAIN</span>
      </span>
      <a></a>
</label>
    </div>
  </div>
  `;
  createElement('header', 'header', html, 'body')
}
