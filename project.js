import { projectDataSet } from "./data.js";
import { renderToDom } from "./utils/renderToDom.js"
import { renderNav, renderFooter } from "./renderHeaderFooter.js";


const renderProjectForm = () => {
  let domString = `
    <div>
    <form id="project-form-el">
      <h2>Create a new project</h2>
      <div class="mb-3">
        <label for="exampleFormControlInput1" class="form-label">Project board name</label>
        <textarea class="form-control" id="projectBoardFormName" rows="3"></textarea>
      </div>
      <div class="mb-3">
        <label for="exampleFormControlTextarea1" class="form-label">Description (optional)</label>
        <textarea class="form-control" id="projectBoardFormDescription" rows="3"></textarea>
      </div>
      <button type="submit">Submit</button>
    </form>
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
      <div class="mb-3>
        <label for="projectSearchBar">Search</label>
        <textarea class="form-control" id="projectSearchBar"></textarea>
      </div>
      <label for="projectCardSortButton">Sort</label>
      <select id="projectCardSortButton">
        <option value="">Select</option>
        <option value="alphabet-normal">A-Z</option>
      </select>
    <ul class="list-group list-group-flush">`;
  for (const item of arr) {
    domString += 
    `<li class="list-group-item">
        <h5>${item.name}</h5> 
        <p>${item.description}</p>
      </li>`;
  }
  domString += `</ul>  
  </div>`;
  renderToDom("#project-card-div", domString);
};

const projectEventListeners = () => {
  const projectFormEl = document.querySelector("#project-form-el"); 
  projectFormEl.addEventListener("submit", (e) => {
    e.preventDefault()
    const newProjectName = e.target[0].value;
    const newProjectDescription = e.target[1].value; 
    const newProjectObject = {
      id: projectDataSet[projectDataSet.length-1].id +1,
      name: newProjectName,
      description: newProjectDescription,
      updatedTimeStamp: "05-08-2022",
      isPublic: true,
      link: "https://google.com"
    }
    projectDataSet.push(newProjectObject)
    renderProjectCards(projectDataSet)
    console.log(projectDataSet)
    projectFormEl.reset()
  })
  const projectSortSelect = document.querySelector("#projectCardSortButton")
  projectSortSelect.addEventListener("change", (e) => {
    let sortedProjectData = projectDataSet.sort((a, b) => a.name.localeCompare(b.name))
    renderProjectCards(sortedProjectData)
    console.log(projectSortSelect.selectedIndex)
    projectSortSelect.selectedIndex = -1; 
  })


}

const startApp = () => {
  renderNav()
  renderProjectCards(projectDataSet)
  renderProjectForm()
  renderFooter()
  projectEventListeners()
}

startApp()
