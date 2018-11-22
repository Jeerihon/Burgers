
// navigation

const btn = document.querySelector('#burger-btn'),
      nav = document.querySelector('#nav'),
      navList = document.querySelector('#nav__list'),
      links = document.querySelectorAll('.nav__item'),
      isBtnActive = btn.classList.contains('burger-btn--active');
  
btn.addEventListener('click', function() {
  btn.classList.toggle('burger-btn--active');
  btn.classList.toggle('burger-btn--animation');
  nav.classList.toggle('nav--active');
});
  
for (const element of links) {
  element.addEventListener('click', function() {
    btn.classList.toggle('burger-btn--active');
    btn.classList.toggle('burger-btn--animation');
    nav.classList.toggle('nav--active');
  });
};

