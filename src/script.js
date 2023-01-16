const sideNavBtn = document.getElementById("side-nav-btn");
const vSideNavBtn = document.getElementById("v-side-nav-btn");
const navSubMenu = document.getElementById("nav-sub-menu");

sideNavBtn.addEventListener('click', () => {
navSubMenu.classList.toggle('toggle');
vSideNavBtn.classList.toggle('v-toggle');
sideNavBtn.classList.toggle('arrow-toggle');

})

vSideNavBtn.addEventListener('click', () => {
navSubMenu.classList.toggle('toggle');
vSideNavBtn.classList.toggle('v-toggle');
sideNavBtn.classList.toggle('arrow-toggle');

})