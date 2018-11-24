// order form 

const form = document.querySelector('.form'),
  sendBtn = document.querySelector('#sendBtn'),
  nameText = form.elements.name,
  numberText = form.elements.number,
  streetText = form.elements.street,
  commentText = form.elements.comment,
  houseText = form.elements.house,
  housingText = form.elements.housing,
  flatText = form.elements.flat,
  floorText = form.elements.floor,
  paymentButtons = form.elements.payment,
  recallCheck = form.elements.recall;


const onlyDigit = document.querySelectorAll('.onlyDigit'),
      nameInput = document.querySelector('#name');

nameInput.addEventListener('keydown', function(event) {
  let isLetter = false,
      isControl = false;

  if (event.key == /[a-zA-Z]/) {
    isLetter = true;
  };

  if (event.key == "ArrowLeft" || event.key == "ArrowRight" || event.key == "Backspace") {
    isControl = true;
  }

  if (!isLetter && !isControl) {
    event.preventDefault();
  };
});

for (const element of onlyDigit) {
  element.addEventListener('keydown', function(event) {
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



sendBtn.addEventListener('click', function (event) {
  event.preventDefault();

  console.log(nameText.value);
  console.log(numberText.value);
  console.log(streetText.value);
  console.log(houseText.value);
  console.log(housingText.value);
  console.log(flatText.value);
  console.log(floorText.value);
  console.log(commentText.value);

  // payment input check
  if (paymentButtons[0].checked) {
    console.log("Потребуется сдача");
  } else {
    console.log("Оплата по карте");
  };

  // recall input check
  if (recallCheck.checked) {
    console.log('Обратный звонок не нужен');
  };
});