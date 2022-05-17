import { renderToDom } from "./utils/renderToDom.js";

export const renderProfile = () => {
  let domString = `<div class="profile-card card" >
<img src="images/snoop.png" class="card-img-top" alt="...">
<div class="snoop-card card-body">
  <h3 class="card-title">Snoop Dogg</h3>
  <p class="card-text">“You don't get respect if you don't deserve it.”</p>
  <button type="button" class="btn btn-secondary btn-sm">Follow</button>
  <button type="button" class="btn btn-secondary btn-sm">💓 Sponsor</button>
  <button type="button" class="btn btn-secondary btn-sm">...</button>
  <div class="stats">
  <span class="follow list-group-item">1.8K followers</span>
  <span class="follow list-group-item">27 Following</span>
  <span class="follow list-group-item">⭐️ 329</span>
  </div>
</div>
<ul class="list-group list-group-flush">
  <a class="points" href="#"><li class="list-group-item">📍 New York, New York</li></a>
  <a class="points" href="#"><li class="list-group-item">📩  github@aboutsnoop.com</li></a>
  <a class="points" href="#"><li class="list-group-item">🕊 @indigitacolor</li></a>
</ul>
<div class="card-body">
<h5 class="org-title card-title">Highlights</h5>
<ul class="list-group list-group-flush">
  <li class="list-group-item">📍 New York, New York</li>
  <a class="points"  href="#"><li class="list-group-item">❄️ Arcitc Code Vault</li></a>
  <a class="points"  href="#"><li class="list-group-item">⭐️ GitHub Star</li></a>
  <a class="points"  href ="#"><li class="list-group-item">⭐️ Pro</li></a>
</ul>
<div>
<div class="card-body">
<h5 class="org-title card-title">Organizations</h5>
  <a href="https://github.com/nss-evening-cohort-19" class="card-link"><img class="card-link" src="https://avatars.githubusercontent.com/u/100445756?s=64&v=4"/></a>
  <a href="https://github.com/Urban-Green-Lab" class="card-link"><img class="card-link" src="https://avatars.githubusercontent.com/u/61482433?s=64&v=4"/></a>
  <a href="https://github.com/HealthTeacher" class="card-link"><img class="card-link" src="https://avatars.githubusercontent.com/u/1416897?s=64&v=4"/></a>
</div>
<div class="card-body">
<h5 class="org-title card-title">Sponsors</h5>
<div class="sponsors">
  <a href="https://github.com/rochelle-rossman" class="card-link"><img class="spon-img" src="https://avatars.githubusercontent.com/u/102299152?s=96&v=4"/></a>
  <a href="https://github.com/blackcl3" class="card-link"><img class="spon-img" src="https://avatars.githubusercontent.com/u/24661749?s=96&v=4"/></a>
  <a href="https://github.com/ImadOttallah" class="card-link"><img class="spon-img" src="https://avatars.githubusercontent.com/u/99231245?s=96&v=4"/></a>
  <a href="https://github.com/TwoFivinClimber" class="card-link"><img class="spon-img" src="https://avatars.githubusercontent.com/u/100610149?s=96&v=4"/></a>
 </div>
</div>
</div>`;
  renderToDom("#profile", domString);
};
