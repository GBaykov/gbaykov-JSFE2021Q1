import { CATEGORY } from "../../data";
import { createElement } from "../../shared/add-element";
import { deleteElement } from "../../shared/delete-element";
import { makeFooter } from "../footer/footer";

export const makeStatistics = (arrAllCards:CATEGORY[]) => {
  let table = `<table class="table">
  <thead class="thead">
      <th>Category</th>
      <th>word</th>
      <th>translate</th>
      <th>clicks</th>
      <th>correct</th>
      <th>wrong</th>
      <th>%errors</th>
  </thead>
  <tbody class="tbody">`
  for(let arr of arrAllCards) {
    for (let item of arr) {
      table = table +
      `<tr>
      <td><b>${item.category}</b></td>
            <td>${item.word}</td>
            <td>${item.translation}</td>
            <td>${item.train}</td>
            <td>${item.correct}</td>
            <td>${item.errors}</td>
            <td>${item.percentOfErrors}%</td>
      </tr>`
    }
  }
  table = table + `</tbody>
  </table>`
  deleteElement('cards-field','main');
  deleteElement('footer', 'body');
createElement('div', 'table-wrapper',table, 'main' )
makeFooter()
}
