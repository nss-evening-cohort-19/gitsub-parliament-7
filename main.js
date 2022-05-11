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

const renderPackagesCards = (taco) => {
  let domString = "";
  for (const item of taco) {
    domString += 
`<div class="card" style="width: 18rem;">
  <img src="${item.image}" class="card-img-top" alt="...">
  <div class="card-body">
    <h5 class="card-title">${item.name}</h5>
    <p class="card-text">${item.description}</p>
    <a href="#" class="btn btn-primary">Learn More</a>
  </div>
</div>`;
  }
  renderToDom("#packagesCards", domString);
};

const renderPackagesForm = () => {
  let domString = "";
  domString = `<form>
          <div class="form-floating mb-3">
            <input class="form-control form-control-lg" type="text" placeholder="packageName" id="packageName" aria-label="packageName" required>
            <label for="packageName">Package Name</label>
          </div>
          
          <div class="form-floating mb-3">
            <input class="form-control form-control-lg" type="text" placeholder="packageDescription" id="packageDescription" aria-label="packageDescription" required>
            <label for="packageDescription">Package Decription</label>
          </div>
          
          <div class="form-floating mb-3">
            <input class="form-control form-control-lg" type="text" placeholder="imageURL" id="imageUrl" aria-label="imageUrl" required>
            <label for="packageId">ImageURL</label>
          </div>

          <div class="form-floating mb-3">
            <input class="form-control form-control-lg" type="text" placeholder="packageURL" id="packageURL" aria-label="packageURL" required>
            <label for="packageId">Package URL</label>
          </div>
  <button type="submit" class="btn btn-primary">Submit</button>
</form>`;
  renderToDom("#packagesForm", domString);
};

renderNav();
renderFooter();
renderPackagesCards(packages);
renderPackagesForm();
