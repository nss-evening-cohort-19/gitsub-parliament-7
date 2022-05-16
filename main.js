import { repo } from "./data.js";
import { renderToDom } from "./utils/renderToDom.js";
import { renderNav, renderFooter } from "./renderHeaderFooter.js";
import { renderProfile } from "./renderProfile.js";

// const renderProfile = () => {
//   let domString = `<div class="profile-card card" >
// <img src="images/snoop.png" class="card-img-top" alt="...">
// <div class="snoop-card card-body">
//   <h3 class="card-title">Snoop Dogg</h3>
//   <p class="card-text">“You don't get respect if you don't deserve it.”</p>
//   <button type="button" class="btn btn-secondary btn-sm">Follow</button>
//   <button type="button" class="btn btn-secondary btn-sm">💓 Sponsor</button>
//   <button type="button" class="btn btn-secondary btn-sm">...</button>
//   <div class="stats">
//   <span class="follow list-group-item">1.8K followers</span>
//   <span class="follow list-group-item">27 Following</span>
//   <span class="follow list-group-item">⭐️ 329</span>
//   </div>
// </div>
// <ul class="list-group list-group-flush">
//   <a class="points" href="#"><li class="list-group-item">📍 New York, New York</li></a>
//   <a class="points" href="#"><li class="list-group-item">📩  github@aboutsnoop.com</li></a>
//   <a class="points" href="#"><li class="list-group-item">🕊 @indigitacolor</li></a>
// </ul>
// <h5 class="card-title">Highlights</h5>
// <ul class="list-group list-group-flush">
//   <li class="list-group-item">📍 New York, New York</li>
//   <a class="points"  href="#"><li class="list-group-item">❄️ Arcitc Code Vault</li></a>
//   <a class="points"  href="#"><li class="list-group-item">⭐️ GitHub Star</li></a>
//   <a class="points"  href ="#"><li class="list-group-item">⭐️ Pro</li></a>
// </ul>
// <div class="card-body">
// <h5 class="org-title card-title">Organizations</h5>
//   <a href="https://github.com/nss-evening-cohort-19" class="card-link"><img class="card-link" src="https://avatars.githubusercontent.com/u/100445756?s=64&v=4"/></a>
//   <a href="https://github.com/Urban-Green-Lab" class="card-link"><img class="card-link" src="https://avatars.githubusercontent.com/u/61482433?s=64&v=4"/></a>
//   <a href="https://github.com/HealthTeacher" class="card-link"><img class="card-link" src="https://avatars.githubusercontent.com/u/1416897?s=64&v=4"/></a>
// </div>
// <div class="card-body">
// <h5 class="org-title card-title">Sponsors</h5>
// <div class="sponsors">
//   <a href="https://github.com/rochelle-rossman" class="card-link"><img class="spon-img" src="https://avatars.githubusercontent.com/u/102299152?s=96&v=4"/></a>
//   <a href="https://github.com/blackcl3" class="card-link"><img class="spon-img" src="https://avatars.githubusercontent.com/u/24661749?s=96&v=4"/></a>
//   <a href="https://github.com/ImadOttallah" class="card-link"><img class="spon-img" src="https://avatars.githubusercontent.com/u/99231245?s=96&v=4"/></a>
//   <a href="https://github.com/TwoFivinClimber" class="card-link"><img class="spon-img" src="https://avatars.githubusercontent.com/u/100610149?s=96&v=4"/></a>
//  </div>
// </div>
// </div>`;
//   renderToDom("#profile", domString);
// };

const renderAbout = () => {
  const domString = `<div class="card">
  <div class="card-body">
    <h5 class="card-title">Hi I'm Snoop Dogg 👋🏾 🎤</h5>
    <img src="images/snoop-wallpaper.jpeg" class="snoop-wall card-img-bottom" alt="...">
    <p class="card-text">"I am thrilled and appreciative of the opportunity to acquire the iconic and culturally significant Death Row Records brand, which has immense untapped future value," the 50-year-old Snoop Dogg said in a statement. "It feels good to have ownership of the label I was part of at the beginning of my career and as one of the founding members. This is an extremely meaningful moment for me."</p>
    <div class="card mb-3" id="aroundWeb">
  <div class="row g-0">
    <div class="col-md-4" >
      <img src="images/snoop-cartoon.png" id="snoopCartoon"class="img-fluid rounded-start" alt="...">
    </div>
    <div class="col-md-8">
      <div class="card-body">
        <h5 class="card-title">Find Me Around The Web</h5>
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
  <button id="repoModal-btn" type="button" class="repo-btn btn btn-primary" data-bs-toggle="modal" data-bs-target="#exampleModal">
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
      domString += `<div class=repo-card>
      <div class="card">
      <span class="cardTxt list-group-item">${pin.name}</span>
    <div class="card-footer"><div><span class="dot"></span>${pin.primaryLang}</div>
    </div>
  </div></div>`;
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
      a;
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
  const limit = 6;
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
