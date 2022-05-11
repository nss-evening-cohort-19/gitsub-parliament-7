import {renderToDom} from "./utils/renderToDom.js"
import { packages } from "./data.js"

const renderPackagesCards = (taco) => {
  let domString = "";
  for (const item of taco) {
    domString += `<div class="card" style="width: 18rem;">
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

renderPackagesCards(packages);
renderPackagesForm();
