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

const reposOnDom = (array) => {
let domString = "";
for (const item of array){
  domString = `
  <div class="card" style="width: 18rem;">
  <ul class="list-group list-group-flush">
    <li class="list-group-item">${item.name}</li>
    <li class="list-group-item">${item.description}</li>
    <li class="list-group-item">A third item</li>
  </ul>
  <div class="card-footer">
    Card footer
  </div>
</div>`
};
renderToDom("#repoCards", domString)
};


const renderProjectCards = (arr) => {
  let domString = `
  <div class="card" style="width: 18rem;">
    <div class="card-header">
    Projects
    </div>
    <ul class="list-group list-group-flush">`
  for(const item of arr) {
    domString += `<li class="list-group-item"><h5>${item.name}</h5> <p>${item.description}</p></li>`
  }
  domString += 
  `</ul>
    </div>`; 
  renderToDom("#project-card-div", domString)
}



renderNav();
renderFooter();
reposOnDom(repo);
renderProjectCards(projectDataSet);
