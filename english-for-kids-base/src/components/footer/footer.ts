import { createElement } from "../../shared/add-element";

export const makeFooter = () => {
  const html = `
  <div class="footer-wrapper" >
  <div class="footer-links">
    <div class="gitHub-link">
      <a class="gitHub-link" href="https://github.com/GBaykov"></a>
    </div>
    <div class="year">2021</div>
    <div class="logo">
      <a class="logo" href="https://rs.school/js/"></a>
    </div>
  </div>
</div>
  `;
  createElement('footer', 'footer', html, 'body')
}
// <input id="game"  type="button" value="Start game ">

export const makeStartGameBtn = () => {
  const html = `
<input id="game"  class="button display-none" type="button" value="Start game ">
<div id="repeat" class="repeat-btn display-none">Repeat</div>
  `;
  createElement('div', 'start-game', html, 'body')
}
