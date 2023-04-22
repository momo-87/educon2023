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

const speakers = [{
  photo: './images/speaker1.png',
  name: 'Yochai Benkler',
  position: 'Berkman Professor of Entrepreneurial Legal Studies',
  description: 'Benkler studies commons based peer production, and published his seminal book. The Wealth of Networks in 2006',
},
{
  photo: './images/speaker2.png',
  name: 'Yochai Benkler',
  position: 'Berkman Professor of Entrepreneurial Legal Studies',
  description: 'Benkler studies commons based peer production, and published his seminal book. The Wealth of Networks in 2006',
},
{
  photo: './images/speaker3.png',
  name: 'Yochai Benkler',
  position: 'Berkman Professor of Entrepreneurial Legal Studies',
  description: 'Benkler studies commons based peer production, and published his seminal book. The Wealth of Networks in 2006',
},
{
  photo: './images/speaker4.png',
  name: 'Yochai Benkler',
  position: 'Berkman Professor of Entrepreneurial Legal Studies',
  description: 'Benkler studies commons based peer production, and published his seminal book. The Wealth of Networks in 2006',
},
{
  photo: './images/speaker5.png',
  name: 'Yochai Benkler',
  position: 'Berkman Professor of Entrepreneurial Legal Studies',
  description: 'Benkler studies commons based peer production, and published his seminal book. The Wealth of Networks in 2006',
},
{
  photo: './images/speaker6.png',
  name: 'Yochai Benkler',
  position: 'Berkman Professor of Entrepreneurial Legal Studies',
  description: 'Benkler studies commons based peer production, and published his seminal book. The Wealth of Networks in 2006',
},
];

const speakerBoxs = [];
const speakerPhotos = [];
const speakerDetailsBox = [];
const speakerNames = [];
const speakerPositions = [];
const speakerDescription = [];
const speakerPositionUnderline = [];
const featuredSpeakersBox = document.querySelector('#featuredSpeakersBox');

for (let i = 0; i < speakers.length; i += 1) {
  // create the speakerBox and append it to featuredSpeakersBox div
  speakerBoxs[i] = document.createElement('article');
  speakerBoxs[i].classList.add('speakerBox', 'flex-row');
  featuredSpeakersBox.appendChild(speakerBoxs[i]);

  // Create speaker image and append it to speakerBox
  speakerPhotos[i] = document.createElement('img');
  speakerPhotos[i].src = speakers[i].photo;
  speakerPhotos[i].alt = 'speaker 1';
  speakerPhotos[i].className = 'speakerImage';
  speakerBoxs[i].appendChild(speakerPhotos[i]);

  // Create speakerDetailsBox and append it to speakerBox
  speakerDetailsBox[i] = document.createElement('div');
  speakerDetailsBox[i].classList.add('speakerDetailsBox');
  speakerBoxs[i].appendChild(speakerDetailsBox[i]);

  // Create speaker title and append it to speakerDetailsBox
  speakerNames[i] = document.createElement('h3');
  speakerNames[i].innerHTML = speakers[i].name;
  speakerDetailsBox[i].appendChild(speakerNames[i]);

  // Create speaker position and append it to speakerDetailsBox
  speakerPositions[i] = document.createElement('h4');
  speakerPositions[i].innerHTML = speakers[i].position;
  speakerDetailsBox[i].appendChild(speakerPositions[i]);

  // Create speaker position undelineBox and append it to speakerDetailsBox
  speakerPositionUnderline[i] = document.createElement('div');
  speakerPositionUnderline[i].classList.add('underline');
  speakerDetailsBox[i].appendChild(speakerPositionUnderline[i]);

  // Create speaker description and append it to speakerDetailsBox
  speakerDescription[i] = document.createElement('p');
  speakerDescription[i].innerHTML = speakers[i].description;
  speakerDetailsBox[i].appendChild(speakerDescription[i]);
}

// Display only two speakersBoxs by default on mobile screen
if (window.innerWidth < 768) {
  for (let j = 2; j < speakers.length; j += 1) {
    speakerBoxs[j].style.display = 'none';
  }
}

// Add evenListener to MORE button
const moreSpeakersButton = document.querySelector('.moreSpeakersButton');
moreSpeakersButton.addEventListener('click', () => {
  for (let j = 2; j < speakers.length; j += 1) {
    speakerBoxs[j].style.display = 'flex';
  }
  moreSpeakersButton.style.display = 'none';
});
