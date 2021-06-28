
export const makeMenu = () => {
  const html = `
    <div class="menu-bar">
        <span class="menu-bar-span"></span>
      </div>
      <div class="menu" id="menu">
        <ul>
          <li>Main Page</li>
          <li class="active_menu">Action (set A)</li>
          <li>Action (set B)</li>
          <li>Action (set C)</li>
          <li>Adjective</li>
          <li>Animal (set A)</li>
          <li>Animal (set B)</li>
          <li>Clothes</li>
          <li>Emotion</li>
          <li>Statistics</li>
        </ul>
      </div>
  `;
  const mainElement:HTMLElement | null = document.getElementById('main');
  if (!mainElement) throw Error('mainElement element not found');

  const nav:HTMLElement = document.createElement('nav')
  nav.classList.add('nav');
  nav.innerHTML = html;
  mainElement.appendChild(nav)
  document.body.appendChild(mainElement);


}

