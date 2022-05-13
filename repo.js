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
    <div>${item.branches}</div> <div>${item.favorite ? '⭐ Star' : '☆ Star'}</div>
    </div>
  </div>`;
  }
  renderToDom("#repoCards", domString);
};

const renderRepo = () => {
  const domString = `
  <div class="modal" tabindex="-1">
  <div class="modal-dialog">
    <div class="modal-content">
      <div class="modal-header">
        <h5 class="modal-title">Modal title</h5>
        <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
      </div>
      <div class="modal-body">
        <p>Modal body text goes here.</p>
      </div>
      <div class="modal-footer">
      <button 
      type="submit" 
      class="btn btn-success" 
    >
      Submit
    </button>
      </div>
    </div>
  </div>
</div>
    
`;
renderToDom('#repoForm', domString);
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




// const search = (event) => {
//   console.log(event);
//   const userInput = event.target.value.toLowerCase();
//    const searchResult = repo.filter(item => 
//     item.name.toLowerCase().includes(userInput) ||
//     item.description.toLowerCase().includes(userInput) ||
//     item.primaryLang.toLowerCase().includes(userInput)
//     )
//     renderToDom(searchResult);
// };


const startApp = () => {
  renderNav();
  renderFooter();
  renderRepos(repo);
  renderSearch();
  //renderForm();
  renderRepo();
};
startApp();
