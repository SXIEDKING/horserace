/*function sayHello(){
    alert("What ends you from ${name}, you're an opp!");
}

sayHello()

let n = Saied */

 let cleanString = (userString) => {return userString.replace(/fuck|cunt|twat|retard|shit|wanker|cock/gi, "****")}
 let userInput = prompt("Input a string with swear words", "you're a fucking wanker cunt")
 alert(cleanString(userInput))