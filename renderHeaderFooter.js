import { renderToDom } from "./utils/renderToDom.js";

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


export { renderNav, renderFooter}
