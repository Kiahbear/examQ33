/* 
Kiah Nicholson-Wilcox
12/17/2020
 */


function generateNumber() {
    return Math.floor((Math.random() * 2) + 1);
}

function Play(){
    let computerChoice = generateNumber();
if (computerChoice === 1){
    computerChoice = 'heads';
}
else if (computerChoice === 2){
    computerChoice = 'tails';
}

let userChoice = (getplayerChoice());

if ((userChoice = 'heads') && (computerChoice = 'heads')){
    alert("Tie");
}
else if ((userChoice = 'heads') && (computerChoice = 'tails')){
    alert("You win!");
}
else if ((userChoice = 'tails') && (computerChoice = 'tails')){
    alert("Tie");
}
else if ((userChoice = 'tails') && (computerChoice = 'heads')){
    alert("You lose!");
}

function getplayerChoice() {
    var radioButtons = document.getElementsByName("choice");
    var index = 0;
    while (index < radioButtons.length) {
        if (radioButtons[index].checked === true ) {
            userChoice = radioButtons[index].value;
        }
        ++index;
    }
    return userChoice;
}
}
