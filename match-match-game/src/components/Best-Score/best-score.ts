import { mainAria } from "../about-game/about-game";
import { aboutBtn, scoreBtn, settingBtn } from "../nav-router/nav-router";

export const fakeBestScore:string = `      <p class="best-head"></p>

<div class="best-player">
  <div class="name-mail">
    <p class="player-name">Nicci Troiani</p>
    <p class="player-mail">nicci@gmail.com</p>
  </div>
  <div class="player-score"><b>Score:</b>465</div>
</div>
<div class="best-player">
  <div class="name-mail">
    <p class="player-name">Artem Vinokur</p>
    <p class="player-mail">Vinokur99@gmail.com</p>
  </div>
  <div class="player-score"><b>Score:</b>460</div>
</div>
<div class="best-player">
  <div class="name-mail">
    <p class="player-name">Hamaki Navali</p>
    <p class="player-mail">Navali21@gmail.com</p>
  </div>
  <div class="player-score"><b>Score:</b>460</div>
</div>
<div class="best-player">
  <div class="name-mail">
    <p class="player-name">Alina Pristrom</p>
    <p class="player-mail">aaalinaa@gmail.com</p>
  </div>
  <div class="player-score"><b>Score:</b>443</div>
</div>
<div class="best-player">
  <div class="name-mail">
    <p class="player-name">Vitya Shalamov</p>
    <p class="player-mail">vspomnilego@gmail.com</p>
  </div>
  <div class="player-score"><b>Score:</b>441</div>
</div>
<div class="best-player">
  <div class="name-mail">
    <p class="player-name">Anna Nikolaeva</p>
    <p class="player-mail">NikoAnn@mail.ru</p>
  </div>
  <div class="player-score"><b>Score:</b>440</div>
</div>
<div class="best-player">
  <div class="name-mail">
    <p class="player-name">Gleb Papirosov</p>
    <p class="player-mail">Glebpapirosov@gmail.com</p>
  </div>
  <div class="player-score"><b>Score:</b>437</div>
</div>
<div class="best-player">
  <div class="name-mail">
    <p class="player-name">Lexa Gromov</p>
    <p class="player-mail">gromila@gmail.com</p>
  </div>
  <div class="player-score"><b>Score:</b>421</div>
</div>
<div class="best-player">
  <div class="name-mail">
    <p class="player-name">Artem Natan</p>
    <p class="player-mail">arti211@gmail.com</p>
  </div>
  <div class="player-score"><b>Score:</b>420</div>
</div>
<div class="best-player">
  <div class="name-mail">
    <p class="player-name">Alex Wolf</p>
    <p class="player-mail">Alexaa1984@gmail.com</p>
  </div>
  <div class="player-score"><b>Score:</b>420</div>
</div>`;


export function fakeScoreCompil() {
  mainAria.innerHTML = fakeBestScore;
  scoreBtn.classList.add('activ-rout');
  aboutBtn.classList.remove('activ-rout');
  settingBtn.classList.remove('activ-rout');

}
