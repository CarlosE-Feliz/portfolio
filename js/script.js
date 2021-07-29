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
    tech: ['HTML', 'JavaScript', 'Css', 'Ruby'],
    imgUrl: './media/tuseeg.png',
  },
  {
    title: 'About the project #1',
    description: 'Description of the proyect, date and languages',
    tech: ['HTML', 'JavaScript', 'Css', 'Ruby'],
    imgUrl: './media/tuseeg.png',
  },
  {
    title: 'About the project #2',
    description: 'Description of the proyect, date and languages',
    tech: ['HTML', 'JavaScript', 'Css', 'Ruby'],
    imgUrl: './media/tuseeg.png',
  },
  {
    title: 'About the project #3',
    description: 'Description of the proyect, date and languages',
    tech: ['HTML', 'JavaScript', 'Css', 'Ruby'],
    imgUrl: './media/tuseeg.png',
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
           + `<img src="./media/tuseeg.png" width="330px" src="${projects[projectId].imgUrl}" alt="placeholder>`
          + '</div>'
          + '<section class="modal-section">'
           + '<div class="modal-description">'
            + `<p id = "P-description"class="modal-P">${projects[projectId].description}</p>`
            + '</div>'
            + '<div class="modal-div-language flex">'
             + `<ul id="project-list">${techHTML}</ul>`
            + '</div>'
            + '<div class="modal-div-sources flex">'
             + '<button class="modal-buttons">See Live<a href="#"></a></button>'
              + '<button class="modal-buttons">See Source<a href="#"></a></button>'
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
  e.preventDefault();
  if (camps.email && camps.email) {
    forms.reset();
  }
});
