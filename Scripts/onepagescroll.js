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

    moveSection(container, index);
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
  $('.arrow--scroll').on('click', function () {
    var $this = $(this),
      container = $this.closest('.wrapper'),
      items = $('.section', container),
      activeItem = items.filter('.active'),
      nextItem = activeItem.next();

    moveSection(container, nextItem.index());
  });

  // mousewheel action
  $('.wrapper').on('mousewheel DOMMouseScroll', function (e) {
    var delta = e.originalEvent.wheelDelta,
      $this = $(this),
      container = $this.closest('.wrapper'),
      items = $('.section', container),
      activeItem = items.filter('.active'),
      nextItem = activeItem.next(),
      prevItem = activeItem.prev(),
      existedItem, edgeItem, reqItem;

    if (delta < 0) { // scroll down
      existedItem = activeItem.next(),
        edgeItem = items.first();
    };

    if (delta > 0) { //scroll up
      existedItem = activeItem.prev(),
        edgeItem = items.last();
    };

    reqItem = existedItem.length ? existedItem.index() : edgeItem.index();

    moveSection(container, reqItem);
  });

  //touch slide

  // $('.wrapper').swipe({
  //   swipeStatus: function (event, phase, direction, distance, duration, fingerCount, fingerData, currentDirection) {
  //     let $this = $(this),
  //       container = $this.closest('.wrapper'),
  //       items = $('.section', container),
  //       activeItem = items.filter('.active'),
  //       nextItem = activeItem.next(),
  //       prevItem = activeItem.prev(),
  //       existedItem, edgeItem, reqItem;

  //     if (phase == "end") {
  //       //сработает через 20 пикселей то число которое выбрали в threshold
  //       if (direction == 'up') {
  //         existedItem = activeItem.prev(),
  //           edgeItem = items.last(),
  //           reqItem = existedItem.length ? existedItem.index() : edgeItem.index(); //сработает при движении вверх
  //       }
  //       if (direction == 'down') {
  //         existedItem = activeItem.next(),
  //           edgeItem = items.first(),
  //           reqItem = existedItem.length ? existedItem.index() : edgeItem.index();  //сработает при движении вниз
  //       }


  //       moveSection(container, reqItem);
  //     }
  //     triggerOnTouchEnd:false,
  //     threshold:20
  //   }
  // });
  $(".wrapper").swipe({
    //Single swipe handler for left swipes
    swipeUp: function (event, direction, distance, duration, fingerCount) {
      var $this = $(this),
      container = $this.closest('.wrapper'),
      items = $('.section', container),
      activeItem = items.filter('.active'),
      existedItem, edgeItem, reqItem;
      existedItem = activeItem.next(),
        edgeItem = items.first(),
        reqItem = existedItem.length ? existedItem.index() : edgeItem.index();

        moveSection(container, reqItem);
    },
    swipeDown: function (event, direction, distance, duration, fingerCount) {
      var $this = $(this),
      container = $this.closest('.wrapper'),
      items = $('.section', container),
      activeItem = items.filter('.active'),
      existedItem, edgeItem, reqItem;
      existedItem = activeItem.prev(),
        edgeItem = items.last();
        reqItem = existedItem.length ? existedItem.index() : edgeItem.index();

        moveSection(container, reqItem);
    },
    threshold: 75
  });

  // quick clicks protection

  var flag = true;

  var changeFlag = function () {
    setTimeout(function () {
      flag = true;
    }, 500);
  }


  var moveSection = function (container, sectionNum) {
    const items = list.find('.section'),
      activeSection = items.filter('.active'),
      reqItem = items.eq(sectionNum),
      reqIndex = reqItem.index(),
      duration = 500;

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