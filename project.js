import { projectDataSet } from "./data.js";
import { renderToDom } from "./utils/renderToDom.js"


const renderProjectForm = () => {
  let domString = `
    <div>
      <h2>Create a new project</h2>
      <div class="mb-3">
        <label for="exampleFormControlInput1" class="form-label">Project board name</label>
        <textarea class="form-control" id="projectBoardFormName" rows="3"></textarea>
      </div>
      <div class="mb-3">
        <label for="exampleFormControlTextarea1" class="form-label">Description (optional)</label>
        <textarea class="form-control" id="projectBoardFormDescription" rows="3"></textarea>
      </div>
    </div>
  `;
  renderToDom("#project-form-div", domString)
}

const renderProjectCards = (arr) => {
  let domString = `
  <div class="card" style="width: 18rem;">
    <div class="card-header">
    Projects
    </div>
    <ul class="list-group list-group-flush">`;
  for (const item of arr) {
    domString += `<li class="list-group-item"><h5>${item.name}</h5> <p>${item.description}</p></li>`;
  }
  domString += `</ul>
    </div>`;
  renderToDom("#project-card-div", domString);
};


const startApp = () => {
  renderProjectCards(projectDataSet)
  renderProjectForm()
}

startApp()
