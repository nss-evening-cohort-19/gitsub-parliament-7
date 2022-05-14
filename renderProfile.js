import { renderToDom } from "./utils/renderToDom.js";

export const renderProfile = () => {
  let domString = `<div class="card" style="width: 18rem;">
<img src="images/snoop.png" class="card-img-top" alt="...">
<div class="card-body">
  <h3 class="card-title">Snoop Dogg</h3>
  <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
  <button type="button" class="btn btn-secondary btn-sm">Follow</button>
  <button type="button" class="btn btn-secondary btn-sm">💓 Sponsor</button>
  <button type="button" class="btn btn-secondary btn-sm">...</button>
  <ul class="list-group list-group-flush">
  <li class="list-group-item">1.8K followers</li>
  <li class="list-group-item">27 Following</li>
  <li class="list-group-item">⭐️ 329</li>
</ul>
</div>
<div class="card-body">
<ul class="list-group list-group-flush">
  <li class="list-group-item">📍 New York, New York</li>
  <a href="#"><li href="#" class="list-group-item">📩 github@aboutsnoop.com</li></a>
  <a href="#"><li class="list-group-item">⛓ https://www.aboutsnoop.com</li></a>
  <a href="#"><li  class="list-group-item">🕊 @indigitacolor</li></a>
</ul>
</div>
<div class="card-body">
<h5 class="card-title">Highlights</h5>
<ul class="list-group list-group-flush">
  <li class="list-group-item">📍 New York, New York</li>
  <a href="#"><li class="list-group-item">❄️ Arcitc Code Vault Contributor</li></a>
  <a href="#"><li class="list-group-item">⭐️ GitHub Star</li></a>
  <a href ="#"><li class="list-group-item">⭐️ Pro</li></a>
</ul>
</div>
<div class="card-body">
<h5 class="card-title">Organizations</h5>
  <a href="#" class="card-link">Photo</a>
  <a href="#" class="card-link">Photo</a>
  <a href="#" class="card-link">Photo</a>
</div>
<div class="card-body">
<h5 class="card-title">Sponsors</h5>
  <a href="#" class="card-link">Photo</a>
  <a href="#" class="card-link">Photo</a>
  <a href="#" class="card-link">Photo</a>
  <a href="#" class="card-link">Photo</a>
  <a href="#" class="card-link">Photo</a>
  <a href="#" class="card-link">Photo</a>
  <a href="#" class="card-link">Photo</a>
  <a href="#" class="card-link">Photo</a>
</div>
</div>`;
  renderToDom("#profile", domString);
};
