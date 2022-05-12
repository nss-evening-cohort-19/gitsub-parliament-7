import { repo } from "./data.js";
import { renderToDom } from "./utils/renderToDom.js";

const renderRepos = (array) => {
  let domString = "";
  for (const item of array) {
    domString += `
    <div class="card" style="width: 18rem;">
    <ul class="list-group list-group-flush">
      <li class="list-group-item">${item.name}</li>
      <li class="list-group-item">${item.description}</li>
      <li class="list-group-item">${item.tags}</li>
    </ul>
    <div class="card-footer">
    ${item.primaryLang} ${item.branches} ${item.favorite}
    </div>
  </div>`;
  }
  renderToDom("#repoCards", domString);
};

const renderSearch = () => {
  let domString = `<input
    type="text"
    class="form-control"
    id="searchInput"
    placeholder="SEARCH"
  />
  <label for="searchInput">Search</label>`;
  renderToDom("#searchBar", domString);
};
const renderForm = () => {
  let domString = `
  <form>
  <div class="mb-3">
    <label for="" class="form-label">Create a new repository</label>
    <div id="" class="form-text">Great repository names are short.</div>
    <input type="text" class="form-control" id="" aria-describedby="createRepo">
   
  </div>
  <div class="mb-3">
    <label for="" class="form-label">Description(optional)</label>
    <input type="text" class="form-control" id="">
  </div>
  <button type="submit" class="btn btn-primary">Create repository</button>
</form>`;
renderToDom("#repoForm", domString)
};

//const newRepo
const startApp = () => {
  renderRepos(repo);
  renderSearch();
  renderForm();
};
startApp();
