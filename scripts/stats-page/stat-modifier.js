class StatModifier {
  constructor(modifierButton, index) {
    this.modifierButton = modifierButton;
    this.index = index;
    this.onModifierClick = new CustomEvent("modifier-click", { detail: this });
    this.modifier = modifierButton.classList[1] == "big-modifier" ? 2 : 1;
    this.checked = false;
    this.Checked = false;
  }

  get Checked() {
    return this.checked;
  }

  set Checked(value) {
    this.checked = value;
    this.checked
      ? this.modifierButton.classList.add("checked-modifier")
      : this.modifierButton.classList.remove("checked-modifier");
  }
}
