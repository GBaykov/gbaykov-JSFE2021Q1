import { createElement } from '../../shared/add-element';

export const makeHeader = () => {
  const html = `
  <div clas="header-wrapper">
    <div class="menu-bar">
        <span class="menu-bar-span"></span>
    </div>

    <div class="game-switcher">
      <label  class="toggleSwitch large">
      <input class="mode" id="but" type="checkbox" checked >
      <span class="mode">
        <span class="">PLAY</span>
        <span class="">TRAIN</span>
      </span>
      <a></a>
</label>
    </div>
  </div>
  `;
  createElement('header', 'header', html, 'body');
};
