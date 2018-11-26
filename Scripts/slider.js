//slider

const left = document.querySelector('.slider__arrow-left'),
      right = document.querySelector('.slider__arrow-right'),
      items = document.querySelector('.slider'),
      computed = getComputedStyle(items),
      step = parseInt(getComputedStyle(items.firstElementChild).width),
      size = items.children.length - 1,
      maxRight = size * step,
      minRight = 0;

right.addEventListener("click", function (e) {
  e.preventDefault();
  let currentRight = parseInt(computed.right);

  if (!currentRight) {
    currentRight = 0;
  }

  if (currentRight < maxRight) {
    items.style.right = currentRight + step + "px";
  } else {
    currentRight = 0;
    items.style.right = minRight;
  };

});

left.addEventListener("click", function (e) {
  e.preventDefault();
  let currentRight = parseInt(computed.right);

  if (!currentRight) {
    currentRight = 0;
  }

  if (currentRight > minRight) {
    items.style.right = currentRight - step + "px";
  };
  if (currentRight == 0) {
    currentRight = maxRight;
    items.style.right = maxRight + "px";
  };
});
