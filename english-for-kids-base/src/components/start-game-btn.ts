import { createElement } from "../shared/add-element";

export const makeStartGameBtn = () => {
  const html = `
<input id="game"  class="button display-none" type="button" value="Start game ">
<div id="repeat" class="repeat-btn display-none">Repeat</div>
  `;
  createElement('div', 'start-game', html, 'body')
}
