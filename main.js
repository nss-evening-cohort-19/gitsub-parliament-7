import { projectDataSet, repo, packages } from "./data.js";

const renderToDom = (divId, textToRender) => {
  const selectedDiv = document.querySelector(divId);
  selectedDiv.innerHTML = textToRender;
};

const renderNav = () => {
  let domString = `<nav class="navbar navbar-expand-lg navbar-light bg-light">
  <div class="container-fluid">
    <a class="navbar-brand" href="#"></a>
    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
      <span class="navbar-toggler-icon"></span>
    </button>
    <div class="collapse navbar-collapse" id="navbarNavAltMarkup">
      <div class="navbar-nav">
        <a class="nav-link active" aria-current="page" href="index.html">📖 Overview</a>
        <a class="nav-link active" href="repo.html">🖥 Repositories</a>
        <a class="nav-link active" href="project.html">🧮 Projects</a>
        <a class="nav-link active" href="package.html">📦 Packages</a>
      </div>
    </div>
  </div>
</nav>`;
  renderToDom("#nav-bar", domString);
};

const renderProfile = () => {
  let domString = `<div class="card" style="width: 18rem;">
<img src="..." class="card-img-top" alt="...">
<div class="card-body">
  <h3 class="card-title">Steve Jobs</h3>
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
  <a href="#"><li href="#" class="list-group-item">📩 github@aboutmonica.com</li></a>
  <a href="#"><li class="list-group-item">⛓ https://www.aboutmonica.com</li></a>
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

const renderFooter = () => {
  let domString = `<footer><nav class="navbar navbar-expand-lg navbar-light bg-light">
  <div class="container-fluid">
    <a class="navbar-brand" href="#"></a>
    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
      <span class="navbar-toggler-icon"></span>
    </button>
    <div class="collapse navbar-collapse" id="navbarNavAltMarkup">
      <div class="navbar-nav">
        <a class="nav-link" href="#">2021 GitHub, Inc.</a>
        <a class="nav-link active" href="#">Terms</a>
        <a class="nav-link active" href="#">Privacy</a>
        <a class="nav-link active" href="#">Security</a>
        <a class="nav-link active" href="#">Status</a>
        <a class="nav-link active" href="#">Help</a>
        <a class="nav-link active" href="#">🙀</a>
        <a class="nav-link active" href="#">Contact GitHub</a>
        <a class="nav-link active" href="#">Pricing</a>
        <a class="nav-link active" href="#">API</a>
        <a class="nav-link active" href="#">Training</a>
        <a class="nav-link active" href="#">Blog</a>
        <a class="nav-link active" href="#">About</a>
      </div>
    </div>
  </div>
</nav></footer>`;
  renderToDom("#footer", domString);
};

renderNav();
renderProfile();
renderFooter();
