// order form 

const myForm = document.querySelector('.form'),
  sendBtn = document.querySelector('#sendBtn'),
  name = myForm.elements.name,
  phone = myForm.elements.phone,
  street = myForm.elements.street,
  comment = myForm.elements.comment,
  house = myForm.elements.house,
  housing = myForm.elements.housing,
  flat = myForm.elements.flat,
  floor = myForm.elements.floor,
  paymentButtons = myForm.elements.payment,
  recallCheck = myForm.elements.recall;


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
    let formData = new FormData();
    formData.append('name', myForm.elements.name.value);
    formData.append('phone', myForm.elements.phone.value);
    formData.append('comment', myForm.elements.comment.value);
    formData.append('to', 'mail@mail.com');

    // let data = {
    //   name: myForm.elements.name.value,
    //   phone: myForm.elements.phone.value,
    //   comment: myForm.elements.comment.value,
    //   to: 'me@me.com'
    // }
    console.log(formData);

    const xhr = new XMLHttpRequest();
    xhr.responseType = 'json';
    xhr.open('POST', 'https://webdev-api.loftschool.com/sendmail');
    xhr.send(JSON.stringify(formData));
    xhr.addEventListener('load', () => {
      if (xhr.response.status) {
        console.log(xhr.responseText)
      } else {
        console.log(xhr.responseText)
      }
    });
  };



  // // payment input check
  // if (paymentButtons[0].checked) {
  //   console.log("Потребуется сдача");
  // } else {
  //   console.log("Оплата по карте");
  // };

  // // recall input check
  // if (recallCheck.checked) {
  //   console.log('Обратный звонок не нужен');
  // };
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
