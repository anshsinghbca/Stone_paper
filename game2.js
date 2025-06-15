let userscore=0;
let campscore=0;
const select=document.querySelectorAll(".choice");
const msg=document.querySelector("#msg");
const userscorepar=document.querySelector("#rank1");
const campscorepar=document.querySelector("#rank2");

const gencapmchoice=()=>{

const option=["rock","paper","scissor"];
 const randidx=Math.floor(Math.random()*3);
 return option[randidx];

}
const drawgame=()=>{
    
    msg.innerText="game was draw,play again";
    msg.style.backgroundColor="#081b31";
};
const showWinner=(userwin)=>{
    if(userwin){
        userscore++;
        userscorepar.innerText=userscore;
        msg.innerText="you win";
        msg.style.backgroundColor="green";
    }
    else{
        campscore++;
        campscorepar.innerText=campscore;
        msg.innerText="you lose";
        msg.style.backgroundColor="red";
    }
};
const playgame=(userchoice)=>{
console.log("userchoice=",userchoice);
const campchoice=gencapmchoice();
console.log(" camp choice=",campchoice);
if(userchoice===campchoice){
drawgame();
}
else{
    let userwin=true;
    if(userchoice==="rock"){
        userwin=campchoice==="paper"?false:true;
    }
    else if(userchoice==="paper"){
         userwin=campchoice==="scissors"?false:true;
    }
    else{
        userwin=campchoice==="rock"?false:true;
    }
    showWinner(userwin);
}


};

select.forEach((choice)=>{
    choice.addEventListener("click",()=>{
        const userchoice=choice.getAttribute("id");
    playgame(userchoice);

    })

})