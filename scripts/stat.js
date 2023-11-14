class Stat {
  constructor(viewField, rerollButton) {
    this.value = 0;
    this.viewField = viewField;
    this.rerollButton = rerollButton;
    this.rerollButton.addEventListener("click", () => {
      this.generateStat();
    });
  }

  get Value() {
    return this.value;
  }

  set Value(value) {
    this.value = value;
    this.viewField.value = value;
  }

  generateStat() {
    let min = 6;
    let sum = 0;
    for (let j = 0; j < 4; j++) {
      let val = Math.floor(Math.random() * 6 + 1);
      if (val < min) {
        min = val;
      }
      sum += val;
    }
    sum -= min;
    this.Value = sum;
  }
}
