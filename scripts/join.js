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

//  Create and render user lunch selction list
const div2 = document.createElement('div'); // second div in the li element

// Creating input (radio button) for each menu
const menus = ['menu1', 'menu2', 'menu3', 'menu4', 'menu5']; // menu options

menus.forEach((menu) => {
  const span = document.createElement('span');
  const label = document.createElement('label');
  label.setAttribute('for', menu);
  label.textContent = menu;

  const input = document.createElement('input');
  input.setAttribute('type', 'radio');
  input.setAttribute('name', 'menu');
  input.setAttribute('value', menu);

  span.append(label, input);
  div2.appendChild(span);
});

// Render the content for the selected date
const days = ['Thursday 13th of April 2023', 'Friday 14th of April 2023']; // Conference days options
const inputValues = ['day-1-norm', 'day-2-norm', 'day-1-std', 'day-2-std']; // single day selection options
const inputs = document.querySelectorAll('input'); // all input elements (radio button) in the select ticket section
const ul = document.querySelector('.lunch-selection'); // ul element to append the li elements

inputs.forEach((input) => {
  input.addEventListener('click', (e) => {
    // Remove previous li elements
    while (ul.firstChild) {
      ul.removeChild(ul.firstChild);
    }

    if (inputValues.includes(e.target.value)) {
      const li = document.createElement('li');
      const div1 = document.createElement('div');

      if (e.target.value === 'day-1-norm' || e.target.value === 'day-1-std') {
        const firstDay = days[0];
        div1.innerText = firstDay;
      } else {
        const secondDay = days[1];
        div1.innerText = secondDay;
      }
      li.append(div1, div2);
      ul.appendChild(li);
    } else {
      days.forEach((day) => {
        const li = document.createElement('li');
        const div1 = document.createElement('div');
        div1.innerText = day;

        const div2Clone = div2.cloneNode(true); // Create a new instance of div2 for each li
        li.append(div1, div2Clone);
        ul.appendChild(li);
      });
    }
  });
});