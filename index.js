let homeCounter = 0;

let guestCounter = 0;

const homeCountOutput = document.getElementById("homeCount");
const guestCounterOutput = document.getElementById("guestCount");
const newBut = document.getElementsById("my-Button1");

function reset() {
  homeCountOutput.textContent = homeCounter;
  guestCounterOutput.textContent = guestCounter;
}

reset();

function homeFunc(value) {
  homeCounter += value;
  homeCountOutput.textContent = homeCounter;
  leaderIndicator();
  reset();
}

function guestFunc(value) {
  guestCounter += value;
  guestCounterOutput.textContent = guestCounter;
  leaderIndicator();
  reset();
}

function resetButton() {
  homeCounter = 0;
  guestCounter = 0;
  leaderIndicator();
  reset();
}

function leaderIndicator() {
  if (homeCounter > guestCounter) {
    homeCountOutput.classList.add("highlight");
  } else if (homeCounter < guestCounter) {
    guestCounterOutput.classList.add("highlight"); 
  } else {
    homeCountOutput.classList.remove("highlight");
    guestCounterOutput.classList.remove("highlight");
  }
}
