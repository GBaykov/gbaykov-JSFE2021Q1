import { createElement } from '../../shared/add-element';

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
  createElement('footer', 'footer', html, 'body');
};
