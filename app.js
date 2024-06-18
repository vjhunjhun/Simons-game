let gameSeq=[];
let userSeq=[];
let highest=0;
let score=0;
let btns=['yellow','red','green','purple'];
let started = false;
let level = 0;
let h2=document.querySelector('h2');
document.addEventListener('keypress',function(){
    if(started==false){
        started=true;
        levelUp();
    }
});
function levelUp(){
    userSeq=[];
    level++;
    highest++;
     h2.innerHTML=` Highest score : ${score} level: ${level}`;
    let randIdx=Math.floor(Math.random()*4);
    let randColor=btns[randIdx];
    let randbtn=document.querySelector(`.${randColor}`);
    gameSeq.push(randColor);
    btnFlash(randbtn);
}
function btnFlash(btn){
    btn.classList.add('flash');
    setTimeout(function(){
        btn.classList.remove('flash');
    },250);
}
function userFlash(btn){
    btn.classList.add('user');
    setTimeout(function(){
        btn.classList.remove('user');
    },250);
}
function checkAns(idx){
    
    if(userSeq[idx]==gameSeq[idx]){
        if(userSeq.length==gameSeq.length){
            setTimeout(levelUp,1000);
        }
    }else{
        if(highest>score){
            score=highest;
        }
        h2.innerHTML=`Game Over! Your score was <b>${level}</b> <br>Press any key to start`;
        document.querySelector('body').style.background='red';
        setTimeout(function(){
            document.querySelector('body').style.removeProperty("background")
        },250)
        reset();
    }
}
function btnPress(){
 let btn = this;
 userFlash(btn);
 userColor = btn.getAttribute('id');
 userSeq.push(userColor);
    checkAns(userSeq.length-1);
}
let allBtns=document.querySelectorAll('.btn');
for(btn of allBtns){
    btn.addEventListener('click',btnPress);
}
function reset(){
    highest=0;
    started=false;
    level=0;
    userSeq=[];
    gameSeq=[];
}