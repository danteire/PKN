const rockBtn = document.createElement("button");
const paperBtn = document.createElement("button");
const scissorsBtn = document.createElement("button");

rockBtn.setAttribute("style","height: 30px;width: 80px;")
rockBtn.textContent = "ROCK";
paperBtn.textContent = "PAPER";
scissorsBtn.textContent = "SCISSORS";
paperBtn.setAttribute("style","height: 30px;width: 80px;")
scissorsBtn.setAttribute("style","height: 30px;width: 80px;")

const listaHtml = document.querySelector(".listaWyoru");
const bodyPointer = document.querySelector("body");

listaHtml.setAttribute("style","display: flex;flex-flow: row wrap;justify-content: center; gap:10px")
listaHtml.appendChild(rockBtn);
listaHtml.appendChild(paperBtn);
listaHtml.appendChild(scissorsBtn);

bodyPointer.appendChild(listaHtml);

const komRunda = document.createElement("div");
const komunikat = document.createElement("div");
const komWynikPl = document.createElement("div");
const komWynikCom = document.createElement("div");

bodyPointer.appendChild(komunikat);
bodyPointer.appendChild(komWynikPl);
bodyPointer.appendChild(komWynikCom);

let buttons = [rockBtn, paperBtn,scissorsBtn];
let iloscKlikniec = 0;
komRunda.innerText = `Rozpocznij grę nasikając guzik`;

bodyPointer.appendChild(komRunda);

buttons.forEach((button) =>{
        button.addEventListener("click", () =>{
            console.log(button.textContent);
            iloscKlikniec++;
            
            playGame(String(button.textContent),iloscKlikniec);
            
        })
})





let computer_score = 0;
let plater_score = 0;

function playGame(przycisk){
    let playerSelection = przycisk;
    if(playerSelection==undefined){
        console.log("Wybierz przycisk:");
        return 3;
    }
    playerSelection = playerSelection.toLowerCase();
    console.log(playerSelection);
    const computerSelection = getComputerChoice();
    let wynik = playRound(computerSelection, playerSelection);
        if(iloscKlikniec==5){
            komRunda.innerText = `Nr Rundy: ${iloscKlikniec}`;
            
            koniecGry(plater_score,computer_score);
        }else if(iloscKlikniec<5){
            
            if(wynik.search("win")>=0){
                plater_score++;
            }else if(wynik.search("lose")>=0){
                computer_score++;
            }
            komWynikPl.innerText = `Wynik Gracza: ${plater_score}\n`;
            komWynikCom.innerText = `Wynik Komputera: ${computer_score}\n`;

            komRunda.innerText = `Nr Rundy: ${iloscKlikniec}`;
            komunikat.innerText =" Wynik: " + wynik;
        }
}

function koniecGry(wynikP, wynikK){
   
    if(wynikP==wynikK){
        komunikat.innerText = "Final Result: TIE";
    }else if(wynikP>wynikK){
        komunikat.innerText = "Final Result: PLAYER WIN";
    }else{
        komunikat.innerText = "Final Result: COMPUTER WIN";
    }
 
}

function getComputerChoice(){

    let wybor_komputer = Math.floor(Math.random()*3);
    if(wybor_komputer==0){
        return "rock";
    }else if(wybor_komputer==1){
        return "paper";
    }else{
        return "scissors";
    }
}
function playRound(computerSelection, playerSelection){
    if(computerSelection===playerSelection){
        return "It's a Tie";
    }else{
        if(computerSelection==="rock" && playerSelection==="paper"){
            return "You win! Paper beats rock";
        }else if(computerSelection==="paper" && playerSelection==="scissors"){
            return "You win! Scissors beats paper";
        }else if(computerSelection==="paper" && playerSelection==="rock"){
            return "You lose! Paper beats Rock";
        }else if(computerSelection==="scissors" && playerSelection==="paper"){
            return "You lose! Scissors beats paper";
        }else if(computerSelection==="rock" && playerSelection==="scissors"){
            return "You lose! Rock beats Scissrs";
        }else if(computerSelection==="scissors" && playerSelection==="rock"){
            return "You win! Rock beats Scissrs";
        }else{
            return "mamy blad";
        }
    }
}