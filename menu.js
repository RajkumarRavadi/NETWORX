// Menu button functionality
const menuButton = document.querySelector('.menu-button');
const menu = document.createElement('div');
menu.className = 'menu';
menu.innerHTML = `
  <button class="close-button">&times;</button>
  <ul>
    <li><a href="#login">Login</a></li>
    <li><a href="#network">Network</a></li>
    <li><a href="#learn">Learn</a></li>
    <li><a href="#work">Work</a></li>
  </ul>
`;
document.body.appendChild(menu);

menuButton.addEventListener('click', () => {
  menu.style.width = '250px';
});

const closeButton = menu.querySelector('.close-button');
closeButton.addEventListener('click', () => {
  menu.style.width = '0';
});
