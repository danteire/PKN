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


function playGame(){
    let playerSelection = prompt("Wpisz: ROCK PAPER NOZYCE");
// if(playerSelection != "rock" && playerSelection !="paper" && playerSelection!="scissors"){
//     console.log("Zly input");
// }
playerSelection = playerSelection.toLocaleLowerCase();
const computerSelection = getComputerChoice();
let wynik = playRound(computerSelection, playerSelection);
console.log(wynik);
    if(wynik.search("win")>=0){
        return 1;
    }else if(wynik.search("lose")>=0){
        return -1;
    }else if(wynik.search("Tie")>=0){
        return 0;
    }
}
let computer_score = 0;
let plater_score = 0;
for(let i =0; i<5;i++){
    wynik_gry = playGame();
if(wynik_gry==1){
    plater_score++;
}else if(wynik_gry==0){
    plater_score++;
    computer_score++;
}
else if(wynik_gry==-1){
    computer_score++;
}
}

console.log(`Wynik Gracza: ${plater_score}\n`);
console.log(`Wynik Komputera: ${computer_score}\n`);

if(plater_score==computer_score){
    console.log("Final Result: TIE");
}else if(plater_score>computer_score){
    console.log("Final Result: PLAYER WIN");
}else{
    console.log("Final Result: COMPUTER WIN");
}