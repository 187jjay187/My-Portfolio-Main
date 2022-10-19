// Elements in use

const hamburgerButton = document.getElementById('hamburger-button');
const menu = document.getElementById('menu-id');
const cross = document.getElementById('cross-id');
const links = document.getElementsByClassName('menu-link');

// Function that shows the hamburger menu

function showMenu() {
  menu.classList.replace('hide', 'show');
}

// Function that hides the hamburger menu

function hideMenu() {
  menu.classList.replace('show', 'hide');
}

// EventListener that performs functions on the hamburger menu

hamburgerButton.addEventListener('click', showMenu);
cross.addEventListener('click', hideMenu);
for (let i = 0; i < links.length; i += 1) {
  links[i].addEventListener('click', hideMenu);
}
