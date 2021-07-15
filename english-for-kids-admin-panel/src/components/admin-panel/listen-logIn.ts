import { createElement } from "../../shared/add-element";
import { deleteElement } from "../../shared/delete-element";
import { makeFooter } from "../footer/footer";
import { makeAdminCategories } from "./admin-categories";

export const listenLogIn= () => {
  document.addEventListener('click', (event:MouseEvent) => {
    if (event === null) throw Error('MouseEvent === null');
    const target = event.target as Element;
    if (target.classList.contains('registr-btn') || target.classList.contains('register-btn-text')) {
      deleteElement('cards-field', 'main');
      deleteElement('footer', 'body');
      deleteElement('start-game', 'body');
      deleteElement('table-wrapper', 'main');
      deleteElement('header', 'body');
      makeAdminHeader();
      makeAdminCategories()
      makeFooter()
    }
  });
};

export const makeAdminHeader = () => {
  const html = `
  <div class="admin-header-wrapper">
    <div class="">
        <p class=" text">Categories</p>
    </div>
    <div class="">
      <p class="text">Words</p>
    </div>
    <div class="">
      <p class="log-out-btn text">Log Out</p>
    </div>
  </div>
  `;
  createElement('header', 'header', html, 'body');
};
