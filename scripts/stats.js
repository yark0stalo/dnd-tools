let generateButton = document.querySelector(".generation-button");

let stats = document.querySelectorAll(".stat-field");

generateButton.onclick = generateStats;

function generateStats() {
  for (let i = 0; i < stats.length; i++) {
    let min = 6;
    let sum = 0;
    for (let j = 0; j < 4; j++) {
      let val = generateStat();
      if (val < min) {
        min = val;
      }
      sum += val;
    }
    sum -= min;
    stats[i].value = sum;
  }
}

function generateStat() {
  return Math.floor(Math.random() * 6 + 1);
}
