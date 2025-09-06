let boxes = document.querySelectorAll('.box');
let resetBtn = document.querySelector('.reset');
let newGamebtn= document.querySelector('#newgbtn');
let msgContainer= document.querySelector('.msg-container');
let msg= document.querySelector('#msg');

let turn0=true;//player x,player0
 
const winPatterns =[[0,1,2],[3,4,5],[6,7,8],[0,3,6],[1,4,7],[2,5,8],[0,4,8],[2,4,6]];


boxes.forEach((box)=>{
    box.addEventListener('click',()=>{
        console.log("clicked");
        if(turn0){//player O's turn
            box.innerText='O';
            turn0=false;
        }else{
            box.innerText='X';
            turn0=true;
        }
        box.disabled=true;
        checkWinner();
    });
});



const resetGame=()=>{
    enableBoxes();
    turn0=true;
    msgContainer.classList.add("hide");
};


const disableBoxes=()=>{
    boxes.forEach((box)=>{
        box.disabled=true;
    });};



    const enableBoxes=()=>{
        boxes.forEach((box)=>{
            
            box.disabled=false;
            box.innerText="";
        });};



const showWinner=(winner)=>{
    msg.innerText =`Winner is ${winner}`;
    msgContainer.classList.remove("hide");
    disableBoxes();
    
};

const checkWinner=()=>{
    for(let pattern of winPatterns){
        console.log(boxes[pattern[0]],boxes[pattern[1]],boxes[pattern[2]]);
      
           let pos1Val = boxes[pattern[0]].innerText;
           let pos2Val = boxes[pattern[1]].innerText;
           let pos3Val = boxes[pattern[2]].innerText;
          
           if(pos1Val != "" && pos1Val === pos2Val && pos2Val === pos3Val){
       if(pos1Val===pos2Val && pos2Val===pos3Val){
        console.log("Winner",pos1Val);

        showWinner(pos1Val);
        
}
}
    }};

   
newGamebtn.addEventListener('click',resetGame);
resetBtn.addEventListener('click',resetGame);