import { repo } from "./data.js";
import { renderToDom } from "./utils/renderToDom.js";
import { renderNav, renderFooter } from "./renderHeaderFooter.js";
import { renderProfile } from "./renderProfile.js";

const renderRepos = (array) => {
  let domString = "";
  for (const item of array) {
    domString += `
    <div class="card" style="width: 40rem;">
    <ul class="list-group list-group-flush">
      <li class="list-group-item repo-color"><h5>${item.name}</h5></li>
      <li class="list-group-item repo-color2">${item.description}</li>
      <li class="list-group-item repo-color tags-size">${item.tags}</li>
    </ul>
    <div class="card-footer"><div>🟡 ${item.primaryLang} </div>
    <div>${item.branches}</div> 
    <div>
    <button class="btn-fav" id="fav--${item.id}">${
      item.favorite ? "⭐ Star" : "☆ Star"
    }</button>
    </div>
    </div>
  </div>`;
  }
  renderToDom("#repoCards", domString);
};

const createRepo = () => {
  let domString = "";
  domString = `
  <div class="btn-right"><button type="button" class="btn btn-light create" data-bs-toggle="modal" data-bs-target="#create-repo">
  Create Repository
  </button></div>
  
  <div class="modal" id="create-repo" tabindex="-1">
  <div class="modal-dialog">
    <div class="modal-content card">
      <div class="modal-header">
        <h5 class="modal-title card">Create Repository</h5>
        <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
      </div>
      <div class="modal-body">
      <form class="card">
      <div class="form-floating mb-3">
        <input id="repoName" class="form-control form-control-lg card modal-border" type="text" placeholder="repoName" id="repoName" aria-label="repoName" required>
        <label for="repoName">Repository Name</label>
      </div>
      
      <div class="form-floating mb-3">
        <input id="repoDescription" class="form-control form-control-lg card modal-border" type="text" placeholder="repoDescription" id="repoDescription" aria-label="repoDescription" required>
        <label for="repoDescription">Repository Decription</label>
      </div>
      
      <div class="form-floating mb-3">
        <input id="repoTags" class="form-control form-control-lg card modal-border" type="text" placeholder="repoTags" id="repoTags" aria-label="repoTags" required>
        <label for="repoTags">Repoository Tags</label>
      </div>

      <div class="form-floating mb-3">
        <input id="primaryLang" class="form-control form-control-lg card modal-border" type="text" placeholder="primaryLang" id="primaryLang" aria-label="primaryLang" required>
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

const repoID = () => {
  repo.forEach((taco, index) => {
    taco.id = index + 1;
  });
};

const renderSearch = () => {
  let domString = ` <input
    type="text"
    class="form-control search-color"
    id="searchInput"
    placeholder="Find A Repository"
  />
  <label class="label-background" for="searchInput">Find A Repository</label>`;
  renderToDom("#searchBar", domString);
};

const search = (event) => {
  const userInput = event.target.value.toLowerCase();
  const searchResult = repo.filter(
    (item) =>
      item.name.toLowerCase().includes(userInput) ||
      item.description.toLowerCase().includes(userInput) ||
      item.primaryLang.toLowerCase().includes(userInput)
  );
  renderRepos(searchResult);
};

//EVENT LISTNERS//
const eventListeners = () => {
  const formModal = new bootstrap.Modal(document.querySelector("#create-repo"));

  const form = document.querySelector("form");
  form.addEventListener("submit", (e) => {
    e.preventDefault();
    const newRepo = {
      id: repo.length + 1,
      name: document.querySelector("#repoName").value,
      description: document.querySelector("#repoDescription").value,
      tags: document.querySelector("#repoTags").value.split(),
      primaryLang: document.querySelector("#primaryLang").value,
      url: `https://www.nationalgeographic.com/animals/mammals/facts/domestic-cat`,
      pinned: false,
      branches: 4,
      favorite: false,
    };

    repo.push(newRepo);
    repoID();
    renderRepos(repo);
    formModal.hide();
    form.reset();
  });

  const favBtn = () => {
    document.querySelector("#repoCards").addEventListener("click", (e) => {
      if (e.target.id) {
        const [method, id] = e.target.id.split("--");
        const index = repo.findIndex((taco) => taco.id === parseInt(id));
        if (e.target.id.includes("fav")) {
          // repo.favorite = true;
          // renderRepos(repo);
        }
      }
    });
  };
  favBtn();
};

const startApp = () => {
  createRepo();
  renderNav("repositories");
  renderProfile();
  renderFooter();
  renderRepos(repo);
  renderSearch();
  document.querySelector("#searchInput").addEventListener("keyup", search);
  eventListeners();
};
startApp();
