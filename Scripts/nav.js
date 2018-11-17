

window.onload=function(){

  const btn = document.querySelector('#burger-btn'),
        nav = document.querySelector('#nav'),
        navList = document.querySelector('#nav__list'),
        linkBtns = [navList.children],
        link = document.querySelector('#nav__list > li'),
        isBtnActive = btn.classList.contains('burger-btn--active');
  
  btn.addEventListener('click', function() {
    btn.classList.toggle('burger-btn--active');
    nav.classList.toggle('nav--active');
  });
  
  for (const key of linkBtns) {
    link.addEventListener('click', function() {
      btn.classList.toggle('burger-btn--active');
      nav.classList.toggle('nav--active');
    });
  };
}
