'use strict';

var num=Math.floor(Math.random()*21);
console.log(num);

var chances=0;

var gif=document.createElement('img');
gif.src="./Resources/success.gif";
gif.style="height:25vh;width:25vh"

var reset=document.createElement('button');
var text=document.createTextNode("New Game");
reset.appendChild(text);
reset.classList="btn btn-danger";
reset.onclick=function() {location.reload();};

window.addEventListener("load", starts);

function starts()
{
    window.alert("A new game, only having 5 chances. All the best ❤")
}

function check()
{
    var val=document.getElementById("guess").value;
    var cont=document.getElementById("content");
    var gifDiv=document.getElementById("successGifs");

    document.getElementById("prevGuess").innerHTML+=val+" ";

    var desc=document.getElementById("resultDesc");
    if(val==num) {
        cont.classList.add("container");
        cont.classList.add("bg-success");
        desc.innerHTML="Got that, You won 🎉";

        gifDiv.appendChild(gif);
        gifDiv.appendChild(reset);
        console.log("Got that, You won 🤩🎉");
    } else if(val<num) {
        cont.classList.add("container");
        cont.classList.add("bg-primary");
        desc.innerHTML="The guess is low 🙂";
        console.log("Please try again 🙂")
    } else {
        cont.classList.add("container");
        cont.classList.add("bg-primary");
        desc.innerHTML="The guess is high 🙂";
    }

    chances+=1;
    if(chances>5) {
        cont.classList.add("container");
        cont.classList.add("bg-danger");
        desc.innerHTML="Oops! chances exceeded ❗❗";

        gif.src="./Resources/fail.gif";
        gifDiv.appendChild(gif);
        gifDiv.appendChild(reset);
    }
}

