let your=document.querySelector("#you");
let computer=document.querySelector("#comp");
let result=document.querySelector("#result");
let user=0;
let comp=0;
your.innerHTML=user;
computer.innerHTML=comp;
let choice;
 function rock() {
    choice="rock";
    winner(choice);
  
}
function paper() {
    choice="paper";
    winner(choice);
}
function scissors() {
    choice="scissors";
    winner(choice);
}
function winner(value)
{
    let d  = Math.floor(Math.random()*3);


    let com=["rock","paper","scissors"];
    if (com[d] === value) {
        result.innerHTML=" You have got the mind of a computer! It's a draw";
    } else if (com[d] === "rock") {
        if (value === "paper") {
            user++;
            your.innerHTML=user;
          result.innerHTML=" Bravo! You Won";

        } else {
            comp++;
            computer.innerHTML=comp;
            result.innerHTML=" You Lose! Hard Luck";
        }
    } else if (com[d] === "paper") {
        if (value === "rock") {
            comp++;
            computer.innerHTML=comp;
            result.innerHTML=" You Lose! Hard Luck";
        } else{
            user++;
            your.innerHTML=user;
            result.innerHTML=" Bravo! You Won";  
        }
    } else if (com[d] === "scissors") {
        if (value === "rock") {
            user++;
            your.innerHTML=user;
            result.innerHTML=" Bravo! You Won";
        } else {
            comp++;
            computer.innerHTML=comp;
            result.innerHTML=" You Lose! Hard Luck";
        }
    }
    
}