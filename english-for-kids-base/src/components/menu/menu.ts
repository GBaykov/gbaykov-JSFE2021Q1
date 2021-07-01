import { createElement } from "../../shared/add-element";
// <div class="menu-bar">
//         <span class="menu-bar-span"></span>
//       </div>
export const makeMenu = () => {
  const html = `

      <div class="menu" id="menu">
        <ul>
          <li id="menu-cat-10" class="menu-element">Main Page</li>
          <li id="menu-cat-0" class="active_menu menu-element">Action (set A)</li>
          <li id="menu-cat-1" class="menu-element">Action (set B)</li>
          <li id="menu-cat-2" class="menu-element">Animal (set A)</li>
          <li id="menu-cat-3" class="menu-element">Animal (set B)</li>
          <li id="menu-cat-4" class="menu-element">Clothes</li>
          <li id="menu-cat-5" class="menu-element">Emotion</li>
          <li>Statistics</li>
        </ul>
      </div>
  `;
  createElement('nav','nav', html, 'main')
  // const mainElement:HTMLElement | null = document.getElementById('main');
  // if (!mainElement) throw Error('mainElement element not found');
  // const nav:HTMLElement = document.createElement('nav')
  // nav.classList.add('nav');
  // nav.innerHTML = html;
  // mainElement.appendChild(nav)
  // document.body.appendChild(mainElement);
}

