import { createElement } from '../../shared/add-element';
// <div class="menu-bar">
//         <span class="menu-bar-span"></span>
//       </div>
export const makeMenu = () => {
  const html = `
      <div class="menu" id="menu">
        <ul>
          <li id="menu-cat-10" class="active_menu menu-element">Main Page</li>
          <li id="menu-cat-0" class="menu-element">Action (set A)</li>
          <li id="menu-cat-1" class="menu-element">Action (set B)</li>
          <li id="menu-cat-2" class="menu-element">Animal (set A)</li>
          <li id="menu-cat-3" class="menu-element">Animal (set B)</li>
          <li id="menu-cat-4" class="menu-element">Clothes</li>
          <li id="menu-cat-5" class="menu-element">Emotion</li>
          <li id="menu-cat-6" class="menu-element">Drinks</li>
          <li id="menu-cat-7" class="menu-element">Food</li>
          <li class="statistics menu-element" id="statistics">Statistics</li>
        </ul>
      </div>
  `;
  createElement('nav', 'nav', html, 'main');
};
