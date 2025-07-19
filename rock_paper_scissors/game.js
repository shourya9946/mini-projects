let a = document.querySelectorAll(".circle");
let ys = 0;
let yc = 0
a.forEach((p,idx) =>{
    p.onclick = () =>{
        let b = Math.floor(3*Math.random());
        if( idx == b ){
            console.log(idx);
            let q = document.querySelector("#state");
            q.innerHTML = "<h2> It's a DRAW </h2>";
            let p =document.querySelector("#state1");
            let z = document.querySelectorAll(".names");
            p.innerHTML = "<h2> Computer choose "+z[b].innerText+"</h2>";
        }
        else if ((idx == 0 && b == 1) || (idx == 1 && b == 2)||(idx == 2 && b == 0)){
            console.log(idx);
            yc++;
            let q = document.querySelector("#state");
            q.innerHTML = "<h2>Computer Won</h2>";
            let r = document.querySelector("#cs");
            r.innerHTML = "<h2>Computer Score :"+yc+"</h2>";
            let p =document.querySelector("#state1");
            let z = document.querySelectorAll(".names");
            p.innerHTML = "<h2> Computer choose "+z[b].innerText+"</h2>";
        }
        else if ((idx == 0 && b == 2 ) || (idx == 1 && b == 0) || (idx == 2 && b == 1)){
            console.log(idx);
            ys++;
            let q = document.querySelector("#state");
            q.innerHTML = "<h2>You Won</h2>";
            let r = document.querySelector("#ys");
            r.innerHTML = "<h2>Your Score :"+ys+"</h2>";
            let p =document.querySelector("#state1");
            let z = document.querySelectorAll(".names");
            p.innerHTML = "<h2> Computer choose "+z[b].innerText+"</h2>";
        }
    }

})
            let z = document.querySelectorAll(".names");