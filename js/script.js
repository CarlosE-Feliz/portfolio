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
        console.log(projects[i]);
        techHTML += `<li class="modal-language">${projects[i].tech[l]}</li>`;
      }

      divProject.innerHTML = '<section class="modal-header flex">'
          + '<div class="top-side-modal flex">'
            + `<p>${projects[projectId].title}</p>`
            + '<a class="close-popup">&times;</a>'
           + '</div>'
          + '</section>'
          + '<div>'
           + `<img src="./media/tuseeg.png" width="350px" src="${projects[projectId].imgUrl}" alt="placeholder>`
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