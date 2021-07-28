const btnT = document.querySelector('.btn');
btnT.addEventListener('click', () => { document.getElementById('menu').classList.toggle('active'); });
const btn2 = document.querySelector('.menu');
btn2.addEventListener('click', () => { document.getElementById('menu').classList.toggle('active'); });

// Data store
const projects = [
  {
    title: 'Your seg insurance brokers',
    description: 'Website inspired by the insurance company TUSEG',
    tech: ['HTML', 'JavaScript', 'Css'],
    imgUrl: './media/tuseeg.png',
  },
  {
    title: 'About the project',
    description: 'Description of the proyect, date and languages',
    tech: ['HTML', 'JavaScript', 'Css'],
    imgUrl: 'https://st.depositphotos.com/1775533/1288/i/950/depositphotos_12884387-stock-photo-blind-man.jpg',
  },
  {
    title: 'About the project',
    description: 'Description of the proyect, date and languages',
    tech: ['HTML', 'JavaScript', 'Css'],
    imgUrl: 'https://st.depositphotos.com/1775533/1288/i/950/depositphotos_12884387-stock-photo-blind-man.jpg',
  },
  {
    title: 'About the project',
    description: 'Description of the proyect, date and languages',
    tech: ['HTML', 'JavaScript', 'Css'],
    uimgUrl: 'https://st.depositphotos.com/1775533/1288/i/950/depositphotos_12884387-stock-photo-blind-man.jpg',
  },
];
