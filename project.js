import { projectDataSet } from "./data.js";
import { renderToDom } from "./utils/renderToDom.js"
import { renderNav, renderFooter } from "./renderHeaderFooter.js";
import { renderProfile } from "./renderProfile.js";


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

const renderSortMenu = () => {
  let domString = `
    <h2>Projects</h2>
    <div class="mb-3>
        <label for="projectSearchBar">Search</label>
        <input class="form-control" id="projectSearchBar" placeholder="Search..."></input>
      </div>
      <div id="projectCardSortDiv">
        <label for="projectCardSortButton">Sort</label>
        <select id="projectCardSortButton" name="projectCardSortDropdown">
          <option value="">Select</option>
          <option value="alphabet-normal">A-Z</option>
          <option value="alphabet-reverse">Z-A</option>
        </select>
      </div>
  `; 
  renderToDom("#project-sort", domString)
}

const renderProjectCards = (arr) => {
  let domString = `
  <div class="card"">    
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

const search = (event) => {
  const eventLowerCase = event.target.value.toLowerCase(); 
  console.log(eventLowerCase)
  const searchResult = projectDataSet.filter((item) => 
    item.name.toLowerCase().includes(eventLowerCase) ||
    item.description.toLowerCase().includes(eventLowerCase)
  )
  renderProjectCards(searchResult)
} 

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
    projectFormEl.reset()
  })
  ; 


  const projectSortSelect = document.querySelector("#projectCardSortButton"); 
  projectSortSelect.addEventListener("change", (e) => {
    const target = e.target.value; 
    let sortedDataSet = projectDataSet.sort((a, b) => a.name.localeCompare(b.name))
    if(e.target.value === "alphabet-normal")  {
      renderProjectCards(sortedDataSet)
    } else if (e.target.value === "alphabet-reverse") {
      sortedDataSet.reverse()
      renderProjectCards(sortedDataSet)
      projectSortSelect.selectedIndex = 0; 
    }
  })
}

const startApp = () => {
  renderNav()
  renderProfile()
  renderProjectCards(projectDataSet)
  renderProjectForm()
  renderFooter()
  renderSortMenu()
  document.querySelector("#projectSearchBar").addEventListener("keyup", search)
  projectEventListeners()
}

startApp()
