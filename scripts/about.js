const openMobileMenuButton = document.querySelector('#openNavbar');
const navbar = document.querySelector('#navbar');
const closeMobileMenu = document.querySelector('.closeMobileMenu');

openMobileMenuButton.addEventListener('click', () => {
  navbar.classList.add('mobileSizeNavBar');
  openMobileMenuButton.classList.add('hide');
});

closeMobileMenu.addEventListener('click', () => {
  navbar.classList.remove('mobileSizeNavBar');
});