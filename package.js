import {renderToDom} from "./utils/renderToDom.js"
import { packages } from "./data.js"
import { renderNav, renderFooter } from "./renderHeaderFooter.js";
import { renderProfile } from "./renderProfile.js";

const packageID = () => {
  packages.forEach((pack, index) => {
    pack.id = index + 1;
  });
};

const renderPackagesCards = (pack) => {
  let domString = "";
  for (const item of pack) {
    domString += 
    `<div class="card" style="width: 18rem;">
      <div class="card-body">
        <h5 class="card-title"><img src="${item.image}" class="package-card-img-top" alt="..."> ${item.name}</h5>
        <p class="card-text">${item.description}</p>
        <a target="_blank" rel="noopener noreferrer"href=${item.link} class="btn btn-primary">Learn More</a>
      </div>
    </div>`;
  }
  renderToDom("#packagesCards", domString);
};

const renderPackagesForm = () => {
  let domString = "";
  domString = `<form>
          <div class="form-floating mb-3">
            <input id="packageName" class="form-control form-control-lg" type="text" placeholder="packageName" id="packageName" aria-label="packageName" required>
            <label for="packageName">Package Name</label>
          </div>
          
          <div class="form-floating mb-3">
            <input id="packageDescription" class="form-control form-control-lg" type="text" placeholder="packageDescription" id="packageDescription" aria-label="packageDescription" required>
            <label for="packageDescription">Package Decription</label>
          </div>
          
          <div class="form-floating mb-3">
            <input id="imageUrl" class="form-control form-control-lg" type="text" placeholder="imageURL" id="imageUrl" aria-label="imageUrl" required>
            <label for="packageId">ImageURL</label>
          </div>

          <div class="form-floating mb-3">
            <input id="packageUrl" class="form-control form-control-lg" type="text" placeholder="packageURL" id="packageURL" aria-label="packageURL" required>
            <label for="packageId">Package URL</label>
          </div>
  <button type="submit" class="btn btn-primary">Add New Package</button>
</form>`;
  renderToDom("#packagesForm", domString);
};

const renderSearchPackages = () => {
  let domString = "";
  domString = `<div class="form-floating mb-3">
        <input type="text" class="form-control" id="searchInput" placeholder="SEARCH">
        <label for="searchInput">Search</label>
      </div>`;
  renderToDom("#search-packages", domString)
};

const search = (event) => {
  const userInput = event.target.value.toLowerCase();
  const searchResult = packages.filter(item => 
    item.name.toLowerCase().includes(userInput) ||
    item.description.toLowerCase().includes(userInput)
  );
  renderPackagesCards(searchResult)
};

function packageEvent() {
  const packageForm = document.querySelector('form');
  packageForm.addEventListener("submit", (e) => {
    e.preventDefault();
    let newPackage = {
      name: document.querySelector("#packageName").value,
      description: document.querySelector("#packageDescription").value,
      image: document.querySelector("#imageUrl").value,
      link: document.querySelector("#packageUrl").value,
    };
    packages.push(newPackage);
    packageID();
    renderPackagesCards(packages);
    packageForm.reset();
  });


};

const startApp = () => {
  renderPackagesCards(packages);
  renderPackagesForm();
  renderProfile();
  renderNav();
  renderFooter();
  packageID();
  renderSearchPackages();
  document.querySelector("#searchInput").addEventListener("keyup", search);
  packageEvent();
};

startApp();
