// Add eventListener to toggle the active status of a navbar menu item
const navLinks = document.querySelectorAll('.navLink');
let currentLink = navLinks[3];
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