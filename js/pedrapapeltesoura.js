var userChoice = prompt("Você escolhe pedra, papel ou tesoura?");
var computerChoice = Math.random();
if (computerChoice < 0.34) {
	computerChoice = "pedra";
} else if(computerChoice <= 0.67) {
	computerChoice = "papel";
} else {
	computerChoice = "tesoura";
} alert("Computer: " + computerChoice);

var compare = function(choice1, choice2){
    if (choice1 === choice2){
        alert("Empate!");
    }   
    else if (choice1 === "pedra"){
        if (choice2 ==="tesoura"){
            alert("Pedra esmaga tesoura!");
        }
        else if (choice2 === "papel"){
            alert("Papel embrulha pedra!");
        }
    }
    else if (choice1 === "tesoura"){
        if (choice2 === "papel"){
            alert("Tesoura corta papel");
        }
        else if (choice2 === "pedra"){
            alert("Pedra esmaga tesoura!");
        }
    }
    else if (choice1 === "papel"){
        if (choice2 === "pedra"){
            alert("Papel embrulha pedra!");
        }
        else if (choice2 === "tesoura"){
            alert("Tesoura corta papel!");
        }
    }
};

compare(userChoice, computerChoice);
