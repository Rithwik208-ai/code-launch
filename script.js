const menuButton = document.querySelector('.menu-toggle');
const navigation = document.querySelector('.desktop-nav');

menuButton.addEventListener('click', () => {
  const isOpen = menuButton.getAttribute('aria-expanded') === 'true';
  menuButton.setAttribute('aria-expanded', String(!isOpen));
  navigation.classList.toggle('nav-open', !isOpen);
});

document.querySelectorAll('.desktop-nav a').forEach((link) => {
  link.addEventListener('click', () => {
    menuButton.setAttribute('aria-expanded', 'false');
    navigation.classList.remove('nav-open');
  });
});

document.querySelector('#print-resume').addEventListener('click', () => window.print());
