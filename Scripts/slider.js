//slider

const left = document.querySelector('.slider__arrow-left'),
  right = document.querySelector('.slider__arrow-right'),
  contentBlock = document.querySelector('.slider__wrap'),
  items = document.querySelector('.slider'),
  computed = getComputedStyle(items),
  itemWidth = parseInt(getComputedStyle(items.firstElementChild).width),
  step = itemWidth / itemWidth * 100,
  size = items.children.length - 1,
  maxRight = size * step,
  minRight = 0;

var flag = true;

var changeFlag = function () {
  setTimeout(function () {
    flag = true;
  }, 500);
}

// auto change
var timerID = setInterval(function () {
  moveRight();
}, 4000);

// move to right slide
right.addEventListener("click", function (e) {
  e.preventDefault();

  move(right);
  clearInterval(timerID);
});

// move to left slide
left.addEventListener("click", function (e) {
  e.preventDefault();

  move(left);
  clearInterval(timerID);
});

function move(direction) {
  let items = document.querySelector('.slider'),
    computed = getComputedStyle(items),
    itemWidth = parseInt(getComputedStyle(items.firstElementChild).width),
    currentRight = parseInt(computed.right) / itemWidth * 100;

  if (flag) { //multuclick protection
    flag = false

    if (!currentRight) {
      currentRight = 0;
    }

    // slide to right
    if (direction == right) {
      if (currentRight < maxRight) {
        items.style.right = currentRight + step + '%';
      } else {
        currentRight = 0;
        items.style.right = minRight;
      };
    }
    // slide to left
    if (direction == left) {
      if (currentRight > minRight) {
        items.style.right = currentRight - step + "%";
      };
      if (currentRight == 0) {
        currentRight = maxRight;
        items.style.right = maxRight + "%";
      };
    }

    changeFlag();
  };
}