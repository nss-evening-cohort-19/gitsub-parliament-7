import { repo } from "./data.js";
import { renderToDom } from "./utils/renderToDom.js";
import { renderNav, renderFooter } from "./renderHeaderFooter.js";

const renderRepos = (array) => {
  let domString = "";
  for (const item of array) {
    domString += `
    <div class="card" style="width: 30rem;">
    <ul class="list-group list-group-flush">
      <li class="list-group-item">${item.name}</li>
      <li class="list-group-item">${item.description}</li>
      <li class="list-group-item">${item.tags}</li>
    </ul>
    <div class="card-footer"><div>${item.primaryLang} </div>
    <div>${item.branches}</div> <div>${
      item.favorite ? "⭐ Star" : "☆ Star"
    }</div>
    </div>
  </div>`;
  }
  renderToDom("#repoCards", domString);
};

const createRepo = () => {
  let domString = "";
  domString = `
  <button type="button" class="btn btn-light" data-bs-toggle="modal" data-bs-target="#create-repo">
  Create Repository
  </button>
  
  <div class="modal" id="create-repo" tabindex="-1">
  <div class="modal-dialog">
    <div class="modal-content">
      <div class="modal-header">
        <h5 class="modal-title">Create Repository</h5>
        <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
      </div>
      <div class="modal-body">
      <form>
      <div class="form-floating mb-3">
        <input id="repoName" class="form-control form-control-lg" type="text" placeholder="repoName" id="repoName" aria-label="repoName" required>
        <label for="repoName">Repository Name</label>
      </div>
      
      <div class="form-floating mb-3">
        <input id="repoDescription" class="form-control form-control-lg" type="text" placeholder="repoDescription" id="repoDescription" aria-label="repoDescription" required>
        <label for="repoDescription">Repoository Decription</label>
      </div>
      
      <div class="form-floating mb-3">
        <input id="repoTags" class="form-control form-control-lg" type="text" placeholder="repoTags" id="repoTags" aria-label="repoTags" required>
        <label for="repoTags">Repoository Tags</label>
      </div>

      <div class="form-floating mb-3">
        <input id="primaryLang" class="form-control form-control-lg" type="text" placeholder="primaryLang" id="primaryLang" aria-label="primaryLang" required>
        <label for="primaryLang"> Primary Language</label>
      </div>
<button type="submit" class="btn btn-primary">Submit</button>
</form>
</form>
      </div>
    </div>
  </div>
</div>`;
  renderToDom("#repoForm", domString);
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

// const renderForm = () => {
//   let domString = `
//   <form>
//   <div class="mb-3">
//     <label for="" class="form-label">Create a new repository</label>
//     <div id="" class="form-text">Great repository names are short.</div>
//     <input type="text" class="form-control" id="" aria-describedby="createRepo">

//   </div>
//   <div class="mb-3">
//     <label for="" class="form-label">Description(optional)</label>
//     <input type="text" class="form-control" id="">
//   </div>
//   <button type="submit" class="btn btn-primary">Create repository</button>
// </form>`;
// renderToDom("#repoForm", domString)
// };

const search = (event) => {
  console.log(event);
  const userInput = event.target.value.toLowerCase();
   const searchResult = repo.filter((item) =>
    item.name.toLowerCase().includes(userInput) ||
    item.description.toLowerCase().includes(userInput) ||
    item.primaryLang.toLowerCase().includes(userInput)
    )
    renderToDom("#repoCards", searchResult);
};

//EVENT LISTNERS//
const eventListeners = () => {
  const formModal = new bootstrap.Modal(document.querySelector("#create-repo"));

  const form = document.querySelector("form");
  form.addEventListener("submit", (e) => {
    e.preventDefault();
    const newRepo = {
      name: document.querySelector("#repoName").value,
      description: document.querySelector("#repoDescription").value,
      tags: document.querySelector("#repoTags").value,
      primaryLang: document.querySelector("#primaryLang").checked,
      url: `https://www.nationalgeographic.com/animals/mammals/facts/domestic-cat`,
      pinned: false,
      branches: 4,
      favorite: false,
    };

    console.log(repo);
    repo.push(newRepo);
    console.log(repo);
    renderRepos(repo);
    formModal.hide();
    form.reset();
  });
};

const startApp = () => {
  createRepo();
  renderNav();
  renderFooter();
  renderRepos(repo);
  renderSearch();
  //renderForm();
  document.querySelector("#searchInput").addEventListener('keyup',search);
  eventListeners();
};
startApp();
