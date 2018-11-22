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