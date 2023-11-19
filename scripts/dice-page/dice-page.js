let diceButtons = document.querySelectorAll(".dice-button");
let diceCount = document.querySelector(".dice-count-field");
let diceModifier = document.querySelector(".modifier-count-field");
let diceCountButtons = document.querySelectorAll(".dice-count-button");
let diceModifierButtons = document.querySelectorAll(".modifier-count-button");
let resultField = document.querySelector(".result-field");

let diceCountValue = {
  value: 1,
  get Value() {
    diceCount.innerHTML = `${this.value}d`;
    return this.value;
  },
  set Value(value) {
    if (value <= 0) {
      return;
    }
    this.value = value;
    diceCount.innerHTML = `${this.value}d`;
  },
};
let modifierValue = {
  value: 0,
  get Value() {
    diceModifier.innerHTML = `${this.value > -1 ? "+" : ""}${this.value}`;
    return this.value;
  },
  set Value(value) {
    this.value = value;
    diceModifier.innerHTML = `${this.value > -1 ? "+" : ""}${this.value}`;
  },
};
let resultValue = {
  value: 0,
  get Value() {
    resultField.innerHTML = `${this.value}`;
    return this.value;
  },
  set Value(value) {
    this.value = value;
    resultField.innerHTML = `${this.value}`;
  },
};

initialize();

function diceButtonClick() {
  console.log(this.dataset.value);
  let result = 0;
  for (let i = 0; i < diceCountValue.Value; i++) {
    result += random(Number(this.dataset.value));
  }
  result += modifierValue.Value;
  console.log(result);
  resultValue.Value = result;
  console.log(resultValue.Value);
}

function diceCountButtonClick() {
  diceCountValue.Value += Number(this.dataset.value);
}

function modifierButtonClick() {
  console.log(this.dataset.value);
  modifierValue.Value += Number(this.dataset.value);
}

function initialize() {
  diceButtons.forEach((button) => {
    button.addEventListener("click", diceButtonClick);
  });

  diceCountButtons.forEach((button) => {
    button.addEventListener("click", diceCountButtonClick);
  });

  diceModifierButtons.forEach((button) => {
    button.addEventListener("click", modifierButtonClick);
  });

  diceCount.Value;
  modifierValue.Value;
  resultValue.Value;
}

function random(max) {
  return Math.floor(Math.random() * max) + 1;
}
