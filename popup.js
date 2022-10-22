const projects = [];

const projectOne = {
  id: 'projectOne',
  img: './images/popupImage.jpg',
  name: 'Keeping track of hundreds of components',
  tech: ['Codekit', 'GitHub', 'JavaScript', 'Bootstrap', 'Terminal', 'Codepen'],
  description: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry`s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it 1960s with the releaLorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry`s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it 1960s with the relea',
  demo: '',
  source: '',
};

projects.push(projectOne);

const projectTwo = {
  id: 'projectTwo',
  img: './images/popupImage.jpg',
  name: 'Keeping track of hundreds of components',
  tech: ['Codekit', 'GitHub', 'JavaScript', 'Bootstrap', 'Terminal', 'Codepen'],
  description: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry`s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it 1960s with the releaLorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry`s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it 1960s with the relea',
  demo: '',
  source: '',
};

projects.push(projectTwo);

const projectThree = {
  id: 'projectThree',
  img: './images/popupImage.jpg',
  name: 'Keeping track of hundreds of components',
  tech: ['Codekit', 'GitHub', 'JavaScript', 'Bootstrap', 'Terminal', 'Codepen'],
  description: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry`s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it 1960s with the releaLorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry`s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it 1960s with the relea',
  demo: '',
  source: '',
};

projects.push(projectThree);

const projectFour = {
  id: 'projectFour',
  img: './images/popupImage.jpg',
  name: 'Keeping track of hundreds of components',
  tech: ['Codekit', 'GitHub', 'JavaScript', 'Bootstrap', 'Terminal', 'Codepen'],
  description: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry`s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it 1960s with the releaLorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry`s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it 1960s with the relea',
  demo: '',
  source: '',
};

projects.push(projectFour);

const projectFive = {
  id: 'projectFive',
  img: './images/popupImage.jpg',
  name: 'Keeping track of hundreds of components',
  tech: ['Codekit', 'GitHub', 'JavaScript', 'Bootstrap', 'Terminal', 'Codepen'],
  description: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry`s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it 1960s with the releaLorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry`s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it 1960s with the relea',
  demo: '',
  source: '',
};

projects.push(projectFive);

const projectSix = {
  id: 'projectSix',
  img: './images/popupImage.jpg',
  name: 'Keeping track of hundreds of components',
  tech: ['Codekit', 'GitHub', 'JavaScript', 'Bootstrap', 'Terminal', 'Codepen'],
  description: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry`s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it 1960s with the releaLorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry`s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it 1960s with the relea',
  demo: '',
  source: '',
};

projects.push(projectSix);

// eslint-disable-next-line no-unused-vars
function projectClick(event) {
  const clickedId = event.target.id;

  // eslint-disable-next-line no-plusplus
  for (let i = 0; i < projects.length; i++) {
    if (projects[i].id === clickedId) {
      const body = document.querySelector('body');
      const popupSection = document.createElement('section');
      popupSection.className = 'popupSection';
      body.appendChild(popupSection);

      const insideContainer = document.createElement('div');
      insideContainer.className = 'insideDiv';
      popupSection.appendChild(insideContainer);

      const imageContainer = document.createElement('div');
      imageContainer.className = 'popupImage';
      insideContainer.appendChild(imageContainer);

      const closeIcon = document.createElement('button');
      closeIcon.className = 'closeButton';
      closeIcon.innerHTML = '<button onclick="closeWindow()" id="closeButton" ><img src="images/closed-icon.png" alt="CloseIcon"/></i></button>';
      imageContainer.appendChild(closeIcon);

      const img = document.createElement('img');
      img.setAttribute('src', projects[i].img);
      img.className = 'popupImg';
      img.setAttribute('alt', 'Project image');
      imageContainer.appendChild(img);

      const careersTitle = document.createElement('h3');
      careersTitle.innerHTML = projects[i].name;
      insideContainer.appendChild(careersTitle);

      const techList = document.createElement('ul');
      insideContainer.appendChild(techList);

      // eslint-disable-next-line no-plusplus
      for (let j = 0; j < projects[i].tech.length; j++) {
        const list = document.createElement('li');
        list.innerHTML = projects[i].tech[j];
        techList.appendChild(list);
      }

      const p = document.createElement('p');
      p.innerHTML = 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry`s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it 1960s with the releaLorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry`s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it 1960s with the relea';
      insideContainer.appendChild(p);

      const link = document.createElement('div');
      link.className = 'link';
      insideContainer.appendChild(link);

      const seeLive = document.createElement('button');
      seeLive.className = 'seeLive';
      seeLive.innerHTML = '<button type="button" id="btnLive" class="btn">See Live <i class="fa fa-up-right-from-square"></i></button ';
      link.appendChild(seeLive);

      const seeSource = document.createElement('button');
      seeSource.className = 'seeSource';
      seeSource.innerHTML = '<button type="button" id="btnSource" class="btn">See Source <i class="fa fa-github"></i></i></button ';
      link.appendChild(seeSource);
    }
  }
}

