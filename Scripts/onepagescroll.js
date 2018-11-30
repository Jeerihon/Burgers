// one page scroll
$(function () {

  const list = $('.wrapper');


  // dots generation
  var generateDots = function () {
    $('.section').each(function () {
      var dot = $('<li>', {
        attr: {
          class: 'dots__item'
        },
        html: '<a href="#" class="dots__link"></a>'
      });

      $('.dots__list').append(dot);
    });
  };

  generateDots();


  // dots click
  $('body').on('click', '.dots__item', function () {
    var $this = $(this),
      container = $this.closest('.wrapper'),
      index = $this.index();

    moveSection(index);
    activateDot(index);
  })


  // activate dot 
  var activateDot = function (index) {
    $('body')
      .find('.dots__item')
      .eq(index)
      .addClass('active')
      .siblings()
      .removeClass('active');
  }


  // click on arrow in hero section
  $('.hero-bottom').on('click touch', function () {
    var $this = $(this),
      container = $this.closest('.wrapper'),
      items = $('.section', container),
      activeItem = items.filter('.active'),
      nextItem = activeItem.next();
    console.log('tap')
    moveSection(nextItem.index());
  });

  // mousewheel action
  $('.wrapper').on('mousewheel DOMMouseScroll', function (e) {
    let deltaY = e.originalEvent.wheelDelta,
      mozDeltaY = e.originalEvent.detail,
      $this = $(this),
      container = $this.closest('.wrapper'),
      items = $('.section', container),
      activeItem = items.filter('.active'),
      nextItem = activeItem.next(),
      prevItem = activeItem.prev(),
      edgeItem = items.first(),
      existedItem, reqItem;

    if (deltaY < 0 || mozDeltaY > 0) { // scroll down
      existedItem = nextItem;
    };

    if (deltaY > 0 || mozDeltaY < 0) { //scroll up
      existedItem = prevItem;
    };
    
    reqItem = existedItem.length ? existedItem.index() : edgeItem.index();
    moveSection(reqItem);
  });


  //swipe action
  $(function () {
    // Enable swiping...
    $(".section").swipe({
      swipeStatus: function (event, phase, direction, distance) {
        if (phase == "end")
          if (direction == 'up') { // swipe up
            var items = $('.section'),
              activeItem = items.filter('.active'),
              existedItem = activeItem.next(),
              edgeItem = items.first(),
              existedItem, edgeItem, reqItem;

            reqItem = existedItem.length ? existedItem.index() : edgeItem.index();

            moveSection(reqItem);
          }
        if (direction == 'down') { // swipe down
          var items = $('.section'),
            activeItem = items.filter('.active'),
            existedItem = activeItem.prev(),
            edgeItem = items.first(),
            existedItem, edgeItem, reqItem;

          reqItem = existedItem.length ? existedItem.index() : edgeItem.index();

          moveSection(reqItem);
        }
      },
      triggerOnTouchEnd: false,
      threshold: 100
    });
  });


  // quick clicks protection
  var flag = true;

  var changeFlag = function () {
    setTimeout(function () {
      flag = true;
    }, 700);
  }


  var moveSection = function (sectionNum) {
    const items = list.find('.section'),
      activeSection = items.filter('.active'),
      reqItem = items.eq(sectionNum),
      reqIndex = reqItem.index(),
      duration = 700;

    if (flag) {

      flag = false;

      if (reqItem.length) {
        list.animate({
          'top': -reqIndex * 100 + '%'
        }, duration, function () {
          activeSection.removeClass('active');
          reqItem.addClass('active');
          activateDot(sectionNum);
        });
      };

      changeFlag();
    }
  }
});