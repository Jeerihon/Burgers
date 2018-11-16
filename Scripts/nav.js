

window.onload=function(){


  const btn = document.querySelector('#nav__btn');
  const btnActive = document.querySelector('#nav__btn--active');
  const nav = document.querySelector('#nav');
  const width = document.documentElement.clientWidth;
  const width2 = window.matchMedia("(max-width: 786px)");
  // const isActive = nav.style.display = 'block';
  
  btn.addEventListener('click', function() {
    if (width2.matches ) {
      nav.style.display = 'block';
    }
  });

  btnActive.addEventListener('click', function() {
    if ( nav.style.display = 'block') {
      nav.style.display = 'none';
    }
  });


  // const computedStyle = getComputedStyle(nav);
  // console.log(computedStyle);


}
