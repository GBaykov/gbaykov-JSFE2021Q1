import { CATEGORY } from "../../data";
import { createElement } from "../../shared/add-element";
import { deleteElement } from "../../shared/delete-element";
import { makeFooter } from "../footer/footer";

export const makeStatistics = (arrAllCards:CATEGORY[]) => {
  let id = 0;
  let table = `<table class="table">
  <thead class="thead">
      <th>Category</th>
      <th>Word</th>
      <th>Translate</th>
      <th>Clicks</th>
      <th>Correct</th>
      <th>Wrong</th>
      <th>% Errors</th>
  </thead>
  <tbody class="tbody">`
  for(let arr of arrAllCards) {
    for (let item of arr) {
      table = table +
      `<tr id="tr-${id}">
      <td id="td-category"><b>${item.category}</b></td>
            <td>${item.word}</td>
            <td>${item.translation}</td>
            <td>${item.train}</td>
            <td>${item.correct}</td>
            <td>${item.errors}</td>
            <td>${item.percentOfErrors}%</td>
      </tr>`
    } id +=1;
  }
  table = table + `</tbody>
  </table>`
  deleteElement('cards-field','main');
  deleteElement('footer', 'body');
createElement('div', 'table-wrapper',table, 'main' )
makeFooter()
}
