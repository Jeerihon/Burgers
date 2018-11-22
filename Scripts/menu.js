// menu

const menuItems = document.querySelectorAll('.menu__item');

for (let i = 0; i < menuItems.length; i++) {
  const menuLink = menuItems[i];
  
  menuLink.addEventListener('click', function() {

    for (let i = 0; i < menuItems.length; i++) {
  
      const menuLink = menuItems[i];

      if (menuLink != event.currentTarget) {
        menuLink.classList.remove('menu__item--active');
      };
    };

    if (menuLink == event.currentTarget) {
      if (this.classList.contains('menu__item--active')) {
        this.classList.remove('menu__item--active');
      } else {
        this.classList.add('menu__item--active');
      };
    };
  });
};