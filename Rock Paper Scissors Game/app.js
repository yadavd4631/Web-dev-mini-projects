let userScore = 0;
let comScore = 0;

const choices = document.querySelectorAll(".choice");
const msg = document.querySelector(".msg"); 
const userScorePara = document.querySelector(".youscore"); 
const comScorePara = document.querySelector(".compscore"); 

const genCompChoice = () => {
  const options = ["rock", "paper", "scissors"];
  const randIdx = Math.floor(Math.random() * 3);
  return options[randIdx];
};

const drawGame = () => {
  msg.innerText = "Game was a Draw. Play again!";
  msg.style.backgroundColor = "#081b31";
};

const showWinner = (userWin) => {
  if (userWin) {
    msg.innerText = "You Win!";
    msg.style.backgroundColor = "green";
    userScore++;
  } else {
    msg.innerText = "You Lose!";
    msg.style.backgroundColor = "red";
    comScore++;
  }
  updateScores();
};

const updateScores = () => {
  userScorePara.innerText = userScore;
  comScorePara.innerText = comScore;
};

const playGame = (userChoice) => {
  const compChoice = genCompChoice();

  if (userChoice === compChoice) {
    drawGame();
  } else {
    let userWin = true;

    if (userChoice === "rock") {
      userWin = compChoice === "paper" ? false : true;
    } else if (userChoice === "paper") {
      userWin = compChoice === "scissors" ? false : true;
    } else {
      userWin = compChoice === "rock" ? false : true;
    }

    showWinner(userWin);
  }
};


choices.forEach((choice) => {
  choice.addEventListener("click", () => {
    playGame(choice.id); 
  });
});
