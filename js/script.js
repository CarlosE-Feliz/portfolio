/* eslint-disable dot-notation */
/* eslint-disable default-case */
const btnT = document.querySelector('.btn');
btnT.addEventListener('click', () => { document.getElementById('menu').classList.toggle('active'); });
const btn2 = document.querySelector('.menu');
btn2.addEventListener('click', () => { document.getElementById('menu').classList.toggle('active'); });

// Data store
const projects = [
  {
    title: 'Your seg insurance brokers',
    description: 'Website inspired by the insurance company TUSEG',
    tech: ['HTML', 'Css'],
    imgUrl: './media/tuseeg.png',
    live: 'https://xjokeer.github.io/Tuseg-pagina-web/',
    source: 'https://github.com/xJokeer/Tuseg-pagina-web',
  },
  {
    title: 'Microverse Capstone',
    description: 'Project inspired by architecture, my purpose is to show the most talented young people of our era in the world of architecture.',
    tech: ['HTML', 'JavaScript', 'Css', 'Boostrap'],
    imgUrl: 'https://user-images.githubusercontent.com/74747182/130336584-3699e1a0-0688-49e5-8546-f75df7116032.png',
    live: 'https://xjokeer.github.io/Capstone_Microverse/',
    source: 'https://github.com/xJokeer/Capstone_Microverse',
  },
  {
    title: 'Math Magician',
    description: 'Want to do some maths? Use this beautiful app and you can get all the result that you want',
    tech: ['HTML', 'JavaScript', 'Css', 'React'],
    imgUrl: 'https://user-images.githubusercontent.com/74747182/140832617-8640f5d9-4693-478b-9cec-867cc234dcc9.png',
    live: 'https://xjokeer-math.netlify.app/',
    source: 'https://github.com/xJokeer/REACT-Math-magicians',
  },
  {
    title: 'Book store',
    description: 'Do you want to keep your books? this is the best app to do it!',
    tech: ['HTML', 'JavaScript', 'Css', 'React', 'Redux'],
    imgUrl: 'https://user-images.githubusercontent.com/74747182/140833612-c64a887c-ffa4-4088-8410-cdf7fcc66d2a.png',
    live: 'https://xjoker-boo-store.netlify.app/',
    source: 'https://github.com/xJokeer/REACT-bookstore',
  },
];

const btns = document.querySelectorAll('.popup-button');
const divProject = document.createElement('div');

function addEventListenerList() {
  for (let i = 0; i < btns.length; i += 1) {
    btns[i].addEventListener('click', (event) => {
      const projectId = event.target.id;
      divProject.id = 'modal';
      divProject.className = 'modal flex';
      document.querySelector('.overal').style.display = 'flex';

      let techHTML = '';
      for (let l = 0; l < projects[i].tech.length; l += 1) {
        techHTML += `<li class="modal-language">${projects[i].tech[l]}</li>`;
      }

      divProject.innerHTML = '<section class="modal-header flex">'
          + '<div class="top-side-modal flex">'
            + `<p>${projects[projectId].title}</p>`
            + '<a class="close-popup">&times;</a>'
           + '</div>'
          + '</section>'
          + '<div class="popup-img">'
           + `<img width="330px" src="${projects[projectId].imgUrl}" alt="placeholder>`
          + '</div>'
          + '<section class="modal-section">'
           + '<div class="modal-description">'
            + `<p id = "P-description"class="modal-P">${projects[projectId].description}</p>`
            + '</div>'
            + '<div class="modal-div-language flex">'
             + `<ul id="project-list">${techHTML}</ul>`
            + '</div>'
            + '<div class="modal-div-sources flex">'
             + `<button class="modal-buttons"><a target="_blank" href="${projects[projectId].live}">See Live</a></button>`
              + `<button class="modal-buttons"><a target="_blank" href="${projects[projectId].source}">See Source</a></button>`
           + '</div>'
          + '</section>';

      document.getElementById('overal').appendChild(divProject);

      const erase = document.querySelector('.close-popup');
      erase.addEventListener('click', () => {
        document.querySelector('.overal').style.display = 'none';
        divProject.remove();
      });
    });
  }
}
addEventListenerList();

// validate form
const expresiones = {
  name: /^[a-zA-ZÀ-ÿ\s]{1,40}$/,
  email: /^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]+$/,
};

const camps = {
  name: false,
  email: false,
};
const forms = document.getElementById('form');
const inputs = document.querySelectorAll('#form input');

const validateform = (e) => {
  switch (e.target.name) {
    case 'name':
      if (expresiones.name.test(e.target.value)) {
        document.getElementById('name').classList.remove('incorrect_name');
        document.getElementById('name').classList.add('correct_name');
        document.querySelector('#form .name-error').classList.remove('name-error_active');
        camps.name = true;
      } else {
        document.getElementById('name').classList.add('incorrect_name');
        document.getElementById('name').classList.remove('correct_name');
        document.querySelector('#form .name-error').classList.add('name-error_active');
        camps.name = false;
      }
      break;
    case 'email':
      if (expresiones.email.test(e.target.value)) {
        document.getElementById('email-form').classList.remove('incorrect_email');
        document.getElementById('email-form').classList.add('correct_email');
        document.querySelector('#form .email-error').classList.remove('email-error_active');
        camps.email = true;
      } else {
        document.getElementById('email-form').classList.add('incorrect_email');
        document.getElementById('email-form').classList.remove('correct_email');
        document.querySelector('#form .email-error').classList.add('email-error_active');
        camps.email = false;
      }
      break;
  }
};

inputs.forEach((input) => {
  input.addEventListener('keyup', validateform);
  input.addEventListener('blur', validateform);
});

forms.addEventListener('submit', (e) => {
  const mail = document.getElementById('email-form').value;
  const valid = /[A-Z]/.test(mail);
  if (valid) {
    document.querySelector('.email-error').style.display = 'flex';
    e.preventDefault();
  } else {
    document.querySelector('.email-error').style.display = 'none';
  }
});

// LocalStorage

let data = {};
// eslint-disable-next-line no-unused-vars
function storage() {
  const fullName = forms.elements['name'].value;
  const email = forms.elements['email'].value;
  const textarea = forms.elements['textarea'].value;
  data = {
    fullName,

    email,

    textarea,
  };
  localStorage.setItem('data', JSON.stringify(data));
}

const getData = () => {
  const getInputs = document.querySelectorAll('.footer-input');
  const savedData = JSON.parse(localStorage.getItem('data'));
  const convert = { ...savedData };

  if (!Object.values(convert).every((o) => o === '')) {
    for (let i = 0; i < getInputs.length; i += 1) {
      getInputs[i].value = Object.values(convert)[i];
      // console.log(getInputs[i].value);
    }
  }
};
getData();