const dino = document.querySelector(".dino");
const background = document.querySelector(".background");
const score = document.querySelector(".score");
let isJumping = false;
let position = 0;
let newScore = 0;

function handleKeyUp(event) {
  /*if(event.keyCode === 32) {
        console.log("pressionou espaço!")
    }*/
  console.log(`keyCode: ${event.keyCode}`);
}
function handleKeyUp(event) {
  switch (event.keyCode) {
    case 32:
      console.log("Pressionou espaço");
      if (!isJumping) {
        jump();
      }
      break;
    case 37:
      console.log("Pressionou seta esquerda");
      if (!isJumping) {
        jump();
      }
      break;
    case 38:
      console.log("Pressionou seta cima");
      if (!isJumping) {
        jump();
      }
      break;
    case 39:
      console.log("Pressionou seta direita");
      if (!isJumping) {
        jump();
      }
      break;
    case 39:
      console.log("Pressionou seta baixo");
      if (!isJumping) {
        jump();
      }
      break;
    default:
      console.log("Pressionou outra tecla sem função no jogo");
  }


}

function jump() {
  isJumping = true;

  let upInterval = setInterval(() => {
    if (position >= 150) {
      clearInterval(upInterval);

      // descendo
      let downInterval = setInterval(() => {
        if (position <= 0) {
          clearInterval(downInterval);
          isJumping = false;
        } else {
          position -= 20;

          dino.style.bottom = position + "px";
        }
      }, 20);
    } else {
      // Subindo
      position += 20;

      dino.style.bottom = position + "px";
    }
  }, 20);
}

function createCactus() {
  const cactus = document.createElement("div");
  let cactusPosition = 1000;
  let randomTime = Math.random() * 6000;

  cactus.classList.add("cactus");
  cactus.style.left = 1000 + "px";
  background.appendChild(cactus);

  let leftInterval = setInterval(() => {
    if (cactusPosition < -60) {
      clearInterval(leftInterval);
      background.removeChild(cactus);
    } else if (cactusPosition > 0 && cactusPosition < 60 && position < 60) {
      // game over
      clearInterval(leftInterval);
      document.body.innerHTML = '<h1 class="game-over">Fim de jogo</h1>';
    } else {
      cactusPosition -= 10;
      cactus.style.left = cactusPosition + "px";
    }
  }, 20);

  setTimeout(createCactus, randomTime);
}

function setScore() {
  newScore++;
  score.innerHTML = 'Score: '+ newScore;
  setTimeout(setScore,10)
}

function handleMouseClick(event) {
  if (event.onClick) {
    if (!isJumping) {
      jump();
    }
  }
}
/*
function handleKeyUp37(event) {
  if (event.keyCode === 37) {
    console.log("pressionou seta para esquerda");
  }
}
function handleKeyUp38(event) {
  if (event.keyCode === 38) {
    console.log("pressionou seta para cima");
  }
}
function handleKeyUp39(event) {
  if (event.keyCode === 39) {
    console.log("pressionou seta para direita");
  }
}
function handleKeyUp40(event) {
  if (event.keyCode === 40) {
    console.log("pressionou seta para baixo");
  }
}*/

createCactus();
setScore();
document.addEventListener("click", handleMouseClick);
document.addEventListener("keyup", handleKeyUp);
/*document.addEventListener("keyup", handleKeyUp32);
document.addEventListener("keyup", handleKeyUp37);
document.addEventListener("keyup", handleKeyUp38);
document.addEventListener("keyup", handleKeyUp39);
document.addEventListener("keyup", handleKeyUp40);

//document.addEventListener('keyup',handleKeyUp)*/
