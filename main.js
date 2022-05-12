import { projectDataSet, repo, packages } from "./data.js";

const renderToDom = (divId, textToRender) => {
  const selectedDiv = document.querySelector(divId);
  selectedDiv.innerHTML = textToRender;
};


const renderNav = () => {
  let domString = `<nav class="navbar navbar-expand-lg navbar-light bg-light">
  <div class="container-fluid">
    <a class="navbar-brand" href="#"></a>
    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
      <span class="navbar-toggler-icon"></span>
    </button>
    <div class="collapse navbar-collapse" id="navbarNavAltMarkup">
      <div class="navbar-nav">
        <a class="nav-link active" aria-current="page" href="index.html">📖 Overview</a>
        <a class="nav-link active" href="repo.html">🖥 Repositories</a>
        <a class="nav-link active" href="project.html">🧮 Projects</a>
        <a class="nav-link active" href="package.html">📦 Packages</a>
      </div>
    </div>
  </div>
</nav>`;
  renderToDom("#nav-bar", domString);
};

const renderProfile = () => {
  let domString = `<div class="card" style="width: 18rem;">
<img src="snoop.png" class="card-img-top" alt="...">
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

// const renderAbout = () => {
//   const domString = `<div class="card">
//   <div class="card-body">
//     <h5 class="card-title">Hi I'm Snoop Dogg 👋🏾 🎤</h5>
//     <img src="..." class="card-img-bottom" alt="...">
//     <p class="card-text">"I am thrilled and appreciative of the opportunity to acquire the iconic and culturally significant Death Row Records brand, which has immense untapped future value," the 50-year-old Snoop Dogg said in a statement. "It feels good to have ownership of the label I was part of at the beginning of my career and as one of the founding members. This is an extremely meaningful moment for me."</p>
//     <div class="card mb-3" style="max-width: 540px;">
//   <div class="row g-0">
//     <div class="col-md-4">
//       <img src="..." class="img-fluid rounded-start" alt="...">
//     </div>
//     <div class="col-md-8">
//       <div class="card-body">
//         <h5 class="card-title">Find Me Around The Wen</h5>
//         <ul>
//           <li> Learning to Rap in the <a href="#">Community</a></li>
//           <li> Turning the knobs in the <a href="#">Studio</a></li>
//           <li> Check me out on the <a href="#">Socials</a></li>
//         </ul>
//       </div>
//     </div>
//   </div>
// </div>
//   </div>
// </div>`;
//   renderToDom("#aboutMe", domString);
// };

const renderFooter = () => {
  let domString = `<footer><nav class="navbar navbar-expand-lg navbar-light bg-light">
  <div class="container-fluid">
    <a class="navbar-brand" href="#"></a>
    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
      <span class="navbar-toggler-icon"></span>
    </button>
    <div class="collapse navbar-collapse" id="navbarNavAltMarkup">
      <div class="navbar-nav">
        <a class="nav-link" href="#">2021 GitHub, Inc.</a>
        <a class="nav-link active" href="#">Terms</a>
        <a class="nav-link active" href="#">Privacy</a>
        <a class="nav-link active" href="#">Security</a>
        <a class="nav-link active" href="#">Status</a>
        <a class="nav-link active" href="#">Help</a>
        <a class="nav-link active" href="#">🙀</a>
        <a class="nav-link active" href="#">Contact GitHub</a>
        <a class="nav-link active" href="#">Pricing</a>
        <a class="nav-link active" href="#">API</a>
        <a class="nav-link active" href="#">Training</a>
        <a class="nav-link active" href="#">Blog</a>
        <a class="nav-link active" href="#">About</a>
      </div>
    </div>
  </div>
</nav></footer>`;
  renderToDom("#footer", domString);
};

renderNav();
renderProfile();
// renderAbout();
renderFooter();
