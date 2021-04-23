const game = () =>{
    let pScore = 0;
    let cScore = 0;

// start the game 
    const startGame = ()=>{
        const playBtn = document.querySelector(".intro button");
        const introScreen = document.querySelector(".intro")
        const match = document.querySelector(".match")

        playBtn.addEventListener("click", ()=>{
            introScreen.classList.add("fadeOut");
            match.classList.add("fadeIn");
        });
    };
 // play match
    const playMatch =()=>{
        const options = document.querySelectorAll(".options button");

        const playHand = document.querySelector(".player-hand");
        const computerHand = document.querySelector(".computer-hand");
        const computerOptions = ["rock","paper","scissors"];

        const hands = document.querySelectorAll(".hands img")

        hands.forEach(hand =>{
            hand.addEventListener("animationend", function(){
                this.style.animation = "";
            })
        })
          options.forEach((option) => {
                option.addEventListener("click", function () {
                    const computerNumber = Math.floor(Math.random() * 3);
                    const computerChoice = computerOptions[computerNumber];
                    
                    setTimeout(() => {

                        compareHands(this.textContent, computerChoice);
                        // updata jpg
                        playHand.src=`./assets/${this.textContent}.jpg`;
                        computerHand.src=`./assets/${computerChoice}.jpg`;
                        
                    }, 2000);
                   

                    // animation start   
                    playHand.style.animation = "shakePlayer 2s ease";
                    computerHand.style.animation = "shakeComputer 2s ease";
                });
                });

        const updateScore =()=> {
            const playerScore = document.querySelector(".player-score p");
            const computerScore = document.querySelector(".computer-score p");
            playerScore.textContent = pScore;
            computerScore.textContent = cScore;
        }

        const compareHands = (playerChoice, computerChoice)=>{

            const winner = document.querySelector(".winner");
         
    
            if (playerChoice === computerChoice){
                winner.textContent = "It's a tie!";
                updateScore();
                return;
            }
    
            if(playerChoice === "rock"){
                if(computerChoice === "paper"){
                    winner.textContent = 'Computer wins!';
                    cScore++;
                    updateScore();
                    return;
                }else{
                    winner.textContent = 'player wins!';
                    pScore++;
                    updateScore();
                    return;
                }
            }
    
            if(playerChoice === "paper"){
                if(computerChoice === "scissors"){
                    winner.textContent = 'Computer wins!';
                    cScore++;
                    updateScore();
                    return;
                }else{
                    winner.textContent = 'player wins!';
                    pScore++;
                    updateScore();
                    return;
                }
            }
    
            if(playerChoice === "scissors"){
                if(computerChoice === "rock"){
                    winner.textContent = 'Computer wins!';
                    cScore++;
                    updateScore();
                    return;
                }else{
                    winner.textContent = 'player win!';
                    pScore++;
                    updateScore();
                    return;
                }
            }
        }  
    }

    startGame();
    playMatch();


    
}

game();