import { renderWinners } from "../components/winners-page/winners";
import { startDriving } from "../functions/driving";
// const garagelist: any = document.getElementById('garage-view');
// const winnerslist: any = document.getElementById('winners-view');

export function listenProb() {
document.body.addEventListener('click', async(event:any) => {
  if(event.target.classList.contains('winners-menu-button')) {
    const garagelist: any = document.getElementById('garage-view');
const winnerslist: any = document.getElementById('winners-view');
    garagelist.classList.add('displayNone')
    winnerslist.classList.remove('displayNone')
  }
  if(event.target.classList.contains('garage-menu-button')) {
    const garagelist: any = document.getElementById('garage-view');
const winnerslist: any = document.getElementById('winners-view');
    garagelist.classList.remove('displayNone');
    winnerslist.classList.add('displayNone')
  }
  if (event.target.classList.contains('start-engine-button')) {

   await startDriving(1)
  }

})
}

