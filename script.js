const getUserChoice = (userInput) => {
  userInput = userInput.toLowerCase();
  if (userInput === "rock" || userInput === "paper" || userInput ==="scissors"){
    return userInput;
  } else{
    console.log("Error, invalid input");
  }
};

const getComputerChoice = () =>{
  const randomNumber = Math.floor(Math.random()*3);
  switch (randomNumber){
    case 0:
      return "rock";
      break;
    case 1:
      return "paper";
      break;
    case 2:
      return "scissors";
      break;
  }
};

const determineWinner = (userChoice, computerChoice) => {
  if (userChoice === computerChoice){
    return "This is a tie";
  }
  if (userChoice === "rock"){
    if (computerChoice === "paper"){
      return "Sorry, computer won!";
    } else{
      return "Congratulations, you won!";
    }
  }
  if (userChoice === "paper"){
    if (computerChoice === "scissors"){
      return "Sorry, computer won!";
    } else {
      return "Congraulations, you won!";
    }
  }
  if (userChoice === "scissors"){
    if (computerChoice === "rock"){
      return "Sorry, computer won!";
    } else {
      return "Congratulations, you won!";
    }
  }
}

const playGame = () => {
  const userChoice = getUserChoice("paper");
  if(userChoice == undefined){
    return;
  }
  const computerChoice = getComputerChoice();
  console.log(`You chose ${userChoice}`);
  console.log(`Computer chose ${computerChoice}`);
  console.log(determineWinner(userChoice, computerChoice));
}

playGame();

