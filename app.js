const rockPaperScissors = () => {
  let playerPoints = 0;
  let computerPoints = 0;

  // Oyun ilk başlarken 
  const startGame = () => {
    const playButton = document.querySelector(".introduction button");
    const introScreen = document.querySelector(".introduction");
    const match = document.querySelector(".match");

    playButton.addEventListener("click", () => {
      introScreen.classList.add("fadeOut");
      match.classList.add("fadeIn");
    });
  };

  // maç başlangıcı
  const playMatch = () => {
    const options = document.querySelectorAll(".options-container button");
    const playerHand = document.querySelector(".player-hand");
    const computerHand = document.querySelector(".computer-hand");
    const hands = document.querySelectorAll(".hands img");

    hands.forEach(hand => {
      hand.addEventListener("animationend", function () {
        this.style.animation = "";
      });
    });

    const computerOptions = ["tas", "kagit", "makas"];

    options.forEach(option => {
      option.addEventListener("click", function () {

        //Bilgisayarın random seçimi
        const computerNumber = Math.floor(Math.random() * 3);
        const computerChoice = computerOptions[computerNumber];

        setTimeout(() => {

          //Bilgisayar ve oyuncu seçimleri karşılaştırması
          compareHands(this.textContent, computerChoice);

          //resimlerin güncellenmesi
          playerHand.src = `./assets/${this.textContent}.png`;
          computerHand.src = `./assets/${computerChoice}.png`;
        }, 1000);


        //resim animasyonları
        playerHand.style.animation = "shakePlayer 1s ease";
        computerHand.style.animation = "shakeComputer 1s ease";

      });
    });
  };

  //maç sonucuna göre score değişimi
  const updateScore = () => {
    const playerScore = document.querySelector(".player-score-container p");
    const computerScore = document.querySelector(".computer-score-container p");
    playerScore.textContent = playerPoints;
    computerScore.textContent = computerPoints;
  };


  //oyuncu ve bilgisayar seçimlerin kontrolü
  const compareHands = (playerChoice, computerChoice) => {

    //maç sonucuna göre mesaj değişimi
    const winner = document.querySelector(".winner");

    //beraberlik kontrolü
    if (playerChoice === computerChoice) {
      winner.textContent = "Berabere!";
      return;
    }
    //taş kontrolü    
    if (playerChoice === "tas") {
      if (computerChoice === "makas") {
        winner.textContent = "Kazandın!";
        playerPoints++;
        updateScore();
        return;
      } else {
        winner.textContent = "Yenildin!";
        computerPoints++;
        updateScore();
        return;
      }
    }


    //kagit kontrolü
    if (playerChoice === "kagit") {
      if (computerChoice === "makas") {
        winner.textContent = "Yenildin!";
        computerPoints++;
        updateScore();
        return;
      } else {
        winner.textContent = "Kazandın!";
        playerPoints++;
        updateScore();
        return;
      }
    }


    //makas kontrolü
    if (playerChoice === "makas") {
      if (computerChoice === "tas") {
        winner.textContent = "Yenildin!";
        computerPoints++;
        updateScore();
        return;
      } else {
        winner.textContent = "Kazandın!";
        playerPoints++;
        updateScore();
        return;
      }
    }
  };

  //fonksiyonları çalıştırma
  startGame();
  playMatch();
};


//Oyuna Başlatır!!!1
rockPaperScissors();