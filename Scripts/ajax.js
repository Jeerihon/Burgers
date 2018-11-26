// order form 

const myForm = document.querySelector('.form'),
  sendBtn = document.querySelector('#sendBtn'),
  name = myForm.elements.name,
  phone = myForm.elements.phone,
  comment = myForm.elements.comment,
  orderSection = document.querySelector('#order');


name.addEventListener('keydown', function (event) {
  let isLetter = false,
    isControl = false;

  if (isFinite(event.key) == false) {
    isLetter = true;
  };

  if (event.key == "ArrowLeft" || event.key == "ArrowRight" || event.key == "Backspace" || event.keyCode == '32') {
    isControl = true;
  }

  if (!isLetter && !isControl) {
    event.preventDefault();
  };
});

const onlyDigit = document.querySelectorAll('.onlyDigit');

for (const element of onlyDigit) {
  element.addEventListener('keydown', function (event) {
    let isDigit = false;
    let isDash = false;
    isControl = false;

    if (event.key >= 0 || event.key <= 9) {
      isDigit = true;
    };

    if (event.key == '-') {
      isDash = true;
    };

    if (event.key == "ArrowLeft" || event.key == "ArrowRight" || event.key == "Backspace") {
      isControl = true;
    }

    if (!isDigit && !isDash && !isControl) {
      event.preventDefault();
    };
  });
}



sendBtn.addEventListener('click', event => {
  event.preventDefault();

  if (validateForm(myForm)) {
    let formData = new FormData(myForm);
    formData.append("name", myForm.elements.name.value);
    formData.append("phone", myForm.elements.phone.value);
    formData.append("comment", myForm.elements.comment.value);
    formData.append("to", 'mail@mail.com');

    const xhr = new XMLHttpRequest();
    xhr.responseType = 'json';
    xhr.open('POST', 'https://webdev-api.loftschool.com/sendmail');
    xhr.send(formData);
    xhr.addEventListener('load', () => {
      if (xhr.response.status) {
        const message = xhr.response.message;
        orderSection.appendChild(createResponse(message));
        document.body.style.overflow = 'hidden';
      }
    });
  };
});

function validateForm(form) {
  let valid = true;

  if (!validateField(form.elements.name)) {
    valid = false;
  };

  if (!validateField(form.elements.phone)) {
    valid = false;
  };

  if (!validateField(form.elements.comment)) {
    valid = false;
  };

  return valid;
};

function validateField(field) {
  field.nextElementSibling.textContent = field.validationMessage;

  if (!field.checkValidity()) {
    field.nextElementSibling.classList.add('form__error--active');
  } else {
    field.nextElementSibling.classList.remove('form__error--active');
  }
  return field.checkValidity();
};

function createResponse(text) {
  const overlayElement = document.createElement("div");
  overlayElement.classList.add("overlay");

  const template = document.querySelector("#responseTemplate");
  overlayElement.innerHTML = template.innerHTML;

  const closeElement = overlayElement.querySelector(".overlay__close--response");
  closeElement.addEventListener("click", function () {
    orderSection.removeChild(overlayElement);
    document.body.style.overflow = 'initial';
  });

  const wrapElement = overlayElement.querySelector(".overlay__wrap");
  wrapElement.addEventListener("click", function () {
    orderSection.removeChild(overlayElement);
    document.body.style.overflow = 'initial';
  });

  const messageElement = overlayElement.querySelector(".overlay__message");
  messageElement.innerHTML = text;

  return overlayElement;
}
