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
      existedItem, reqItem;

    if (deltaY < 0 || mozDeltaY > 0) { // scroll down
      existedItem = nextItem;
    };

    if (deltaY > 0 || mozDeltaY < 0) { //scroll up
      existedItem = prevItem;
    };

    reqItem = existedItem.length ? existedItem.index() : items.first();
    moveSection(reqItem);
  });


  //swipe action
  $(function () {
    // Enable swiping...
    $(".section").swipe({
      swipeStatus: function (event, phase, direction, distance) {
        if (phase == "end") {
          var items = $('.section'),
            activeItem = items.filter('.active'),
            nextItem = activeItem.next(),
            prevItem = activeItem.prev(),
            existedItem, reqItem;

          if (direction == 'up') { // swipe up
            existedItem = nextItem;
          }

          if (direction == 'down') { // swipe down
            existedItem = prevItem;
          }

          reqItem = existedItem.length ? existedItem.index() : items.first();
          moveSection(reqItem);
        };
      },
      triggerOnTouchEnd: false,
      threshold: 100
    });
  });

  // key action

  $(document).on('keydown', e => {
    let items = $('.section'),
      activeItem = items.filter('.active'),
      nextItem = activeItem.next(),
      prevItem = activeItem.prev(),
      existedItem, reqItem;

    switch (e.keyCode) {
      case 40:
        // function action
        existedItem = nextItem;
        break;

      case 38:
        // function action
        existedItem = prevItem;
        break;
    };

    reqItem = existedItem.length ? existedItem.index() : items.first();
    moveSection(reqItem);
  })

  // quick clicks protection
  var flag = true;

  var changeFlag = function () {
    const mouseInertionIsFinished = 300,
      animationDuration = 700;

    setTimeout(function () {
      flag = true;
    }, animationDuration + mouseInertionIsFinished);
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
