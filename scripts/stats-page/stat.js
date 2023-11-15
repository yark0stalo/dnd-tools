class Stat {
  constructor(viewField, rerollButton, statModifiers) {
    this.value = 0;
    this.rawValue = 0;
    this.viewField = viewField;
    this.rerollButton = rerollButton;
    this.rerollButton.addEventListener("click", (event) => {
      this.generateStat();
    });
    this.statModifiers = statModifiers;
  }

  get Value() {
    return this.value;
  }

  set Value(value) {
    this.rawValue = value;
    this.value = this.rawValue + this.CurrentStatModifier;
    this.renderView();
  }

  get CurrentStatModifier() {
    return (
      (this.statModifiers[0].Checked ? this.statModifiers[0].modifier : 0) +
      (this.statModifiers[1].Checked ? this.statModifiers[1].modifier : 0)
    );
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

  renderView() {
    this.viewField.value = this.value;
  }

  checkValue() {
    this.Value = this.rawValue;
  }
}