// eslint-disable-next-line no-unused-vars
function closeWindow() {
  const iconClose = document.getElementsByClassName('popupSection');
  iconClose[0].style.display = 'none';
  iconClose[0].remove();
}

// cards section
const cards = [{
  id: 0,
  title: 'Multi-Post Stories Gain+Glory',
  descriptionPopup: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s.",
  tech: ['html', 'css', 'bootstrap', 'Ruby'],
  btnText: 'See Project',
  sourceURL: 'https://github.com/187jjay187/My-Portfolio-Main',
  livePreview: 'https://github.com/187jjay187/187jjay187.github.io',

},
{
  id: 1,
  title: 'Multi-Post Stories Gain+Glory',
  descriptionPopup: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s.",
  tech: ['html', 'css', 'bootstrap', 'Ruby'],
  btnText: 'See Project',
  sourceURL: 'https://github.com/187jjay187/My-Portfolio-Main',
  livePreview: 'https://github.com/187jjay187/187jjay187.github.io',

},
{
  id: 2,
  title: 'Multi-Post Stories Gain+Glory',
  descriptionPopup: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s.",
  tech: ['html', 'css', 'bootstrap', 'Ruby'],
  btnText: 'See Project',
  sourceURL: 'https://github.com/187jjay187/My-Portfolio-Main',
  livePreview: 'https://github.com/187jjay187/187jjay187.github.io',

},
{
  id: 3,
  title: 'Multi-Post Stories Gain+Glory',
  descriptionPopup: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s.",
  tech: ['html', 'css', 'bootstrap', 'Ruby'],
  btnText: 'See Project',
  sourceURL: 'https://github.com/187jjay187/My-Portfolio-Main',
  livePreview: 'https://github.com/187jjay187/187jjay187.github.io',

},
{
  id: 4,
  title: 'Multi-Post Stories Gain+Glory',
  descriptionPopup: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s.",
  tech: ['html', 'css', 'bootstrap', 'Ruby'],
  btnText: 'See Project',
  sourceURL: 'https://github.com/187jjay187/My-Portfolio-Main',
  livePreview: 'https://github.com/187jjay187/187jjay187.github.io',

},
{
  id: 5,
  title: 'Multi-Post Stories Gain+Glory',
  descriptionPopup: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s.",
  tech: ['html', 'css', 'bootstrap', 'Ruby'],
  btnText: 'See Project',
  sourceURL: 'https://github.com/187jjay187/My-Portfolio-Main',
  livePreview: 'https://github.com/187jjay187/187jjay187.github.io',

},

];

function displayCards() {
  let result = '';

  cards.forEach((card) => {
    result += `<div class="careers-card">
    <div class="img-Placeholder"></div>
    <div class="careers-card-footer">
    <h3 id="careers_title">${card.title}</h3>
    <div class="languages-category">
        <ul id="career-tags">
            <li class="Lang-tag">${card.tech[0]}</li>
            <li class="Lang-tag">${card.tech[1]}</li>
            <li class="Lang-tag">${card.tech[2]}</li>
            <li class="Lang-tag">${card.tech[3]}</li>
        </ul> 
    </div>
    <div id="action">
        <button id="projectOne" onclick="projectClick(event)" type="button" class="project-button">${card.btnText}</i></button>
    </div>
    </div>
</div>`;
  });

  document.getElementById('cards-container').innerHTML = result;
}

displayCards();

function displayFeachuredPost() {
  const card1 = {
    title: 'Keeping track of hundreds of components',
    description: "A daily selection of privately personalized reads; no accounts or sign-ups required. has been the industry's standard",
    tech: ['html', 'css', 'bootstrap', 'javaScript'],
    btnText: 'See Project',
    sourceURL: 'https://github.com/187jjay187/My-Portfolio-Main',
    livePreview: 'https://github.com/187jjay187/187jjay187.github.io',
  };
  document.getElementById('featured-post').innerHTML = `
  <img class="featured-img" src="img/card1-Placeholder.png">
  <div class="featured-content">
    <h3 id="card-title">${card1.title}</h3>
    <p>
    ${card1.description}
    </p>
    <ul class="lang-list">
    <li>${card1.tech[0]}</li> 
    <li>${card1.tech[1]}</li> 
    <li>${card1.tech[2]}</li>
    <li>${card1.tech[3]}</li>
    </ul>
    <a href="#"> <button class="featured-btn card-btn-open">${card1.btnText}</button></a>
     
  </div>
`;
}

displayFeachuredPost();