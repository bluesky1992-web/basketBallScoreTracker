let homeCounter = 0;

let guestCounter = 0;

const homeCountOutput = document.getElementById("homeCount");
const guestCounterOutput = document.getElementById("guestCount");



function reset() {
    homeCountOutput.textContent = homeCounter;
guestCounterOutput.textContent = guestCounter
}

reset()


function homeFunc(value) {
  homeCounter += value;
  homeCountOutput.textContent = homeCounter;
  reset()
}

function guestFunc(value) {
guestCounter += value
 guestCounterOutput.textContent = guestCounter
 console.log(guestCounter)
 reset()
}




