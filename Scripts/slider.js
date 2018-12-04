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

console.log(maxRight)

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

  moveRight();
  clearInterval(timerID);
});

// move to left slide
left.addEventListener("click", function (e) {
  e.preventDefault();

  moveLeft();
  clearInterval(timerID);
});

function moveRight() {
  let items = document.querySelector('.slider'),
    computed = getComputedStyle(items),
    itemWidth = parseInt(getComputedStyle(items.firstElementChild).width),
    currentRightValue = parseInt(computed.right) / itemWidth * 100,
    currentRight = Math.round(currentRightValue / 100) * 100;
  console.log(currentRight)
  if (flag) {
    flag = false
    if (!currentRight) {
      currentRight = 0;
    }

    if (currentRight < maxRight) {
      items.style.right = currentRight + step + '%';
    } else {
      currentRight = 0;
      items.style.right = minRight;
    };

    changeFlag();
  };
}

function moveLeft() {
  let items = document.querySelector('.slider'),
    computed = getComputedStyle(items),
    itemWidth = parseInt(getComputedStyle(items.firstElementChild).width),
    currentRightValue = parseInt(computed.right) / itemWidth * 100,
    currentRight = currentRightValue
  if (flag) {
    flag = false

    if (!currentRight) {
      currentRight = 0;
    }

    if (currentRight > minRight) {
      items.style.right = currentRight - step + "%";
    };
    if (currentRight == 0) {
      currentRight = maxRight;
      items.style.right = maxRight + "%";
    };

    changeFlag();
  }
}