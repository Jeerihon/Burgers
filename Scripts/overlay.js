// // overlay

const openButtons = document.querySelectorAll(".review-block__btn"),
  reviewsSection = document.querySelector('#reviews'),
  nameBlocks = document.querySelectorAll('.review-block__name'),
  textBlocks = document.querySelectorAll('.review-block__text');


for (let i = 0; i < openButtons.length; i++) {
  const element = openButtons[i];

  element.addEventListener("click", function () {
    const name = element.parentNode.children[0].textContent,
          text = element.parentNode.children[1].textContent;

    reviewsSection.appendChild(createOverlay(name, text));
  });
};

function getTextContent(element) {
  for (let i = 0; i < element.length; i++) {
    const item = element[i];

    const content = item.textContent;
    return content;
  };
}

function createOverlay(name, text) {
  const overlayElement = document.createElement("div");
  overlayElement.classList.add("overlay");

  const template = document.querySelector("#reviewTemplate");
  overlayElement.innerHTML = template.innerHTML;

  const closeElement = overlayElement.querySelector(".overlay__close");
  closeElement.addEventListener("click", function () {
    reviewsSection.removeChild(overlayElement);
  });

  const nameElement = overlayElement.querySelector(".overlay__name");
  nameElement.innerHTML = name;

  const textElement = overlayElement.querySelector(".overlay__text");
  textElement.innerHTML = text;

  return overlayElement;
}