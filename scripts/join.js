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

// Add eventListener to toggle the active status of a selected price
// const prices = document.querySelectorAll('.price');
// prices.forEach((price) => {
//   price.addEventListener('click', (e) => {
//     e.target.classList.toggle('selected-price');
//   });
// });

//  Create and render user lunch selction list
const li = document.createElement('li');
const ul = document.querySelector('.lunch-selection');