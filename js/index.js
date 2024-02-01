// const mobileBtn = document.getElementById('mobileBtn');
// const modal = document.querySelector('.mobileFormClose');
// const close = document.querySelector('.close');
// const headerBtn = document.querySelector('#headerBtn');

// mobileBtn.addEventListener('click', () => {
//   modal.classList.toggle('mobileFormView');
// });

// headerBtn.addEventListener('click', () => {
//   modal.classList.toggle('mobileFormView');
// });

// close.addEventListener('click', () => {
//   modal.classList.toggle('mobileFormView');
// });

const openNavIcon = document.querySelector('.nav-icon');
const closeNavIcon = document.querySelector('.close');
const toggleNavBar = document.querySelector('.close-navbar');
const navList = document.querySelectorAll('.nav-list');
const body = document.querySelector('body');

// Navbar functions
const handleClick = () => {
  toggleNavBar.classList.toggle('open-navbar');
};

openNavIcon.addEventListener('click', handleClick);
closeNavIcon.addEventListener('click', handleClick);

navList.forEach((navItem) => {
  navItem.addEventListener('click', handleClick);
});
