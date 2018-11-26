// // overlay

const openButtons = document.querySelectorAll(".review-block__btn"),
  reviewsSection = document.querySelector('#reviews');


for (let i = 0; i < openButtons.length; i++) {
  const element = openButtons[i];

  element.addEventListener("click", function () {
    const elements = element.parentNode.children;
    let name, 
        text;

    for (let i = 0; i < elements.length; i++) {
      const element = elements[i];
      if (element.classList.contains('review-block__name')) {
        name = element.textContent
      };
      if (element.classList.contains('review-block__text')) {
        text = element.textContent
      };
    };

    reviewsSection.appendChild(createOverlay(name, text));
    document.body.style.overflow = 'hidden';
  });
};

function createOverlay(name, text) {
  const overlayElement = document.createElement("div");
  overlayElement.classList.add("overlay");

  const template = document.querySelector("#reviewTemplate");
  overlayElement.innerHTML = template.innerHTML;

  const closeElement = overlayElement.querySelector(".overlay__close");
  closeElement.addEventListener("click", function () {
    reviewsSection.removeChild(overlayElement);
    document.body.style.overflow = 'initial';
  });

  const wrapElement = overlayElement.querySelector(".overlay__wrap");
  wrapElement.addEventListener("click", function () {
    reviewsSection.removeChild(overlayElement);
    document.body.style.overflow = 'initial';
  });

  const nameElement = overlayElement.querySelector(".overlay__name");
  nameElement.innerHTML = name;

  const textElement = overlayElement.querySelector(".overlay__text");
  textElement.innerHTML = text;

  return overlayElement;
}