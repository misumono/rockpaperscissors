const obs = ["r","p","s"];

const playerImages = document.querySelectorAll("#playerOptions img");
const pcImages = document.querySelectorAll("#pcOptions img");

const playerScore = document.getElementById('plSc');
const pcScore = document.getElementById('pcSc');

const message = document.getElementById('msg');

let playerChoice = "";
let pcChoice = "";



//GET THE INPUT CONTENT (i.e. THE PLAYER'S NAME) INTO THE DIV
const input = document.getElementById('input');
const div = document.getElementById('rrpn');

input.addEventListener('input', () => {             
  const name = input.value;                         
  const truncatedName = name.substring(0,10);       
  if (name.length === 0) {div.textContent = "⠀"}    //when no name, the line "disappears" and 0 "gets higher" - this prevents that
  else (div.textContent = truncatedName);           //to make score not show more than 10 characters
  input.value = truncatedName;                      //to make input not show more than 10 characters 
});



//MAIN GAME
let changed = false;
let verdict = "";
let finish = false;
let i=0;
let round=0;

function compare(a,b) {
  if(a==b) {return "c"}
  else if ((a=="r" && b=="s")||(a=="p" && b=="r")||(a=="s" && b=="p")) {return "a"}
  else {return "b"}
};

function lets() {
    playerImages.forEach(image => {
      image.addEventListener('mouseover', () => {
        if (!changed && gameBegun) {
          playerImages.forEach(img => {img.classList.add('little')});
          image.classList.remove('little'); image.classList.add('big');
        }
      });
    
      image.addEventListener('mouseout', () => {
        playerImages.forEach(img => {img.classList.remove('big','little')});
        if (!changed && gameBegun) {
          playerImages.forEach(img => {img.classList.remove('little','big')})
        }
      });
    
      image.addEventListener('click', () => {
        if (!changed && gameBegun) {
            pcImages.forEach(img => {img.classList.remove('big')});
            changed = true;
            playerImages.forEach(img => {img.classList.add('little')});
            image.classList.add('big');
            playerChoice = image.getAttribute('val');
            pcChoice = obs[Math.floor(Math.random()*obs.length)];
            verdict = compare(playerChoice,pcChoice);
            if (verdict == "a") {playerScore.textContent++} else if (verdict == "b") {pcScore.textContent++};
            changed = false;
            i++;
        };

        if (!changed && gameBegun) {pcImages.forEach(image => {if (image.getAttribute('val') == pcChoice) {image.classList.add('big')}})};
        
        if (i==round) {i=0; gameBegun = false;
          if (playerScore.textContent > pcScore.textContent) {message.textContent = "You win!"}
          else if (playerScore.textContent < pcScore.textContent) {message.textContent = "You lose"}
          else if (!gameBegun) {message.textContent = "⠀"}
          else (message.textContent = "Tie");
          toot.classList.remove('activeMode');
          toof.classList.remove('activeMode');
        }
      })
    })
};



//CHOOSE THE GAME MODE
const toot=document.getElementById("toot");
const toof=document.getElementById("toof");

let gameBegun = false;

toot.addEventListener('click', () => { 
  if (gameBegun == false ) {i=0;
        pcImages.forEach(image => image.classList.remove('big'));
        message.textContent = "⠀";
        toot.classList.add('activeMode');
        toof.classList.remove('activeMode');
        gameBegun = true; round=3;
        playerScore.textContent = 0; pcScore.textContent = 0;
    } else {alert("True gamers finish their matches ;)")};
});

toof.addEventListener('click', () => {
    if (gameBegun == false ) {i=0;
        pcImages.forEach(image => image.classList.remove('big'));
        message.textContent = "⠀";
        toof.classList.add('activeMode');
        toot.classList.remove('activeMode');
        gameBegun = true; round=5;
        playerScore.textContent = 0; pcScore.textContent = 0;
    } else {alert("True gamers finish their matches ;)")};
  });

lets()