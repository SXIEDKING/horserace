
/*
var redHorse=document.getElementById("redHorse")
var blueHorse=document.getElementById("blueHorse")
var purpleHorse=document.getElementById("purpleHorse")
var blackHorse=document.getElementById("blackHorse")

var redHorseX=0
var blueHorseX=0
var purpleHorseX=0
var blackHorseX=0
const finishline=500


function move(){
    

    redHorse.style.left = redHorseX +"px"
    redHorseX += Math.floor(Math.random()*10)
    
    blueHorse.style.left = blueHorseX +"px"
    blueHorseX += Math.floor(Math.random()*10)

    purpleHorse.style.left = purpleHorseX +"px"
    purpleHorseX += Math.floor(Math.random()*10)

    blackHorse.style.left = blackHorseX +"px"
    blackHorseX += Math.floor(Math.random()*10)

    if(redHorseX>=finishline){alert("Red Horse Wins!");redHorseX=0; blueHorseX=0;}
    if(blueHorseX>=finishline){alert("Blue Horse Wins!"); blueHorseX=0; redHorseX=0;}
    if(purpleHorseX>=finishline){alert("Purple Horse Wins!"); purpleHorseX=0; blackHorseX=0;}
    if(blackHorseX>=finishline){alert("Black Horse Wins!") ;blackHorseX=0; purpleHorseX=0;}


}

let firstname=prompt("What is your first name?","Saied")
let lastname=prompt("What is your last name?","Islam")
let birthyear=prompt("What year were you born in?","2001")

let str = "firstname";
alert(firstname.substr(0,2)+ lastname+ birthyear.slice(2,4))


let sentence=prompt("The fast wild animal","wild")
let searchFor=prompt("wild")
alert(sentence.indexOf(searchFor,'wild'))

alert(sentence.replaceAll("e","*"))
  


function startRace(){

    setInterval(move,50)  

} */
 
"use strict"


const numHorses = 5
let horses=[]
let horseX=[]

let colors=["red","blue","purple","black","magenta","cyan","indigo","white","yellow","orange"]

function startRace(){
    setInterval(move,50)
}

for(let h=0;h<numHorses;h++){
    horses[h] = document.createElement("div")
    horses[h].classList.add("horse")
    horses[h].style.top = 50 + h*18 + "px"
    horses[h].style.backgroundColor=colors[h]
    horseX[h]=0
    document.body.appendChild(horses[h])

}

const finish=500

function move(){
        for(let h=0;h<numHorses;h++){
            horses[h].style.left=horseX[h] +"px"
            horseX[h]+= Math.floor(Math.random()*10)
            if(horseX[h] >=finish){alert( ` ${colors[h]} horse wins`);resetRace();}
        }
}

function resetRace(){
    for(let h=0;h<numHorses;h++){
        horseX[h]=0
    }
}







