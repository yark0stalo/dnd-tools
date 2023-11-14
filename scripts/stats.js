let stats = {};
let statContainers = document.querySelectorAll(".stat-container");
let generateButton = document.querySelector(".generation-button");
let rerollButtons = document.querySelectorAll(".reroll-dice-img");
let statFields = document.querySelectorAll(".stat-field");

initialize();

function generateStats() {
  for (const stat in stats) {
    stats[stat].generateStat();
  }
}

function initialize() {
  for (let i = 0; i < statContainers.length; i++) {
    let name = statContainers[i].getAttribute("name");
    stats[name] = new Stat(statFields[i], rerollButtons[i]);
  }

  generateButton.onclick = generateStats;
}
