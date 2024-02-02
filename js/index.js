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
const purrAddressBtn = document.querySelectorAll('#purrAddressBtn');

// Navbar functions
const handleClick = () => {
  toggleNavBar.classList.toggle('open-navbar');
};

const handlePurAddress = () => {
  purrAddressBtn.forEach((btn) => {
    btn.classList.add('purrAddress');
  });

  // remove the class immediately
  setTimeout(() => {
    purrAddressBtn.forEach((btn) => {
      btn.classList.remove('purrAddress');
    });
  }, 700);
};

purrAddressBtn.forEach((btn) => {
  btn.addEventListener('click', handlePurAddress);
});
openNavIcon.addEventListener('click', handleClick);
closeNavIcon.addEventListener('click', handleClick);
