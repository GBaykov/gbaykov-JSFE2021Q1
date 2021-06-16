import store from '../../store';
import { renderCarImage } from '../garage-page/garage';

export const renderWinners = () => `
<h1>Winners (1) </h1>
<h2>Page #1 </h2>
<table class="table" cellspacing="0" border="0" cellpadding="0">
  <thead>
    <th>Number</th>
    <th>Car</th>
    <th>Name</th>
    <td class="table-button table-wins" id="sort-by-wins">Wins</th>
    <td class="table-button table-time" id="sort-by-time">Best time (seconds)</th>
  </thead>
  <tbody>
    <tr>
      <td>1 </td>
      <td>${renderCarImage('white')} </td>
      <td>Tesla </td>
      <td>1 </td>
      <td>10 </td>
  </tbody>
`;
