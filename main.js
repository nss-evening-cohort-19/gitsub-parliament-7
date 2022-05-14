import { repo } from "./data.js";
import { renderToDom } from "./utils/renderToDom.js";
import { renderNav, renderFooter } from "./renderHeaderFooter.js";

const renderProfile = () => {
  let domString = `<div class="card" style="width: 18rem;">
<img src="images/snoop.png" class="card-img-top" alt="...">
<div class="card-body">
  <h3 class="card-title">Snoop Dogg</h3>
  <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
  <button type="button" class="btn btn-secondary btn-sm">Follow</button>
  <button type="button" class="btn btn-secondary btn-sm">💓 Sponsor</button>
  <button type="button" class="btn btn-secondary btn-sm">...</button>
  <ul class="list-group list-group-flush">
  <li class="list-group-item">1.8K followers</li>
  <li class="list-group-item">27 Following</li>
  <li class="list-group-item">⭐️ 329</li>
</ul>
</div>
<div class="card-body">
<ul class="list-group list-group-flush">
  <li class="list-group-item">📍 New York, New York</li>
  <a href="#"><li href="#" class="list-group-item">📩 github@aboutsnoop.com</li></a>
  <a href="#"><li class="list-group-item">⛓ https://www.aboutsnoop.com</li></a>
  <a href="#"><li  class="list-group-item">🕊 @indigitacolor</li></a>
</ul>
</div>
<div class="card-body">
<h5 class="card-title">Highlights</h5>
<ul class="list-group list-group-flush">
  <li class="list-group-item">📍 New York, New York</li>
  <a href="#"><li class="list-group-item">❄️ Arcitc Code Vault Contributor</li></a>
  <a href="#"><li class="list-group-item">⭐️ GitHub Star</li></a>
  <a href ="#"><li class="list-group-item">⭐️ Pro</li></a>
</ul>
</div>
<div class="card-body">
<h5 class="card-title">Organizations</h5>
  <a href="#" class="card-link">Photo</a>
  <a href="#" class="card-link">Photo</a>
  <a href="#" class="card-link">Photo</a>
</div>
<div class="card-body">
<h5 class="card-title">Sponsors</h5>
  <a href="#" class="card-link">Photo</a>
  <a href="#" class="card-link">Photo</a>
  <a href="#" class="card-link">Photo</a>
  <a href="#" class="card-link">Photo</a>
  <a href="#" class="card-link">Photo</a>
  <a href="#" class="card-link">Photo</a>
  <a href="#" class="card-link">Photo</a>
  <a href="#" class="card-link">Photo</a>
</div>
</div>`;
  renderToDom("#profile", domString);
};

const renderAbout = () => {
  const domString = `<div class="card">
  <div class="card-body">
    <h5 class="card-title">Hi I'm Snoop Dogg 👋🏾 🎤</h5>
    <img src="..." class="card-img-bottom" alt="...">
    <p class="card-text">"I am thrilled and appreciative of the opportunity to acquire the iconic and culturally significant Death Row Records brand, which has immense untapped future value," the 50-year-old Snoop Dogg said in a statement. "It feels good to have ownership of the label I was part of at the beginning of my career and as one of the founding members. This is an extremely meaningful moment for me."</p>
    <div class="card mb-3" style="max-width: 540px;">
  <div class="row g-0">
    <div class="col-md-4">
      <img src="..." class="img-fluid rounded-start" alt="...">
    </div>
    <div class="col-md-8">
      <div class="card-body">
        <h5 class="card-title">Find Me Around The Wen</h5>
        <ul>
          <li> Learning to Rap in the <a href="#">Community</a></li>
          <li> Turning the knobs in the <a href="#">Studio</a></li>
          <li> Check me out on the <a href="#">Socials</a></li>
        </ul>
      </div>
    </div>
  </div>
</div>
  </div>
</div>`;
  renderToDom("#aboutMe", domString);
};

