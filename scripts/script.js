const speakers = [{
  photo: './images/speaker1.png',
  name: 'Yochai Benkler',
  position: 'Berkman Professor of Entrepreneurial Legal Studies',
  description: 'Benkler studies commons based peer production, and published his seminal book. The Wealth of Networks in 2006',
},
{
  photo: './images/speaker1.png',
  name: 'Yochai Benkler',
  position: 'Berkman Professor of Entrepreneurial Legal Studies',
  description: 'Benkler studies commons based peer production, and published his seminal book. The Wealth of Networks in 2006',
},
{
  photo: './images/speaker1.png',
  name: 'Yochai Benkler',
  position: 'Berkman Professor of Entrepreneurial Legal Studies',
  description: 'Benkler studies commons based peer production, and published his seminal book. The Wealth of Networks in 2006',
},
{
  photo: './images/speaker1.png',
  name: 'Yochai Benkler',
  position: 'Berkman Professor of Entrepreneurial Legal Studies',
  description: 'Benkler studies commons based peer production, and published his seminal book. The Wealth of Networks in 2006',
},
{
  photo: './images/speaker1.png',
  name: 'Yochai Benkler',
  position: 'Berkman Professor of Entrepreneurial Legal Studies',
  description: 'Benkler studies commons based peer production, and published his seminal book. The Wealth of Networks in 2006',
},
{
  photo: './images/speaker1.png',
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
const featuredSpeakers = document.querySelector('#featuredSpeakers');

for (let i = 0; i < speakers.length; i += 1) {
  // create the speakerBox and append it to featuredSpeakers section
  speakerBoxs[i] = document.createElement('div');
  speakerBoxs[i].classList.add('speakerBox', 'd-flex');
  featuredSpeakers.appendChild(speakerBoxs[i]);

  // Create speaker image and append it to speakerBox
  speakerPhotos[i] = document.createElement('img');
  speakerPhotos[i].src = speakers[i].photo;
  speakerPhotos[i].alt = 'speaker 1';
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

  // Create speaker descriotion and append it to speakerDetailsBox
  speakerDescription[i] = document.createElement('p');
  speakerDescription[i].innerHTML = speakers[i].description;
  speakerDetailsBox[i].appendChild(speakerDescription[i]);
}
