let a = document.querySelectorAll(".box");
let t = document.querySelectorAll(".top");
let turnO = true;
// let b = prompt("first player plays as O or X");
b = "O";
if(b === "O"){
    turnO = true;
    t[2].innerHTML ="<h1>O- turn</h1>"
}
else{
    turnO = false;
    t[2].innerHTML ="<h1>X- turn</h1>"
}
let arr = [0,0,0,0,0,0,0,0,0];
let wi= [   [0,1,2],
            [3,4,5],
            [6,7,8],
            [0,3,6],
            [1,4,7],
            [2,5,8],
            [0,4,8],
            [2,4,6]            
        ];
        let value = 1 ;
        let reset = document.querySelector("#reset");
        
function checkDraw() {
    if (!arr.includes(0) && value) {  // No zeros left
        t[2].innerHTML = "<h1>DRAW</h1>";
        value = 0;
    }
}    
let draw = 0;    
a.forEach((p,idx) =>{
    reset.onclick = () => {
        location.reload();
    }
    p.addEventListener("click",() =>{
        if(turnO === true && arr[idx]==0 && value){
            p.innerText = "O";
            turnO = false;
            t[2].innerHTML ="<h1>X- turn</h1>"; 
            arr[idx] = 1;
            for(let i = 0; i < 8; i++){
                if(arr[wi[i][0]] == 1 && arr[wi[i][1]] == 1 && arr[wi[i][2]] == 1 ){
                    t[2].innerHTML = "<h1>O - WON </h1>"
                    value = 0;
                }
            }
            checkDraw();
        }
        else if (turnO === false && arr[idx]==0 && value){
            p.innerText = "X";
            turnO = true;
            t[2].innerHTML ="<h1>O- turn</h1>"
            arr[idx]= -1;
            for(let i = 0; i < 8; i++){
                if(arr[wi[i][0]] == -1 && arr[wi[i][1]] == -1 && arr[wi[i][2]] == -1 ){
                    t[2].innerHTML = "<h1>X - WON </h1>"
                    value = 0;
                }
            }
            checkDraw();
        }
    }
)
}
)