const repoForm = () => {
  let domString = "";
  domString = `<h3 class="pinnedRepoTitle">Popular Repositories</h3><!-- Button trigger modal -->
  <button id="repoModal-btn" type="button" class="btn btn-primary" data-bs-toggle="modal" data-bs-target="#exampleModal">
    Customize your pins 
  </button>
  
  <!-- Modal -->
  <div class="modal fade" id="exampleModal" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
    <div class="modal-dialog">
      <div class="modal-content">
        <div class="modal-header">
          <h5 class="modal-title" id="exampleModalLabel">Edit pinned items</h5>
          <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
        </div>
        <div class="modal-body">
        <ul id="repoList" class="list-group">
        <input disabled>
        </input>
        </ul>
        </div>
        <div class="modal-footer">
          <div id="maxMessage" class="maxMessage"></div>
          <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Close</button>
          <button id="savePinned-btn" type="button" data-bs-dismiss="modal" class="btn btn-primary">Save as Pinned</button>
        </div>
      </div>
    </div>
  </div>`;
  renderToDom("#repoForm", domString);
};

const pinnedRepo = (arr) => {
  let domString = "";
  for (const pin of arr) {
    if (pin.pinned) {
      domString += `
      <div class="card" style="width: 30rem;">
    <ul class="list-group list-group-flush">
      <li class="list-group-item">${pin.name}</li>
    </ul>
    <div class="card-footer"><div>${pin.primaryLang} </div>
    <div>${pin.favorite ? "⭐ Star" : "☆ Star"}</div>
    </div>
  </div>`;
    }
    renderToDom("#pinnedRepos", domString);
  }
};

const pinRepoEvent = () => {
  document.querySelector("#repoForm").addEventListener("click", (e) => {
    const checkboxes = document.getElementsByName("checkbox");
    if (e.target.id === "repoModal-btn") {
      let repoList = "";
      for (const i of repo) {
        const pinned = i.pinned === true;
        repoList += `<li class="list-group-item">
        <input id="${i.id}" class="checkboxes form-check-input me-1" ${
          pinned ? "checked=true" : ""
        } name="checkbox" type="checkbox" value="${i.name}" aria-label="...">
        ${i.name}
      </li>`;
      }
      renderToDom("#repoList", repoList);
      limitChecks();
    }
    if (e.target.id === "savePinned-btn") {
      for (let i = 0; i < checkboxes.length; i++) {
        if (checkboxes[i].checked) {
          let indexed = repo.findIndex(
            (find) => find.id === Number(checkboxes[i].id)
          );
          repo[indexed].pinned = true;
        } else if (!checkboxes[i].checked) {
          let indexed = repo.findIndex(
            (find) => find.id === Number(checkboxes[i].id)
          );
          repo[indexed].pinned = false;
        }
        pinnedRepo(repo);
      }
    }
  });
};

const limitChecks = () => {
  let countMessage = document.querySelector("#maxMessage");
  const checkboxes = document.getElementsByName("checkbox");
  const limit = 4;
  countMessage.innerHTML = "";
  for (let i = 0; i < checkboxes.length; i++) {
    let checkcount = 0;
    for (let i = 0; i < checkboxes.length; i++) {
      checkcount += checkboxes[i].checked ? 1 : 0;
      countMessage.innerHTML = `${limit - checkcount} remaining`;
    }
  }
  for (let i = 0; i < checkboxes.length; i++) {
    checkboxes[i].onclick = function () {
      let checkcount = 0;
      for (let i = 0; i < checkboxes.length; i++) {
        checkcount += checkboxes[i].checked ? 1 : 0;
        countMessage.innerHTML = `${limit - checkcount} remaining`;
      }
      if (checkcount >= limit) {
        let checked = document.querySelectorAll(".checkboxes");
        for (const item of checked) {
          if (item.checked === false) {
            item.setAttribute("disabled", "true");
            clearCheck();
          }
        }
      }
    };
  }
};

const clearCheck = () => {
  let countMessage = document.querySelector("#maxMessage");
  const checkboxes = document.getElementsByName("checkbox");
  const limit = 4;
  for (let i = 0; i < checkboxes.length; i++) {
    checkboxes[i].onclick = function () {
      var checkcount = 0;
      for (let i = 0; i < checkboxes.length; i++) {
        checkcount += checkboxes[i].checked ? 1 : 0;
      }
      if ((checkcount = limit - 1)) {
        countMessage.innerHTML = `${limit - checkcount} remaining`;
        let checked = document.querySelectorAll(".checkboxes");
        for (const item of checked) {
          item.removeAttribute("disabled");
          limitChecks();
        }
      }
    };
  }
};

const onStart = () => {
  renderNav();
  renderProfile();
  renderAbout();
  repoForm();
  pinnedRepo(repo);
  renderFooter();
  pinRepoEvent();
};

onStart();
