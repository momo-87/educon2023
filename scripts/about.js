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

// Add eventListener to toggle the active status of a navbar menu item
const navLinks = document.querySelectorAll('.navLink');
let currentLink = navLinks[1];
navLinks.forEach((link) => {
  link.addEventListener('click', (e) => {
    if (e.target.innerHTML !== currentLink.innerHTML) {
      const prevLink = currentLink;
      prevLink.classList.toggle('active');
      currentLink = e.target;
      currentLink.classList.toggle('active');
    }
  });
});