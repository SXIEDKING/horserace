var redHorse=document.getElementById("redHorse")
var blueHorse=document.getElementById("blueHorse")

var redHorseX=0
var blueHorseX=0

function move(){
    
    redHorse.style.left = redHorseX +"px"
    redHorseX += Math.floor(Math.random()*10)
    
    blueHorse.style.left = blueHorseX +"px"
    blueHorseX += Math.floor(Math.random()*10)


}

function startRace(){

    setInterval(move,50)  

}







