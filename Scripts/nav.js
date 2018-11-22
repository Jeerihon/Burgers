
window.onload=function(){
  
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

  // menu

  const menuItems = document.querySelectorAll('.menu__item');

  for (let i = 0; i < menuItems.length; i++) {
    const menuLink = menuItems[i];
    
    menuLink.addEventListener('click', function() {
      
      for (let i = 0; i < menuItems.length; i++) {
        const menuLink = menuItems[i];
        if (menuLink != event.currentTarget) {
        menuLink.classList.remove('menu__item--active');
        }
      };

      if (menuLink == event.currentTarget) {
        if (this.classList.contains('menu__item--active')) {
          this.classList.remove('menu__item--active');
        } else {
          this.classList.add('menu__item--active');
        }
      };

    });
  };

  // accordeon

  const accItems = document.querySelectorAll('.accordeon__head');

  for (let i = 0; i < accItems.length; i++) {
    const accLink = accItems[i];
    
    accLink.addEventListener('click', function() {
      
      for (let i = 0; i < accItems.length; i++) {
        const accLink = accItems[i];
        if (accLink != event.currentTarget) {
        accLink.parentElement.classList.remove('accordeon__item--active');
        }
      };

      if (accLink == event.currentTarget) {
        accLink.parentElement.classList.toggle('accordeon__item--active');
      };

    });
  };
};
