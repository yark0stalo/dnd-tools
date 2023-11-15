let stats = {};
let modifiers = [];
let currentBigModifier = null;
let currentSmallModifier = null;
let statContainers = document.querySelectorAll(".stat-container");
let generateButton = document.querySelector(".generation-button");
let rerollButtons = document.querySelectorAll(".reroll-dice-img");
let modifierButtons = document.querySelectorAll(".add-modifier-button");
let statFields = document.querySelectorAll(".stat-field");

initialize();

function generateStats() {
  for (const stat in stats) {
    stats[stat].generateStat();
  }
}

var validateModifierClick = function (modifier, isBig) {
  if (isBig) {
    if (modifier == currentBigModifier) {
      currentBigModifier.Checked = false;
      currentBigModifier = null;
      return;
    }
    if (currentBigModifier != null) {
      currentBigModifier.Checked = false;
    }
    currentBigModifier = modifier;
    currentBigModifier.Checked = true;
    if (
      currentSmallModifier != null &&
      currentSmallModifier.index === modifier.index + 1
    ) {
      currentSmallModifier.Checked = false;
      currentSmallModifier = null;
    }
  } else {
    if (modifier == currentSmallModifier) {
      currentSmallModifier.Checked = false;
      currentSmallModifier = null;
      return;
    }
    if (currentSmallModifier != null) {
      currentSmallModifier.Checked = false;
    }
    currentSmallModifier = modifier;
    currentSmallModifier.Checked = true;
    if (
      currentBigModifier != null &&
      currentBigModifier.index === modifier.index - 1
    ) {
      currentBigModifier.Checked = false;
      currentBigModifier = null;
    }
  }
};

function initialize() {
  for (let i = 0; i < modifierButtons.length; i++) {
    modifiers.push(new StatModifier(modifierButtons[i], i));
  }

  modifiers.forEach((modifier) => {
    modifier.modifierButton.addEventListener("click", () => {
      validateModifierClick(modifier, modifier.modifier === 2);
      for (const stat in stats) {
        stats[stat].checkValue();
      }
    });
  });

  for (let i = 0, j = 0; i < statContainers.length; i++, j += 2) {
    let name = statContainers[i].getAttribute("name");
    stats[name] = new Stat(statFields[i], rerollButtons[i], [
      modifiers[j],
      modifiers[j + 1],
    ]);
  }
  document.body.addEventListener("modifier-click", (modifier) => {
    validateModifierClick(modifier);
  });
  generateButton.onclick = generateStats;
  for (const stat in stats) {
    stats[stat].checkValue();
  }
}
