let userscore=0;
let compscore=0;
const choices = document.querySelectorAll(".choice");
const msg = document.querySelector("#msg");

const userscorepara = document.querySelector("#user-score");
const compscorepara = document.querySelector("#comp-score");
const showWinner = (userWin,uchoiceid,compchoice) => {
    if(userWin){
        console.log("You Win!",uchoiceid);
        msg.innerText = `You win! Your ${uchoiceid} beats ${compchoice}`;
        msg.style.backgroundColor = "green";
        userscore++;
        userscorepara.innerText = userscore;
    }else{
        compscore++;
        compscorepara.innerText = compscore;
        console.log("You lose",compchoice);
        msg.innerText = `You lose ${compchoice} beats your ${uchoiceid}`;
        msg.style.backgroundColor = "red";
    }
}

const drawgame = () =>{ 
    console.log("Draw");
    msg.innerText = "It's a Draw, Play again.";
    msg.style.backgroundColor = "black";

}
const gencompchoice = () =>{
    const options = ["Rock","Paper","Scissor"];
    const randomidx = Math.floor(Math.random() * 3);
    return options[randomidx];

}
const playgame = (uchoiceid) => {
    console.log("user choice is",uchoiceid);
    const compchoice = gencompchoice();
    console.log("comp choice is",compchoice);
    if(uchoiceid == compchoice){
        //Draw
        drawgame();
    }else{
        let userWin = true;
        if(uchoiceid == "Rock"){
            userWin = compchoice == "Paper" ? false : true;
        }else if(uchoiceid == "Paper"){
            userWin = compchoice == "Scissor" ? false : true;
        }else {
            userWin = compchoice == "Rock" ? false : true;
        }
        showWinner(userWin,uchoiceid,compchoice);
    }
}

choices.forEach((choice) => {
    choice.addEventListener("click",() => {
        const uchoiceid = choice.getAttribute("id");
        playgame(uchoiceid);
    })
})