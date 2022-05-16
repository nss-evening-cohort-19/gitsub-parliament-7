import { renderToDom } from "./utils/renderToDom.js";

const renderFooter = () => {
  let domString = `<footer><nav class="navbar navbar-expand-lg navbar-light">
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

const renderNav = (page) => {
  let domString = `<nav id="navSpecial" class="nav-cont navbar navbar-expand-lg navbar-light">
  <div id="pages" class="nav nav-cont container-fluid">
    <a  class="git-icon navbar-brand" target="blank" href="https://gitsub-parliment-7.netlify.app">GitSub </a>
        <a id="Overview"class="${
          page === "overview" ? "current" : ""
        } nav-item nav-link active" aria-current="page" href="index.html">📖 Overview</a>
        <a id="Repositories"class="${
          page === "repositories" ? "current" : ""
        } nav-item nav-link active" href="repo.html">🖥 Repositories</a>
        <a id="Projects" class="${
          page === "projects" ? "current" : ""
        } nav-item nav-link active" href="project.html">🧮 Projects</a>
        <a id="Packages" class="${
          page === "packages" ? "current" : ""
        } nav-item nav-link active" href="package.html">📦 Packages</a>
  </div>
</nav>`;
  renderToDom("#nav-bar", domString);
};

export { renderNav, renderFooter };
