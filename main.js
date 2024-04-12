// COIN FLIP SIMULATOR

//HTML Variables
let outputEl = document.getElementById("output");
let outputEl2 = document.getElementById("output2");
let headsEl = document.getElementById("heads-out");
let tailsEl = document.getElementById("tails-out");
let numRoll = document.getElementById("numberRolled");
let oneEl = document.getElementById("roll1");
let twoEl = document.getElementById("roll2");
let threeEl = document.getElementById("roll3");
let fourEl = document.getElementById("roll4");
let fiveEl = document.getElementById("roll5");
let sixEl = document.getElementById("roll6");
let specialEl = document.getElementById("rollSpecial");

//Count Variables
let numHeads = 0;
let numTails = 0;

//Button event listener
document.getElementById("btn").addEventListener("click", btnClicked);

function btnClicked() {
  //Gen a Ran Num
  let rand = Math.random();
  //Coin Flip
  if (rand < 0.5) {
    outputEl.innerHTML = "<img src = 'img/heads.png' />";
    numHeads = numHeads += 1;
    headsEl.innerHTML = numHeads;
  } else {
    outputEl.innerHTML = "<img src = 'img/tails.png' />";
    numTails = numTails += 1;
    tailsEl.innerHTML = numTails;
  }
}

let numOne = 0;
let numTwo = 0;
let numThree = 0;
let numFour = 0;
let numFive = 0;
let numSix = 0;
let numSpecial = 0;

document.getElementById("btn2").addEventListener("click", btnRolled);

function btnRolled() {
  //Gen a Ran Num
  let rand = Math.random();
  //Dice Roll
  if (rand < 0.16) {
    outputEl2.innerHTML = "<img src = 'img/1.png' />";
    numRoll.innerHTML = 1;
    numOne = numOne += 1;
    oneEl.innerHTML = numOne;
  } else if (rand < 0.32) {
    outputEl2.innerHTML = "<img src = 'img/2.png' />";
    numRoll.innerHTML = 2;
    numTwo = numTwo += 1;
    twoEl.innerHTML = numTwo;
  } else if (rand < 0.48) {
    outputEl2.innerHTML = "<img src = 'img/3.png' />";
    numRoll.innerHTML = 3;
    numThree = numThree += 1;
    threeEl.innerHTML = numThree;
  } else if (rand < 0.64) {
    outputEl2.innerHTML = "<img src = 'img/4.png' />";
    numRoll.innerHTML = 4;
    numFour = numFour += 1;
    fourEl.innerHTML = numFour;
  } else if (rand < 0.8) {
    outputEl2.innerHTML = "<img src = 'img/5.png' />";
    numRoll.innerHTML = 5;
    numFive = numFive += 1;
    fiveEl.innerHTML = numFive;
  } else if (rand < 0.96) {
    outputEl2.innerHTML = "<img src = 'img/6.png' />";
    numRoll.innerHTML = 6;
    numSix = numSix += 1;
    sixEl.innerHTML = numSix;
  } else {
    outputEl2.innerHTML = "<img src = 'img/surprise.jpg' />";
    numRoll.innerHTML = "Surprise!!!!!!!";
    numSpecial = numSpecial += 1;
    specialEl.innerHTML = numSpecial;
  }
}

//25% heads and 75% tails

//

// if (rand < 0.25) {
//     console.loh("Heads");
//   } else if (rand < 0.5) {
//     console.log("Feet");
//   } else {
//     console.log("Tails");
//   }
