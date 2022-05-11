import { repo } from "./data.js";
import { renderToDom } from "./utils/renderToDom.js"

const renderRepos = (array) => {
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

  const startApp = () => {
    renderRepos(repo);
  }
  startApp()
